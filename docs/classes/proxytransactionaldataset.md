[o-dataset-pack](../README.md) / [Exports](../modules.md) / ProxyTransactionalDataset

# Class: ProxyTransactionalDataset<InAndOutQuad\>

Proxy Transactional Dataset is a transactional dataset that does not duplicate
the parent dataset, it will dynamically determine the correct return value for
methods in real time when the method is called.

## Type parameters

| Name | Type |
| :------ | :------ |
| `InAndOutQuad` | extends `BaseQuad` = `BaseQuad` |

## Hierarchy

- [`ExtendedDataset`](ExtendedDataset.md)<`InAndOutQuad`\>

  ↳ **`ProxyTransactionalDataset`**

## Implements

- [`BulkEditableDataset`](../interfaces/BulkEditableDataset.md)<`InAndOutQuad`\>
- [`TransactionalDataset`](../interfaces/TransactionalDataset.md)<`InAndOutQuad`\>

## Table of contents

### Constructors

- [constructor](ProxyTransactionalDataset.md#constructor)

### Properties

- [committedDatasetChanges](ProxyTransactionalDataset.md#committeddatasetchanges)
- [dataset](ProxyTransactionalDataset.md#dataset)
- [datasetChanges](ProxyTransactionalDataset.md#datasetchanges)
- [datasetCoreFactory](ProxyTransactionalDataset.md#datasetcorefactory)
- [datasetFactory](ProxyTransactionalDataset.md#datasetfactory)
- [parentDataset](ProxyTransactionalDataset.md#parentdataset)

### Accessors

- [size](ProxyTransactionalDataset.md#size)

### Methods

- [[iterator]](ProxyTransactionalDataset.md#[iterator])
- [add](ProxyTransactionalDataset.md#add)
- [addAll](ProxyTransactionalDataset.md#addall)
- [bulk](ProxyTransactionalDataset.md#bulk)
- [checkIfTransactionCommitted](ProxyTransactionalDataset.md#checkiftransactioncommitted)
- [commit](ProxyTransactionalDataset.md#commit)
- [contains](ProxyTransactionalDataset.md#contains)
- [delete](ProxyTransactionalDataset.md#delete)
- [deleteMatches](ProxyTransactionalDataset.md#deletematches)
- [difference](ProxyTransactionalDataset.md#difference)
- [equals](ProxyTransactionalDataset.md#equals)
- [every](ProxyTransactionalDataset.md#every)
- [filter](ProxyTransactionalDataset.md#filter)
- [forEach](ProxyTransactionalDataset.md#foreach)
- [getChanges](ProxyTransactionalDataset.md#getchanges)
- [has](ProxyTransactionalDataset.md#has)
- [import](ProxyTransactionalDataset.md#import)
- [intersection](ProxyTransactionalDataset.md#intersection)
- [map](ProxyTransactionalDataset.md#map)
- [match](ProxyTransactionalDataset.md#match)
- [reduce](ProxyTransactionalDataset.md#reduce)
- [rollback](ProxyTransactionalDataset.md#rollback)
- [some](ProxyTransactionalDataset.md#some)
- [startTransaction](ProxyTransactionalDataset.md#starttransaction)
- [toArray](ProxyTransactionalDataset.md#toarray)
- [toCanonical](ProxyTransactionalDataset.md#tocanonical)
- [toStream](ProxyTransactionalDataset.md#tostream)
- [toString](ProxyTransactionalDataset.md#tostring)
- [union](ProxyTransactionalDataset.md#union)
- [updateDatasetChanges](ProxyTransactionalDataset.md#updatedatasetchanges)
- [updateParentDataset](ProxyTransactionalDataset.md#updateparentdataset)

## Constructors

### constructor

• **new ProxyTransactionalDataset**<`InAndOutQuad`\>(`parentDataset`, `datasetFactory`)

Constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InAndOutQuad` | extends `BaseQuad` = `BaseQuad` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentDataset` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> | The dataset that will be updated upon commit |
| `datasetFactory` | `DatasetFactory`<`InAndOutQuad`, `InAndOutQuad`, `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>\> | - |

#### Overrides

[ExtendedDataset](ExtendedDataset.md).[constructor](ExtendedDataset.md#constructor)

## Properties

### committedDatasetChanges

• `Private` `Optional` **committedDatasetChanges**: [`DatasetChanges`](../interfaces/DatasetChanges.md)<`InAndOutQuad`\>

A list of changes made to the parent dataset upon commit used for rolling back changes.
This is different from 'datasetChanges' because datasetChanges is allowed to overlap
with the parent dataset.
For example, the parent dataset may already have triple A, and datasetChanges can
also have triple A.

#### Defined in

[lib/ProxyTransactionalDataset.ts:44](https://github.com/o-development/o-dataset-pack/blob/cb5ddec/lib/ProxyTransactionalDataset.ts#L44)

___

### dataset

• `Protected` **dataset**: `DatasetCore`<`InAndOutQuad`, `InAndOutQuad`\>

The main backing dataset

#### Inherited from

[ExtendedDataset](ExtendedDataset.md).[dataset](ExtendedDataset.md#dataset)

#### Defined in

[lib/ExtendedDataset.ts:22](https://github.com/o-development/o-dataset-pack/blob/cb5ddec/lib/ExtendedDataset.ts#L22)

___

### datasetChanges

• `Private` **datasetChanges**: [`DatasetChanges`](../interfaces/DatasetChanges.md)<`InAndOutQuad`\>

The changes made that are ready to commit

#### Defined in

[lib/ProxyTransactionalDataset.ts:35](https://github.com/o-development/o-dataset-pack/blob/cb5ddec/lib/ProxyTransactionalDataset.ts#L35)

___

### datasetCoreFactory

• `Protected` **datasetCoreFactory**: `DatasetCoreFactory`<`InAndOutQuad`, `InAndOutQuad`, `DatasetCore`<`InAndOutQuad`, `InAndOutQuad`\>\>

A factory that generates datasets for the methods

#### Inherited from

[ExtendedDataset](ExtendedDataset.md).[datasetCoreFactory](ExtendedDataset.md#datasetcorefactory)

#### Defined in

[lib/ExtendedDataset.ts:27](https://github.com/o-development/o-dataset-pack/blob/cb5ddec/lib/ExtendedDataset.ts#L27)

___

### datasetFactory

• `Private` **datasetFactory**: `DatasetFactory`<`InAndOutQuad`, `InAndOutQuad`, `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>\>

A factory for creating new datasets to be added to the update method

#### Defined in

[lib/ProxyTransactionalDataset.ts:30](https://github.com/o-development/o-dataset-pack/blob/cb5ddec/lib/ProxyTransactionalDataset.ts#L30)

___

### parentDataset

• `Private` **parentDataset**: `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

The parent dataset that will be updated upon commit

#### Defined in

[lib/ProxyTransactionalDataset.ts:25](https://github.com/o-development/o-dataset-pack/blob/cb5ddec/lib/ProxyTransactionalDataset.ts#L25)

## Accessors

### size

• `get` **size**(): `number`

A non-negative integer that specifies the number of quads in the set.

#### Returns

`number`

#### Implementation of

[TransactionalDataset](../interfaces/TransactionalDataset.md).[size](../interfaces/TransactionalDataset.md#size)

#### Overrides

ExtendedDataset.size

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<`InAndOutQuad`, `any`, `undefined`\>

Returns an iterator

#### Returns

`Iterator`<`InAndOutQuad`, `any`, `undefined`\>

#### Implementation of

[TransactionalDataset](../interfaces/TransactionalDataset.md).[[iterator]](../interfaces/TransactionalDataset.md#[iterator])

#### Overrides

[ExtendedDataset](ExtendedDataset.md).[[iterator]](ExtendedDataset.md#[iterator])

___

### add

▸ **add**(`quad`): [`ProxyTransactionalDataset`](ProxyTransactionalDataset.md)<`InAndOutQuad`\>

Adds the specified quad to the dataset.
Existing quads, as defined in Quad.equals, will be ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | `InAndOutQuad` |

#### Returns

[`ProxyTransactionalDataset`](ProxyTransactionalDataset.md)<`InAndOutQuad`\>

the dataset instance it was called on.

#### Implementation of

[TransactionalDataset](../interfaces/TransactionalDataset.md).[add](../interfaces/TransactionalDataset.md#add)

#### Overrides

[ExtendedDataset](ExtendedDataset.md).[add](ExtendedDataset.md#add)

___

### addAll

▸ **addAll**(`quads`): [`ProxyTransactionalDataset`](ProxyTransactionalDataset.md)<`InAndOutQuad`\>

Imports the quads into this dataset.
This method differs from Dataset.union in that it adds all quads to the current instance, rather than combining quads and the current instance to create a new instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> \| `InAndOutQuad`[] |

#### Returns

[`ProxyTransactionalDataset`](ProxyTransactionalDataset.md)<`InAndOutQuad`\>

the dataset instance it was called on.

#### Implementation of

[TransactionalDataset](../interfaces/TransactionalDataset.md).[addAll](../interfaces/TransactionalDataset.md#addall)

#### Overrides

[ExtendedDataset](ExtendedDataset.md).[addAll](ExtendedDataset.md#addall)

___

### bulk

▸ **bulk**(`changes`): [`ProxyTransactionalDataset`](ProxyTransactionalDataset.md)<`InAndOutQuad`\>

Bulk add and remove triples

#### Parameters

| Name | Type |
| :------ | :------ |
| `changes` | [`DatasetChanges`](../interfaces/DatasetChanges.md)<`InAndOutQuad`\> |

#### Returns

[`ProxyTransactionalDataset`](ProxyTransactionalDataset.md)<`InAndOutQuad`\>

#### Implementation of

[BulkEditableDataset](../interfaces/BulkEditableDataset.md).[bulk](../interfaces/BulkEditableDataset.md#bulk)

___

### checkIfTransactionCommitted

▸ `Private` **checkIfTransactionCommitted**(): `void`

Checks if the transaction has been committed and throws an error if it has

#### Returns

`void`

___

### commit

▸ **commit**(): `void`

Commits changes made to the parent dataset

#### Returns

`void`

#### Implementation of

[TransactionalDataset](../interfaces/TransactionalDataset.md).[commit](../interfaces/TransactionalDataset.md#commit)

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

[TransactionalDataset](../interfaces/TransactionalDataset.md).[contains](../interfaces/TransactionalDataset.md#contains)

#### Inherited from

[ExtendedDataset](ExtendedDataset.md).[contains](ExtendedDataset.md#contains)

___

### delete

▸ **delete**(`quad`): [`ProxyTransactionalDataset`](ProxyTransactionalDataset.md)<`InAndOutQuad`\>

Removes the specified quad from the dataset.
This method returns the dataset instance it was called on.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | `InAndOutQuad` |

#### Returns

[`ProxyTransactionalDataset`](ProxyTransactionalDataset.md)<`InAndOutQuad`\>

#### Implementation of

[TransactionalDataset](../interfaces/TransactionalDataset.md).[delete](../interfaces/TransactionalDataset.md#delete)

#### Overrides

[ExtendedDataset](ExtendedDataset.md).[delete](ExtendedDataset.md#delete)

___

### deleteMatches

▸ **deleteMatches**(`subject?`, `predicate?`, `object?`, `graph?`): [`ProxyTransactionalDataset`](ProxyTransactionalDataset.md)<`InAndOutQuad`\>

This method removes the quads in the current instance that match the given arguments. The logic described in Quad Matching is applied for each quad in this dataset to select the quads which will be deleted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `subject?` | `Term` |
| `predicate?` | `Term` |
| `object?` | `Term` |
| `graph?` | `Term` |

#### Returns

[`ProxyTransactionalDataset`](ProxyTransactionalDataset.md)<`InAndOutQuad`\>

the dataset instance it was called on.

#### Implementation of

[TransactionalDataset](../interfaces/TransactionalDataset.md).[deleteMatches](../interfaces/TransactionalDataset.md#deletematches)

#### Overrides

[ExtendedDataset](ExtendedDataset.md).[deleteMatches](ExtendedDataset.md#deletematches)

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

[TransactionalDataset](../interfaces/TransactionalDataset.md).[difference](../interfaces/TransactionalDataset.md#difference)

#### Inherited from

[ExtendedDataset](ExtendedDataset.md).[difference](ExtendedDataset.md#difference)

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

[TransactionalDataset](../interfaces/TransactionalDataset.md).[equals](../interfaces/TransactionalDataset.md#equals)

#### Inherited from

[ExtendedDataset](ExtendedDataset.md).[equals](ExtendedDataset.md#equals)

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
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`ProxyTransactionalDataset`](ProxyTransactionalDataset.md)<`InAndOutQuad`\>) => `boolean` |

#### Returns

`boolean`

#### Implementation of

[TransactionalDataset](../interfaces/TransactionalDataset.md).[every](../interfaces/TransactionalDataset.md#every)

#### Inherited from

[ExtendedDataset](ExtendedDataset.md).[every](ExtendedDataset.md#every)

___

### filter

▸ **filter**(`iteratee`): `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

Creates a new dataset with all the quads that pass the test implemented by the provided iteratee.
Note: This method is aligned with Array.prototype.filter() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`ProxyTransactionalDataset`](ProxyTransactionalDataset.md)<`InAndOutQuad`\>) => `boolean` |

#### Returns

`Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

#### Implementation of

[TransactionalDataset](../interfaces/TransactionalDataset.md).[filter](../interfaces/TransactionalDataset.md#filter)

#### Inherited from

[ExtendedDataset](ExtendedDataset.md).[filter](ExtendedDataset.md#filter)

___

### forEach

▸ **forEach**(`iteratee`): `void`

Executes the provided iteratee once on each quad in the dataset.
Note: This method is aligned with Array.prototype.forEach() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`ProxyTransactionalDataset`](ProxyTransactionalDataset.md)<`InAndOutQuad`\>) => `void` |

#### Returns

`void`

#### Implementation of

[TransactionalDataset](../interfaces/TransactionalDataset.md).[forEach](../interfaces/TransactionalDataset.md#foreach)

#### Inherited from

[ExtendedDataset](ExtendedDataset.md).[forEach](ExtendedDataset.md#foreach)

___

### getChanges

▸ **getChanges**(): [`DatasetChanges`](../interfaces/DatasetChanges.md)<`InAndOutQuad`\>

#### Returns

[`DatasetChanges`](../interfaces/DatasetChanges.md)<`InAndOutQuad`\>

#### Implementation of

[TransactionalDataset](../interfaces/TransactionalDataset.md).[getChanges](../interfaces/TransactionalDataset.md#getchanges)

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

[TransactionalDataset](../interfaces/TransactionalDataset.md).[has](../interfaces/TransactionalDataset.md#has)

#### Overrides

[ExtendedDataset](ExtendedDataset.md).[has](ExtendedDataset.md#has)

___

### import

▸ **import**(`stream`): `Promise`<[`ProxyTransactionalDataset`](ProxyTransactionalDataset.md)<`InAndOutQuad`\>\>

Imports all quads from the given stream into the dataset.
The stream events end and error are wrapped in a Promise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `Stream`<`InAndOutQuad`\> |

#### Returns

`Promise`<[`ProxyTransactionalDataset`](ProxyTransactionalDataset.md)<`InAndOutQuad`\>\>

#### Implementation of

[TransactionalDataset](../interfaces/TransactionalDataset.md).[import](../interfaces/TransactionalDataset.md#import)

#### Inherited from

[ExtendedDataset](ExtendedDataset.md).[import](ExtendedDataset.md#import)

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

[TransactionalDataset](../interfaces/TransactionalDataset.md).[intersection](../interfaces/TransactionalDataset.md#intersection)

#### Inherited from

[ExtendedDataset](ExtendedDataset.md).[intersection](ExtendedDataset.md#intersection)

___

### map

▸ **map**(`iteratee`): `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

Returns a new dataset containing all quads returned by applying iteratee to each quad in the current dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`ProxyTransactionalDataset`](ProxyTransactionalDataset.md)<`InAndOutQuad`\>) => `InAndOutQuad` |

#### Returns

`Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

#### Implementation of

[TransactionalDataset](../interfaces/TransactionalDataset.md).[map](../interfaces/TransactionalDataset.md#map)

#### Inherited from

[ExtendedDataset](ExtendedDataset.md).[map](ExtendedDataset.md#map)

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

[TransactionalDataset](../interfaces/TransactionalDataset.md).[match](../interfaces/TransactionalDataset.md#match)

#### Overrides

[ExtendedDataset](ExtendedDataset.md).[match](ExtendedDataset.md#match)

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
| `iteratee` | (`accumulator`: `A`, `quad`: `InAndOutQuad`, `dataset`: [`ProxyTransactionalDataset`](ProxyTransactionalDataset.md)<`InAndOutQuad`\>) => `A` |
| `initialValue?` | `A` |

#### Returns

`A`

#### Implementation of

[TransactionalDataset](../interfaces/TransactionalDataset.md).[reduce](../interfaces/TransactionalDataset.md#reduce)

#### Inherited from

[ExtendedDataset](ExtendedDataset.md).[reduce](ExtendedDataset.md#reduce)

___

### rollback

▸ **rollback**(): `void`

Rolls back changes made to the parent dataset

#### Returns

`void`

#### Implementation of

[TransactionalDataset](../interfaces/TransactionalDataset.md).[rollback](../interfaces/TransactionalDataset.md#rollback)

___

### some

▸ **some**(`iteratee`): `boolean`

Existential quantification method, tests whether some quads in the dataset pass the test implemented by the provided iteratee.
Note: This method is aligned with Array.prototype.some() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`ProxyTransactionalDataset`](ProxyTransactionalDataset.md)<`InAndOutQuad`\>) => `boolean` |

#### Returns

`boolean`

boolean true once a quad that passes the test is found.

#### Implementation of

[TransactionalDataset](../interfaces/TransactionalDataset.md).[some](../interfaces/TransactionalDataset.md#some)

#### Inherited from

[ExtendedDataset](ExtendedDataset.md).[some](ExtendedDataset.md#some)

___

### startTransaction

▸ **startTransaction**(): [`TransactionalDataset`](../interfaces/TransactionalDataset.md)<`InAndOutQuad`\>

Starts a new transaction with this transactional dataset as the parent

#### Returns

[`TransactionalDataset`](../interfaces/TransactionalDataset.md)<`InAndOutQuad`\>

___

### toArray

▸ **toArray**(): `InAndOutQuad`[]

Returns the set of quads within the dataset as a host language native sequence, for example an Array in ECMAScript-262.
Note: Since a DatasetCore is an unordered set, the order of the quads within the returned sequence is arbitrary.

#### Returns

`InAndOutQuad`[]

#### Implementation of

[TransactionalDataset](../interfaces/TransactionalDataset.md).[toArray](../interfaces/TransactionalDataset.md#toarray)

#### Inherited from

[ExtendedDataset](ExtendedDataset.md).[toArray](ExtendedDataset.md#toarray)

___

### toCanonical

▸ **toCanonical**(): `string`

Returns an N-Quads string representation of the dataset, preprocessed with RDF Dataset Normalization algorithm.

#### Returns

`string`

#### Implementation of

[TransactionalDataset](../interfaces/TransactionalDataset.md).[toCanonical](../interfaces/TransactionalDataset.md#tocanonical)

#### Inherited from

[ExtendedDataset](ExtendedDataset.md).[toCanonical](ExtendedDataset.md#tocanonical)

___

### toStream

▸ **toStream**(): `Stream`<`InAndOutQuad`\>

Returns a stream that contains all quads of the dataset.

#### Returns

`Stream`<`InAndOutQuad`\>

#### Implementation of

[TransactionalDataset](../interfaces/TransactionalDataset.md).[toStream](../interfaces/TransactionalDataset.md#tostream)

#### Inherited from

[ExtendedDataset](ExtendedDataset.md).[toStream](ExtendedDataset.md#tostream)

___

### toString

▸ **toString**(): `string`

Returns an N-Quads string representation of the dataset.
No prior normalization is required, therefore the results for the same quads may vary depending on the Dataset implementation.

#### Returns

`string`

#### Implementation of

[TransactionalDataset](../interfaces/TransactionalDataset.md).[toString](../interfaces/TransactionalDataset.md#tostring)

#### Inherited from

[ExtendedDataset](ExtendedDataset.md).[toString](ExtendedDataset.md#tostring)

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

[TransactionalDataset](../interfaces/TransactionalDataset.md).[union](../interfaces/TransactionalDataset.md#union)

#### Inherited from

[ExtendedDataset](ExtendedDataset.md).[union](ExtendedDataset.md#union)

___

### updateDatasetChanges

▸ `Private` **updateDatasetChanges**(`changes`): `void`

Helper method to update the changes made

#### Parameters

| Name | Type |
| :------ | :------ |
| `changes` | `Object` |
| `changes.added?` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> \| `InAndOutQuad`[] |
| `changes.removed?` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> \| `InAndOutQuad`[] |

#### Returns

`void`

___

### updateParentDataset

▸ `Private` **updateParentDataset**(`datasetChanges`): `void`

Helper method to update the parent dataset or any other provided dataset

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetChanges` | [`DatasetChanges`](../interfaces/DatasetChanges.md)<`InAndOutQuad`\> |

#### Returns

`void`
