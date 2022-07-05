[o-dataset-pack](../README.md) / [Exports](../modules.md) / SubscribableDataset

# Interface: SubscribableDataset<InAndOutQuad\>

Dataset that allows developers to subscribe to a sepecific term and be alerted
if a quad is added or removed containing that term. It's methods follow the
EventEmitter interface except take in namedNodes as keys.

## Type parameters

| Name | Type |
| :------ | :------ |
| `InAndOutQuad` | extends `BaseQuad` = `BaseQuad` |

## Hierarchy

- [`BulkEditableDataset`](BulkEditableDataset.md)<`InAndOutQuad`\>

  ↳ **`SubscribableDataset`**

## Implemented by

- [`WrapperSubscribableDataset`](../classes/WrapperSubscribableDataset.md)

## Table of contents

### Properties

- [size](SubscribableDataset.md#size)

### Methods

- [[iterator]](SubscribableDataset.md#[iterator])
- [add](SubscribableDataset.md#add)
- [addAll](SubscribableDataset.md#addall)
- [addListener](SubscribableDataset.md#addlistener)
- [bulk](SubscribableDataset.md#bulk)
- [contains](SubscribableDataset.md#contains)
- [delete](SubscribableDataset.md#delete)
- [deleteMatches](SubscribableDataset.md#deletematches)
- [difference](SubscribableDataset.md#difference)
- [emit](SubscribableDataset.md#emit)
- [equals](SubscribableDataset.md#equals)
- [eventNames](SubscribableDataset.md#eventnames)
- [every](SubscribableDataset.md#every)
- [filter](SubscribableDataset.md#filter)
- [forEach](SubscribableDataset.md#foreach)
- [getMaxListeners](SubscribableDataset.md#getmaxlisteners)
- [has](SubscribableDataset.md#has)
- [import](SubscribableDataset.md#import)
- [intersection](SubscribableDataset.md#intersection)
- [listenerCount](SubscribableDataset.md#listenercount)
- [listeners](SubscribableDataset.md#listeners)
- [map](SubscribableDataset.md#map)
- [match](SubscribableDataset.md#match)
- [off](SubscribableDataset.md#off)
- [on](SubscribableDataset.md#on)
- [once](SubscribableDataset.md#once)
- [prependListener](SubscribableDataset.md#prependlistener)
- [prependOnceListener](SubscribableDataset.md#prependoncelistener)
- [rawListeners](SubscribableDataset.md#rawlisteners)
- [reduce](SubscribableDataset.md#reduce)
- [removeAllListeners](SubscribableDataset.md#removealllisteners)
- [removeListener](SubscribableDataset.md#removelistener)
- [setMaxListeners](SubscribableDataset.md#setmaxlisteners)
- [some](SubscribableDataset.md#some)
- [startTransaction](SubscribableDataset.md#starttransaction)
- [toArray](SubscribableDataset.md#toarray)
- [toCanonical](SubscribableDataset.md#tocanonical)
- [toStream](SubscribableDataset.md#tostream)
- [toString](SubscribableDataset.md#tostring)
- [union](SubscribableDataset.md#union)

## Properties

### size

• `Readonly` **size**: `number`

A non-negative integer that specifies the number of quads in the set.

#### Inherited from

[BulkEditableDataset](BulkEditableDataset.md).[size](BulkEditableDataset.md#size)

#### Defined in

node_modules/@rdfjs/types/dataset.d.ts:11

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<`InAndOutQuad`, `any`, `undefined`\>

#### Returns

`Iterator`<`InAndOutQuad`, `any`, `undefined`\>

#### Inherited from

[BulkEditableDataset](BulkEditableDataset.md).[[iterator]](BulkEditableDataset.md#[iterator])

___

### add

▸ **add**(`quad`): [`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

Adds the specified quad to the dataset.

Existing quads, as defined in `Quad.equals`, will be ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | `InAndOutQuad` |

#### Returns

[`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

#### Inherited from

[BulkEditableDataset](BulkEditableDataset.md).[add](BulkEditableDataset.md#add)

___

### addAll

▸ **addAll**(`quads`): [`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

Imports the quads into this dataset.

This method differs from `Dataset.union` in that it adds all `quads` to the current instance, rather than
combining `quads` and the current instance to create a new instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> \| `InAndOutQuad`[] |

#### Returns

[`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

#### Inherited from

[BulkEditableDataset](BulkEditableDataset.md).[addAll](BulkEditableDataset.md#addall)

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

Alias for emitter.on(eventName, listener).

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`SubscribableTerms`](../modules.md#subscribableterms) |
| `listener` | [`nodeEventListener`](../modules.md#nodeeventlistener)<`InAndOutQuad`\> |

#### Returns

[`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

___

### bulk

▸ **bulk**(`changes`): [`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `changes` | [`DatasetChanges`](DatasetChanges.md)<`InAndOutQuad`\> |

#### Returns

[`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

#### Inherited from

[BulkEditableDataset](BulkEditableDataset.md).[bulk](BulkEditableDataset.md#bulk)

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

[BulkEditableDataset](BulkEditableDataset.md).[contains](BulkEditableDataset.md#contains)

___

### delete

▸ **delete**(`quad`): [`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

Removes the specified quad from the dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | `InAndOutQuad` |

#### Returns

[`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

#### Inherited from

[BulkEditableDataset](BulkEditableDataset.md).[delete](BulkEditableDataset.md#delete)

___

### deleteMatches

▸ **deleteMatches**(`subject?`, `predicate?`, `object?`, `graph?`): [`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

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

[`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

#### Inherited from

[BulkEditableDataset](BulkEditableDataset.md).[deleteMatches](BulkEditableDataset.md#deletematches)

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

[BulkEditableDataset](BulkEditableDataset.md).[difference](BulkEditableDataset.md#difference)

___

### emit

▸ **emit**(`eventName`, `dataset`, `datasetChanges`): `boolean`

Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`SubscribableTerms`](../modules.md#subscribableterms) |
| `dataset` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> |
| `datasetChanges` | [`DatasetChanges`](DatasetChanges.md)<`InAndOutQuad`\> |

#### Returns

`boolean`

true if the event had listeners, false otherwise.

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

[BulkEditableDataset](BulkEditableDataset.md).[equals](BulkEditableDataset.md#equals)

___

### eventNames

▸ **eventNames**(): [`SubscribableTerms`](../modules.md#subscribableterms)[]

Returns an array listing the events for which the emitter has registered listeners. The values in the array are strings or Symbols.

#### Returns

[`SubscribableTerms`](../modules.md#subscribableterms)[]

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
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>) => `boolean` |

#### Returns

`boolean`

#### Inherited from

[BulkEditableDataset](BulkEditableDataset.md).[every](BulkEditableDataset.md#every)

___

### filter

▸ **filter**(`iteratee`): `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

Creates a new dataset with all the quads that pass the test implemented by the provided `iteratee`.

This method is aligned with Array.prototype.filter() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>) => `boolean` |

#### Returns

`Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

#### Inherited from

[BulkEditableDataset](BulkEditableDataset.md).[filter](BulkEditableDataset.md#filter)

___

### forEach

▸ **forEach**(`callback`): `void`

Executes the provided `iteratee` once on each quad in the dataset.

This method is aligned with `Array.prototype.forEach()` in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`quad`: `InAndOutQuad`, `dataset`: [`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>) => `void` |

#### Returns

`void`

#### Inherited from

[BulkEditableDataset](BulkEditableDataset.md).[forEach](BulkEditableDataset.md#foreach)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the EventEmitter which is either set by emitter.setMaxListeners(n) or defaults to events.defaultMaxListeners.

#### Returns

`number`

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

[BulkEditableDataset](BulkEditableDataset.md).[has](BulkEditableDataset.md#has)

___

### import

▸ **import**(`stream`): `Promise`<[`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>\>

Imports all quads from the given stream into the dataset.

The stream events `end` and `error` are wrapped in a Promise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `Stream`<`InAndOutQuad`\> |

#### Returns

`Promise`<[`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>\>

#### Inherited from

[BulkEditableDataset](BulkEditableDataset.md).[import](BulkEditableDataset.md#import)

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

[BulkEditableDataset](BulkEditableDataset.md).[intersection](BulkEditableDataset.md#intersection)

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named eventName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`SubscribableTerms`](../modules.md#subscribableterms) |

#### Returns

`number`

___

### listeners

▸ **listeners**(`eventName`): [`nodeEventListener`](../modules.md#nodeeventlistener)<`InAndOutQuad`\>[]

Returns a copy of the array of listeners for the event named eventName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`SubscribableTerms`](../modules.md#subscribableterms) |

#### Returns

[`nodeEventListener`](../modules.md#nodeeventlistener)<`InAndOutQuad`\>[]

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

[BulkEditableDataset](BulkEditableDataset.md).[map](BulkEditableDataset.md#map)

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

[BulkEditableDataset](BulkEditableDataset.md).[match](BulkEditableDataset.md#match)

___

### off

▸ **off**(`eventName`, `listener`): `void`

Alias for emitter.removeListener()

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`SubscribableTerms`](../modules.md#subscribableterms) |
| `listener` | [`nodeEventListener`](../modules.md#nodeeventlistener)<`InAndOutQuad`\> |

#### Returns

`void`

___

### on

▸ **on**(`eventName`, `listener`): [`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

Adds the listener function to the end of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`SubscribableTerms`](../modules.md#subscribableterms) |
| `listener` | [`nodeEventListener`](../modules.md#nodeeventlistener)<`InAndOutQuad`\> |

#### Returns

[`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

___

### once

▸ **once**(`eventName`, `listener`): [`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

Adds a one-time listener function for the event named eventName. The next time eventName is triggered, this listener is removed and then invoked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`SubscribableTerms`](../modules.md#subscribableterms) |
| `listener` | [`nodeEventListener`](../modules.md#nodeeventlistener)<`InAndOutQuad`\> |

#### Returns

[`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

Adds the listener function to the beginning of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`SubscribableTerms`](../modules.md#subscribableterms) |
| `listener` | [`nodeEventListener`](../modules.md#nodeeventlistener)<`InAndOutQuad`\> |

#### Returns

[`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

Adds a one-time listener function for the event named eventName to the beginning of the listeners array. The next time eventName is triggered, this listener is removed, and then invoked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`SubscribableTerms`](../modules.md#subscribableterms) |
| `listener` | [`nodeEventListener`](../modules.md#nodeeventlistener)<`InAndOutQuad`\> |

#### Returns

[`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

___

### rawListeners

▸ **rawListeners**(`eventName`): [`nodeEventListener`](../modules.md#nodeeventlistener)<`InAndOutQuad`\>[]

Returns a copy of the array of listeners for the event named eventName, including any wrappers (such as those created by .once()).

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`SubscribableTerms`](../modules.md#subscribableterms) |

#### Returns

[`nodeEventListener`](../modules.md#nodeeventlistener)<`InAndOutQuad`\>[]

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
| `callback` | (`accumulator`: `A`, `quad`: `InAndOutQuad`, `dataset`: [`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>) => `A` |
| `initialValue?` | `A` |

#### Returns

`A`

#### Inherited from

[BulkEditableDataset](BulkEditableDataset.md).[reduce](BulkEditableDataset.md#reduce)

___

### removeAllListeners

▸ **removeAllListeners**(`eventName`): [`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

Removes all listeners, or those of the specified eventName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`SubscribableTerms`](../modules.md#subscribableterms) |

#### Returns

[`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

Removes the specified listener from the listener array for the event named eventName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`SubscribableTerms`](../modules.md#subscribableterms) |
| `listener` | [`nodeEventListener`](../modules.md#nodeeventlistener)<`InAndOutQuad`\> |

#### Returns

[`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

By default EventEmitters will print a warning if more than 10 listeners are added for a particular event. This is a useful default that helps finding memory leaks. The emitter.setMaxListeners() method allows the limit to be modified for this specific EventEmitter instance. The value can be set to Infinity (or 0) to indicate an unlimited number of listeners.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>

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
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`SubscribableDataset`](SubscribableDataset.md)<`InAndOutQuad`\>) => `boolean` |

#### Returns

`boolean`

#### Inherited from

[BulkEditableDataset](BulkEditableDataset.md).[some](BulkEditableDataset.md#some)

___

### startTransaction

▸ **startTransaction**(): [`TransactionalDataset`](TransactionalDataset.md)<`InAndOutQuad`\>

Returns a transactional dataset that will update this dataset when its transaction is committed.

#### Returns

[`TransactionalDataset`](TransactionalDataset.md)<`InAndOutQuad`\>

___

### toArray

▸ **toArray**(): `InAndOutQuad`[]

Returns the set of quads within the dataset as a host language native sequence, for example an `Array` in
ECMAScript-262.

Since a `Dataset` is an unordered set, the order of the quads within the returned sequence is arbitrary.

#### Returns

`InAndOutQuad`[]

#### Inherited from

[BulkEditableDataset](BulkEditableDataset.md).[toArray](BulkEditableDataset.md#toarray)

___

### toCanonical

▸ **toCanonical**(): `string`

Returns an N-Quads string representation of the dataset, preprocessed with
[RDF Dataset Normalization](https://json-ld.github.io/normalization/spec/) algorithm.

#### Returns

`string`

#### Inherited from

[BulkEditableDataset](BulkEditableDataset.md).[toCanonical](BulkEditableDataset.md#tocanonical)

___

### toStream

▸ **toStream**(): `Stream`<`InAndOutQuad`\>

Returns a stream that contains all quads of the dataset.

#### Returns

`Stream`<`InAndOutQuad`\>

#### Inherited from

[BulkEditableDataset](BulkEditableDataset.md).[toStream](BulkEditableDataset.md#tostream)

___

### toString

▸ **toString**(): `string`

Returns an N-Quads string representation of the dataset.

No prior normalization is required, therefore the results for the same quads may vary depending on the `Dataset`
implementation.

#### Returns

`string`

#### Inherited from

[BulkEditableDataset](BulkEditableDataset.md).[toString](BulkEditableDataset.md#tostring)

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

[BulkEditableDataset](BulkEditableDataset.md).[union](BulkEditableDataset.md#union)
