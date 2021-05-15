[subscribable-dataset](../README.md) / [Exports](../modules.md) / ExtendedDatasetFactory

# Class: ExtendedDatasetFactory<InAndOutQuad\>

## Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `InAndOutQuad` | BaseQuad | BaseQuad |

## Implements

- *DatasetFactory*<InAndOutQuad, InAndOutQuad\>

## Table of contents

### Constructors

- [constructor](extendeddatasetfactory.md#constructor)

### Properties

- [datasetCoreFactory](extendeddatasetfactory.md#datasetcorefactory)

### Methods

- [dataset](extendeddatasetfactory.md#dataset)

## Constructors

### constructor

\+ **new ExtendedDatasetFactory**<InAndOutQuad\>(`datasetCoreFactory`: *DatasetCoreFactory*<InAndOutQuad, InAndOutQuad, DatasetCore<InAndOutQuad, InAndOutQuad\>\>): [*ExtendedDatasetFactory*](extendeddatasetfactory.md)<InAndOutQuad\>

#### Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `InAndOutQuad` | BaseQuad | BaseQuad |

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetCoreFactory` | *DatasetCoreFactory*<InAndOutQuad, InAndOutQuad, DatasetCore<InAndOutQuad, InAndOutQuad\>\> |

**Returns:** [*ExtendedDatasetFactory*](extendeddatasetfactory.md)<InAndOutQuad\>

Defined in: [lib/ExtendedDatasetFactory.ts:7](https://github.com/o-development/subscribable-dataset/blob/d03a0f0/lib/ExtendedDatasetFactory.ts#L7)

## Properties

### datasetCoreFactory

• `Private` **datasetCoreFactory**: *DatasetCoreFactory*<InAndOutQuad, InAndOutQuad, DatasetCore<InAndOutQuad, InAndOutQuad\>\>

Defined in: [lib/ExtendedDatasetFactory.ts:7](https://github.com/o-development/subscribable-dataset/blob/d03a0f0/lib/ExtendedDatasetFactory.ts#L7)

## Methods

### dataset

▸ **dataset**(`quads?`: *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[]): *Dataset*<InAndOutQuad, InAndOutQuad\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads?` | *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[] |

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

Implementation of: DatasetFactory.dataset

Defined in: [lib/ExtendedDatasetFactory.ts:14](https://github.com/o-development/subscribable-dataset/blob/d03a0f0/lib/ExtendedDatasetFactory.ts#L14)
