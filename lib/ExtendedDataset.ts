import { DatasetCore, Dataset, BaseQuad, Stream, Term, Quad } from "rdf-js";
import DatasetCoreImplementation from "@rdfjs/dataset/DatasetCore";

export class ExtendedDataset
  extends DatasetCoreImplementation<BaseQuad>
  implements Dataset<Quad, BaseQuad> {
  /**
   * Constructor
   */
  constructor(quads?: DatasetCore<Quad, BaseQuad> | BaseQuad[]) {
    if (quads) {
      const arr = [];
      for (const quad of quads) {
        arr.push(quad);
      }
      super(arr);
    } else {
      super([]);
    }
  }

  /**
   * Imports the quads into this dataset.
   * This method differs from Dataset.union in that it adds all quads to the current instance, rather than combining quads and the current instance to create a new instance.
   * @param quads
   * @returns the dataset instance it was called on.
   */
  addAll(quads: BaseQuad[] | Dataset<BaseQuad, BaseQuad>): this {
    for (const quad of quads) {
      this.add(quad);
    }
    return this;
  }

  /**
   * Returns true if the current instance is a superset of the given dataset; differently put: if the given dataset is a subset of, is contained in the current dataset.
   * Blank Nodes will be normalized.
   * @param other
   */
  contains(other: Dataset<BaseQuad, BaseQuad>): boolean {
    for (const quad of other) {
      if (!this.has(quad)) {
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
  deleteMatches(
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
  difference(other: DatasetCore<BaseQuad, BaseQuad>): Dataset<Quad, BaseQuad> {
    const dataset = new ExtendedDataset();
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
  equals(other: Dataset<BaseQuad, BaseQuad>): boolean {
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
  every(
    iteratee: (quad: Quad, dataset: Dataset<Quad, BaseQuad>) => boolean
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
  filter(
    iteratee: (quad: Quad, dataset: Dataset<Quad, BaseQuad>) => boolean
  ): Dataset<Quad, BaseQuad> {
    const dataset = new ExtendedDataset();
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
  forEach(
    iteratee: (quad: Quad, dataset: Dataset<Quad, BaseQuad>) => void
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
  import(stream: Stream<BaseQuad>): Promise<this> {
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
  intersection(other: Dataset<BaseQuad, BaseQuad>): Dataset<Quad, BaseQuad> {
    const dataset = new ExtendedDataset();
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
  map(
    iteratee: (quad: Quad, dataset: Dataset<Quad, BaseQuad>) => Quad
  ): Dataset<Quad, BaseQuad> {
    const dataset = new ExtendedDataset();
    for (const quad of this) {
      dataset.add(iteratee(quad, this));
    }
    return dataset;
  }

  /**
   * This method calls the iteratee on each quad of the DatasetCore. The first time the iteratee is called, the accumulator value is the initialValue or, if not given, equals to the first quad of the Dataset. The return value of the iteratee is used as accumulator value for the next calls.
   * This method returns the return value of the last iteratee call.
   * Note: This method is aligned with Array.prototype.reduce() in ECMAScript-262.
   * @param iteratee
   * @param initialValue
   */
  reduce<A = unknown>(
    iteratee: (
      accumulator: A,
      quad: Quad,
      dataset: Dataset<Quad, BaseQuad>
    ) => A,
    initialValue?: A
  ): A {
    if (this.size === 0 && !initialValue) {
      throw new Error(
        "Cannot reduce an empty Dataset without an initial value."
      );
    }
    const thisIterator: Iterator<Quad> = this[Symbol.iterator]();
    let iteratorResult = thisIterator.next();
    let accumulatedValue: A = iteratee(
      initialValue as A,
      iteratorResult.value,
      this
    );
    while (!iteratorResult.done) {
      iteratorResult = thisIterator.next();
      accumulatedValue = iteratee(
        initialValue as A,
        iteratorResult.value,
        this
      );
    }
    return accumulatedValue;
  }

  /**
   * Existential quantification method, tests whether some quads in the dataset pass the test implemented by the provided iteratee.
   * Note: This method is aligned with Array.prototype.some() in ECMAScript-262.
   * @param iteratee
   * @returns boolean true once a quad that passes the test is found.
   */
  some(
    iteratee: (quad: Quad, dataset: Dataset<Quad, BaseQuad>) => boolean
  ): boolean {
    for (const quad of this) {
      if (iteratee(quad, this)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Returns the set of quads within the dataset as a host language native sequence, for example an Array in ECMAScript-262.
   * Note: Since a DatasetCore is an unordered set, the order of the quads within the returned sequence is arbitrary.
   */
  toArray(): Quad[] {
    const array = [];
    for (const quad of this) {
      array.push(quad);
    }
    return array;
  }

  /**
   * Returns an N-Quads string representation of the dataset, preprocessed with RDF Dataset Normalization algorithm.
   */
  toCanonical(): string {
    throw new Error("Method not implemented.");
  }

  /**
   * Returns a stream that contains all quads of the dataset.
   */
  toStream(): Stream<Quad> {
    throw new Error("Method not implemented.");
  }

  /**
   * Returns an N-Quads string representation of the dataset.
   * No prior normalization is required, therefore the results for the same quads may vary depending on the Dataset implementation.
   */
  toString(): string {
    throw new Error("Method not implemented.");
  }

  /**
   * Returns a new Dataset that is a concatenation of this dataset and the quads given as an argument.
   * @param other
   */
  union(other: Dataset<BaseQuad, BaseQuad>): Dataset<Quad, BaseQuad> {
    const iteratingDataset = this.size < other.size ? this : other;
    const comparingDataset = this.size < other.size ? other : this;
    const dataset = new ExtendedDataset();
    for (const quad of iteratingDataset) {
      if (comparingDataset.has(quad)) {
        dataset.add(quad);
      }
    }
    return dataset;
  }

  /**
   * This method returns a new dataset that is comprised of all quads in the current instance matching the given arguments. The logic described in Quad Matching is applied for each quad in this dataset to check if it should be included in the output dataset.
   * @param subject
   * @param predicate
   * @param object
   * @param graph
   * @returns a Dataset with matching triples
   */
  match(
    subject?: Term | null,
    predicate?: Term | null,
    object?: Term | null,
    graph?: Term | null
  ): Dataset<Quad, BaseQuad> {
    return new ExtendedDataset(super.match(subject, predicate, object, graph));
  }
}
