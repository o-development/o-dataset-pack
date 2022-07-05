[o-dataset-pack](../README.md) / [Exports](../modules.md) / WrapperSubscribableDatasetFactory

# Class: WrapperSubscribableDatasetFactory<InAndOutQuad\>

A DatasetFactory that returns a WrapperSubscribableDataset given a generic DatasetFactory.

## Type parameters

| Name | Type |
| :------ | :------ |
| `InAndOutQuad` | extends `BaseQuad` = `BaseQuad` |

## Implements

- `DatasetFactory`<`InAndOutQuad`, `InAndOutQuad`\>

## Table of contents

### Constructors

- [constructor](WrapperSubscribableDatasetFactory.md#constructor)

### Properties

- [datasetFactory](WrapperSubscribableDatasetFactory.md#datasetfactory)

### Methods

- [dataset](WrapperSubscribableDatasetFactory.md#dataset)

## Constructors

### constructor

• **new WrapperSubscribableDatasetFactory**<`InAndOutQuad`\>(`datasetFactory`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InAndOutQuad` | extends `BaseQuad` = `BaseQuad` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetFactory` | `DatasetFactory`<`InAndOutQuad`, `InAndOutQuad`, `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>\> |

## Properties

### datasetFactory

• `Private` **datasetFactory**: `DatasetFactory`<`InAndOutQuad`, `InAndOutQuad`, `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>\>

#### Defined in

[lib/WrapperSubscribableDatasetFactory.ts:10](https://github.com/o-development/o-dataset-pack/blob/e8a7e34/lib/WrapperSubscribableDatasetFactory.ts#L10)

## Methods

### dataset

▸ **dataset**(`quads?`): [`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads?` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> \| `InAndOutQuad`[] |

#### Returns

[`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

#### Implementation of

DatasetFactory.dataset
