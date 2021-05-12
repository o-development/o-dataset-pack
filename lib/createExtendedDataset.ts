import { Dataset, Quad, DatasetCoreFactory, DatasetCore } from "rdf-js";
import { ExtendendedDatasetFactory } from "./ExtendedDatasetFactory";
import { dataset as initializeDatasetCore } from "@rdfjs/dataset";

export function createExtendedDataset(quads?: Dataset | Quad[]): Dataset {
  const datasetFactory: DatasetCoreFactory = {
    dataset: (quads?: Dataset | Quad[]): DatasetCore => {
      // Bad typings. These will be fixed
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return initializeDatasetCore(quads);
    },
  };
  const extendedDatasetFactory = new ExtendendedDatasetFactory(datasetFactory);
  return extendedDatasetFactory.dataset(quads);
}
