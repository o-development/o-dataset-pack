import { EventEmitter } from "events";
import DatasetIndexed from "rdf-dataset-indexed/dataset";
import { namedNode, blankNode, defaultGraph } from "@rdfjs/data-model";
import {
  Stream,
  Term,
  BaseQuad,
  NamedNode,
  BlankNode,
  DefaultGraph,
  Quad,
} from "rdf-js";
import datasetFactory from "rdf-dataset-indexed";

export type SubscribableTerms = NamedNode | BlankNode | DefaultGraph;
export interface DatasetChanges {
  added?: DatasetIndexed;
  removed?: DatasetIndexed;
}
export type nodeEventListener = (
  dataset: DatasetIndexed,
  changes: DatasetChanges
) => void;

export default class SubscribableDataset extends DatasetIndexed {
  private eventEmitter: EventEmitter = new EventEmitter();

  /**
   * MODIFIED METHODS
   * Each of these methods modifies the dataset in some way. They are
   * updated to trigger subscriptions
   */

  public add(quad: Quad): this {
    super.add(quad);
    this.triggerSubscriptionForQuads([quad], { added: this.create([quad]) });
    return this;
  }

  public delete(quad: Quad): this {
    super.delete(quad);
    this.triggerSubscriptionForQuads([quad], { removed: this.create([quad]) });
    return this;
  }

  public addAll(quads: DatasetIndexed<BaseQuad, BaseQuad> | BaseQuad[]): this {
    super.addAll(quads);
    this.triggerSubscriptionForQuads(quads, { added: this.create(quads) });
    return this;
  }
  public import(stream: Stream): Promise<this> {
    return new Promise((resolve, reject) => {
      const addedQuads = datasetFactory();
      stream
        .on("data", (quad) => {
          addedQuads.add(quad);
          super.add(quad);
        })
        .on("end", () => {
          this.triggerSubscriptionForQuads(addedQuads, { added: addedQuads });
          resolve(this);
        })
        .on("error", (err) => reject(err));
    });
  }

  public remove(quad: Quad): this {
    return this.delete(quad);
  }

  public removeMatches(
    subject?: Term | null,
    predicate?: Term | null,
    object?: Term | null,
    graph?: Term | null
  ): this {
    throw new Error("Method not implemented");
  }

  /**
   * SUBSCRIPTION METHODS
   */
  private NAMED_NODE_KEY_PREFIX = "NamedNode";
  private BLANK_NODE_KEY_PREFIX = "BlankNode";
  private DEFAULT_GRAPH_KEY_PREFIX = "DefaultGraph";
  private SUBSCRIBABLE_TERMS = [
    this.NAMED_NODE_KEY_PREFIX,
    this.BLANK_NODE_KEY_PREFIX,
    this.DEFAULT_GRAPH_KEY_PREFIX,
  ];

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
   * Triggers all subscriptions for an affected Quad
   * @param quad
   * @param changed
   */
  protected triggerSubscriptionForQuads(
    quads: DatasetIndexed<BaseQuad, BaseQuad> | BaseQuad[],
    changed: DatasetChanges
  ): void {
    const triggeredTermsMap: Record<string, SubscribableTerms> = {};
    quads.forEach((quad: BaseQuad) => {
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
    });
    const triggeredTerms = Object.values(triggeredTermsMap);
    triggeredTerms.forEach((triggeredTerm) => {
      this.triggerSubscriptionForNode(triggeredTerm, changed);
    });
  }

  /**
   * Triggers all subscriptions for a given term
   * @param term The term that should be triggered
   */
  protected triggerSubscriptionForNode(
    term: SubscribableTerms,
    changed: DatasetChanges
  ): void {
    if (this.listenerCount(term) > 0) {
      let allQuads: DatasetIndexed = datasetFactory();
      if (term.termType !== "DefaultGraph") {
        allQuads = allQuads.merge(this.match(term, null, null));
        allQuads = allQuads.merge(this.match(null, null, term));
        if (term.termType !== "BlankNode") {
          allQuads = allQuads.merge(this.match(null, term, null));
        }
      } else {
        allQuads = allQuads.merge(this.match(null, null, null, term));
      }
      const changedForThisNode: DatasetChanges = {
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

  public addListener(
    eventName: SubscribableTerms,
    listener: nodeEventListener
  ): this {
    this.eventEmitter.addListener(this.getKeyFromNode(eventName), listener);
    return this;
  }

  public emit(
    eventName: SubscribableTerms,
    dataset: DatasetIndexed,
    datasetChanges: DatasetChanges
  ): boolean {
    return this.eventEmitter.emit(
      this.getKeyFromNode(eventName),
      dataset,
      datasetChanges
    );
  }

  public eventNames(): SubscribableTerms[] {
    return this.eventEmitter
      .eventNames()
      .map((eventName) => this.getNodeFromKey(eventName as string));
  }

  public getMaxListeners(): number {
    return this.eventEmitter.getMaxListeners();
  }

  public listenerCount(eventName: SubscribableTerms): number {
    return this.eventEmitter.listenerCount(this.getKeyFromNode(eventName));
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  public listeners(eventName: SubscribableTerms): nodeEventListener[] {
    return this.eventEmitter.listeners(
      this.getKeyFromNode(eventName)
    ) as nodeEventListener[];
  }

  off(eventName: SubscribableTerms, listener: nodeEventListener): void {
    this.removeListener(eventName, listener);
  }

  on(eventName: SubscribableTerms, listener: nodeEventListener): this {
    return this.addListener(eventName, listener);
  }

  once(eventName: SubscribableTerms, listener: nodeEventListener): this {
    this.eventEmitter.once(this.getKeyFromNode(eventName), listener);
    return this;
  }

  prependListener(
    eventName: SubscribableTerms,
    listener: nodeEventListener
  ): this {
    this.eventEmitter.prependListener(this.getKeyFromNode(eventName), listener);
    return this;
  }

  prependOnceListener(
    eventName: SubscribableTerms,
    listener: nodeEventListener
  ): this {
    this.eventEmitter.prependOnceListener(
      this.getKeyFromNode(eventName),
      listener
    );
    return this;
  }

  removeAllListeners(eventName: SubscribableTerms): this {
    this.eventEmitter.removeAllListeners(this.getKeyFromNode(eventName));
    return this;
  }

  removeListener(
    eventName: SubscribableTerms,
    listener: nodeEventListener
  ): this {
    this.eventEmitter.removeListener(this.getKeyFromNode(eventName), listener);
    return this;
  }

  setMaxListeners(n: number): this {
    this.eventEmitter.setMaxListeners(n);
    return this;
  }

  rawListeners(eventName: SubscribableTerms): nodeEventListener[] {
    return this.eventEmitter.rawListeners(
      this.getKeyFromNode(eventName)
    ) as nodeEventListener[];
  }
}
