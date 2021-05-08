import { Dataset, BaseQuad, Stream, Term, DatasetFactory } from "rdf-js";
import {
  BulkEditableDataset,
  DatasetChanges,
} from "./SubscribableDatasetTypes";

export default class TransactionalDataset<
  InAndOutQuad extends BaseQuad = BaseQuad
> implements BulkEditableDataset<InAndOutQuad> {
  /**
   * The parent dataset that will be updated upon commit
   */
  private parentDataset: Dataset<InAndOutQuad, InAndOutQuad>;

  /**
   * A factory for creating new datasets to be added to the update method
   */
  private datasetFactory: DatasetFactory<InAndOutQuad, InAndOutQuad>;

  /**
   * True if this transaction was committed, false if it hasn't been committed or has been rolled back.
   */
  private hasCommitted: boolean;

  /**
   * The changes made that are ready to commit
   */
  private datasetChanges: DatasetChanges<InAndOutQuad>;

  /**
   * Constructor
   * @param parentDataset The dataset that will be updated upon commit
   */
  constructor(
    parentDataset: Dataset<InAndOutQuad, InAndOutQuad>,
    datasetFactory: DatasetFactory<InAndOutQuad, InAndOutQuad>
  ) {
    this.parentDataset = parentDataset;
    this.datasetFactory = datasetFactory;
    this.hasCommitted = false;
    this.datasetChanges = {};
  }

  /**
   * ==================================================================
   * DATASET METHODS
   * ==================================================================
   */

  /**
   * Imports the quads into this dataset.
   * This method differs from Dataset.union in that it adds all quads to the current instance, rather than combining quads and the current instance to create a new instance.
   * @param quads
   * @returns the dataset instance it was called on.
   */
  public addAll(
    quads: Dataset<InAndOutQuad, InAndOutQuad> | InAndOutQuad[]
  ): this {
    this.updateDatasetChanges({ added: quads });
    return this;
  }

  /**
   * Bulk add and remove triples
   * @param changed
   */
  public bulk(changes: DatasetChanges<InAndOutQuad>): this {
    this.updateDatasetChanges(changes);
    return this;
  }

  /**
   * Returns true if the current instance is a superset of the given dataset; differently put: if the given dataset is a subset of, is contained in the current dataset.
   * Blank Nodes will be normalized.
   * @param other
   */
  public contains(other: Dataset<InAndOutQuad, InAndOutQuad>): boolean {
    if (this.hasCommitted) {
      return this.parentDataset.contains(other);
    }
    for (const quad of other) {
      if (
        !(
          this.parentDataset.has(quad) ||
          (this.datasetChanges.added && this.datasetChanges.added.has(quad))
        )
      ) {
        return false;
      }
    }
    return true;
  }

  /**
   *  This method removes the quads in the current instance that match the given arguments. The logic described in Quad Matching is applied for each quad in this dataset to select the quads which will be deleted.
   * @param subject
   * @param predicate
   * @param object
   * @param graph
   * @returns the dataset instance it was called on.
   */
  public deleteMatches(
    subject?: Term,
    predicate?: Term,
    object?: Term,
    graph?: Term
  ): this {
    const matching = this.match(subject, predicate, object, graph);
    for (const quad of matching) {
      this.delete(quad);
    }
    return this;
  }

  /**
   * Returns a new dataset that contains alls quads from the current dataset, not included in the given dataset.
   * @param other
   */
  public difference(
    other: Dataset<InAndOutQuad, InAndOutQuad>
  ): Dataset<InAndOutQuad, InAndOutQuad> {
    const dataset = this.datasetFactory.dataset();
    for (const quad of this) {
      if (!other.has(quad)) {
        dataset.add(quad);
      }
    }
    return dataset;
  }

  /**
   * Returns true if the current instance contains the same graph structure as the given dataset.
   * @param other
   */
  public equals(other: Dataset<InAndOutQuad, InAndOutQuad>): boolean {
    const iteratingDataset = this.size < other.size ? this : other;
    const comparingDataset = this.size < other.size ? other : this;
    for (const quad of iteratingDataset) {
      if (!comparingDataset.has(quad)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Universal quantification method, tests whether every quad in the dataset passes the test implemented by the provided iteratee.
   * This method immediately returns boolean false once a quad that does not pass the test is found.
   * This method always returns boolean true on an empty dataset.
   * Note: This method is aligned with Array.prototype.every() in ECMAScript-262.
   * @param iteratee
   */
  public every(
    iteratee: (
      quad: InAndOutQuad,
      dataset: Dataset<InAndOutQuad, InAndOutQuad>
    ) => boolean
  ): boolean {
    for (const quad of this) {
      if (!iteratee(quad, this)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Creates a new dataset with all the quads that pass the test implemented by the provided iteratee.
   * Note: This method is aligned with Array.prototype.filter() in ECMAScript-262.
   * @param iteratee
   */
  public filter(
    iteratee: (
      quad: InAndOutQuad,
      dataset: Dataset<InAndOutQuad, InAndOutQuad>
    ) => boolean
  ): Dataset<InAndOutQuad, InAndOutQuad> {
    const dataset = this.datasetFactory.dataset();
    for (const quad of this) {
      if (iteratee(quad, this)) {
        dataset.add(quad);
      }
    }
    return dataset;
  }

  /**
   * Executes the provided iteratee once on each quad in the dataset.
   * Note: This method is aligned with Array.prototype.forEach() in ECMAScript-262.
   * @param iteratee
   */
  public forEach(
    iteratee: (
      quad: InAndOutQuad,
      dataset: Dataset<InAndOutQuad, InAndOutQuad>
    ) => void
  ): void {
    for (const quad of this) {
      iteratee(quad, this);
    }
  }

  /**
   * Imports all quads from the given stream into the dataset.
   * The stream events end and error are wrapped in a Promise.
   * @param stream
   */
  public import(stream: Stream<InAndOutQuad>): Promise<this> {
    return new Promise((resolve, reject) => {
      stream
        .on("data", (quad) => {
          this.add(quad);
        })
        .on("end", () => {
          resolve(this);
        })
        .on("error", (err) => reject(err));
    });
  }

  /**
   * Returns a new dataset containing alls quads from the current dataset that are also included in the given dataset.
   * @param other
   */
  // Typescript disabled because rdf-js has incorrect typings
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  public intersection(
    other: Dataset<InAndOutQuad, InAndOutQuad>
  ): Dataset<InAndOutQuad, InAndOutQuad> {
    const dataset = this.datasetFactory.dataset();
    const iteratingDataset = this.size < other.size ? this : other;
    const comparingDataset = this.size < other.size ? other : this;
    for (const quad of iteratingDataset) {
      if (comparingDataset.has(quad)) {
        dataset.add(quad);
      }
    }
    return dataset;
  }

  /**
   * Returns a new dataset containing all quads returned by applying iteratee to each quad in the current dataset.
   * @param iteratee
   */
  public map(
    iteratee: (
      quad: InAndOutQuad,
      dataset: Dataset<InAndOutQuad, InAndOutQuad>
    ) => InAndOutQuad
  ): Dataset<InAndOutQuad, InAndOutQuad> {
    throw new Error("Method not implemented.");
  }

  /**
   * This method calls the iteratee on each quad of the DatasetCore. The first time the iteratee is called, the accumulator value is the initialValue or, if not given, equals to the first quad of the Dataset. The return value of the iteratee is used as accumulator value for the next calls.
   * This method returns the return value of the last iteratee call.
   * Note: This method is aligned with Array.prototype.reduce() in ECMAScript-262.
   * @param iteratee
   * @param initialValue
   */
  public reduce<A = any>(
    iteratee: (
      accumulator: A,
      quad: InAndOutQuad,
      dataset: Dataset<InAndOutQuad, InAndOutQuad>
    ) => A,
    initialValue?: A
  ): A {
    throw new Error("Method not implemented.");
  }

  /**
   * Existential quantification method, tests whether some quads in the dataset pass the test implemented by the provided iteratee.
   * Note: This method is aligned with Array.prototype.some() in ECMAScript-262.
   * @param iteratee
   * @returns boolean true once a quad that passes the test is found.
   */
  public some(
    iteratee: (
      quad: InAndOutQuad,
      dataset: Dataset<InAndOutQuad, InAndOutQuad>
    ) => boolean
  ): boolean {
    throw new Error("Method not implemented.");
  }

  /**
   * Returns the set of quads within the dataset as a host language native sequence, for example an Array in ECMAScript-262.
   * Note: Since a DatasetCore is an unordered set, the order of the quads within the returned sequence is arbitrary.
   */
  public toArray(): InAndOutQuad[] {
    throw new Error("Method not implemented.");
  }

  /**
   * Returns an N-Quads string representation of the dataset, preprocessed with RDF Dataset Normalization algorithm.
   */
  public toCanonical(): string {
    throw new Error("Method not implemented.");
  }

  /**
   * Returns a stream that contains all quads of the dataset.
   */
  public toStream(): Stream<InAndOutQuad> {
    throw new Error("Method not implemented.");
  }

  /**
   * Returns an N-Quads string representation of the dataset.
   * No prior normalization is required, therefore the results for the same quads may vary depending on the Dataset implementation.
   */
  public toString(): string {
    throw new Error("Method not implemented.");
  }

  /**
   * Returns a new Dataset that is a concatenation of this dataset and the quads given as an argument.
   * @param other
   */
  public union(
    quads: Dataset<InAndOutQuad, InAndOutQuad>
  ): Dataset<InAndOutQuad, InAndOutQuad> {
    throw new Error("Method not implemented.");
  }

  /**
   * This method returns a new dataset that is comprised of all quads in the current instance matching the given arguments. The logic described in Quad Matching is applied for each quad in this dataset to check if it should be included in the output dataset.
   * @param subject
   * @param predicate
   * @param object
   * @param graph
   * @returns a Dataset with matching triples
   */
  public match(
    subject?: Term | null,
    predicate?: Term | null,
    object?: Term | null,
    graph?: Term | null
  ): Dataset<InAndOutQuad, InAndOutQuad> {
    throw new Error("Method not implemented.");
  }

  /**
   * A non-negative integer that specifies the number of quads in the set.
   */
  public get size(): number {
    throw new Error("Method not implemented.");
  }

  /**
   * Adds the specified quad to the dataset.
   * Existing quads, as defined in Quad.equals, will be ignored.
   * @param quad
   * @returns the dataset instance it was called on.
   */
  public add(quad: InAndOutQuad): this {
    throw new Error("Method not implemented.");
  }

  /**
   * Removes the specified quad from the dataset.
   * This method returns the dataset instance it was called on.
   * @param quad
   */
  public delete(quad: InAndOutQuad): this {
    throw new Error("Method not implemented.");
  }

  /**
   * Determines whether a dataset includes a certain quad, returning true or false as appropriate.
   * @param quad
   */
  public has(quad: InAndOutQuad): boolean {
    throw new Error("Method not implemented.");
  }

  /**
   * Returns an iterator
   */
  public [Symbol.iterator](): Iterator<InAndOutQuad, unknown, undefined> {
    const addedIterator = (this.datasetChanges.added || [])[Symbol.iterator]();
    let addedNext = addedIterator.next();
    const parentIterator = this.parentDataset[Symbol.iterator]();
    let parentNext = parentIterator.next();
    return {
      next: () => {
        if (!addedNext || !addedNext.done) {
          const toReturn = addedNext;
          addedNext = addedIterator.next();
          return toReturn;
        }
        while (!parentNext.done) {
          const toReturn = parentNext;
          parentNext = parentIterator.next();
          if (
            !(
              this.datasetChanges.added &&
              this.datasetChanges.added.has(toReturn.value)
            ) &&
            !(
              this.datasetChanges.removed &&
              this.datasetChanges.removed.has(toReturn.value)
            )
          ) {
            return toReturn;
          }
        }
        return { value: undefined, done: true };
      },
    };
  }

  /**
   * ==================================================================
   * TANSACTIONAL METHODS
   * ==================================================================
   */

  /**
   * Checks if the transaction has been committed and throws an error if it has
   * @param changed
   */
  private checkIfTransactionCommitted() {
    if (this.hasCommitted) {
      throw new Error("Transaction has already committed");
    }
  }

  /**
   * Updates one property of the Dataset changes object. Will also remove that triple from the other property
   * @param propertyA
   * @param propertyB
   * @param change
   */
  private updateDatasetChangesProperty(
    changedProperty?: Dataset<InAndOutQuad>,
    otherProperty?: Dataset<InAndOutQuad>,
    change?: Dataset<InAndOutQuad> | InAndOutQuad[]
  ): { changedSet?: Dataset<InAndOutQuad>; otherSet?: Dataset<InAndOutQuad> } {
    const result = { changedSet: changedProperty, otherSet: otherProperty };
    if (change) {
      const changeDataset = this.datasetFactory.dataset(change);
      // Add changes to changed dataset
      if (result.changedSet) {
        result.changedSet = result.changedSet.union(changeDataset);
      } else {
        result.changedSet = changeDataset;
      }
      // Remove duplicates from other dataset
      if (result.otherSet) {
        result.otherSet = result.otherSet.difference(changeDataset);
        if (result.otherSet.size === 0) {
          result.otherSet = undefined;
        }
      }
    }
    return result;
  }

  /**
   * Helper method to update the changes made
   * @param changes
   */
  private updateDatasetChanges(changes: {
    added?: Dataset<InAndOutQuad> | InAndOutQuad[];
    removed?: Dataset<InAndOutQuad> | InAndOutQuad[];
  }): void {
    this.checkIfTransactionCommitted();
    const addedResult = this.updateDatasetChangesProperty(
      this.datasetChanges.added,
      this.datasetChanges.removed,
      changes.added
    );
    this.datasetChanges = {
      added: addedResult.changedSet,
      removed: addedResult.otherSet,
    };
    const removedResult = this.updateDatasetChangesProperty(
      this.datasetChanges.removed,
      this.datasetChanges.added,
      changes.removed
    );
    this.datasetChanges = {
      added: removedResult.otherSet,
      removed: removedResult.changedSet,
    };
  }

  /**
   * Helper method to update the parent dataset or any other provided dataset
   */
  private updateDataset(
    dataset: Dataset<InAndOutQuad, InAndOutQuad>,
    datasetChanges: DatasetChanges<InAndOutQuad>
  ) {
    if ((dataset as BulkEditableDataset<InAndOutQuad>).bulk) {
      (dataset as BulkEditableDataset<InAndOutQuad>).bulk(datasetChanges);
    } else {
      if (datasetChanges.added) {
        dataset.addAll(datasetChanges.added);
      }
      if (datasetChanges.removed) {
        dataset.addAll(datasetChanges.removed);
      }
    }
  }

  /**
   * Commits changes made to the parent dataset
   */
  public commit(): void {
    this.checkIfTransactionCommitted();
    this.updateDataset(this.parentDataset, this.datasetChanges);
    this.hasCommitted = true;
  }

  /**
   * Rolls back changes made to the parent dataset
   */
  public rollback(): void {
    if (!this.hasCommitted) {
      throw new Error("Transaction has not yet been committed");
    }
    this.updateDataset(this.parentDataset, {
      added: this.datasetChanges.removed,
      removed: this.datasetChanges.added,
    });
    this.hasCommitted = false;
  }

  /**
   * Starts a new transaction with this transactional dataset as the parent
   * @returns
   */
  public startTransaction(): TransactionalDataset {
    return new TransactionalDataset(this, this.datasetFactory);
  }
}
