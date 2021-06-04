[o-dataset-pack](../README.md) / [Exports](../modules.md) / ProxyTransactionalDataset

# Class: ProxyTransactionalDataset<InAndOutQuad\>

Proxy Transactional Dataset is a transactional dataset that does not duplicate
the parent dataset, it will dynamically determine the correct return value for
methods in real time when the method is called.

## Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `InAndOutQuad` | BaseQuad | BaseQuad |

## Hierarchy

- [*ExtendedDataset*](extendeddataset.md)<InAndOutQuad\>

  ↳ **ProxyTransactionalDataset**

## Implements

- [*BulkEditableDataset*](../interfaces/bulkeditabledataset.md)<InAndOutQuad\>
- [*TransactionalDataset*](../interfaces/transactionaldataset.md)<InAndOutQuad\>

## Table of contents

### Constructors

- [constructor](proxytransactionaldataset.md#constructor)

### Properties

- [committedDatasetChanges](proxytransactionaldataset.md#committeddatasetchanges)
- [dataset](proxytransactionaldataset.md#dataset)
- [datasetChanges](proxytransactionaldataset.md#datasetchanges)
- [datasetCoreFactory](proxytransactionaldataset.md#datasetcorefactory)
- [datasetFactory](proxytransactionaldataset.md#datasetfactory)
- [parentDataset](proxytransactionaldataset.md#parentdataset)

### Accessors

- [size](proxytransactionaldataset.md#size)

### Methods

- [[Symbol.iterator]](proxytransactionaldataset.md#[symbol.iterator])
- [add](proxytransactionaldataset.md#add)
- [addAll](proxytransactionaldataset.md#addall)
- [bulk](proxytransactionaldataset.md#bulk)
- [checkIfTransactionCommitted](proxytransactionaldataset.md#checkiftransactioncommitted)
- [commit](proxytransactionaldataset.md#commit)
- [contains](proxytransactionaldataset.md#contains)
- [delete](proxytransactionaldataset.md#delete)
- [deleteMatches](proxytransactionaldataset.md#deletematches)
- [difference](proxytransactionaldataset.md#difference)
- [equals](proxytransactionaldataset.md#equals)
- [every](proxytransactionaldataset.md#every)
- [filter](proxytransactionaldataset.md#filter)
- [forEach](proxytransactionaldataset.md#foreach)
- [has](proxytransactionaldataset.md#has)
- [import](proxytransactionaldataset.md#import)
- [intersection](proxytransactionaldataset.md#intersection)
- [map](proxytransactionaldataset.md#map)
- [match](proxytransactionaldataset.md#match)
- [reduce](proxytransactionaldataset.md#reduce)
- [rollback](proxytransactionaldataset.md#rollback)
- [some](proxytransactionaldataset.md#some)
- [startTransaction](proxytransactionaldataset.md#starttransaction)
- [toArray](proxytransactionaldataset.md#toarray)
- [toCanonical](proxytransactionaldataset.md#tocanonical)
- [toStream](proxytransactionaldataset.md#tostream)
- [toString](proxytransactionaldataset.md#tostring)
- [union](proxytransactionaldataset.md#union)
- [updateDatasetChanges](proxytransactionaldataset.md#updatedatasetchanges)
- [updateParentDataset](proxytransactionaldataset.md#updateparentdataset)

## Constructors

### constructor

\+ **new ProxyTransactionalDataset**<InAndOutQuad\>(`parentDataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>, `datasetFactory`: *DatasetFactory*<InAndOutQuad, InAndOutQuad, Dataset<InAndOutQuad, InAndOutQuad\>\>): [*ProxyTransactionalDataset*](proxytransactionaldataset.md)<InAndOutQuad\>

Constructor

#### Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `InAndOutQuad` | BaseQuad | BaseQuad |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentDataset` | *Dataset*<InAndOutQuad, InAndOutQuad\> | The dataset that will be updated upon commit |
| `datasetFactory` | *DatasetFactory*<InAndOutQuad, InAndOutQuad, Dataset<InAndOutQuad, InAndOutQuad\>\> | - |

**Returns:** [*ProxyTransactionalDataset*](proxytransactionaldataset.md)<InAndOutQuad\>

Overrides: [ExtendedDataset](extendeddataset.md)

Defined in: [lib/ProxyTransactionalDataset.ts:43](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ProxyTransactionalDataset.ts#L43)

## Properties

### committedDatasetChanges

• `Private` `Optional` **committedDatasetChanges**: [*DatasetChanges*](../interfaces/datasetchanges.md)<InAndOutQuad\>

A list of changes made to the parent dataset upon commit used for rolling back changes.
This is different from 'datasetChanges' because datasetChanges is allowed to overlap
with the parent dataset.
For example, the parent dataset may already have triple A, and datasetChanges can
also have triple A.

Defined in: [lib/ProxyTransactionalDataset.ts:43](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ProxyTransactionalDataset.ts#L43)

___

### dataset

• `Protected` **dataset**: *DatasetCore*<InAndOutQuad, InAndOutQuad\>

The main backing dataset

Inherited from: [ExtendedDataset](extendeddataset.md).[dataset](extendeddataset.md#dataset)

Defined in: [lib/ExtendedDataset.ts:21](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L21)

___

### datasetChanges

• `Private` **datasetChanges**: [*DatasetChanges*](../interfaces/datasetchanges.md)<InAndOutQuad\>

The changes made that are ready to commit

Defined in: [lib/ProxyTransactionalDataset.ts:34](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ProxyTransactionalDataset.ts#L34)

___

### datasetCoreFactory

• `Protected` **datasetCoreFactory**: *DatasetCoreFactory*<InAndOutQuad, InAndOutQuad, DatasetCore<InAndOutQuad, InAndOutQuad\>\>

A factory that generates datasets for the methods

Inherited from: [ExtendedDataset](extendeddataset.md).[datasetCoreFactory](extendeddataset.md#datasetcorefactory)

Defined in: [lib/ExtendedDataset.ts:26](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L26)

___

### datasetFactory

• `Private` **datasetFactory**: *DatasetFactory*<InAndOutQuad, InAndOutQuad, Dataset<InAndOutQuad, InAndOutQuad\>\>

A factory for creating new datasets to be added to the update method

Defined in: [lib/ProxyTransactionalDataset.ts:29](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ProxyTransactionalDataset.ts#L29)

___

### parentDataset

• `Private` **parentDataset**: *Dataset*<InAndOutQuad, InAndOutQuad\>

The parent dataset that will be updated upon commit

Defined in: [lib/ProxyTransactionalDataset.ts:24](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ProxyTransactionalDataset.ts#L24)

## Accessors

### size

• get **size**(): *number*

A non-negative integer that specifies the number of quads in the set.

**Returns:** *number*

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md).[size](../interfaces/transactionaldataset.md#size)

Defined in: [lib/ProxyTransactionalDataset.ts:143](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ProxyTransactionalDataset.ts#L143)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<InAndOutQuad, any, undefined\>

Returns an iterator

**Returns:** *Iterator*<InAndOutQuad, any, undefined\>

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Overrides: [ExtendedDataset](extendeddataset.md)

Defined in: [lib/ProxyTransactionalDataset.ts:186](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ProxyTransactionalDataset.ts#L186)

___

### add

▸ **add**(`quad`: InAndOutQuad): [*ProxyTransactionalDataset*](proxytransactionaldataset.md)<InAndOutQuad\>

Adds the specified quad to the dataset.
Existing quads, as defined in Quad.equals, will be ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | InAndOutQuad |

**Returns:** [*ProxyTransactionalDataset*](proxytransactionaldataset.md)<InAndOutQuad\>

the dataset instance it was called on.

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Overrides: [ExtendedDataset](extendeddataset.md)

Defined in: [lib/ProxyTransactionalDataset.ts:157](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ProxyTransactionalDataset.ts#L157)

___

### addAll

▸ **addAll**(`quads`: *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[]): [*ProxyTransactionalDataset*](proxytransactionaldataset.md)<InAndOutQuad\>

Imports the quads into this dataset.
This method differs from Dataset.union in that it adds all quads to the current instance, rather than combining quads and the current instance to create a new instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads` | *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[] |

**Returns:** [*ProxyTransactionalDataset*](proxytransactionaldataset.md)<InAndOutQuad\>

the dataset instance it was called on.

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Overrides: [ExtendedDataset](extendeddataset.md)

Defined in: [lib/ProxyTransactionalDataset.ts:71](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ProxyTransactionalDataset.ts#L71)

___

### bulk

▸ **bulk**(`changes`: [*DatasetChanges*](../interfaces/datasetchanges.md)<InAndOutQuad\>): [*ProxyTransactionalDataset*](proxytransactionaldataset.md)<InAndOutQuad\>

Bulk add and remove triples

#### Parameters

| Name | Type |
| :------ | :------ |
| `changes` | [*DatasetChanges*](../interfaces/datasetchanges.md)<InAndOutQuad\> |

**Returns:** [*ProxyTransactionalDataset*](proxytransactionaldataset.md)<InAndOutQuad\>

Implementation of: [BulkEditableDataset](../interfaces/bulkeditabledataset.md)

Defined in: [lib/ProxyTransactionalDataset.ts:82](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ProxyTransactionalDataset.ts#L82)

___

### checkIfTransactionCommitted

▸ `Private` **checkIfTransactionCommitted**(): *void*

Checks if the transaction has been committed and throws an error if it has

**Returns:** *void*

Defined in: [lib/ProxyTransactionalDataset.ts:229](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ProxyTransactionalDataset.ts#L229)

___

### commit

▸ **commit**(): *void*

Commits changes made to the parent dataset

**Returns:** *void*

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Defined in: [lib/ProxyTransactionalDataset.ts:312](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ProxyTransactionalDataset.ts#L312)

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

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Inherited from: [ExtendedDataset](extendeddataset.md)

Defined in: [lib/ExtendedDataset.ts:67](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L67)

___

### delete

▸ **delete**(`quad`: InAndOutQuad): [*ProxyTransactionalDataset*](proxytransactionaldataset.md)<InAndOutQuad\>

Removes the specified quad from the dataset.
This method returns the dataset instance it was called on.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | InAndOutQuad |

**Returns:** [*ProxyTransactionalDataset*](proxytransactionaldataset.md)<InAndOutQuad\>

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Overrides: [ExtendedDataset](extendeddataset.md)

Defined in: [lib/ProxyTransactionalDataset.ts:167](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ProxyTransactionalDataset.ts#L167)

___

### deleteMatches

▸ **deleteMatches**(`subject?`: Term, `predicate?`: Term, `object?`: Term, `graph?`: Term): [*ProxyTransactionalDataset*](proxytransactionaldataset.md)<InAndOutQuad\>

 This method removes the quads in the current instance that match the given arguments. The logic described in Quad Matching is applied for each quad in this dataset to select the quads which will be deleted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `subject?` | Term |
| `predicate?` | Term |
| `object?` | Term |
| `graph?` | Term |

**Returns:** [*ProxyTransactionalDataset*](proxytransactionaldataset.md)<InAndOutQuad\>

the dataset instance it was called on.

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Overrides: [ExtendedDataset](extendeddataset.md)

Defined in: [lib/ProxyTransactionalDataset.ts:95](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ProxyTransactionalDataset.ts#L95)

___

### difference

▸ **difference**(`other`: *DatasetCore*<InAndOutQuad, InAndOutQuad\>): *Dataset*<InAndOutQuad, InAndOutQuad\>

Returns a new dataset that contains alls quads from the current dataset, not included in the given dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | *DatasetCore*<InAndOutQuad, InAndOutQuad\> |

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Inherited from: [ExtendedDataset](extendeddataset.md)

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

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Inherited from: [ExtendedDataset](extendeddataset.md)

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

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Inherited from: [ExtendedDataset](extendeddataset.md)

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

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Inherited from: [ExtendedDataset](extendeddataset.md)

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

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Inherited from: [ExtendedDataset](extendeddataset.md)

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

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Overrides: [ExtendedDataset](extendeddataset.md)

Defined in: [lib/ProxyTransactionalDataset.ts:176](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ProxyTransactionalDataset.ts#L176)

___

### import

▸ **import**(`stream`: *Stream*<InAndOutQuad\>): *Promise*<[*ProxyTransactionalDataset*](proxytransactionaldataset.md)<InAndOutQuad\>\>

Imports all quads from the given stream into the dataset.
The stream events end and error are wrapped in a Promise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | *Stream*<InAndOutQuad\> |

**Returns:** *Promise*<[*ProxyTransactionalDataset*](proxytransactionaldataset.md)<InAndOutQuad\>\>

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Inherited from: [ExtendedDataset](extendeddataset.md)

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

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Inherited from: [ExtendedDataset](extendeddataset.md)

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

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Inherited from: [ExtendedDataset](extendeddataset.md)

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

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Overrides: [ExtendedDataset](extendeddataset.md)

Defined in: [lib/ProxyTransactionalDataset.ts:117](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ProxyTransactionalDataset.ts#L117)

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

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Inherited from: [ExtendedDataset](extendeddataset.md)

Defined in: [lib/ExtendedDataset.ts:249](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L249)

___

### rollback

▸ **rollback**(): *void*

Rolls back changes made to the parent dataset

**Returns:** *void*

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Defined in: [lib/ProxyTransactionalDataset.ts:324](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ProxyTransactionalDataset.ts#L324)

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

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Inherited from: [ExtendedDataset](extendeddataset.md)

Defined in: [lib/ExtendedDataset.ts:278](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L278)

___

### startTransaction

▸ **startTransaction**(): [*TransactionalDataset*](../interfaces/transactionaldataset.md)<InAndOutQuad\>

Starts a new transaction with this transactional dataset as the parent

**Returns:** [*TransactionalDataset*](../interfaces/transactionaldataset.md)<InAndOutQuad\>

Defined in: [lib/ProxyTransactionalDataset.ts:341](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ProxyTransactionalDataset.ts#L341)

___

### toArray

▸ **toArray**(): InAndOutQuad[]

Returns the set of quads within the dataset as a host language native sequence, for example an Array in ECMAScript-262.
Note: Since a DatasetCore is an unordered set, the order of the quads within the returned sequence is arbitrary.

**Returns:** InAndOutQuad[]

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Inherited from: [ExtendedDataset](extendeddataset.md)

Defined in: [lib/ExtendedDataset.ts:296](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L296)

___

### toCanonical

▸ **toCanonical**(): *string*

Returns an N-Quads string representation of the dataset, preprocessed with RDF Dataset Normalization algorithm.

**Returns:** *string*

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Inherited from: [ExtendedDataset](extendeddataset.md)

Defined in: [lib/ExtendedDataset.ts:307](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L307)

___

### toStream

▸ **toStream**(): *Stream*<InAndOutQuad\>

Returns a stream that contains all quads of the dataset.

**Returns:** *Stream*<InAndOutQuad\>

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Inherited from: [ExtendedDataset](extendeddataset.md)

Defined in: [lib/ExtendedDataset.ts:314](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L314)

___

### toString

▸ **toString**(): *string*

Returns an N-Quads string representation of the dataset.
No prior normalization is required, therefore the results for the same quads may vary depending on the Dataset implementation.

**Returns:** *string*

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Inherited from: [ExtendedDataset](extendeddataset.md)

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

Implementation of: [TransactionalDataset](../interfaces/transactionaldataset.md)

Inherited from: [ExtendedDataset](extendeddataset.md)

Defined in: [lib/ExtendedDataset.ts:344](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ExtendedDataset.ts#L344)

___

### updateDatasetChanges

▸ `Private` **updateDatasetChanges**(`changes`: { `added?`: *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[] ; `removed?`: *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[]  }): *void*

Helper method to update the changes made

#### Parameters

| Name | Type |
| :------ | :------ |
| `changes` | *object* |
| `changes.added?` | *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[] |
| `changes.removed?` | *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[] |

**Returns:** *void*

Defined in: [lib/ProxyTransactionalDataset.ts:239](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ProxyTransactionalDataset.ts#L239)

___

### updateParentDataset

▸ `Private` **updateParentDataset**(`datasetChanges`: [*DatasetChanges*](../interfaces/datasetchanges.md)<InAndOutQuad\>): *void*

Helper method to update the parent dataset or any other provided dataset

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetChanges` | [*DatasetChanges*](../interfaces/datasetchanges.md)<InAndOutQuad\> |

**Returns:** *void*

Defined in: [lib/ProxyTransactionalDataset.ts:291](https://github.com/o-development/subscribable-dataset/blob/b0143d9/lib/ProxyTransactionalDataset.ts#L291)
