# O Dataset Pack

A library of RDFJS Datasets that have many uses

This library follows the [RDFJS spec for a Dataset](https://rdf.js.org/dataset-spec/). It is implemented with [Dataset-Indexed](https://www.npmjs.com/package/rdf-dataset-indexed?activeTab=readme).

## ExtendedDataset

The extended dataset implements all the [additional methods](https://rdf.js.org/dataset-spec/#dataset-interface) of the RDFJS dataset spec.

Usage:
```typescript
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

```

## SubscribableDataset

```typescript
import { SubscribableDataset } from "subscribable-dataset";
import { namedNode, quad, literal } from "@rdfjs/data-model";

// Create a Dataset
const subscribableDataset = new SubscribableDataset();

// Subscribe to a node. Pass a term of type NamedNode, Blank Node, or
// DefaultGraph. When a quad is added or removed from the dataset and
// that quad references the node in some way, the provided listener
// function will be triggered.
subscribableDataset.on(
  namedNode("https://example.com/person1"),
  (
    dataset: DatasetIndexed,
    changed: DatasetChanges
  ) => {
    // Logs all the triples that currently contain the subscribed node.
    console.log("DATASET:");
    dataset.forEach((quad) => console.log(
      `${quad.subject.value} ${quad.predicate.value} ${quad.object.value} ${quad.graph.value}`
    ));

    console.log("ADDED:");
    // Logs all the triples related to the subscribed node that were added to the dataset
    changed.added?.forEach((quad) => console.log(
      `${quad.subject.value} ${quad.predicate.value} ${quad.object.value} ${quad.graph.value}`
    ));

    console.log("REMOVED:");
    // Logs all the triples related to the subscribed node that were removed from the dataset
    changed.removed?.forEach((quad) => console.log(
      `${quad.subject.value} ${quad.predicate.value} ${quad.object.value} ${quad.graph.value}`
    ));
  }

  // Given the subscription above, this will cause the following to be logged
  // DATASET:
  // https://example.com/Celia http://xmlns.com/foaf/0.1/name Celia Torlien
  // ADDED:
  // https://example.com/Celia http://xmlns.com/foaf/0.1/name Celia Torlien
  // REMOVED
  // ________
  subscribableDataset.add(
    quad(
      namedNode("https://example.com/Celia"),
      namedNode("http://xmlns.com/foaf/0.1/name"),
      literal("Celia Torlien")
    );
  );

  // Given the subscription above, this will cause the following to be logged
  // DATASET:
  // https://example.com/Celia http://xmlns.com/foaf/0.1/name Celia Torlien
  // https://example.com/Etus http://xmlns.com/foaf/0.1/knows https://example.com/Celia
  // ADDED:
  // https://example.com/Etus http://xmlns.com/foaf/0.1/knows https://example.com/Celia
  // REMOVED
  // ________
  subscribableDataset.add(
    quad(
      namedNode("https://example.com/Etus"),
      namedNode("http://xmlns.com/foaf/0.1/knows"),
      namedNode("https://example.com/Celia")
    );
  );
```