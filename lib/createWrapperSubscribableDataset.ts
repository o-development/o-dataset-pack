import { Parser, ParserOptions } from "n3";
import { Dataset, Quad, DatasetFactory } from "rdf-js";
import createExtendedDataset from "./createExtendedDataset";
import { SubscribableDataset } from "./types";
import WrapperSubscribableDatasetFactory from "./WrapperSubscribableDatasetFactory";

export function createWrapperSubscribableDataset(
  quads?: Dataset | Quad[]
): Dataset;
export function createWrapperSubscribableDataset(
  input: string,
  parserOptions?: ParserOptions
): SubscribableDataset<Quad>;
export default function createWrapperSubscribableDataset(
  input?: unknown,
  parserOptions?: unknown
): Dataset {
  const datasetFactory: DatasetFactory = {
    dataset: (quads?: Dataset | Quad[]): Dataset => {
      return createExtendedDataset(quads);
    },
  };
  const wrapperSubscribableDatasetFactory = new WrapperSubscribableDatasetFactory(
    datasetFactory
  );
  if (typeof input === "string") {
    const parser = new Parser(parserOptions as ParserOptions);
    const quads = parser.parse(input);
    return wrapperSubscribableDatasetFactory.dataset(quads);
  }
  return wrapperSubscribableDatasetFactory.dataset(input as Dataset | Quad[]);
}
