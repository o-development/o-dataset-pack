import { ParserOptions } from "n3";
import { Quad } from "@rdfjs/types";
import createDatasetFromSerializedInput from "./createDatasetFromSerializedInput";
import { createExtendedDatasetFactory } from "./createExtendedDataset";
import ExtendedDataset from "./ExtendedDataset";

/**
 * Creates an ExtendedDataset with a string input that could be JSON-LD, Turtle, N-Triples, TriG, RDF*, or N3.
 * @param data A string representation of RDF Data in JSON-LD, Turtle, N-Triples, TriG, RDF*, or N3.
 * @param options Parser options: {
 *   format?: string;
 *   factory?: RDF.DataFactory;
 *   baseIRI?: string;
 *   blankNodePrefix?: string;
 * }
 * @returns A dataset
 */
export default async function createExtendedDatasetFromSerializedInput(
  data: string,
  options?: ParserOptions
): Promise<ExtendedDataset<Quad>> {
  const datasetFactory = createExtendedDatasetFactory();
  return createDatasetFromSerializedInput<ExtendedDataset<Quad>>(
    datasetFactory,
    data,
    options
  );
}
