import { Dataset, NamedNode, BlankNode, DefaultGraph } from "rdf-js";
/**
 * An interface representing the changes made
 */
export interface DatasetChanges {
  added?: Dataset;
  removed?: Dataset;
}

/**
 * Types of nodes a subscribable dataset can subscribe to
 */
export type SubscribableTerms = NamedNode | BlankNode | DefaultGraph;

/**
 * An event listeners for nodes
 */
export type nodeEventListener = (
  dataset: Dataset,
  changes: DatasetChanges
) => void;
