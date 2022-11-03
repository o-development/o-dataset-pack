[o-dataset-pack](../README.md) / [Exports](../modules.md) / ExtendedDataset

# Class: ExtendedDataset<InAndOutQuad\>

A full implementation of the RDF JS Dataset interface.

## Type parameters

| Name | Type |
| :------ | :------ |
| `InAndOutQuad` | extends `BaseQuad` = `BaseQuad` |

## Hierarchy

- **`ExtendedDataset`**

  ↳ [`ProxyTransactionalDataset`](ProxyTransactionalDataset.md)

## Implements

- `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

## Table of contents

### Constructors

- [constructor](ExtendedDataset.md#constructor)

### Properties

- [dataset](ExtendedDataset.md#dataset)
- [datasetCoreFactory](ExtendedDataset.md#datasetcorefactory)

### Accessors

- [size](ExtendedDataset.md#size)

### Methods

- [[iterator]](ExtendedDataset.md#[iterator])
- [add](ExtendedDataset.md#add)
- [addAll](ExtendedDataset.md#addall)
- [contains](ExtendedDataset.md#contains)
- [createBlankDataset](ExtendedDataset.md#createblankdataset)
- [delete](ExtendedDataset.md#delete)
- [deleteMatches](ExtendedDataset.md#deletematches)
- [difference](ExtendedDataset.md#difference)
- [equals](ExtendedDataset.md#equals)
- [every](ExtendedDataset.md#every)
- [filter](ExtendedDataset.md#filter)
- [forEach](ExtendedDataset.md#foreach)
- [has](ExtendedDataset.md#has)
- [import](ExtendedDataset.md#import)
- [intersection](ExtendedDataset.md#intersection)
- [map](ExtendedDataset.md#map)
- [match](ExtendedDataset.md#match)
- [reduce](ExtendedDataset.md#reduce)
- [some](ExtendedDataset.md#some)
- [toArray](ExtendedDataset.md#toarray)
- [toCanonical](ExtendedDataset.md#tocanonical)
- [toStream](ExtendedDataset.md#tostream)
- [toString](ExtendedDataset.md#tostring)
- [union](ExtendedDataset.md#union)

## Constructors

### constructor

• **new ExtendedDataset**<`InAndOutQuad`\>(`dataset`, `datasetFactory`)

Constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InAndOutQuad` | extends `BaseQuad` = `BaseQuad` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataset` | `DatasetCore`<`InAndOutQuad`, `InAndOutQuad`\> |
| `datasetFactory` | `DatasetCoreFactory`<`InAndOutQuad`, `InAndOutQuad`, `DatasetCore`<`InAndOutQuad`, `InAndOutQuad`\>\> |

## Properties

### dataset

• `Protected` **dataset**: `DatasetCore`<`InAndOutQuad`, `InAndOutQuad`\>

The main backing dataset

#### Defined in

[lib/ExtendedDataset.ts:22](https://github.com/o-development/o-dataset-pack/blob/cb5ddec/lib/ExtendedDataset.ts#L22)

___

### datasetCoreFactory

• `Protected` **datasetCoreFactory**: `DatasetCoreFactory`<`InAndOutQuad`, `InAndOutQuad`, `DatasetCore`<`InAndOutQuad`, `InAndOutQuad`\>\>

A factory that generates datasets for the methods

#### Defined in

[lib/ExtendedDataset.ts:27](https://github.com/o-development/o-dataset-pack/blob/cb5ddec/lib/ExtendedDataset.ts#L27)

## Accessors

### size

• `get` **size**(): `number`

A non-negative integer that specifies the number of quads in the set.

#### Returns

`number`

#### Implementation of

Dataset.size

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<`InAndOutQuad`, `InAndOutQuad`, `undefined`\>

Returns an iterator

#### Returns

`Iterator`<`InAndOutQuad`, `InAndOutQuad`, `undefined`\>

#### Implementation of

Dataset.\_\_@iterator@87

___

### add

▸ **add**(`quad`): [`ExtendedDataset`](ExtendedDataset.md)<`InAndOutQuad`\>

Adds the specified quad to the dataset.
Existing quads, as defined in Quad.equals, will be ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | `InAndOutQuad` |

#### Returns

[`ExtendedDataset`](ExtendedDataset.md)<`InAndOutQuad`\>

the dataset instance it was called on.

#### Implementation of

Dataset.add

___

### addAll

▸ **addAll**(`quads`): [`ExtendedDataset`](ExtendedDataset.md)<`InAndOutQuad`\>

Imports the quads into this dataset.
This method differs from Dataset.union in that it adds all quads to the current instance, rather than combining quads and the current instance to create a new instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> \| `InAndOutQuad`[] |

#### Returns

[`ExtendedDataset`](ExtendedDataset.md)<`InAndOutQuad`\>

the dataset instance it was called on.

#### Implementation of

Dataset.addAll

___

### contains

▸ **contains**(`other`): `boolean`

Returns true if the current instance is a superset of the given dataset; differently put: if the given dataset is a subset of, is contained in the current dataset.
Blank Nodes will be normalized.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> |

#### Returns

`boolean`

#### Implementation of

Dataset.contains

___

### createBlankDataset

▸ `Private` **createBlankDataset**(): `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

