[o-dataset-pack](../README.md) / [Exports](../modules.md) / ExtendedDatasetFactory

# Class: ExtendedDatasetFactory<InAndOutQuad\>

A DatasetFactory that creates an ExtendedDataset given a DatasetCoreFactory.

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

Defined in: [lib/ExtendedDatasetFactory.ts:15](https://github.com/o-development/o-dataset-pack/blob/631ca3e/lib/ExtendedDatasetFactory.ts#L15)

## Properties

### datasetCoreFactory

• `Private` **datasetCoreFactory**: *DatasetCoreFactory*<InAndOutQuad, InAndOutQuad, DatasetCore<InAndOutQuad, InAndOutQuad\>\>

Defined in: [lib/ExtendedDatasetFactory.ts:15](https://github.com/o-development/o-dataset-pack/blob/631ca3e/lib/ExtendedDatasetFactory.ts#L15)

## Methods

### dataset

▸ **dataset**(`quads?`: *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[]): [*ExtendedDataset*](extendeddataset.md)<InAndOutQuad\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads?` | *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[] |

**Returns:** [*ExtendedDataset*](extendeddataset.md)<InAndOutQuad\>

Implementation of: DatasetFactory.dataset

Defined in: [lib/ExtendedDatasetFactory.ts:22](https://github.com/o-development/o-dataset-pack/blob/631ca3e/lib/ExtendedDatasetFactory.ts#L22)
