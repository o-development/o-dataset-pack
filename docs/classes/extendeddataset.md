[o-dataset-pack](../README.md) / [Exports](../modules.md) / ExtendedDataset

# Class: ExtendedDataset<InAndOutQuad\>

A full implementation of the RDF JS Dataset interface.

## Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `InAndOutQuad` | BaseQuad | BaseQuad |

## Hierarchy

- **ExtendedDataset**

  ↳ [*ProxyTransactionalDataset*](proxytransactionaldataset.md)

## Implements

- *Dataset*<InAndOutQuad, InAndOutQuad\>

## Table of contents

### Constructors

- [constructor](extendeddataset.md#constructor)

### Properties

- [dataset](extendeddataset.md#dataset)
- [datasetCoreFactory](extendeddataset.md#datasetcorefactory)

### Accessors

- [size](extendeddataset.md#size)

### Methods

- [[Symbol.iterator]](extendeddataset.md#[symbol.iterator])
- [add](extendeddataset.md#add)
- [addAll](extendeddataset.md#addall)
- [contains](extendeddataset.md#contains)
- [createBlankDataset](extendeddataset.md#createblankdataset)
- [delete](extendeddataset.md#delete)
- [deleteMatches](extendeddataset.md#deletematches)
- [difference](extendeddataset.md#difference)
- [equals](extendeddataset.md#equals)
- [every](extendeddataset.md#every)
- [filter](extendeddataset.md#filter)
- [forEach](extendeddataset.md#foreach)
- [has](extendeddataset.md#has)
- [import](extendeddataset.md#import)
- [intersection](extendeddataset.md#intersection)
- [map](extendeddataset.md#map)
- [match](extendeddataset.md#match)
- [reduce](extendeddataset.md#reduce)
- [some](extendeddataset.md#some)
- [toArray](extendeddataset.md#toarray)
- [toCanonical](extendeddataset.md#tocanonical)
- [toStream](extendeddataset.md#tostream)
- [toString](extendeddataset.md#tostring)
- [union](extendeddataset.md#union)

## Constructors

### constructor

\+ **new ExtendedDataset**<InAndOutQuad\>(`dataset`: *DatasetCore*<InAndOutQuad, InAndOutQuad\>, `datasetFactory`: *DatasetCoreFactory*<InAndOutQuad, InAndOutQuad, DatasetCore<InAndOutQuad, InAndOutQuad\>\>): [*ExtendedDataset*](extendeddataset.md)<InAndOutQuad\>

Constructor

#### Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `InAndOutQuad` | BaseQuad | BaseQuad |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataset` | *DatasetCore*<InAndOutQuad, InAndOutQuad\> |
| `datasetFactory` | *DatasetCoreFactory*<InAndOutQuad, InAndOutQuad, DatasetCore<InAndOutQuad, InAndOutQuad\>\> |

**Returns:** [*ExtendedDataset*](extendeddataset.md)<InAndOutQuad\>

Defined in: [lib/ExtendedDataset.ts:26](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L26)

## Properties

### dataset

• `Protected` **dataset**: *DatasetCore*<InAndOutQuad, InAndOutQuad\>

The main backing dataset

Defined in: [lib/ExtendedDataset.ts:21](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L21)

___

### datasetCoreFactory

• `Protected` **datasetCoreFactory**: *DatasetCoreFactory*<InAndOutQuad, InAndOutQuad, DatasetCore<InAndOutQuad, InAndOutQuad\>\>

A factory that generates datasets for the methods

Defined in: [lib/ExtendedDataset.ts:26](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L26)

## Accessors

### size

• get **size**(): *number*

A non-negative integer that specifies the number of quads in the set.

**Returns:** *number*

Defined in: [lib/ExtendedDataset.ts:380](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L380)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<InAndOutQuad, InAndOutQuad, undefined\>

Returns an iterator

**Returns:** *Iterator*<InAndOutQuad, InAndOutQuad, undefined\>

Implementation of: Dataset.\_\_@iterator

Defined in: [lib/ExtendedDataset.ts:416](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L416)

___

### add

▸ **add**(`quad`: InAndOutQuad): [*ExtendedDataset*](extendeddataset.md)<InAndOutQuad\>

Adds the specified quad to the dataset.
Existing quads, as defined in Quad.equals, will be ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | InAndOutQuad |

**Returns:** [*ExtendedDataset*](extendeddataset.md)<InAndOutQuad\>

the dataset instance it was called on.

Implementation of: Dataset.add

Defined in: [lib/ExtendedDataset.ts:390](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L390)

___

### addAll

▸ **addAll**(`quads`: *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[]): [*ExtendedDataset*](extendeddataset.md)<InAndOutQuad\>

Imports the quads into this dataset.
This method differs from Dataset.union in that it adds all quads to the current instance, rather than combining quads and the current instance to create a new instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads` | *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[] |

**Returns:** [*ExtendedDataset*](extendeddataset.md)<InAndOutQuad\>

the dataset instance it was called on.

Implementation of: Dataset.addAll

Defined in: [lib/ExtendedDataset.ts:55](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L55)

___

### contains

▸ **contains**(`other`: *Dataset*<InAndOutQuad, InAndOutQuad\>): *boolean*

Returns true if the current instance is a superset of the given dataset; differently put: if the given dataset is a subset of, is contained in the current dataset.
Blank Nodes will be normalized.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | *Dataset*<InAndOutQuad, InAndOutQuad\> |

**Returns:** *boolean*

Implementation of: Dataset.contains

Defined in: [lib/ExtendedDataset.ts:67](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L67)

___

### createBlankDataset

▸ `Private` **createBlankDataset**(): *Dataset*<InAndOutQuad, InAndOutQuad\>

Creates a blank dataset using the dataset factory

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

Defined in: [lib/ExtendedDataset.ts:42](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L42)

___

### delete

▸ **delete**(`quad`: InAndOutQuad): [*ExtendedDataset*](extendeddataset.md)<InAndOutQuad\>

Removes the specified quad from the dataset.
This method returns the dataset instance it was called on.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | InAndOutQuad |

**Returns:** [*ExtendedDataset*](extendeddataset.md)<InAndOutQuad\>

Implementation of: Dataset.delete

Defined in: [lib/ExtendedDataset.ts:400](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L400)

___

### deleteMatches

▸ **deleteMatches**(`subject?`: Term, `predicate?`: Term, `object?`: Term, `graph?`: Term): [*ExtendedDataset*](extendeddataset.md)<InAndOutQuad\>

 This method removes the quads in the current instance that match the given arguments. The logic described in Quad Matching is applied for each quad in this dataset to select the quads which will be deleted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `subject?` | Term |
| `predicate?` | Term |
| `object?` | Term |
| `graph?` | Term |

**Returns:** [*ExtendedDataset*](extendeddataset.md)<InAndOutQuad\>

the dataset instance it was called on.

Implementation of: Dataset.deleteMatches

Defined in: [lib/ExtendedDataset.ts:87](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L87)

___

### difference

▸ **difference**(`other`: *DatasetCore*<InAndOutQuad, InAndOutQuad\>): *Dataset*<InAndOutQuad, InAndOutQuad\>

Returns a new dataset that contains alls quads from the current dataset, not included in the given dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | *DatasetCore*<InAndOutQuad, InAndOutQuad\> |

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

Implementation of: Dataset.difference

Defined in: [lib/ExtendedDataset.ts:104](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L104)

___

### equals

▸ **equals**(`other`: *Dataset*<InAndOutQuad, InAndOutQuad\>): *boolean*

Returns true if the current instance contains the same graph structure as the given dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | *Dataset*<InAndOutQuad, InAndOutQuad\> |

**Returns:** *boolean*

Implementation of: Dataset.equals

Defined in: [lib/ExtendedDataset.ts:120](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L120)

___

### every

▸ **every**(`iteratee`: (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => *boolean*): *boolean*

Universal quantification method, tests whether every quad in the dataset passes the test implemented by the provided iteratee.
This method immediately returns boolean false once a quad that does not pass the test is found.
This method always returns boolean true on an empty dataset.
Note: This method is aligned with Array.prototype.every() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => *boolean* |

**Returns:** *boolean*

Implementation of: Dataset.every

Defined in: [lib/ExtendedDataset.ts:139](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L139)

___

### filter

▸ **filter**(`iteratee`: (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => *boolean*): *Dataset*<InAndOutQuad, InAndOutQuad\>

Creates a new dataset with all the quads that pass the test implemented by the provided iteratee.
Note: This method is aligned with Array.prototype.filter() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => *boolean* |

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

Implementation of: Dataset.filter

Defined in: [lib/ExtendedDataset.ts:158](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L158)

___

### forEach

▸ **forEach**(`iteratee`: (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => *void*): *void*

Executes the provided iteratee once on each quad in the dataset.
Note: This method is aligned with Array.prototype.forEach() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => *void* |

**Returns:** *void*

Implementation of: Dataset.forEach

Defined in: [lib/ExtendedDataset.ts:178](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L178)

___

### has

▸ **has**(`quad`: InAndOutQuad): *boolean*

Determines whether a dataset includes a certain quad, returning true or false as appropriate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | InAndOutQuad |

**Returns:** *boolean*

Implementation of: Dataset.has

Defined in: [lib/ExtendedDataset.ts:409](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L409)

___

### import

▸ **import**(`stream`: *Stream*<InAndOutQuad\>): *Promise*<[*ExtendedDataset*](extendeddataset.md)<InAndOutQuad\>\>

Imports all quads from the given stream into the dataset.
The stream events end and error are wrapped in a Promise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | *Stream*<InAndOutQuad\> |

**Returns:** *Promise*<[*ExtendedDataset*](extendeddataset.md)<InAndOutQuad\>\>

Implementation of: Dataset.import

Defined in: [lib/ExtendedDataset.ts:194](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L194)

___

### intersection

▸ **intersection**(`other`: *Dataset*<InAndOutQuad, InAndOutQuad\>): *Dataset*<InAndOutQuad, InAndOutQuad\>

Returns a new dataset containing alls quads from the current dataset that are also included in the given dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | *Dataset*<InAndOutQuad, InAndOutQuad\> |

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

Implementation of: Dataset.intersection

Defined in: [lib/ExtendedDataset.ts:211](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L211)

___

### map

▸ **map**(`iteratee`: (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => InAndOutQuad): *Dataset*<InAndOutQuad, InAndOutQuad\>

Returns a new dataset containing all quads returned by applying iteratee to each quad in the current dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => InAndOutQuad |

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

Implementation of: Dataset.map

Defined in: [lib/ExtendedDataset.ts:229](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L229)

___

### match

▸ **match**(`subject?`: ``null`` \| Term, `predicate?`: ``null`` \| Term, `object?`: ``null`` \| Term, `graph?`: ``null`` \| Term): *Dataset*<InAndOutQuad, InAndOutQuad\>

This method returns a new dataset that is comprised of all quads in the current instance matching the given arguments. The logic described in Quad Matching is applied for each quad in this dataset to check if it should be included in the output dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `subject?` | ``null`` \| Term |
| `predicate?` | ``null`` \| Term |
| `object?` | ``null`` \| Term |
| `graph?` | ``null`` \| Term |

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

a Dataset with matching triples

Implementation of: Dataset.match

Defined in: [lib/ExtendedDataset.ts:365](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L365)

___

### reduce

▸ **reduce**<A\>(`iteratee`: (`accumulator`: A, `quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => A, `initialValue?`: A): A

This method calls the iteratee on each quad of the DatasetCore. The first time the iteratee is called, the accumulator value is the initialValue or, if not given, equals to the first quad of the Dataset. The return value of the iteratee is used as accumulator value for the next calls.
This method returns the return value of the last iteratee call.
Note: This method is aligned with Array.prototype.reduce() in ECMAScript-262.

#### Type parameters

| Name | Default |
| :------ | :------ |
| `A` | *unknown* |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`accumulator`: A, `quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => A |
| `initialValue?` | A |

**Returns:** A

Implementation of: Dataset.reduce

Defined in: [lib/ExtendedDataset.ts:249](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L249)

___

### some

▸ **some**(`iteratee`: (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => *boolean*): *boolean*

Existential quantification method, tests whether some quads in the dataset pass the test implemented by the provided iteratee.
Note: This method is aligned with Array.prototype.some() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => *boolean* |

**Returns:** *boolean*

boolean true once a quad that passes the test is found.

Implementation of: Dataset.some

Defined in: [lib/ExtendedDataset.ts:278](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L278)

___

### toArray

▸ **toArray**(): InAndOutQuad[]

Returns the set of quads within the dataset as a host language native sequence, for example an Array in ECMAScript-262.
Note: Since a DatasetCore is an unordered set, the order of the quads within the returned sequence is arbitrary.

**Returns:** InAndOutQuad[]

Implementation of: Dataset.toArray

Defined in: [lib/ExtendedDataset.ts:296](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L296)

___

### toCanonical

▸ **toCanonical**(): *string*

Returns an N-Quads string representation of the dataset, preprocessed with RDF Dataset Normalization algorithm.

**Returns:** *string*

Implementation of: Dataset.toCanonical

Defined in: [lib/ExtendedDataset.ts:307](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L307)

___

### toStream

▸ **toStream**(): *Stream*<InAndOutQuad\>

Returns a stream that contains all quads of the dataset.

**Returns:** *Stream*<InAndOutQuad\>

Implementation of: Dataset.toStream

Defined in: [lib/ExtendedDataset.ts:314](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L314)

___

### toString

▸ **toString**(): *string*

Returns an N-Quads string representation of the dataset.
No prior normalization is required, therefore the results for the same quads may vary depending on the Dataset implementation.

**Returns:** *string*

Implementation of: Dataset.toString

Defined in: [lib/ExtendedDataset.ts:335](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L335)

___

### union

▸ **union**(`other`: *Dataset*<InAndOutQuad, InAndOutQuad\>): *Dataset*<InAndOutQuad, InAndOutQuad\>

Returns a new Dataset that is a concatenation of this dataset and the quads given as an argument.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | *Dataset*<InAndOutQuad, InAndOutQuad\> |

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

Implementation of: Dataset.union

Defined in: [lib/ExtendedDataset.ts:344](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L344)
