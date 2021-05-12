import { namedNode, literal, quad } from "@rdfjs/dataset";
import { BaseQuad, Dataset } from "rdf-js";
import { createExtendedDataset } from "../lib/createExtendedDataset";

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

  it("successfully runs toString", () => {
    initializeDataset();
    const stringified = extendedDataset.toString();
    expect(stringified).toBe(
      `<http://example.org/cartoons#Tom> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/cartoons#Cat> .\n<http://example.org/cartoons#Tom> <http://example.org/cartoons#name> "Tom" .\n`
    );
  });

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
});
