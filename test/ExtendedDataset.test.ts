import { quad, namedNode, literal } from "@rdfjs/dataset";
import { ExtendedDataset } from "../lib/ExtendedDataset";

describe("ExtendedDataset", () => {
  let extendedDataset: ExtendedDataset;

  beforeEach(() => {
    extendedDataset = new ExtendedDataset();
  });

  const initializeDataset = () => {
    extendedDataset = new ExtendedDataset([
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
    console.log(stringified);
    expect(stringified).toBe("");
  });
});
