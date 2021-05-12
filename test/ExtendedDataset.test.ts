import { namedNode, literal, quad } from "@rdfjs/dataset";
import { Quad_Object, Quad_Predicate } from "n3";
import { BaseQuad, Dataset, Quad_Subject } from "rdf-js";
import { createExtendedDataset } from "../lib/createExtendedDataset";
import { Readable } from "stream";

describe("ExtendedDataset", () => {
  let extendedDataset: Dataset<BaseQuad>;

  beforeEach(() => {
    extendedDataset = createExtendedDataset();
  });

  const initializeDataset = () => {
    extendedDataset = createExtendedDataset([
      quad(
        namedNode("http://example.org/cartoons#Tom"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
      quad(
        namedNode("http://example.org/cartoons#Tom"),
        namedNode("http://example.org/cartoons#name"),
        literal("Tom")
      ),
    ]);
  };

  it("Adds a quad", () => {
    const addedQuad = quad(
      namedNode("http://example.org/cartoons#Tom"),
      namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
      namedNode("http://example.org/cartoons#Cat")
    );
    extendedDataset.add(addedQuad);
    expect(extendedDataset.has(addedQuad)).toBe(true);
  });

  it("Deletes a quad", () => {
    initializeDataset();
    const deletedQuad = quad(
      namedNode("http://example.org/cartoons#Tom"),
      namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
      namedNode("http://example.org/cartoons#Cat")
    );
    extendedDataset.delete(deletedQuad);
    expect(extendedDataset.has(deletedQuad)).toBe(false);
  });

  it("Checks if it has a quad when it does", () => {
    initializeDataset();
    const hadQuad = quad(
      namedNode("http://example.org/cartoons#Tom"),
      namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
      namedNode("http://example.org/cartoons#Cat")
    );
    expect(extendedDataset.has(hadQuad)).toBe(true);
  });

  it("Checks if it has a quad when it doesn't", () => {
    initializeDataset();
    const hadQuad = quad(
      namedNode("http://fake.com"),
      namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
      namedNode("http://example.org/cartoons#Cat")
    );
    expect(extendedDataset.has(hadQuad)).toBe(false);
  });

  it("Can match a quad", () => {
    initializeDataset();
    const matchDataset = extendedDataset.match(
      null,
      namedNode("http://example.org/cartoons#name"),
      null
    );
    expect(
      matchDataset.has(
        quad(
          namedNode("http://example.org/cartoons#Tom"),
          namedNode("http://example.org/cartoons#name"),
          literal("Tom")
        )
      )
    ).toBe(true);
  });

  it("Iterates over itself", () => {
    const quads = [];
    initializeDataset();
    for (const curQuad of extendedDataset) {
      quads.push(curQuad);
    }
    expect(quads.length).toBe(2);
  });

  it("Adds an array of Quads", () => {
    const quads = [
      quad(
        namedNode("http://example.org/cartoons#Tom"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
      quad(
        namedNode("http://example.org/cartoons#Tom"),
        namedNode("http://example.org/cartoons#name"),
        literal("Tom")
      ),
    ];
    extendedDataset.addAll(quads);
    expect(extendedDataset.has(quads[0])).toBe(true);
    expect(extendedDataset.has(quads[1])).toBe(true);
  });

  it("Detects if one dataset contains another when it does", () => {
    initializeDataset();
    const containedDataset = createExtendedDataset([
      quad(
        namedNode("http://example.org/cartoons#Tom"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
    ]);
    expect(extendedDataset.contains(containedDataset)).toBe(true);
  });

  it("Detects if one dataset contains another when it doesn't", () => {
    initializeDataset();
    const containedDataset = createExtendedDataset([
      quad(
        namedNode("http://fake.com"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
    ]);
    expect(extendedDataset.contains(containedDataset)).toBe(false);
  });

  it("Datects if one dataset contains another when it does and other is empty", () => {
    initializeDataset();
    const containedDataset = createExtendedDataset();
    expect(extendedDataset.contains(containedDataset)).toBe(true);
  });

  it("Datects if one dataset contains another when it doesn't and this is empty", () => {
    const containedDataset = createExtendedDataset([
      quad(
        namedNode("http://fake.com"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
    ]);
    expect(extendedDataset.contains(containedDataset)).toBe(false);
  });

  it("Datects if one dataset contains another when it does and this and other are empty", () => {
    const containedDataset = createExtendedDataset();
    expect(extendedDataset.contains(containedDataset)).toBe(true);
  });

  it("Detects if one dataset contains another when it doesn't", () => {
    initializeDataset();
    const containedDataset = createExtendedDataset([
      quad(
        namedNode("http://fake.com"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
    ]);
    expect(extendedDataset.contains(containedDataset)).toBe(false);
  });

  it("Detects if one dataset contains another when the given dataset is larger", () => {
    initializeDataset();
    const containedDataset = createExtendedDataset([
      quad(
        namedNode("http://example.org/cartoons#Tom"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
      quad(
        namedNode("http://example.org/cartoons#Licky"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
      quad(
        namedNode("http://example.org/cartoons#Tulip"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
    ]);
    expect(extendedDataset.contains(containedDataset)).toBe(false);
  });

  it("Deletes matching quads", () => {
    initializeDataset();
    extendedDataset.deleteMatches(
      undefined,
      namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
      undefined
    );
    expect(
      extendedDataset.has(
        quad(
          namedNode("http://example.org/cartoons#Tom"),
          namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
          namedNode("http://example.org/cartoons#Cat")
        )
      )
    ).toBe(false);
  });

  it("Finds the difference between two datasets", () => {
    initializeDataset();
    const otherDataset = createExtendedDataset([
      quad(
        namedNode("http://example.org/cartoons#Tom"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
    ]);
    const differenceDataset = extendedDataset.difference(otherDataset);
    expect(
      differenceDataset.has(
        quad(
          namedNode("http://example.org/cartoons#Tom"),
          namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
          namedNode("http://example.org/cartoons#Cat")
        )
      )
    ).toBe(false);
    expect(
      differenceDataset.has(
        quad(
          namedNode("http://example.org/cartoons#Tom"),
          namedNode("http://example.org/cartoons#name"),
          literal("Tom")
        )
      )
    ).toBe(true);
  });

  it("Checks if datasets are equal when they are", () => {
    initializeDataset();
    const otherDataset = createExtendedDataset([
      quad(
        namedNode("http://example.org/cartoons#Tom"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
      quad(
        namedNode("http://example.org/cartoons#Tom"),
        namedNode("http://example.org/cartoons#name"),
        literal("Tom")
      ),
    ]);
    expect(extendedDataset.equals(otherDataset)).toBe(true);
  });

  it("Checks if datasets are equal when they aren't", () => {
    initializeDataset();
    const otherDataset = createExtendedDataset([
      quad(
        namedNode("http://example.org/cartoons#Licky"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
      quad(
        namedNode("http://example.org/cartoons#Licky"),
        namedNode("http://example.org/cartoons#name"),
        literal("Tom")
      ),
    ]);
    expect(extendedDataset.equals(otherDataset)).toBe(false);
  });

  it("Checks if datasets are equal when they aren't and don't have the same size", () => {
    initializeDataset();
    const otherDataset = createExtendedDataset([
      quad(
        namedNode("http://example.org/cartoons#Tom"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
    ]);
    expect(extendedDataset.equals(otherDataset)).toBe(false);
  });

  it("Checks if datasets are equal when they aren't and other dataset is empty", () => {
    initializeDataset();
    const otherDataset = createExtendedDataset();
    expect(extendedDataset.equals(otherDataset)).toBe(false);
  });

  it("Checks if datasets are equal when they aren't and this dataset is empty", () => {
    const otherDataset = createExtendedDataset([
      quad(
        namedNode("http://example.org/cartoons#Tom"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
    ]);
    expect(extendedDataset.equals(otherDataset)).toBe(false);
  });

  it("Checks if datasets are equal when they are and this and other datasets are empty", () => {
    const otherDataset = createExtendedDataset();
    expect(extendedDataset.equals(otherDataset)).toBe(true);
  });

  it("runs the every function when it should return true", () => {
    initializeDataset();
    expect(extendedDataset.every(() => true)).toBe(true);
  });

  it("runs the every function when it should return false", () => {
    initializeDataset();
    expect(extendedDataset.every(() => false)).toBe(false);
  });

  it("runs filter", () => {
    initializeDataset();
    const newDataset = extendedDataset.filter(
      (curQuad) =>
        curQuad.predicate.value ===
        "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
    );
    expect(newDataset.size).toBe(1);
    expect(
      newDataset.has(
        quad(
          namedNode("http://example.org/cartoons#Tom"),
          namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
          namedNode("http://example.org/cartoons#Cat")
        )
      )
    ).toBe(true);
  });

  it("runs forEach", () => {
    initializeDataset();
    const quads: BaseQuad[] = [];
    extendedDataset.forEach((curQuad) => {
      quads.push(curQuad);
    });
    expect(
      quads[0].equals(
        quad(
          namedNode("http://example.org/cartoons#Tom"),
          namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
          namedNode("http://example.org/cartoons#Cat")
        )
      )
    ).toBe(true);
    expect(
      quads[1].equals(
        quad(
          namedNode("http://example.org/cartoons#Tom"),
          namedNode("http://example.org/cartoons#name"),
          literal("Tom")
        )
      )
    ).toBe(true);
  });

  it("Imports quads from a stream", async () => {
    const stream = createExtendedDataset([
      quad(
        namedNode("http://example.org/cartoons#Tom"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
      quad(
        namedNode("http://example.org/cartoons#Tom"),
        namedNode("http://example.org/cartoons#name"),
        literal("Tom")
      ),
    ]).toStream();
    await extendedDataset.import(stream);
    expect(
      extendedDataset.has(
        quad(
          namedNode("http://example.org/cartoons#Tom"),
          namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
          namedNode("http://example.org/cartoons#Cat")
        )
      )
    ).toBe(true);
    expect(
      extendedDataset.has(
        quad(
          namedNode("http://example.org/cartoons#Tom"),
          namedNode("http://example.org/cartoons#name"),
          literal("Tom")
        )
      )
    ).toBe(true);
  });

  it("Rejects import stream if stream errors", async () => {
    const badStream = new Readable({
      read() {
        this.emit("error", new Error("This is a bad stream."));
      },
    });
    await expect(extendedDataset.import(badStream)).rejects.toThrow(
      "This is a bad stream."
    );
  });

  it("finds the intersection when this is bigger", () => {
    initializeDataset();
    const otherDataset = createExtendedDataset([
      quad(
        namedNode("http://example.org/cartoons#Tom"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
    ]);
    const intersectionDataset = extendedDataset.intersection(otherDataset);
    expect(intersectionDataset.size).toBe(1);
    expect(
      intersectionDataset.has(
        quad(
          namedNode("http://example.org/cartoons#Tom"),
          namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
          namedNode("http://example.org/cartoons#Cat")
        )
      )
    ).toBe(true);
  });

  it("finds the intersection when other is bigger", () => {
    initializeDataset();
    const otherDataset = createExtendedDataset([
      quad(
        namedNode("http://example.org/cartoons#Tom"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
      quad(
        namedNode("http://fake1.com"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
      quad(
        namedNode("http://fake2.com"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
    ]);
    const intersectionDataset = extendedDataset.intersection(otherDataset);
    expect(intersectionDataset.size).toBe(1);
    expect(
      intersectionDataset.has(
        quad(
          namedNode("http://example.org/cartoons#Tom"),
          namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
          namedNode("http://example.org/cartoons#Cat")
        )
      )
    ).toBe(true);
  });

  it("Maps the dataset", () => {
    initializeDataset();
    const mappedDataset = extendedDataset.map((curQuad) => {
      return quad(
        curQuad.predicate as Quad_Subject,
        curQuad.predicate as Quad_Predicate,
        curQuad.predicate as Quad_Object
      );
    });
    expect(mappedDataset.size).toBe(2);
    expect(
      mappedDataset.has(
        quad(
          namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
          namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
          namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type")
        )
      )
    ).toBe(true);
    expect(
      mappedDataset.has(
        quad(
          namedNode("http://example.org/cartoons#name"),
          namedNode("http://example.org/cartoons#name"),
          namedNode("http://example.org/cartoons#name")
        )
      )
    ).toBe(true);
  });

  it("Reduces the dataset", () => {
    initializeDataset();
    const reducedSubjects = extendedDataset.reduce((agg, curQuad) => {
      return `${agg}${curQuad.subject.value}`;
    }, "");
    expect(reducedSubjects).toBe(
      "http://example.org/cartoons#Tomhttp://example.org/cartoons#Tom"
    );
  });

  it("Reduces an empty dataset", () => {
    const reducedSubjects = extendedDataset.reduce((agg, curQuad) => {
      return `${agg}${curQuad.subject.value}`;
    }, "");
    expect(reducedSubjects).toBe("");
  });

  it("Throws an error if reduce is called on an empty dataset without an initial value", () => {
    expect(() =>
      extendedDataset.reduce(() => {
        /* Do nothing */
      })
    ).toThrow("Cannot reduce an empty Dataset without an initial value.");
  });

  it("Determines of some quad satifies an iteratee when it does", () => {
    initializeDataset();
    expect(
      extendedDataset.some(
        (curQuad) =>
          curQuad.predicate.value === "http://example.org/cartoons#name"
      )
    ).toBe(true);
  });

  it("Determines of some quad satifies an iteratee when it doesn't", () => {
    initializeDataset();
    expect(
      extendedDataset.some(
        (curQuad) => curQuad.predicate.value === "http://fake.com"
      )
    ).toBe(false);
  });

  it("Converts the dataset into an array", () => {
    initializeDataset();
    const arr = extendedDataset.toArray();
    expect(Array.isArray(arr)).toBe(true);
    expect(arr.length).toBe(2);
    expect(arr[0].predicate.value).toBe(
      "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
    );
    expect(arr[1].predicate.value).toBe("http://example.org/cartoons#name");
  });

  it("Converts the empty dataset into an empty array", () => {
    const arr = extendedDataset.toArray();
    expect(Array.isArray(arr)).toBe(true);
    expect(arr.length).toBe(0);
  });

  it("Throws a not implemented error for toCononical", () => {
    expect(extendedDataset.toCanonical).toThrow("Method not implemented.");
  })

  it("Streams itself", async () => {
    initializeDataset();
    return new Promise<void>((resolve, reject) => {
      const stream = extendedDataset.toStream();
      const onDataFunc = jest.fn();
      stream.on("data", onDataFunc);
      stream.on("error", reject);
      stream.on("end", () => {
        expect(onDataFunc).toBeCalledTimes(2);
        resolve();
      });
    });
  });

  it("successfully runs toString", () => {
    initializeDataset();
    const stringified = extendedDataset.toString();
    expect(stringified).toBe(
      `<http://example.org/cartoons#Tom> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/cartoons#Cat> .\n<http://example.org/cartoons#Tom> <http://example.org/cartoons#name> "Tom" .\n`
    );
  });

  it("Finds a union", () => {
    initializeDataset();
    const otherDataset = createExtendedDataset([
      quad(
        namedNode("http://example.org/cartoons#Licky"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
      quad(
        namedNode("http://example.org/cartoons#Tom"),
        namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        namedNode("http://example.org/cartoons#Cat")
      ),
    ]);
    const unionDataset = extendedDataset.union(otherDataset);
    expect(unionDataset.size).toBe(3);
    expect(
      unionDataset.has(
        quad(
          namedNode("http://example.org/cartoons#Licky"),
          namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
          namedNode("http://example.org/cartoons#Cat")
        )
      )
    ).toBe(true);
    expect(
      unionDataset.has(
        quad(
          namedNode("http://example.org/cartoons#Tom"),
          namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
          namedNode("http://example.org/cartoons#Cat")
        )
      )
    ).toBe(true);
    expect(
      unionDataset.has(
        quad(
          namedNode("http://example.org/cartoons#Tom"),
          namedNode("http://example.org/cartoons#name"),
          literal("Tom")
        )
      )
    ).toBe(true);
  });
});
