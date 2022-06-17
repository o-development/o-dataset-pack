[o-dataset-pack](../README.md) / [Exports](../modules.md) / WrapperSubscribableDatasetFactory

# Class: WrapperSubscribableDatasetFactory<InAndOutQuad\>

A DatasetFactory that returns a WrapperSubscribableDataset given a generic DatasetFactory.

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

Defined in: [lib/WrapperSubscribableDatasetFactory.ts:10](https://github.com/o-development/o-dataset-pack/blob/2ac25ff/lib/WrapperSubscribableDatasetFactory.ts#L10)

## Properties

### datasetFactory

• `Private` **datasetFactory**: *DatasetFactory*<InAndOutQuad, InAndOutQuad, Dataset<InAndOutQuad, InAndOutQuad\>\>

Defined in: [lib/WrapperSubscribableDatasetFactory.ts:10](https://github.com/o-development/o-dataset-pack/blob/2ac25ff/lib/WrapperSubscribableDatasetFactory.ts#L10)

## Methods

### dataset

▸ **dataset**(`quads?`: *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[]): [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads?` | *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[] |

**Returns:** [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Implementation of: DatasetFactory.dataset

Defined in: [lib/WrapperSubscribableDatasetFactory.ts:15](https://github.com/o-development/o-dataset-pack/blob/2ac25ff/lib/WrapperSubscribableDatasetFactory.ts#L15)
