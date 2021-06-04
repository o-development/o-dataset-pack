import { createDataset } from "../lib";
import { quad, namedNode } from "@rdfjs/data-model";

describe("createExtendedDataset", () => {
  it("creates a dataset when give another datset", () => {
    const dataset1 = createDataset([
      quad(namedNode("a"), namedNode("b"), namedNode("c")),
    ]);
    const dataset2 = createDataset(dataset1);
    expect(dataset1.equals(dataset2)).toBe(true);
  });
});
