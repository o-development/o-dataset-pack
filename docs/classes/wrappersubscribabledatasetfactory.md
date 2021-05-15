[subscribable-dataset](../README.md) / [Exports](../modules.md) / WrapperSubscribableDatasetFactory

# Class: WrapperSubscribableDatasetFactory<InAndOutQuad\>

## Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `InAndOutQuad` | BaseQuad | BaseQuad |

## Implements

- *DatasetFactory*<InAndOutQuad, InAndOutQuad\>

## Table of contents

### Constructors

- [constructor](wrappersubscribabledatasetfactory.md#constructor)

### Properties

- [datasetFactory](wrappersubscribabledatasetfactory.md#datasetfactory)

### Methods

- [dataset](wrappersubscribabledatasetfactory.md#dataset)

## Constructors

### constructor

\+ **new WrapperSubscribableDatasetFactory**<InAndOutQuad\>(`datasetFactory`: *DatasetFactory*<InAndOutQuad, InAndOutQuad, Dataset<InAndOutQuad, InAndOutQuad\>\>): [*WrapperSubscribableDatasetFactory*](wrappersubscribabledatasetfactory.md)<InAndOutQuad\>

#### Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `InAndOutQuad` | BaseQuad | BaseQuad |

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetFactory` | *DatasetFactory*<InAndOutQuad, InAndOutQuad, Dataset<InAndOutQuad, InAndOutQuad\>\> |

**Returns:** [*WrapperSubscribableDatasetFactory*](wrappersubscribabledatasetfactory.md)<InAndOutQuad\>

Defined in: [lib/WrapperSubscribableDatasetFactory.ts:8](https://github.com/o-development/subscribable-dataset/blob/d03a0f0/lib/WrapperSubscribableDatasetFactory.ts#L8)

## Properties

### datasetFactory

• `Private` **datasetFactory**: *DatasetFactory*<InAndOutQuad, InAndOutQuad, Dataset<InAndOutQuad, InAndOutQuad\>\>

Defined in: [lib/WrapperSubscribableDatasetFactory.ts:8](https://github.com/o-development/subscribable-dataset/blob/d03a0f0/lib/WrapperSubscribableDatasetFactory.ts#L8)

## Methods

### dataset

▸ **dataset**(`quads?`: *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[]): [*SubscribableDataset*](../interfaces/subscribabledataset.md)<InAndOutQuad\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads?` | *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[] |

**Returns:** [*SubscribableDataset*](../interfaces/subscribabledataset.md)<InAndOutQuad\>

Implementation of: DatasetFactory.dataset

Defined in: [lib/WrapperSubscribableDatasetFactory.ts:13](https://github.com/o-development/subscribable-dataset/blob/d03a0f0/lib/WrapperSubscribableDatasetFactory.ts#L13)
