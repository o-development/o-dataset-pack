import { Dataset, Quad, DatasetCoreFactory, DatasetCore } from "rdf-js";
import ExtendedDatasetFactory from "./ExtendedDatasetFactory";
import { dataset as initializeDatasetCore } from "@rdfjs/dataset";

export default function createExtendedDataset(
  quads?: Dataset | Quad[]
): Dataset {
  const datasetFactory: DatasetCoreFactory = {
    dataset: (quads?: Dataset | Quad[]): DatasetCore => {
      // Bad typings. These will be fixed
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return initializeDatasetCore(quads);
    },
  };
  const extendedDatasetFactory = new ExtendedDatasetFactory(datasetFactory);
  return extendedDatasetFactory.dataset(quads);
}
