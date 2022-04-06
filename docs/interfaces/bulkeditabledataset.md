[o-dataset-pack](../README.md) / [Exports](../modules.md) / BulkEditableDataset

# Interface: BulkEditableDataset<InAndOutQuad\>

Adds the bulk method for add and remove

## Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `InAndOutQuad` | BaseQuad | BaseQuad |

## Hierarchy

- *Dataset*<InAndOutQuad, InAndOutQuad\>

  ↳ **BulkEditableDataset**

  ↳↳ [*SubscribableDataset*](subscribabledataset.md)

## Implemented by

- [*ProxyTransactionalDataset*](../classes/proxytransactionaldataset.md)

## Table of contents

### Properties

- [size](bulkeditabledataset.md#size)

### Methods

- [[Symbol.iterator]](bulkeditabledataset.md#[symbol.iterator])
- [add](bulkeditabledataset.md#add)
- [addAll](bulkeditabledataset.md#addall)
- [bulk](bulkeditabledataset.md#bulk)
- [contains](bulkeditabledataset.md#contains)
- [delete](bulkeditabledataset.md#delete)
- [deleteMatches](bulkeditabledataset.md#deletematches)
- [difference](bulkeditabledataset.md#difference)
- [equals](bulkeditabledataset.md#equals)
- [every](bulkeditabledataset.md#every)
- [filter](bulkeditabledataset.md#filter)
- [forEach](bulkeditabledataset.md#foreach)
- [has](bulkeditabledataset.md#has)
- [import](bulkeditabledataset.md#import)
- [intersection](bulkeditabledataset.md#intersection)
- [map](bulkeditabledataset.md#map)
- [match](bulkeditabledataset.md#match)
- [reduce](bulkeditabledataset.md#reduce)
- [some](bulkeditabledataset.md#some)
- [toArray](bulkeditabledataset.md#toarray)
- [toCanonical](bulkeditabledataset.md#tocanonical)
- [toStream](bulkeditabledataset.md#tostream)
- [toString](bulkeditabledataset.md#tostring)
- [union](bulkeditabledataset.md#union)

## Properties

### size

• `Readonly` **size**: *number*

A non-negative integer that specifies the number of quads in the set.

Inherited from: Dataset.size

Defined in: node_modules/@rdfjs/types/dataset.d.ts:11

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<InAndOutQuad, any, undefined\>

**Returns:** *Iterator*<InAndOutQuad, any, undefined\>

Inherited from: Dataset.\_\_@iterator

Defined in: node_modules/@rdfjs/types/dataset.d.ts:47

___

### add

▸ **add**(`quad`: InAndOutQuad): [*BulkEditableDataset*](bulkeditabledataset.md)<InAndOutQuad\>

Adds the specified quad to the dataset.

Existing quads, as defined in `Quad.equals`, will be ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | InAndOutQuad |

**Returns:** [*BulkEditableDataset*](bulkeditabledataset.md)<InAndOutQuad\>

Inherited from: Dataset.add

Defined in: node_modules/@rdfjs/types/dataset.d.ts:18

___

### addAll

▸ **addAll**(`quads`: *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[]): [*BulkEditableDataset*](bulkeditabledataset.md)<InAndOutQuad\>

Imports the quads into this dataset.

This method differs from `Dataset.union` in that it adds all `quads` to the current instance, rather than
combining `quads` and the current instance to create a new instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads` | *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[] |

**Returns:** [*BulkEditableDataset*](bulkeditabledataset.md)<InAndOutQuad\>

Inherited from: Dataset.addAll

Defined in: node_modules/@rdfjs/types/dataset.d.ts:64

___

### bulk

▸ **bulk**(`changes`: [*DatasetChanges*](datasetchanges.md)<InAndOutQuad\>): [*BulkEditableDataset*](bulkeditabledataset.md)<InAndOutQuad\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `changes` | [*DatasetChanges*](datasetchanges.md)<InAndOutQuad\> |

**Returns:** [*BulkEditableDataset*](bulkeditabledataset.md)<InAndOutQuad\>

Defined in: [lib/types.ts:34](https://github.com/o-development/o-dataset-pack/blob/631ca3e/lib/types.ts#L34)

___

### contains

▸ **contains**(`other`: *Dataset*<InAndOutQuad, InAndOutQuad\>): *boolean*

Returns `true` if the current instance is a superset of the given dataset; differently put: if the given dataset
is a subset of, is contained in the current dataset.

Blank Nodes will be normalized.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | *Dataset*<InAndOutQuad, InAndOutQuad\> |

**Returns:** *boolean*

Inherited from: Dataset.contains

Defined in: node_modules/@rdfjs/types/dataset.d.ts:72

___

### delete

▸ **delete**(`quad`: InAndOutQuad): [*BulkEditableDataset*](bulkeditabledataset.md)<InAndOutQuad\>

Removes the specified quad from the dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | InAndOutQuad |

**Returns:** [*BulkEditableDataset*](bulkeditabledataset.md)<InAndOutQuad\>

Inherited from: Dataset.delete

Defined in: node_modules/@rdfjs/types/dataset.d.ts:23

___

### deleteMatches

▸ **deleteMatches**(`subject?`: Term, `predicate?`: Term, `object?`: Term, `graph?`: Term): [*BulkEditableDataset*](bulkeditabledataset.md)<InAndOutQuad\>

This method removes the quads in the current instance that match the given arguments.

The logic described in [Quad Matching](https://rdf.js.org/dataset-spec/#quad-matching) is applied for each
quad in this dataset to select the quads which will be deleted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subject?` | Term | The optional exact subject to match. |
| `predicate?` | Term | The optional exact predicate to match. |
| `object?` | Term | The optional exact object to match. |
| `graph?` | Term | The optional exact graph to match. |

**Returns:** [*BulkEditableDataset*](bulkeditabledataset.md)<InAndOutQuad\>

Inherited from: Dataset.deleteMatches

Defined in: node_modules/@rdfjs/types/dataset.d.ts:85

___

### difference

▸ **difference**(`other`: *Dataset*<InAndOutQuad, InAndOutQuad\>): *Dataset*<InAndOutQuad, InAndOutQuad\>

Returns a new dataset that contains all quads from the current dataset, not included in the given dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | *Dataset*<InAndOutQuad, InAndOutQuad\> |

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

Inherited from: Dataset.difference

Defined in: node_modules/@rdfjs/types/dataset.d.ts:90

___

### equals

▸ **equals**(`other`: *Dataset*<InAndOutQuad, InAndOutQuad\>): *boolean*

Returns true if the current instance contains the same graph structure as the given dataset.

Blank Nodes will be normalized.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | *Dataset*<InAndOutQuad, InAndOutQuad\> |

**Returns:** *boolean*

Inherited from: Dataset.equals

Defined in: node_modules/@rdfjs/types/dataset.d.ts:97

___

### every

▸ **every**(`iteratee`: (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => *boolean*): *boolean*

Universal quantification method, tests whether every quad in the dataset passes the test implemented by the
provided `iteratee`.

This method immediately returns boolean `false` once a quad that does not pass the test is found.

This method always returns boolean `true` on an empty dataset.

This method is aligned with `Array.prototype.every()` in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => *boolean* |

**Returns:** *boolean*

Inherited from: Dataset.every

Defined in: node_modules/@rdfjs/types/dataset.d.ts:109

___

### filter

▸ **filter**(`iteratee`: (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => *boolean*): *Dataset*<InAndOutQuad, InAndOutQuad\>

Creates a new dataset with all the quads that pass the test implemented by the provided `iteratee`.

This method is aligned with Array.prototype.filter() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => *boolean* |

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

Inherited from: Dataset.filter

Defined in: node_modules/@rdfjs/types/dataset.d.ts:116

___

### forEach

▸ **forEach**(`iteratee`: (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => *void*): *void*

Executes the provided `iteratee` once on each quad in the dataset.

This method is aligned with `Array.prototype.forEach()` in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => *void* |

**Returns:** *void*

Inherited from: Dataset.forEach

Defined in: node_modules/@rdfjs/types/dataset.d.ts:123

___

### has

▸ **has**(`quad`: InAndOutQuad): *boolean*

Determines whether a dataset includes a certain quad.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | InAndOutQuad |

**Returns:** *boolean*

Inherited from: Dataset.has

Defined in: node_modules/@rdfjs/types/dataset.d.ts:28

___

### import

▸ **import**(`stream`: *Stream*<InAndOutQuad\>): *Promise*<[*BulkEditableDataset*](bulkeditabledataset.md)<InAndOutQuad\>\>

Imports all quads from the given stream into the dataset.

The stream events `end` and `error` are wrapped in a Promise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | *Stream*<InAndOutQuad\> |

**Returns:** *Promise*<[*BulkEditableDataset*](bulkeditabledataset.md)<InAndOutQuad\>\>

Inherited from: Dataset.import

Defined in: node_modules/@rdfjs/types/dataset.d.ts:130

___

### intersection

▸ **intersection**(`other`: *Dataset*<InAndOutQuad, InAndOutQuad\>): *Dataset*<InAndOutQuad, InAndOutQuad\>

Returns a new dataset containing alls quads from the current dataset that are also included in the given dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | *Dataset*<InAndOutQuad, InAndOutQuad\> |

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

Inherited from: Dataset.intersection

Defined in: node_modules/@rdfjs/types/dataset.d.ts:135

___

### map

▸ **map**(`iteratee`: (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => InAndOutQuad): *Dataset*<InAndOutQuad, InAndOutQuad\>

Returns a new dataset containing all quads returned by applying `iteratee` to each quad in the current dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => InAndOutQuad |

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

Inherited from: Dataset.map

Defined in: node_modules/@rdfjs/types/dataset.d.ts:140

___

### match

▸ **match**(`subject?`: ``null`` \| Term, `predicate?`: ``null`` \| Term, `object?`: ``null`` \| Term, `graph?`: ``null`` \| Term): *Dataset*<InAndOutQuad, InAndOutQuad\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `subject?` | ``null`` \| Term |
| `predicate?` | ``null`` \| Term |
| `object?` | ``null`` \| Term |
| `graph?` | ``null`` \| Term |

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

Inherited from: Dataset.match

Defined in: node_modules/@rdfjs/types/dataset.d.ts:195

___

### reduce

▸ **reduce**<A\>(`iteratee`: (`accumulator`: A, `quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => A, `initialValue?`: A): A

This method calls the `iteratee` on each `quad` of the `Dataset`. The first time the `iteratee` is called, the
`accumulator` value is the `initialValue` or, if not given, equals to the first quad of the `Dataset`. The return
value of the `iteratee` is used as `accumulator` value for the next calls.

This method returns the return value of the last `iteratee` call.

This method is aligned with `Array.prototype.reduce()` in ECMAScript-262.

#### Type parameters

| Name | Default |
| :------ | :------ |
| `A` | *any* |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`accumulator`: A, `quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => A |
| `initialValue?` | A |

**Returns:** A

Inherited from: Dataset.reduce

Defined in: node_modules/@rdfjs/types/dataset.d.ts:151

___

### some

▸ **some**(`iteratee`: (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => *boolean*): *boolean*

Existential quantification method, tests whether some quads in the dataset pass the test implemented by the
provided `iteratee`.

This method immediately returns boolean `true` once a quad that passes the test is found.

This method is aligned with `Array.prototype.some()` in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => *boolean* |

**Returns:** *boolean*

Inherited from: Dataset.some

Defined in: node_modules/@rdfjs/types/dataset.d.ts:161

___

### toArray

▸ **toArray**(): InAndOutQuad[]

Returns the set of quads within the dataset as a host language native sequence, for example an `Array` in
ECMAScript-262.

Since a `Dataset` is an unordered set, the order of the quads within the returned sequence is arbitrary.

**Returns:** InAndOutQuad[]

Inherited from: Dataset.toArray

Defined in: node_modules/@rdfjs/types/dataset.d.ts:169

___

### toCanonical

▸ **toCanonical**(): *string*

Returns an N-Quads string representation of the dataset, preprocessed with
[RDF Dataset Normalization](https://json-ld.github.io/normalization/spec/) algorithm.

**Returns:** *string*

Inherited from: Dataset.toCanonical

Defined in: node_modules/@rdfjs/types/dataset.d.ts:175

___

### toStream

▸ **toStream**(): *Stream*<InAndOutQuad\>

Returns a stream that contains all quads of the dataset.

**Returns:** *Stream*<InAndOutQuad\>

Inherited from: Dataset.toStream

Defined in: node_modules/@rdfjs/types/dataset.d.ts:180

___

### toString

▸ **toString**(): *string*

Returns an N-Quads string representation of the dataset.

No prior normalization is required, therefore the results for the same quads may vary depending on the `Dataset`
implementation.

**Returns:** *string*

Inherited from: Dataset.toString

Defined in: node_modules/@rdfjs/types/dataset.d.ts:188

___

### union

▸ **union**(`quads`: *Dataset*<InAndOutQuad, InAndOutQuad\>): *Dataset*<InAndOutQuad, InAndOutQuad\>

Returns a new `Dataset` that is a concatenation of this dataset and the quads given as an argument.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads` | *Dataset*<InAndOutQuad, InAndOutQuad\> |

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

Inherited from: Dataset.union

Defined in: node_modules/@rdfjs/types/dataset.d.ts:193
