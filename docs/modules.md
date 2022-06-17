[o-dataset-pack](README.md) / Exports

# o-dataset-pack

## Table of contents

### Classes

- [ExtendedDataset](classes/extendeddataset.md)
- [ExtendedDatasetFactory](classes/extendeddatasetfactory.md)
- [ProxyTransactionalDataset](classes/proxytransactionaldataset.md)
- [WrapperSubscribableDataset](classes/wrappersubscribabledataset.md)
- [WrapperSubscribableDatasetFactory](classes/wrappersubscribabledatasetfactory.md)

### Interfaces

- [BulkEditableDataset](interfaces/bulkeditabledataset.md)
- [DatasetChanges](interfaces/datasetchanges.md)
- [SubscribableDataset](interfaces/subscribabledataset.md)
- [TransactionalDataset](interfaces/transactionaldataset.md)

### Type aliases

- [SubscribableTerms](modules.md#subscribableterms)
- [nodeEventListener](modules.md#nodeeventlistener)

### Functions

- [createDataset](modules.md#createdataset)
- [createDatasetFactory](modules.md#createdatasetfactory)
- [createDatasetFromSerializedInput](modules.md#createdatasetfromserializedinput)
- [createSubscribableDataset](modules.md#createsubscribabledataset)
- [createSubscribableDatasetFactory](modules.md#createsubscribabledatasetfactory)
- [serializedToDataset](modules.md#serializedtodataset)
- [serializedToSubscribableDataset](modules.md#serializedtosubscribabledataset)

## Type aliases

### SubscribableTerms

Ƭ **SubscribableTerms**: NamedNode \| BlankNode \| DefaultGraph

Types of nodes a subscribable dataset can subscribe to

Defined in: [lib/types.ts:19](https://github.com/o-development/o-dataset-pack/blob/5e6d39e/lib/types.ts#L19)

___

### nodeEventListener

Ƭ **nodeEventListener**<InAndOutQuad\>: (`dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>, `changes`: [*DatasetChanges*](interfaces/datasetchanges.md)<InAndOutQuad\>) => *void*

An event listeners for nodes

#### Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `InAndOutQuad` | BaseQuad | BaseQuad |

#### Type declaration

▸ (`dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>, `changes`: [*DatasetChanges*](interfaces/datasetchanges.md)<InAndOutQuad\>): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataset` | *Dataset*<InAndOutQuad, InAndOutQuad\> |
| `changes` | [*DatasetChanges*](interfaces/datasetchanges.md)<InAndOutQuad\> |

**Returns:** *void*

Defined in: [lib/types.ts:24](https://github.com/o-development/o-dataset-pack/blob/5e6d39e/lib/types.ts#L24)

## Functions

### createDataset

▸ **createDataset**(`quads?`: *Dataset*<Quad\> \| Quad[]): [*ExtendedDataset*](classes/extendeddataset.md)<Quad\>

Creates an ExtendedDataset

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads?` | *Dataset*<Quad\> \| Quad[] |

**Returns:** [*ExtendedDataset*](classes/extendeddataset.md)<Quad\>

Dataset

Defined in: [lib/createExtendedDataset.ts:26](https://github.com/o-development/o-dataset-pack/blob/5e6d39e/lib/createExtendedDataset.ts#L26)

___

### createDatasetFactory

▸ **createDatasetFactory**(): [*ExtendedDatasetFactory*](classes/extendeddatasetfactory.md)<Quad\>

Creates a dataset factory that generates ExtendedDatasets

**Returns:** [*ExtendedDatasetFactory*](classes/extendeddatasetfactory.md)<Quad\>

DatasetFactory

Defined in: [lib/createExtendedDataset.ts:10](https://github.com/o-development/o-dataset-pack/blob/5e6d39e/lib/createExtendedDataset.ts#L10)

___

### createDatasetFromSerializedInput

▸ **createDatasetFromSerializedInput**<ReturnDataset\>(`datasetFactory`: *DatasetFactory*<Quad\>, `data`: *string*, `options?`: ParserOptions): *Promise*<ReturnDataset\>

Creates a dataset with a string input that could be SON-LD, Turtle, N-Triples, TriG, RDF*, or N3.

#### Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `ReturnDataset` | *Dataset*<Quad, Quad, ReturnDataset\> | *Dataset*<Quad, Quad\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `datasetFactory` | *DatasetFactory*<Quad\> | A datasetFactory that will initialize a returned dataset.\ |
| `data` | *string* | A string representation of RDF Data in JSON-LD, Turtle, N-Triples, TriG, RDF*, or N3. |
| `options?` | ParserOptions | Parser options: {   format?: string;   factory?: RDF.DataFactory;   baseIRI?: string;   blankNodePrefix?: string; } |

**Returns:** *Promise*<ReturnDataset\>

A dataset

Defined in: [lib/createDatasetFromSerializedInput.ts:18](https://github.com/o-development/o-dataset-pack/blob/5e6d39e/lib/createDatasetFromSerializedInput.ts#L18)

___

### createSubscribableDataset

▸ **createSubscribableDataset**(`quads?`: *Dataset*<Quad\> \| Quad[]): [*WrapperSubscribableDataset*](classes/wrappersubscribabledataset.md)<Quad\>

Creates a SubscribableDataset

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads?` | *Dataset*<Quad\> \| Quad[] |

**Returns:** [*WrapperSubscribableDataset*](classes/wrappersubscribabledataset.md)<Quad\>

Dataset

Defined in: [lib/createWrapperSubscribableDataset.ts:24](https://github.com/o-development/o-dataset-pack/blob/5e6d39e/lib/createWrapperSubscribableDataset.ts#L24)

___

### createSubscribableDatasetFactory

▸ **createSubscribableDatasetFactory**(): [*WrapperSubscribableDatasetFactory*](classes/wrappersubscribabledatasetfactory.md)<Quad\>

Creates a dataset factory that generates a SubscribableDataset

**Returns:** [*WrapperSubscribableDatasetFactory*](classes/wrappersubscribabledatasetfactory.md)<Quad\>

DatasetFactory for SubscribableDataset

Defined in: [lib/createWrapperSubscribableDataset.ts:10](https://github.com/o-development/o-dataset-pack/blob/5e6d39e/lib/createWrapperSubscribableDataset.ts#L10)

___

### serializedToDataset

▸ **serializedToDataset**(`data`: *string*, `options?`: ParserOptions): *Promise*<[*ExtendedDataset*](classes/extendeddataset.md)<Quad\>\>

Creates an ExtendedDataset with a string input that could be JSON-LD, Turtle, N-Triples, TriG, RDF*, or N3.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | *string* | A string representation of RDF Data in JSON-LD, Turtle, N-Triples, TriG, RDF*, or N3. |
| `options?` | ParserOptions | Parser options: {   format?: string;   factory?: RDF.DataFactory;   baseIRI?: string;   blankNodePrefix?: string; } |

**Returns:** *Promise*<[*ExtendedDataset*](classes/extendeddataset.md)<Quad\>\>

A dataset

Defined in: [lib/createExtendedDatasetFromSerializedInput.ts:18](https://github.com/o-development/o-dataset-pack/blob/5e6d39e/lib/createExtendedDatasetFromSerializedInput.ts#L18)

___

### serializedToSubscribableDataset

▸ **serializedToSubscribableDataset**(`data`: *string*, `options?`: ParserOptions): *Promise*<[*WrapperSubscribableDataset*](classes/wrappersubscribabledataset.md)<Quad\>\>

Creates a SubscribableDataset with a string input that could be JSON-LD, Turtle, N-Triples, TriG, RDF*, or N3.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | *string* | A string representation of RDF Data in JSON-LD, Turtle, N-Triples, TriG, RDF*, or N3. |
| `options?` | ParserOptions | Parser options: {   format?: string;   factory?: RDF.DataFactory;   baseIRI?: string;   blankNodePrefix?: string; } |

**Returns:** *Promise*<[*WrapperSubscribableDataset*](classes/wrappersubscribabledataset.md)<Quad\>\>

A dataset

Defined in: [lib/createWrapperSubscribableDatasetFromSerializedInput.ts:18](https://github.com/o-development/o-dataset-pack/blob/5e6d39e/lib/createWrapperSubscribableDatasetFromSerializedInput.ts#L18)
