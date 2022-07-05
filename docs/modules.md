[o-dataset-pack](README.md) / Exports

# o-dataset-pack

## Table of contents

### Classes

- [ExtendedDataset](classes/ExtendedDataset.md)
- [ExtendedDatasetFactory](classes/ExtendedDatasetFactory.md)
- [ProxyTransactionalDataset](classes/ProxyTransactionalDataset.md)
- [WrapperSubscribableDataset](classes/WrapperSubscribableDataset.md)
- [WrapperSubscribableDatasetFactory](classes/WrapperSubscribableDatasetFactory.md)

### Interfaces

- [BulkEditableDataset](interfaces/BulkEditableDataset.md)
- [DatasetChanges](interfaces/DatasetChanges.md)
- [SubscribableDataset](interfaces/SubscribableDataset.md)
- [TransactionalDataset](interfaces/TransactionalDataset.md)

### Type Aliases

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

## Type Aliases

### SubscribableTerms

Ƭ **SubscribableTerms**: `NamedNode` \| `BlankNode` \| `DefaultGraph`

Types of nodes a subscribable dataset can subscribe to

#### Defined in

[lib/types.ts:19](https://github.com/o-development/o-dataset-pack/blob/e8a7e34/lib/types.ts#L19)

___

### nodeEventListener

Ƭ **nodeEventListener**<`InAndOutQuad`\>: (`dataset`: `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>, `changes`: [`DatasetChanges`](interfaces/DatasetChanges.md)<`InAndOutQuad`\>) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InAndOutQuad` | extends `BaseQuad` = `BaseQuad` |

#### Type declaration

▸ (`dataset`, `changes`): `void`

An event listeners for nodes

##### Parameters

| Name | Type |
| :------ | :------ |
| `dataset` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> |
| `changes` | [`DatasetChanges`](interfaces/DatasetChanges.md)<`InAndOutQuad`\> |

##### Returns

`void`

#### Defined in

[lib/types.ts:24](https://github.com/o-development/o-dataset-pack/blob/e8a7e34/lib/types.ts#L24)

## Functions

### createDataset

▸ **createDataset**(`quads?`): [`ExtendedDataset`](classes/ExtendedDataset.md)<`Quad`\>

Creates an ExtendedDataset

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads?` | `Quad`[] \| `Dataset`<`Quad`, `Quad`\> |

#### Returns

[`ExtendedDataset`](classes/ExtendedDataset.md)<`Quad`\>

Dataset

___

### createDatasetFactory

▸ **createDatasetFactory**(): [`ExtendedDatasetFactory`](classes/ExtendedDatasetFactory.md)<`Quad`\>

Creates a dataset factory that generates ExtendedDatasets

#### Returns

[`ExtendedDatasetFactory`](classes/ExtendedDatasetFactory.md)<`Quad`\>

DatasetFactory

___

### createDatasetFromSerializedInput

▸ **createDatasetFromSerializedInput**<`ReturnDataset`\>(`datasetFactory`, `data`, `options?`): `Promise`<`ReturnDataset`\>

Creates a dataset with a string input that could be SON-LD, Turtle, N-Triples, TriG, RDF*, or N3.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ReturnDataset` | extends `Dataset`<`Quad`, `Quad`, `ReturnDataset`\> = `Dataset`<`Quad`, `Quad`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `datasetFactory` | `DatasetFactory`<`Quad`, `Quad`, `Dataset`<`Quad`, `Quad`\>\> | A datasetFactory that will initialize a returned dataset.\ |
| `data` | `string` | A string representation of RDF Data in JSON-LD, Turtle, N-Triples, TriG, RDF*, or N3. |
| `options?` | `ParserOptions` | Parser options: {   format?: string;   factory?: RDF.DataFactory;   baseIRI?: string;   blankNodePrefix?: string; } |

#### Returns

`Promise`<`ReturnDataset`\>

A dataset

___

### createSubscribableDataset

▸ **createSubscribableDataset**(`quads?`): [`WrapperSubscribableDataset`](classes/WrapperSubscribableDataset.md)<`Quad`\>

Creates a SubscribableDataset

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads?` | `Quad`[] \| `Dataset`<`Quad`, `Quad`\> |

#### Returns

[`WrapperSubscribableDataset`](classes/WrapperSubscribableDataset.md)<`Quad`\>

Dataset

___

### createSubscribableDatasetFactory

▸ **createSubscribableDatasetFactory**(): [`WrapperSubscribableDatasetFactory`](classes/WrapperSubscribableDatasetFactory.md)<`Quad`\>

Creates a dataset factory that generates a SubscribableDataset

#### Returns

[`WrapperSubscribableDatasetFactory`](classes/WrapperSubscribableDatasetFactory.md)<`Quad`\>

DatasetFactory for SubscribableDataset

___

### serializedToDataset

▸ **serializedToDataset**(`data`, `options?`): `Promise`<[`ExtendedDataset`](classes/ExtendedDataset.md)<`Quad`\>\>

Creates an ExtendedDataset with a string input that could be JSON-LD, Turtle, N-Triples, TriG, RDF*, or N3.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | A string representation of RDF Data in JSON-LD, Turtle, N-Triples, TriG, RDF*, or N3. |
| `options?` | `ParserOptions` | Parser options: {   format?: string;   factory?: RDF.DataFactory;   baseIRI?: string;   blankNodePrefix?: string; } |

#### Returns

`Promise`<[`ExtendedDataset`](classes/ExtendedDataset.md)<`Quad`\>\>

A dataset

___

### serializedToSubscribableDataset

▸ **serializedToSubscribableDataset**(`data`, `options?`): `Promise`<[`WrapperSubscribableDataset`](classes/WrapperSubscribableDataset.md)<`Quad`\>\>

Creates a SubscribableDataset with a string input that could be JSON-LD, Turtle, N-Triples, TriG, RDF*, or N3.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | A string representation of RDF Data in JSON-LD, Turtle, N-Triples, TriG, RDF*, or N3. |
| `options?` | `ParserOptions` | Parser options: {   format?: string;   factory?: RDF.DataFactory;   baseIRI?: string;   blankNodePrefix?: string; } |

#### Returns

`Promise`<[`WrapperSubscribableDataset`](classes/WrapperSubscribableDataset.md)<`Quad`\>\>

A dataset
