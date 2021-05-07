import { Dataset, BaseQuad, Stream, Term } from "rdf-js";
import {
  BulkEditableDataset,
  DatasetChanges,
} from "./SubscribableDatasetTypes";

export default class TransactionalDataset<
  InAndOutQuad extends BaseQuad = BaseQuad
> implements BulkEditableDataset<InAndOutQuad> {
  private parentDataset: Dataset<InAndOutQuad, InAndOutQuad>;
  constructor(parentDataset: Dataset<InAndOutQuad, InAndOutQuad>) {
    this.parentDataset = parentDataset;
  }

  /**
   * ==================================================================
   * DATASET METHODS
   * ==================================================================
   */

  addAll(quads: Dataset<InAndOutQuad, InAndOutQuad> | InAndOutQuad[]): this {
    throw new Error("Method not implemented.");
  }
  bulk(changes: DatasetChanges<InAndOutQuad>): this {
    throw new Error("Method not implemented.");
  }
  contains(other: Dataset<InAndOutQuad, InAndOutQuad>): boolean {
    throw new Error("Method not implemented.");
  }
  deleteMatches(
    subject?: Term,
    predicate?: Term,
    object?: Term,
    graph?: Term
  ): this {
    throw new Error("Method not implemented.");
  }
  difference(
    other: Dataset<InAndOutQuad, InAndOutQuad>
  ): Dataset<InAndOutQuad, InAndOutQuad> {
    throw new Error("Method not implemented.");
  }
  equals(other: Dataset<InAndOutQuad, InAndOutQuad>): boolean {
    throw new Error("Method not implemented.");
  }
  every(
    iteratee: (
      quad: InAndOutQuad,
      dataset: Dataset<InAndOutQuad, InAndOutQuad>
    ) => boolean
  ): boolean {
    throw new Error("Method not implemented.");
  }
  filter(
    iteratee: (
      quad: InAndOutQuad,
      dataset: Dataset<InAndOutQuad, InAndOutQuad>
    ) => boolean
  ): Dataset<InAndOutQuad, InAndOutQuad> {
    throw new Error("Method not implemented.");
  }
  forEach(
    iteratee: (
      quad: InAndOutQuad,
      dataset: Dataset<InAndOutQuad, InAndOutQuad>
    ) => void
  ): void {
    throw new Error("Method not implemented.");
  }
  import(stream: Stream<InAndOutQuad>): Promise<this> {
    throw new Error("Method not implemented.");
  }
  intersection(other: Dataset<InAndOutQuad, InAndOutQuad>): this {
    throw new Error("Method not implemented.");
  }
  map(
    iteratee: (
      quad: InAndOutQuad,
      dataset: Dataset<InAndOutQuad, InAndOutQuad>
    ) => InAndOutQuad
  ): Dataset<InAndOutQuad, InAndOutQuad> {
    throw new Error("Method not implemented.");
  }
  reduce<A = any>(
    iteratee: (
      accumulator: A,
      quad: InAndOutQuad,
      dataset: Dataset<InAndOutQuad, InAndOutQuad>
    ) => A,
    initialValue?: A
  ): A {
    throw new Error("Method not implemented.");
  }
  some(
    iteratee: (
      quad: InAndOutQuad,
      dataset: Dataset<InAndOutQuad, InAndOutQuad>
    ) => boolean
  ): boolean {
    throw new Error("Method not implemented.");
  }
  toArray(): InAndOutQuad[] {
    throw new Error("Method not implemented.");
  }
  toCanonical(): string {
    throw new Error("Method not implemented.");
  }
  toStream(): Stream<InAndOutQuad> {
    throw new Error("Method not implemented.");
  }
  toString(): string {
    throw new Error("Method not implemented.");
  }
  union(
    quads: Dataset<InAndOutQuad, InAndOutQuad>
  ): Dataset<InAndOutQuad, InAndOutQuad> {
    throw new Error("Method not implemented.");
  }
  match(
    subject?: Term | null,
    predicate?: Term | null,
    object?: Term | null,
    graph?: Term | null
  ): Dataset<InAndOutQuad, InAndOutQuad> {
    throw new Error("Method not implemented.");
  }
  get size(): number {
    throw new Error("Method not implemented.");
  }
  add(quad: InAndOutQuad): this {
    throw new Error("Method not implemented.");
  }
  delete(quad: InAndOutQuad): this {
    throw new Error("Method not implemented.");
  }
  has(quad: InAndOutQuad): boolean {
    throw new Error("Method not implemented.");
  }
  [Symbol.iterator](): Iterator<InAndOutQuad, any, undefined> {
    throw new Error("Method not implemented.");
  }

  /**
   * ==================================================================
   * EXTRA METHODS
   * ==================================================================
   */
  commit(): void {
    throw new Error("Method not implemented.");
  }

  rollback(): void {
    throw new Error("Method not implemented.");
  }

  public startTransaction(): TransactionalDataset {
    throw new Error("Method Not Implemented.");
  }
}
