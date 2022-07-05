import { Dataset, DatasetFactory, Quad } from "@rdfjs/types";
import { JsonLdDocument, toRDF } from "jsonld";
import { Parser, ParserOptions } from "n3";

/**
 * Creates a dataset with a string input that could be SON-LD, Turtle, N-Triples, TriG, RDF*, or N3.
 * @param datasetFactory A datasetFactory that will initialize a returned dataset.\
 * @param data A string representation of RDF Data in JSON-LD, Turtle, N-Triples, TriG, RDF*, or N3.
 * @param options Parser options: {
 *   format?: string;
 *   factory?: RDF.DataFactory;
 *   baseIRI?: string;
 *   blankNodePrefix?: string;
 * }
 * @returns A dataset
 */
export default async function createDatasetFromSerializedInput<
  ReturnDataset extends Dataset = Dataset
>(
  datasetFactory: DatasetFactory<Quad>,
  data: string,
  options?: ParserOptions
): Promise<ReturnDataset> {
  let dataToParse: string = data;
  let optionsToUse: ParserOptions = options || {};
  // JSON-LD Parsing
  if (options && options.format === "application/json-ld") {
    // The typings on this library are incorrect
    dataToParse = ((await toRDF(JSON.parse(data) as JsonLdDocument, {
      format: "application/n-quads",
    })) as unknown) as string;
    optionsToUse = { format: "application/n-quads" };
  }
  // N3 Parsing
  const parser = new Parser(optionsToUse as ParserOptions);
  const quads = parser.parse(dataToParse);
  return (datasetFactory.dataset(quads) as unknown) as ReturnDataset;
}
