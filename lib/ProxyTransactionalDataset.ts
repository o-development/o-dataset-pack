import { Dataset, BaseQuad, Term, DatasetFactory } from "@rdfjs/types";
import {
  BulkEditableDataset,
  DatasetChanges,
  TransactionalDataset,
} from "./types";
import ExtendedDataset from "./ExtendedDataset";

/**
 * Proxy Transactional Dataset is a transactional dataset that does not duplicate
 * the parent dataset, it will dynamically determine the correct return value for
 * methods in real time when the method is called.
 */
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
   * The changes made that are ready to commit
   */
  private datasetChanges: DatasetChanges<InAndOutQuad>;

  /**
   * A list of changes made to the parent dataset upon commit used for rolling back changes.
   * This is different from 'datasetChanges' because datasetChanges is allowed to overlap
   * with the parent dataset.
   * For example, the parent dataset may already have triple A, and datasetChanges can
   * also have triple A.
   */
  private committedDatasetChanges?: DatasetChanges<InAndOutQuad>;

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
   *  This method removes the quads in the current instance that match the given arguments. The logic described in Quad Matching is applied for each quad in this dataset to select the quads which will be deleted.
   * @param subject
   * @param predicate
   * @param object
   * @param graph
   * @returns the dataset instance it was called on.
   */
  deleteMatches(
    subject?: Term,
    predicate?: Term,
    object?: Term,
    graph?: Term
  ): this {
    this.checkIfTransactionCommitted();
    const matching = this.match(subject, predicate, object, graph);
    for (const quad of matching) {
      this.delete(quad);
    }
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
      finalMatch = finalMatch.difference(this.datasetChanges.removed);
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
      (this.datasetChanges.added?.difference(this.parentDataset).size || 0) -
      (this.datasetChanges.removed?.intersection(this.parentDataset).size || 0)
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
  public [Symbol.iterator](): Iterator<InAndOutQuad> {
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
    if (this.committedDatasetChanges) {
      throw new Error("Transaction has already committed");
    }
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

    // Add added
    if (changes.added) {
      if (this.datasetChanges.added) {
        this.datasetChanges.added.addAll(changes.added);
      } else {
        this.datasetChanges.added = this.datasetFactory.dataset(changes.added);
      }
    }
    // Add removed
    if (changes.removed) {
      if (this.datasetChanges.removed) {
        this.datasetChanges.removed.addAll(changes.removed);
      } else {
        this.datasetChanges.removed = this.datasetFactory.dataset(
          changes.removed
        );
      }
    }

    // Remove duplicates between the two datasets
    if (this.datasetChanges.added && this.datasetChanges.removed) {
      const changesIntersection = this.datasetChanges.added.intersection(
        this.datasetChanges.removed
      );
      if (changesIntersection.size > 0) {
        this.datasetChanges.added = this.datasetChanges.added.difference(
          changesIntersection
        );
        this.datasetChanges.removed = this.datasetChanges.removed.difference(
          changesIntersection
        );
      }
    }

    // Make undefined if size is zero
    if (this.datasetChanges.added && this.datasetChanges.added.size === 0) {
      this.datasetChanges.added = undefined;
    }
    if (this.datasetChanges.removed && this.datasetChanges.removed.size === 0) {
      this.datasetChanges.removed = undefined;
    }
  }

  /**
   * Helper method to update the parent dataset or any other provided dataset
   */
  private updateParentDataset(datasetChanges: DatasetChanges<InAndOutQuad>) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((this.parentDataset as any).bulk) {
      (this.parentDataset as BulkEditableDataset<InAndOutQuad>).bulk(
        datasetChanges
      );
    } else {
      if (datasetChanges.added) {
        this.parentDataset.addAll(datasetChanges.added);
      }
      if (datasetChanges.removed) {
        datasetChanges.removed.forEach((curQuad) => {
          this.parentDataset.delete(curQuad);
        });
      }
    }
  }

  /**
   * Commits changes made to the parent dataset
   */
  public commit(): void {
    this.checkIfTransactionCommitted();
    this.committedDatasetChanges = {
      added: this.datasetChanges.added?.difference(this.parentDataset),
      removed: this.datasetChanges.removed?.intersection(this.parentDataset),
    };
    this.updateParentDataset(this.committedDatasetChanges);
  }

  /**
   * Rolls back changes made to the parent dataset
   */
  public rollback(): void {
    if (!this.committedDatasetChanges) {
      throw new Error(
        "Cannot rollback. Transaction has not yet been committed"
      );
    }
    this.updateParentDataset({
      added: this.committedDatasetChanges.removed,
      removed: this.committedDatasetChanges.added,
    });
    this.committedDatasetChanges = undefined;
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

  public getChanges(): DatasetChanges<InAndOutQuad> {
    return this.datasetChanges;
  }
}
