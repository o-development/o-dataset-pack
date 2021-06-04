import { serializedToDataset } from "../lib";
import { turtleData, jsonLdData } from "./sampleData";

describe("createExtendedDatasetFromSerializedInput", () => {
  it("creates a dataset with turtle", async () => {
    const dataset = await serializedToDataset(turtleData);
    expect(dataset.size).toBe(9);
  });

  it("creates a dataset with json-ld", async () => {
    const dataset = await serializedToDataset(JSON.stringify(jsonLdData), {
      format: "application/json-ld",
    });
    expect(dataset.size).toBe(9);
  });
});