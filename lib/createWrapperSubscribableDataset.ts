import { Dataset, DatasetFactory, Quad } from "@rdfjs/types";
import { WrapperSubscribableDataset } from ".";
import createExtendedDataset from "./createExtendedDataset";
import WrapperSubscribableDatasetFactory from "./WrapperSubscribableDatasetFactory";

/**
 * Creates a dataset factory that generates a SubscribableDataset
 * @returns DatasetFactory for SubscribableDataset
 */
export function createWrapperSubscribableDatasetFactory(): WrapperSubscribableDatasetFactory<Quad> {
  const datasetFactory: DatasetFactory<Quad> = {
    dataset: (quads?: Dataset<Quad> | Quad[]): Dataset<Quad> => {
      return createExtendedDataset(quads);
    },
  };
  return new WrapperSubscribableDatasetFactory(datasetFactory);
}

/**
 * Creates a SubscribableDataset
 * @param quads: A dataset or array of Quads to initialize the dataset.
 * @returns Dataset
 */
export default function createWrapperSubscribableDataset(
  quads?: Dataset<Quad> | Quad[]
): WrapperSubscribableDataset<Quad> {
  const wrapperSubscribableDatasetFactory = createWrapperSubscribableDatasetFactory();
  return wrapperSubscribableDatasetFactory.dataset(quads);
}
