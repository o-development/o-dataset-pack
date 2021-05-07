import { EventEmitter } from "events";
import { Dataset, BaseQuad, Stream, Term, DatasetFactory } from "rdf-js";
import { namedNode, blankNode, defaultGraph } from "@rdfjs/data-model";
import {
  SubscribableTerms,
  DatasetChanges,
  nodeEventListener,
  BulkEditableDataset,
} from "./SubscribableDatasetTypes";
import TransactionalDataset from "./TransactionalDataset";

/**
 * A wrapper for a dataset that allows subscriptions to be made on nodes to
 * be triggered whenever a quad containing that added or removed.
 */
export default class SubscribableDataset<
  InAndOutQuad extends BaseQuad = BaseQuad
> implements BulkEditableDataset<InAndOutQuad> {
  /**
   * The underlying dataset factory
   */
  private datasetFactory: DatasetFactory<InAndOutQuad, InAndOutQuad>;
  /**
   * The underlying dataset
   */
  private dataset: Dataset<InAndOutQuad, InAndOutQuad>;
  /**
   * The underlying event emitter
   */
  private eventEmitter: EventEmitter;

  /**
   *
   * @param datasetFactory
   * @param initialDataset
   */
  constructor(
    datasetFactory: DatasetFactory<InAndOutQuad, InAndOutQuad>,
    initialDataset?: Dataset<InAndOutQuad, InAndOutQuad>
  ) {
    this.datasetFactory = datasetFactory;
    this.dataset = initialDataset || this.datasetFactory.dataset();
    this.eventEmitter = new EventEmitter();
  }

  /**
   * ==================================================================
   * DATASET METHODS
   * ==================================================================
   */

  addAll(quads: Dataset<InAndOutQuad, InAndOutQuad> | InAndOutQuad[]): this {
    throw new Error("Method not implemented.");
  }
  public bulk(changed: DatasetChanges<InAndOutQuad>): this {
    throw new Error("Method Not Implemented.");
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
   * EVENTEMITTER METHODS
   * ==================================================================
   */
  private NAMED_NODE_KEY_PREFIX = "NamedNode";
  private BLANK_NODE_KEY_PREFIX = "BlankNode";
  private DEFAULT_GRAPH_KEY_PREFIX = "DefaultGraph";
  private SUBSCRIBABLE_TERMS = [
    this.NAMED_NODE_KEY_PREFIX,
    this.BLANK_NODE_KEY_PREFIX,
    this.DEFAULT_GRAPH_KEY_PREFIX,
  ];

  /**
   * Given a term, returns the string key to be used in an event emitter
   */
  private getKeyFromNode(term: SubscribableTerms): string {
    if (term.termType === "NamedNode") {
      return `${this.NAMED_NODE_KEY_PREFIX}${term.value}`;
    } else if (term.termType === "BlankNode") {
      return `${this.BLANK_NODE_KEY_PREFIX}${term.value}`;
    } else if (term.termType === "DefaultGraph") {
      return `${this.DEFAULT_GRAPH_KEY_PREFIX}${term.value}`;
    }
    throw new Error("Invalid term type for subscription");
  }

  /**
   * Given a key, returns the node
   */
  private getNodeFromKey(key: string): SubscribableTerms {
    if (key.startsWith(this.NAMED_NODE_KEY_PREFIX)) {
      return namedNode(key.slice(this.NAMED_NODE_KEY_PREFIX.length));
    } else if (key.startsWith(this.BLANK_NODE_KEY_PREFIX)) {
      return blankNode(key.slice(this.BLANK_NODE_KEY_PREFIX.length));
    } else if (key.startsWith(this.DEFAULT_GRAPH_KEY_PREFIX)) {
      return defaultGraph();
    }
    throw Error("Invalid Subscription Key");
  }

  /**
   * Triggers all subscriptions based on an updated quads
   * @param changed The changed triples of the transaction
   */
  private triggerSubscriptionForQuads(
    changed: DatasetChanges<InAndOutQuad>
  ): void {
    const triggeredTermsMap: Record<string, SubscribableTerms> = {};
    const forEachQuad = (quad: BaseQuad) => {
      const subject = quad.subject;
      const predicate = quad.predicate;
      const object = quad.object;
      const graph = quad.graph;
      const quadTerms = [subject, predicate, object, graph];
      quadTerms.forEach((quadTerm) => {
        if (this.SUBSCRIBABLE_TERMS.includes(quadTerm.termType)) {
          triggeredTermsMap[
            `${quadTerm.termType}${quadTerm.value}`
          ] = quadTerm as SubscribableTerms;
        }
      });
    };
    changed.added?.forEach(forEachQuad);
    changed.removed?.forEach(forEachQuad);
    const triggeredTerms = Object.values(triggeredTermsMap);
    triggeredTerms.forEach((triggeredTerm) => {
      this.triggerSubscriptionForNode(triggeredTerm, changed);
    });
  }

  /**
   * Triggers all subscriptions for a given term
   * @param term The term that should be triggered
   * @param changed The changed triples of a certain transaction
   */
  private triggerSubscriptionForNode(
    term: SubscribableTerms,
    changed: DatasetChanges<InAndOutQuad>
  ): void {
    if (this.listenerCount(term) > 0) {
      let allQuads: Dataset<
        InAndOutQuad,
        InAndOutQuad
      > = this.datasetFactory.dataset();
      if (term.termType !== "DefaultGraph") {
        allQuads = allQuads.union(this.match(term, null, null, null));
        allQuads = allQuads.union(this.match(null, null, term, null));
        if (term.termType !== "BlankNode") {
          allQuads = allQuads.union(this.match(null, term, null, null));
        }
      } else {
        allQuads = allQuads.union(this.match(null, null, null, term));
      }
      const changedForThisNode: DatasetChanges<InAndOutQuad> = {
        added: changed.added
          ? changed.added.filter((addedNode) => allQuads.has(addedNode))
          : undefined,
        removed: changed.removed
          ? changed.removed.filter((removedNode) => allQuads.has(removedNode))
          : undefined,
      };
      this.emit(term, allQuads, changedForThisNode);
    }
  }

  /**
   * Alias for emitter.on(eventName, listener).
   * @param eventName
   * @param listener
   * @returns
   */
  public addListener(
    eventName: SubscribableTerms,
    listener: nodeEventListener<InAndOutQuad>
  ): this {
    return this.on(eventName, listener);
  }

  /**
   * Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.
   * @param eventName
   * @param dataset
   * @param datasetChanges
   * @returns true if the event had listeners, false otherwise.
   */
  public emit(
    eventName: SubscribableTerms,
    dataset: Dataset<InAndOutQuad, InAndOutQuad>,
    datasetChanges: DatasetChanges<InAndOutQuad>
  ): boolean {
    return this.eventEmitter.emit(
      this.getKeyFromNode(eventName),
      dataset,
      datasetChanges
    );
  }

  /**
   * Returns an array listing the events for which the emitter has registered listeners. The values in the array are strings or Symbols.
   */
  public eventNames(): SubscribableTerms[] {
    return this.eventEmitter
      .eventNames()
      .map((eventName) => this.getNodeFromKey(eventName as string));
  }

  /**
   * Returns the current max listener value for the EventEmitter which is either set by emitter.setMaxListeners(n) or defaults to events.defaultMaxListeners.
   */
  public getMaxListeners(): number {
    return this.eventEmitter.getMaxListeners();
  }

  /**
   * Returns the number of listeners listening to the event named eventName.
   */
  public listenerCount(eventName: SubscribableTerms): number {
    return this.eventEmitter.listenerCount(this.getKeyFromNode(eventName));
  }

  /**
   * Returns a copy of the array of listeners for the event named eventName.
   */
  public listeners(
    eventName: SubscribableTerms
  ): nodeEventListener<InAndOutQuad>[] {
    return this.eventEmitter.listeners(
      this.getKeyFromNode(eventName)
    ) as nodeEventListener<InAndOutQuad>[];
  }

  /**
   * Alias for emitter.removeListener()
   */
  public off(
    eventName: SubscribableTerms,
    listener: nodeEventListener<InAndOutQuad>
  ): void {
    this.removeListener(eventName, listener);
  }

  /**
   * Adds the listener function to the end of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.
   */
  public on(
    eventName: SubscribableTerms,
    listener: nodeEventListener<InAndOutQuad>
  ): this {
    this.eventEmitter.on(this.getKeyFromNode(eventName), listener);
    return this;
  }

  /**
   * Adds a one-time listener function for the event named eventName. The next time eventName is triggered, this listener is removed and then invoked.
   */
  public once(
    eventName: SubscribableTerms,
    listener: nodeEventListener<InAndOutQuad>
  ): this {
    this.eventEmitter.once(this.getKeyFromNode(eventName), listener);
    return this;
  }

  /**
   * Adds the listener function to the beginning of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.
   */
  public prependListener(
    eventName: SubscribableTerms,
    listener: nodeEventListener<InAndOutQuad>
  ): this {
    this.eventEmitter.prependListener(this.getKeyFromNode(eventName), listener);
    return this;
  }

  /**
   * Adds a one-time listener function for the event named eventName to the beginning of the listeners array. The next time eventName is triggered, this listener is removed, and then invoked.
   */
  public prependOnceListener(
    eventName: SubscribableTerms,
    listener: nodeEventListener<InAndOutQuad>
  ): this {
    this.eventEmitter.prependOnceListener(
      this.getKeyFromNode(eventName),
      listener
    );
    return this;
  }

  /**
   * Removes all listeners, or those of the specified eventName.
   */
  public removeAllListeners(eventName: SubscribableTerms): this {
    this.eventEmitter.removeAllListeners(this.getKeyFromNode(eventName));
    return this;
  }

  /**
   * Removes the specified listener from the listener array for the event named eventName.
   */
  public removeListener(
    eventName: SubscribableTerms,
    listener: nodeEventListener<InAndOutQuad>
  ): this {
    this.eventEmitter.removeListener(this.getKeyFromNode(eventName), listener);
    return this;
  }

  /**
   * By default EventEmitters will print a warning if more than 10 listeners are added for a particular event. This is a useful default that helps finding memory leaks. The emitter.setMaxListeners() method allows the limit to be modified for this specific EventEmitter instance. The value can be set to Infinity (or 0) to indicate an unlimited number of listeners.
   */
  public setMaxListeners(n: number): this {
    this.eventEmitter.setMaxListeners(n);
    return this;
  }

  /**
   * Returns a copy of the array of listeners for the event named eventName, including any wrappers (such as those created by .once()).
   */
  public rawListeners(
    eventName: SubscribableTerms
  ): nodeEventListener<InAndOutQuad>[] {
    return this.eventEmitter.rawListeners(
      this.getKeyFromNode(eventName)
    ) as nodeEventListener[];
  }

  /**
   * ==================================================================
   * TRANSACTION METHODS
   * ==================================================================
   */

  public startTransaction(): TransactionalDataset {
    throw new Error("Method Not Implemented.");
  }
}
