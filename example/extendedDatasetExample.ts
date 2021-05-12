import { createDataset } from "../lib";
import { quad, namedNode, literal } from "@rdfjs/data-model";
// Required for advanced features:
import { dataset as initializeDatasetCore } from "@rdfjs/dataset";
import { ExtendendedDatasetFactory } from "../lib";
import { Dataset, Quad, DatasetCoreFactory, DatasetCore } from "rdf-js";

/**
 * Create a dataset with default settings
 */
const defaultDataset = createDataset();

/**
 * Create a dataset with default settings and initialized values
 */
const initializedQuads = [
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
];
const defaultDataset2 = createDataset(initializedQuads);

/**
 * (Advanced Feature) Create a dataset by injecting a chosen datasetCore and datasetCoreFactory
 */
const datasetFactory: DatasetCoreFactory = {
  dataset: (quads?: Dataset | Quad[]): DatasetCore => {
    // Bad typings. These will be fixed https://github.com/rdfjs/types/pull/11
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return initializeDatasetCore(quads);
  },
};
const extendedDatasetFactory = new ExtendendedDatasetFactory(datasetFactory);
const customDataset = extendedDatasetFactory.dataset(initializedQuads);

/**
 * Do all the methods of the RDFJS Dataset interface. For a full list of methods, go to
 * https://rdf.js.org/dataset-spec/#data-interfaces
 */
defaultDataset.add(
  quad(
    namedNode("http://example.org/cartoons#Miuki"),
    namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
    namedNode("http://example.org/cartoons#Cat")
  )
);
const combinedDataset = defaultDataset.union(defaultDataset2);
const differenceDataset = combinedDataset.difference(customDataset);
// Prints true because "defaultDataset2" and "customDataset" have equal values
// combinedDataset = defaultDataset ∪ defaultDataset2
// differenceDatasset = defaultDataset \ customDataset
// Therefore differenceDataset == defaultDataset
console.log(differenceDataset.equals(defaultDataset));
