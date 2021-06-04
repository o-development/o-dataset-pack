import { Dataset, DatasetFactory, Quad } from "@rdfjs/types";
import { JsonLdParser } from "jsonld-streaming-parser";
import { Readable } from "stream";
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
  // JSON-LD Parsing
  if (options && options.format === "application/json-ld") {
    return new Promise((resolve, reject) => {
      const dataset: ReturnDataset = (datasetFactory.dataset() as unknown) as ReturnDataset;
      const jsonLdParser = new JsonLdParser();
      Readable.from(data)
        .pipe(jsonLdParser)
        .on("data", (quad) => {
          dataset.add(quad);
        })
        .on("error", reject)
        .on("end", () => resolve(dataset));
    });
  }
  // N3 Parsing
  const parser = new Parser(options as ParserOptions);
  const quads = parser.parse(data);
  return (datasetFactory.dataset(quads) as unknown) as ReturnDataset;
}
