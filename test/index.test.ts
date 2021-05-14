import {
  createDataset,
  createSubscribableDataset,
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
  });
});
