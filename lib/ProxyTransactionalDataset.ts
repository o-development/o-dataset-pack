import { Dataset, BaseQuad, Term, DatasetFactory } from "rdf-js";
import {
  BulkEditableDataset,
  DatasetChanges,
  TransactionalDataset,
} from "./SubscribableDatasetTypes";
import ExtendedDataset from "./ExtendedDataset";

// This is caused by the typings being incorrect for the intersect method
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default class ProxyTransactionalDataset<
    InAndOutQuad extends BaseQuad = BaseQuad
  >
  extends ExtendedDataset<InAndOutQuad>
  implements
    BulkEditableDataset<InAndOutQuad>,
    TransactionalDataset<InAndOutQuad> {
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
    super(datasetFactory.dataset(), datasetFactory);
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
    let finalMatch = this.parentDataset.match(
      subject,
      predicate,
      object,
      graph
    );
    if (this.datasetChanges.removed) {
      finalMatch = this.parentDataset.difference(this.datasetChanges.removed);
    }
    if (this.datasetChanges.added) {
      finalMatch = finalMatch.union(
        this.datasetChanges.added.match(subject, predicate, object, graph)
      );
    }
    return finalMatch;
  }

  /**
   * A non-negative integer that specifies the number of quads in the set.
   */
  public get size(): number {
    return (
      this.parentDataset.size +
      (this.datasetChanges.added?.size || 0) -
      (this.datasetChanges.added?.size || 0)
    );
  }

  /**
   * Adds the specified quad to the dataset.
   * Existing quads, as defined in Quad.equals, will be ignored.
   * @param quad
   * @returns the dataset instance it was called on.
   */
  public add(quad: InAndOutQuad): this {
    this.updateDatasetChanges({ added: [quad] });
    return this;
  }

  /**
   * Removes the specified quad from the dataset.
   * This method returns the dataset instance it was called on.
   * @param quad
   */
  public delete(quad: InAndOutQuad): this {
    this.updateDatasetChanges({ removed: [quad] });
    return this;
  }

  /**
   * Determines whether a dataset includes a certain quad, returning true or false as appropriate.
   * @param quad
   */
  public has(quad: InAndOutQuad): boolean {
    return (
      !this.datasetChanges.removed?.has(quad) &&
      (this.datasetChanges.added?.has(quad) || this.parentDataset.has(quad))
    );
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
    // Ensure that the parent dataset is in need of updating
    const allChangesToAdd = changes.added?.filter(
      (quad: InAndOutQuad) => !this.parentDataset.has(quad)
    );
    const allChangesToRemove = changes.removed?.filter((quad: InAndOutQuad) =>
      this.parentDataset.has(quad)
    );

    // Add the result
    const addedResult = this.updateDatasetChangesProperty(
      this.datasetChanges.added,
      this.datasetChanges.removed,
      allChangesToAdd
    );
    this.datasetChanges = {
      added: addedResult.changedSet,
      removed: addedResult.otherSet,
    };
    const removedResult = this.updateDatasetChangesProperty(
      this.datasetChanges.removed,
      this.datasetChanges.added,
      allChangesToRemove
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
  public startTransaction(): TransactionalDataset<InAndOutQuad> {
    // This is caused by the typings being incorrect for the intersect method
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return new ProxyTransactionalDataset(this, this.datasetFactory);
  }
}
