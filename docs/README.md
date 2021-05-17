o-dataset-pack / [Exports](modules.md)

# O Dataset Pack

A library of RDFJS Datasets that have many uses including subscribing to node changes and making transactions on a dataset.

This library follows the [RDFJS spec for a Dataset](https://rdf.js.org/dataset-spec/).

## Installation
```bash
npm install o-dataset-pack
```

## Simple Examples

### ExtendedDataset
```typescript
import { createDataset } from "o-dataset-pack";
import { quad, namedNode } from "@rdfjs/data-model";
const dataset = createDataset();
dataset.add(
  quad(
    namedNode("http://example.org/cartoons#Zuko"),
    namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
    namedNode("http://example.org/cartoons#Firebender")
  )
);
/*
Prints:
<http://example.org/cartoons#Zuko> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/cartoons#Firebender> .
*/
console.log(dataset.toString());
```

### SubscribableDataset
```typescript
import { createSubscribableDataset, DatasetChanges } from "o-dataset-pack";
import { Dataset } from "rdf-js";
import { quad, namedNode, literal } from "@rdfjs/data-model";

const subscribableDataset = createSubscribableDataset([
  quad(
    namedNode("http://example.org/cartoons#Zuko"),
    namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
    namedNode("http://example.org/cartoons#Firebender")
  ),
]);
subscribableDataset.on(
  namedNode("http://example.org/cartoons#Zuko"),
  (currentQuads: Dataset, changes: DatasetChanges) => {
    console.log(currentQuads.toString());
    console.log("--------");
    console.log(changes.added?.toString());
  }
);
/*
Prints:
<http://example.org/cartoons#Zuko> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/cartoons#Firebender> .
<http://example.org/cartoons#Zuko> <http://example.org/cartoons#name> "Zuko" .
--------
<http://example.org/cartoons#Zuko> <http://example.org/cartoons#name> "Zuko" .
*/
subscribableDataset.add(
  quad(
    namedNode("http://example.org/cartoons#Zuko"),
    namedNode("http://example.org/cartoons#name"),
    literal("Zuko")
  )
);
```

## API

See the [full API docs](docs/modules.md).

## ExtendedDataset

The extended dataset implements all the [additional methods](https://rdf.js.org/dataset-spec/#dataset-interface) of the RDFJS dataset spec.

Usage:
```typescript
import { createDataset } from "o-dataset-pack";
import { quad, namedNode, literal } from "@rdfjs/data-model";
// Required for advanced features:
import { dataset as initializeDatasetCore } from "@rdfjs/dataset";
import { ExtendendedDatasetFactory } from "o-dataset-pack";
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
import { createSubscribableDataset, DatasetChanges } from "o-dataset-pack";
import { quad, namedNode, literal } from "@rdfjs/data-model";
import { Dataset } from "rdf-js";

// Create an empty subscribable dataset
const subscribableDataset = createSubscribableDataset();
// Add some initial quads
subscribableDataset.addAll([
  quad(
    namedNode("http://example.org/cartoons#Zuko"),
    namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
    namedNode("http://example.org/cartoons#Firebender"),
    namedNode("http://example.org/cartoons")
  ),
  quad(
    namedNode("http://example.org/cartoons#Zuko"),
    namedNode("http://example.org/cartoons#name"),
    literal("Zuko"),
    namedNode("http://example.org/cartoons")
  ),
]);
// Set up listeners
// Listener that will trigger whenever a quad containing the named
// node "http://example.org/cartoons#Zuko" is added or removed.
subscribableDataset.on(
  namedNode("http://example.org/cartoons#Zuko"),
  (zukoQuads: Dataset, changes: DatasetChanges) => {
    console.log("ZUKO NODE CHANGED ============");
    console.log(zukoQuads.toString());
    console.log("Added Quads:");
    console.log(changes.added?.toString());
    console.log("Removed Quads:");
    console.log(changes.removed?.toString());
    console.log("\n\n");
  }
);
// Listener that will trigger whenever a quad containing the named
// node "http://example.org/cartoons" is added or removed. This is
// useful for keeping track of the cartoons graph.
subscribableDataset.on(
  namedNode("http://example.org/cartoons"),
  (cartoonGraphQuads: Dataset, changes: DatasetChanges) => {
    console.log("CARTOON GRAPH CHANGED ============");
    console.log(cartoonGraphQuads.toString());
    console.log("Added Quads:");
    console.log(changes.added?.toString());
    console.log("Removed Quads:");
    console.log(changes.removed?.toString());
    console.log("\n\n");
  }
);

// Modify the dataset
/*
Prints:
CARTOON GRAPH CHANGED ============
<http://example.org/cartoons#Zuko> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/cartoons#Firebender> <http://example.org/cartoons> .
<http://example.org/cartoons#Zuko> <http://example.org/cartoons#name> "Zuko" <http://example.org/cartoons> .
<http://example.org/cartoons#Katara> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/cartoons#Waterbender> <http://example.org/cartoons> .
<http://example.org/cartoons#Katara> <http://example.org/cartoons#name> "Katara" <http://example.org/cartoons> .

Added Quads:
<http://example.org/cartoons#Katara> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/cartoons#Waterbender> <http://example.org/cartoons> .
<http://example.org/cartoons#Katara> <http://example.org/cartoons#name> "Katara" <http://example.org/cartoons> .

Removed Quads:
undefined
 */
subscribableDataset.addAll([
  quad(
    namedNode("http://example.org/cartoons#Katara"),
    namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
    namedNode("http://example.org/cartoons#Waterbender"),
    namedNode("http://example.org/cartoons")
  ),
  quad(
    namedNode("http://example.org/cartoons#Katara"),
    namedNode("http://example.org/cartoons#name"),
    literal("Katara"),
    namedNode("http://example.org/cartoons")
  ),
]);

/*
Prints:
ZUKO NODE CHANGED ============
<http://example.org/cartoons#Zuko> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/cartoons#Firebender> <http://example.org/cartoons> .
<http://example.org/cartoons#Zuko> <http://example.org/cartoons#name> "Zuko" <http://example.org/cartoons> .
<http://example.org/cartoons#Zuko> <http://example.org/cartoons#hasEnemy> <http://example.org/cartoons#Katara> <http://example.org/cartoons> .
<http://example.org/cartoons#Katara> <http://example.org/cartoons#hasEnemy> <http://example.org/cartoons#Zuko> <http://example.org/cartoons> .

Added Quads:
<http://example.org/cartoons#Katara> <http://example.org/cartoons#hasEnemy> <http://example.org/cartoons#Zuko> <http://example.org/cartoons> .
<http://example.org/cartoons#Zuko> <http://example.org/cartoons#hasEnemy> <http://example.org/cartoons#Katara> <http://example.org/cartoons> .

Removed Quads:
undefined

CARTOON GRAPH CHANGED ============
<http://example.org/cartoons#Zuko> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/cartoons#Firebender> <http://example.org/cartoons> .
<http://example.org/cartoons#Zuko> <http://example.org/cartoons#name> "Zuko" <http://example.org/cartoons> .
<http://example.org/cartoons#Zuko> <http://example.org/cartoons#hasEnemy> <http://example.org/cartoons#Katara> <http://example.org/cartoons> .
<http://example.org/cartoons#Katara> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/cartoons#Waterbender> <http://example.org/cartoons> .
<http://example.org/cartoons#Katara> <http://example.org/cartoons#name> "Katara" <http://example.org/cartoons> .
<http://example.org/cartoons#Katara> <http://example.org/cartoons#hasEnemy> <http://example.org/cartoons#Zuko> <http://example.org/cartoons> .

Added Quads:
<http://example.org/cartoons#Katara> <http://example.org/cartoons#hasEnemy> <http://example.org/cartoons#Zuko> <http://example.org/cartoons> .
<http://example.org/cartoons#Zuko> <http://example.org/cartoons#hasEnemy> <http://example.org/cartoons#Katara> <http://example.org/cartoons> .

Removed Quads:
undefined
*/
subscribableDataset.addAll([
  quad(
    namedNode("http://example.org/cartoons#Katara"),
    namedNode("http://example.org/cartoons#hasEnemy"),
    namedNode("http://example.org/cartoons#Zuko"),
    namedNode("http://example.org/cartoons")
  ),
  quad(
    namedNode("http://example.org/cartoons#Zuko"),
    namedNode("http://example.org/cartoons#hasEnemy"),
    namedNode("http://example.org/cartoons#Katara"),
    namedNode("http://example.org/cartoons")
  ),
]);

// If there are many operation you want to do at once, use transactions.
// An update will not be triggered until the transaction is committed.
const transactionalDataset = subscribableDataset.startTransaction();
// Delete all triples with a "hasEnemy" predicate
transactionalDataset.deleteMatches(
  undefined,
  namedNode("http://example.org/cartoons#hasEnemy"),
  undefined,
  undefined
);
// Add "hasFrient" predicate
transactionalDataset.addAll([
  quad(
    namedNode("http://example.org/cartoons#Katara"),
    namedNode("http://example.org/cartoons#hasFriend"),
    namedNode("http://example.org/cartoons#Zuko"),
    namedNode("http://example.org/cartoons")
  ),
  quad(
    namedNode("http://example.org/cartoons#Zuko"),
    namedNode("http://example.org/cartoons#hasFriend"),
    namedNode("http://example.org/cartoons#Katara"),
    namedNode("http://example.org/cartoons")
  ),
]);
/*
Prints:
ZUKO NODE CHANGED ============
<http://example.org/cartoons#Zuko> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/cartoons#Firebender> <http://example.org/cartoons> .
<http://example.org/cartoons#Zuko> <http://example.org/cartoons#name> "Zuko" <http://example.org/cartoons> .
<http://example.org/cartoons#Zuko> <http://example.org/cartoons#hasFriend> <http://example.org/cartoons#Katara> <http://example.org/cartoons> .
<http://example.org/cartoons#Katara> <http://example.org/cartoons#hasFriend> <http://example.org/cartoons#Zuko> <http://example.org/cartoons> .

Added Quads:
<http://example.org/cartoons#Katara> <http://example.org/cartoons#hasFriend> <http://example.org/cartoons#Zuko> <http://example.org/cartoons> .
<http://example.org/cartoons#Zuko> <http://example.org/cartoons#hasFriend> <http://example.org/cartoons#Katara> <http://example.org/cartoons> .

Removed Quads:
<http://example.org/cartoons#Katara> <http://example.org/cartoons#hasEnemy> <http://example.org/cartoons#Zuko> <http://example.org/cartoons> .
<http://example.org/cartoons#Zuko> <http://example.org/cartoons#hasEnemy> <http://example.org/cartoons#Katara> <http://example.org/cartoons> .

CARTOON GRAPH CHANGED ============
<http://example.org/cartoons#Zuko> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/cartoons#Firebender> <http://example.org/cartoons> .
<http://example.org/cartoons#Zuko> <http://example.org/cartoons#name> "Zuko" <http://example.org/cartoons> .
<http://example.org/cartoons#Zuko> <http://example.org/cartoons#hasFriend> <http://example.org/cartoons#Katara> <http://example.org/cartoons> .
<http://example.org/cartoons#Katara> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/cartoons#Waterbender> <http://example.org/cartoons> .
<http://example.org/cartoons#Katara> <http://example.org/cartoons#name> "Katara" <http://example.org/cartoons> .
<http://example.org/cartoons#Katara> <http://example.org/cartoons#hasFriend> <http://example.org/cartoons#Zuko> <http://example.org/cartoons> .

Added Quads:
<http://example.org/cartoons#Katara> <http://example.org/cartoons#hasFriend> <http://example.org/cartoons#Zuko> <http://example.org/cartoons> .
<http://example.org/cartoons#Zuko> <http://example.org/cartoons#hasFriend> <http://example.org/cartoons#Katara> <http://example.org/cartoons> .

Removed Quads:
<http://example.org/cartoons#Katara> <http://example.org/cartoons#hasEnemy> <http://example.org/cartoons#Zuko> <http://example.org/cartoons> .
<http://example.org/cartoons#Zuko> <http://example.org/cartoons#hasEnemy> <http://example.org/cartoons#Katara> <http://example.org/cartoons> .
*/
transactionalDataset.commit();
```

## Liscense
MIT
