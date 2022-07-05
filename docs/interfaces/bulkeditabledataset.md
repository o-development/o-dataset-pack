[o-dataset-pack](../README.md) / [Exports](../modules.md) / BulkEditableDataset

# Interface: BulkEditableDataset<InAndOutQuad\>

Adds the bulk method for add and remove

## Type parameters

| Name | Type |
| :------ | :------ |
| `InAndOutQuad` | extends `BaseQuad` = `BaseQuad` |

## Hierarchy

- `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

  ↳ **`BulkEditableDataset`**

  ↳↳ [`SubscribableDataset`](SubscribableDataset.md)

## Implemented by

- [`ProxyTransactionalDataset`](../classes/ProxyTransactionalDataset.md)

## Table of contents

### Properties

- [size](BulkEditableDataset.md#size)

### Methods

- [[iterator]](BulkEditableDataset.md#[iterator])
- [add](BulkEditableDataset.md#add)
- [addAll](BulkEditableDataset.md#addall)
- [bulk](BulkEditableDataset.md#bulk)
- [contains](BulkEditableDataset.md#contains)
- [delete](BulkEditableDataset.md#delete)
- [deleteMatches](BulkEditableDataset.md#deletematches)
- [difference](BulkEditableDataset.md#difference)
- [equals](BulkEditableDataset.md#equals)
- [every](BulkEditableDataset.md#every)
- [filter](BulkEditableDataset.md#filter)
- [forEach](BulkEditableDataset.md#foreach)
- [has](BulkEditableDataset.md#has)
- [import](BulkEditableDataset.md#import)
- [intersection](BulkEditableDataset.md#intersection)
- [map](BulkEditableDataset.md#map)
- [match](BulkEditableDataset.md#match)
- [reduce](BulkEditableDataset.md#reduce)
- [some](BulkEditableDataset.md#some)
- [toArray](BulkEditableDataset.md#toarray)
- [toCanonical](BulkEditableDataset.md#tocanonical)
- [toStream](BulkEditableDataset.md#tostream)
- [toString](BulkEditableDataset.md#tostring)
- [union](BulkEditableDataset.md#union)

## Properties

### size

• `Readonly` **size**: `number`

A non-negative integer that specifies the number of quads in the set.

#### Inherited from

Dataset.size

#### Defined in

node_modules/@rdfjs/types/dataset.d.ts:11

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<`InAndOutQuad`, `any`, `undefined`\>

#### Returns

`Iterator`<`InAndOutQuad`, `any`, `undefined`\>

#### Inherited from

Dataset.\_\_@iterator@87

___

### add

▸ **add**(`quad`): [`BulkEditableDataset`](BulkEditableDataset.md)<`InAndOutQuad`\>

Adds the specified quad to the dataset.

Existing quads, as defined in `Quad.equals`, will be ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | `InAndOutQuad` |

#### Returns

[`BulkEditableDataset`](BulkEditableDataset.md)<`InAndOutQuad`\>

#### Inherited from

Dataset.add

___

### addAll

▸ **addAll**(`quads`): [`BulkEditableDataset`](BulkEditableDataset.md)<`InAndOutQuad`\>

Imports the quads into this dataset.

This method differs from `Dataset.union` in that it adds all `quads` to the current instance, rather than
combining `quads` and the current instance to create a new instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> \| `InAndOutQuad`[] |

#### Returns

[`BulkEditableDataset`](BulkEditableDataset.md)<`InAndOutQuad`\>

#### Inherited from

Dataset.addAll

___

### bulk

▸ **bulk**(`changes`): [`BulkEditableDataset`](BulkEditableDataset.md)<`InAndOutQuad`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `changes` | [`DatasetChanges`](DatasetChanges.md)<`InAndOutQuad`\> |

#### Returns

[`BulkEditableDataset`](BulkEditableDataset.md)<`InAndOutQuad`\>

___

### contains

▸ **contains**(`other`): `boolean`

Returns `true` if the current instance is a superset of the given dataset; differently put: if the given dataset
is a subset of, is contained in the current dataset.

Blank Nodes will be normalized.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> |

#### Returns

`boolean`

#### Inherited from

Dataset.contains

___

### delete

▸ **delete**(`quad`): [`BulkEditableDataset`](BulkEditableDataset.md)<`InAndOutQuad`\>

Removes the specified quad from the dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | `InAndOutQuad` |

#### Returns

[`BulkEditableDataset`](BulkEditableDataset.md)<`InAndOutQuad`\>

#### Inherited from

Dataset.delete

___

### deleteMatches

▸ **deleteMatches**(`subject?`, `predicate?`, `object?`, `graph?`): [`BulkEditableDataset`](BulkEditableDataset.md)<`InAndOutQuad`\>

This method removes the quads in the current instance that match the given arguments.

The logic described in [Quad Matching](https://rdf.js.org/dataset-spec/#quad-matching) is applied for each
quad in this dataset to select the quads which will be deleted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subject?` | `Term` | The optional exact subject to match. |
| `predicate?` | `Term` | The optional exact predicate to match. |
| `object?` | `Term` | The optional exact object to match. |
| `graph?` | `Term` | The optional exact graph to match. |

#### Returns

[`BulkEditableDataset`](BulkEditableDataset.md)<`InAndOutQuad`\>

#### Inherited from

Dataset.deleteMatches

___

### difference

▸ **difference**(`other`): `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

Returns a new dataset that contains all quads from the current dataset, not included in the given dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> |

#### Returns

`Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