Creates a blank dataset using the dataset factory

#### Returns

`Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

___

### delete

▸ **delete**(`quad`): [`ExtendedDataset`](ExtendedDataset.md)<`InAndOutQuad`\>

Removes the specified quad from the dataset.
This method returns the dataset instance it was called on.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | `InAndOutQuad` |

#### Returns

[`ExtendedDataset`](ExtendedDataset.md)<`InAndOutQuad`\>

#### Implementation of

Dataset.delete

___

### deleteMatches

▸ **deleteMatches**(`subject?`, `predicate?`, `object?`, `graph?`): [`ExtendedDataset`](ExtendedDataset.md)<`InAndOutQuad`\>

This method removes the quads in the current instance that match the given arguments. The logic described in Quad Matching is applied for each quad in this dataset to select the quads which will be deleted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `subject?` | `Term` |
| `predicate?` | `Term` |
| `object?` | `Term` |
| `graph?` | `Term` |

#### Returns

[`ExtendedDataset`](ExtendedDataset.md)<`InAndOutQuad`\>

the dataset instance it was called on.

#### Implementation of

Dataset.deleteMatches

___

### difference

▸ **difference**(`other`): `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

Returns a new dataset that contains alls quads from the current dataset, not included in the given dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `DatasetCore`<`InAndOutQuad`, `InAndOutQuad`\> |

#### Returns

`Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

#### Implementation of

Dataset.difference

___

### equals

▸ **equals**(`other`): `boolean`

Returns true if the current instance contains the same graph structure as the given dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> |

#### Returns

`boolean`

#### Implementation of

Dataset.equals

___

### every

▸ **every**(`iteratee`): `boolean`

Universal quantification method, tests whether every quad in the dataset passes the test implemented by the provided iteratee.
This method immediately returns boolean false once a quad that does not pass the test is found.
This method always returns boolean true on an empty dataset.
Note: This method is aligned with Array.prototype.every() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`ExtendedDataset`](ExtendedDataset.md)<`InAndOutQuad`\>) => `boolean` |

#### Returns

`boolean`

#### Implementation of

Dataset.every

___

### filter

▸ **filter**(`iteratee`): `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

Creates a new dataset with all the quads that pass the test implemented by the provided iteratee.
Note: This method is aligned with Array.prototype.filter() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`ExtendedDataset`](ExtendedDataset.md)<`InAndOutQuad`\>) => `boolean` |

#### Returns

`Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

#### Implementation of

Dataset.filter

___

### forEach

▸ **forEach**(`iteratee`): `void`

Executes the provided iteratee once on each quad in the dataset.
Note: This method is aligned with Array.prototype.forEach() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`ExtendedDataset`](ExtendedDataset.md)<`InAndOutQuad`\>) => `void` |

#### Returns

`void`

#### Implementation of

Dataset.forEach

___

### has

▸ **has**(`quad`): `boolean`

Determines whether a dataset includes a certain quad, returning true or false as appropriate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | `InAndOutQuad` |

#### Returns

`boolean`

#### Implementation of

Dataset.has

___

### import

▸ **import**(`stream`): `Promise`<[`ExtendedDataset`](ExtendedDataset.md)<`InAndOutQuad`\>\>

Imports all quads from the given stream into the dataset.
The stream events end and error are wrapped in a Promise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `Stream`<`InAndOutQuad`\> |

#### Returns

`Promise`<[`ExtendedDataset`](ExtendedDataset.md)<`InAndOutQuad`\>\>

#### Implementation of

Dataset.import

___

### intersection

▸ **intersection**(`other`): `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

Returns a new dataset containing alls quads from the current dataset that are also included in the given dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> |

#### Returns

`Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

#### Implementation of

Dataset.intersection

___

### map

▸ **map**(`iteratee`): `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

Returns a new dataset containing all quads returned by applying iteratee to each quad in the current dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`ExtendedDataset`](ExtendedDataset.md)<`InAndOutQuad`\>) => `InAndOutQuad` |

#### Returns

`Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

#### Implementation of

Dataset.map

___

### match

▸ **match**(`subject?`, `predicate?`, `object?`, `graph?`): `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

This method returns a new dataset that is comprised of all quads in the current instance matching the given arguments. The logic described in Quad Matching is applied for each quad in this dataset to check if it should be included in the output dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `subject?` | ``null`` \| `Term` |
| `predicate?` | ``null`` \| `Term` |
| `object?` | ``null`` \| `Term` |
| `graph?` | ``null`` \| `Term` |

#### Returns

`Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

a Dataset with matching triples

#### Implementation of

Dataset.match

___

### reduce

▸ **reduce**<`A`\>(`iteratee`, `initialValue?`): `A`

This method calls the iteratee on each quad of the DatasetCore. The first time the iteratee is called, the accumulator value is the initialValue or, if not given, equals to the first quad of the Dataset. The return value of the iteratee is used as accumulator value for the next calls.
This method returns the return value of the last iteratee call.
Note: This method is aligned with Array.prototype.reduce() in ECMAScript-262.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`accumulator`: `A`, `quad`: `InAndOutQuad`, `dataset`: [`ExtendedDataset`](ExtendedDataset.md)<`InAndOutQuad`\>) => `A` |
| `initialValue?` | `A` |

#### Returns

`A`

#### Implementation of

Dataset.reduce

___

### some

▸ **some**(`iteratee`): `boolean`

Existential quantification method, tests whether some quads in the dataset pass the test implemented by the provided iteratee.
Note: This method is aligned with Array.prototype.some() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`ExtendedDataset`](ExtendedDataset.md)<`InAndOutQuad`\>) => `boolean` |

#### Returns

`boolean`

boolean true once a quad that passes the test is found.

#### Implementation of

Dataset.some

___

### toArray

▸ **toArray**(): `InAndOutQuad`[]

Returns the set of quads within the dataset as a host language native sequence, for example an Array in ECMAScript-262.
Note: Since a DatasetCore is an unordered set, the order of the quads within the returned sequence is arbitrary.

#### Returns

`InAndOutQuad`[]

#### Implementation of

Dataset.toArray

___

### toCanonical

▸ **toCanonical**(): `string`

Returns an N-Quads string representation of the dataset, preprocessed with RDF Dataset Normalization algorithm.

#### Returns

`string`

#### Implementation of

Dataset.toCanonical

___

### toStream

▸ **toStream**(): `Stream`<`InAndOutQuad`\>

Returns a stream that contains all quads of the dataset.

#### Returns

`Stream`<`InAndOutQuad`\>

#### Implementation of

Dataset.toStream

___

### toString

▸ **toString**(): `string`

Returns an N-Quads string representation of the dataset.
No prior normalization is required, therefore the results for the same quads may vary depending on the Dataset implementation.

#### Returns

`string`

#### Implementation of

Dataset.toString

___

### union

▸ **union**(`other`): `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

Returns a new Dataset that is a concatenation of this dataset and the quads given as an argument.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> |

#### Returns

`Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

#### Implementation of

Dataset.union
