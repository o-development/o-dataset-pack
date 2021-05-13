import { Dataset, Quad, DatasetFactory } from "rdf-js";
import createExtendedDataset from "./createExtendedDataset";
import WrapperSubscribableDatasetFactory from "./WrapperSubscribableDatasetFactory";

export default function createWrapperSubscribableDataset(
  quads?: Dataset | Quad[]
): Dataset {
  const datasetFactory: DatasetFactory = {
    dataset: (quads?: Dataset | Quad[]): Dataset => {
      return createExtendedDataset(quads);
    },
  };
  const wrapperSubscribableDatasetFactory = new WrapperSubscribableDatasetFactory(
    datasetFactory
  );
  return wrapperSubscribableDatasetFactory.dataset(quads);
}
