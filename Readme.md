# Subscribable Dataset

A library for Datasets that allow you to subscribe to updates having to do with a particular node

This library follows the [RDFJS spec for a Dataset](https://rdf.js.org/dataset-spec/). It is implemented with [Dataset-Indexed](https://www.npmjs.com/package/rdf-dataset-indexed?activeTab=readme).

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