#### Inherited from

Dataset.difference

___

### equals

▸ **equals**(`other`): `boolean`

Returns true if the current instance contains the same graph structure as the given dataset.

Blank Nodes will be normalized.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> |

#### Returns

`boolean`

#### Inherited from

Dataset.equals

___

### every

▸ **every**(`iteratee`): `boolean`

Universal quantification method, tests whether every quad in the dataset passes the test implemented by the
provided `iteratee`.

This method immediately returns boolean `false` once a quad that does not pass the test is found.

This method always returns boolean `true` on an empty dataset.

This method is aligned with `Array.prototype.every()` in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`BulkEditableDataset`](BulkEditableDataset.md)<`InAndOutQuad`\>) => `boolean` |

#### Returns

`boolean`

#### Inherited from

Dataset.every

___

### filter

▸ **filter**(`iteratee`): `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

Creates a new dataset with all the quads that pass the test implemented by the provided `iteratee`.

This method is aligned with Array.prototype.filter() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`BulkEditableDataset`](BulkEditableDataset.md)<`InAndOutQuad`\>) => `boolean` |

#### Returns

`Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

#### Inherited from

Dataset.filter

___

### forEach

▸ **forEach**(`callback`): `void`

Executes the provided `iteratee` once on each quad in the dataset.

This method is aligned with `Array.prototype.forEach()` in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`quad`: `InAndOutQuad`, `dataset`: [`BulkEditableDataset`](BulkEditableDataset.md)<`InAndOutQuad`\>) => `void` |

#### Returns

`void`

#### Inherited from

Dataset.forEach

___

### has

▸ **has**(`quad`): `boolean`

Determines whether a dataset includes a certain quad.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | `InAndOutQuad` |

#### Returns

`boolean`

#### Inherited from

Dataset.has

___

### import

▸ **import**(`stream`): `Promise`<[`BulkEditableDataset`](BulkEditableDataset.md)<`InAndOutQuad`\>\>

Imports all quads from the given stream into the dataset.

The stream events `end` and `error` are wrapped in a Promise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `Stream`<`InAndOutQuad`\> |

#### Returns

`Promise`<[`BulkEditableDataset`](BulkEditableDataset.md)<`InAndOutQuad`\>\>

#### Inherited from

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

#### Inherited from

Dataset.intersection

___

### map

▸ **map**(`iteratee`): `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

Returns a new dataset containing all quads returned by applying `iteratee` to each quad in the current dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>) => `InAndOutQuad` |

#### Returns

`Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

#### Inherited from

Dataset.map

___

### match

▸ **match**(`subject?`, `predicate?`, `object?`, `graph?`): `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `subject?` | ``null`` \| `Term` |
| `predicate?` | ``null`` \| `Term` |
| `object?` | ``null`` \| `Term` |
| `graph?` | ``null`` \| `Term` |

#### Returns

`Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

#### Inherited from

Dataset.match

___

### reduce

▸ **reduce**<`A`\>(`callback`, `initialValue?`): `A`

This method calls the `iteratee` on each `quad` of the `Dataset`. The first time the `iteratee` is called, the
`accumulator` value is the `initialValue` or, if not given, equals to the first quad of the `Dataset`. The return
value of the `iteratee` is used as `accumulator` value for the next calls.

This method returns the return value of the last `iteratee` call.

This method is aligned with `Array.prototype.reduce()` in ECMAScript-262.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`accumulator`: `A`, `quad`: `InAndOutQuad`, `dataset`: [`BulkEditableDataset`](BulkEditableDataset.md)<`InAndOutQuad`\>) => `A` |
| `initialValue?` | `A` |

#### Returns

`A`

#### Inherited from

Dataset.reduce

___

### some

▸ **some**(`iteratee`): `boolean`

Existential quantification method, tests whether some quads in the dataset pass the test implemented by the
provided `iteratee`.

This method immediately returns boolean `true` once a quad that passes the test is found.

This method is aligned with `Array.prototype.some()` in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`BulkEditableDataset`](BulkEditableDataset.md)<`InAndOutQuad`\>) => `boolean` |

#### Returns

`boolean`

#### Inherited from

Dataset.some

___

### toArray

▸ **toArray**(): `InAndOutQuad`[]

Returns the set of quads within the dataset as a host language native sequence, for example an `Array` in
ECMAScript-262.

Since a `Dataset` is an unordered set, the order of the quads within the returned sequence is arbitrary.

#### Returns

`InAndOutQuad`[]

#### Inherited from

Dataset.toArray

___

### toCanonical

▸ **toCanonical**(): `string`

Returns an N-Quads string representation of the dataset, preprocessed with
[RDF Dataset Normalization](https://json-ld.github.io/normalization/spec/) algorithm.

#### Returns

`string`

#### Inherited from

Dataset.toCanonical

___

### toStream

▸ **toStream**(): `Stream`<`InAndOutQuad`\>

Returns a stream that contains all quads of the dataset.

#### Returns

`Stream`<`InAndOutQuad`\>

#### Inherited from

Dataset.toStream

___

### toString

▸ **toString**(): `string`

Returns an N-Quads string representation of the dataset.

No prior normalization is required, therefore the results for the same quads may vary depending on the `Dataset`
implementation.

#### Returns

`string`

#### Inherited from

Dataset.toString

___

### union

▸ **union**(`quads`): `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

Returns a new `Dataset` that is a concatenation of this dataset and the quads given as an argument.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> |

#### Returns

`Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

#### Inherited from

Dataset.union
