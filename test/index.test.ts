import {
  createDataset,
  createSubscribableDataset,
  createDatasetFactory,
  createSubscribableDatasetFactory,
  createDatasetFromSerializedInput,
  serializedToDataset,
  serializedToSubscribableDataset,
  ExtendedDataset,
  ExtendedDatasetFactory,
  ProxyTransactionalDataset,
  WrapperSubscribableDataset,
  WrapperSubscribableDatasetFactory,
} from "../lib";

describe("Exports", () => {
  it("Has all exports", () => {
    expect(createDataset);
    expect(createSubscribableDataset);
    expect(ExtendedDataset);
    expect(ExtendedDatasetFactory);
    expect(ProxyTransactionalDataset);
    expect(WrapperSubscribableDataset);
    expect(WrapperSubscribableDatasetFactory);
    expect(serializedToSubscribableDataset);
    expect(serializedToDataset);
    expect(createDatasetFactory);
    expect(createSubscribableDatasetFactory);
    expect(createDatasetFromSerializedInput);
  });
});
