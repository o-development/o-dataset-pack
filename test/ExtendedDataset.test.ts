import { createDataset } from "../lib";
import testDataset from "./dataset.testHelper";

describe("ExtendedDataset", () => {
  testDataset({
    dataset: createDataset,
  });
});
