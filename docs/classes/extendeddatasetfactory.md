[o-dataset-pack](../README.md) / [Exports](../modules.md) / ExtendedDatasetFactory

# Class: ExtendedDatasetFactory<InAndOutQuad\>

A DatasetFactory that creates an ExtendedDataset given a DatasetCoreFactory.

## Type parameters

| Name | Type |
| :------ | :------ |
| `InAndOutQuad` | extends `BaseQuad` = `BaseQuad` |

## Implements

- `DatasetFactory`<`InAndOutQuad`, `InAndOutQuad`\>

## Table of contents

### Constructors

- [constructor](ExtendedDatasetFactory.md#constructor)

### Properties

- [datasetCoreFactory](ExtendedDatasetFactory.md#datasetcorefactory)

### Methods

- [dataset](ExtendedDatasetFactory.md#dataset)

## Constructors

### constructor

• **new ExtendedDatasetFactory**<`InAndOutQuad`\>(`datasetCoreFactory`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InAndOutQuad` | extends `BaseQuad` = `BaseQuad` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetCoreFactory` | `DatasetCoreFactory`<`InAndOutQuad`, `InAndOutQuad`, `DatasetCore`<`InAndOutQuad`, `InAndOutQuad`\>\> |

## Properties

### datasetCoreFactory

• `Private` **datasetCoreFactory**: `DatasetCoreFactory`<`InAndOutQuad`, `InAndOutQuad`, `DatasetCore`<`InAndOutQuad`, `InAndOutQuad`\>\>

#### Defined in

[lib/ExtendedDatasetFactory.ts:16](https://github.com/o-development/o-dataset-pack/blob/cb5ddec/lib/ExtendedDatasetFactory.ts#L16)

## Methods

### dataset

▸ **dataset**(`quads?`): [`ExtendedDataset`](ExtendedDataset.md)<`InAndOutQuad`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads?` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> \| `InAndOutQuad`[] |

#### Returns

[`ExtendedDataset`](ExtendedDataset.md)<`InAndOutQuad`\>

#### Implementation of

DatasetFactory.dataset
