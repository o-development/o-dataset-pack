import { Dataset, Quad, DatasetCoreFactory, DatasetCore } from "rdf-js";
import ExtendedDatasetFactory from "./ExtendedDatasetFactory";
import { dataset as initializeDatasetCore } from "@rdfjs/dataset";
import { Parser, ParserOptions } from "n3";

export function createExtendedDataset(quads?: Dataset | Quad[]): Dataset;
export function createExtendedDataset(
  input: string,
  parserOptions?: ParserOptions
): Dataset;
export default function createExtendedDataset(
  input?: unknown,
  parserOptions?: unknown
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
  if (typeof input === "string") {
    const parser = new Parser(parserOptions as ParserOptions);
    const quads = parser.parse(input);
    return extendedDatasetFactory.dataset(quads);
  }
  return extendedDatasetFactory.dataset(input as Dataset | Quad[]);
}
