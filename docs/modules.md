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
- [createSubscribableDataset](modules.md#createsubscribabledataset)

## Type aliases

### SubscribableTerms

Ƭ **SubscribableTerms**: NamedNode \| BlankNode \| DefaultGraph

Types of nodes a subscribable dataset can subscribe to

Defined in: [lib/types.ts:13](https://github.com/o-development/subscribable-dataset/blob/4db7246/lib/types.ts#L13)

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

Defined in: [lib/types.ts:18](https://github.com/o-development/subscribable-dataset/blob/4db7246/lib/types.ts#L18)

## Functions

### createDataset

▸ **createDataset**(`input?`: *unknown*, `parserOptions?`: *unknown*): Dataset

#### Parameters

| Name | Type |
| :------ | :------ |
| `input?` | *unknown* |
| `parserOptions?` | *unknown* |

**Returns:** Dataset

Defined in: [lib/createExtendedDataset.ts:11](https://github.com/o-development/subscribable-dataset/blob/4db7246/lib/createExtendedDataset.ts#L11)

___

### createSubscribableDataset

▸ **createSubscribableDataset**(`input?`: *unknown*, `parserOptions?`: *unknown*): Dataset

#### Parameters

| Name | Type |
| :------ | :------ |
| `input?` | *unknown* |
| `parserOptions?` | *unknown* |

**Returns:** Dataset

Defined in: [lib/createWrapperSubscribableDataset.ts:14](https://github.com/o-development/subscribable-dataset/blob/4db7246/lib/createWrapperSubscribableDataset.ts#L14)
