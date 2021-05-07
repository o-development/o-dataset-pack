import { Dataset, NamedNode, BlankNode, DefaultGraph, BaseQuad } from "rdf-js";
/**
 * An interface representing the changes made
 */
export interface DatasetChanges<InAndOutQuad extends BaseQuad = BaseQuad> {
  added?: Dataset<InAndOutQuad, InAndOutQuad>;
  removed?: Dataset<InAndOutQuad, InAndOutQuad>;
}

/**
 * Types of nodes a subscribable dataset can subscribe to
 */
export type SubscribableTerms = NamedNode | BlankNode | DefaultGraph;

/**
 * An event listeners for nodes
 */
export type nodeEventListener<InAndOutQuad extends BaseQuad = BaseQuad> = (
  dataset: Dataset<InAndOutQuad, InAndOutQuad>,
  changes: DatasetChanges<InAndOutQuad>
) => void;

/**
 *
 */
export interface BulkEditableDataset<InAndOutQuad extends BaseQuad = BaseQuad>
  extends Dataset<InAndOutQuad, InAndOutQuad> {
  bulk(changes: DatasetChanges<InAndOutQuad>): this;
}
