[o-dataset-pack](../README.md) / [Exports](../modules.md) / SubscribableDataset

# Interface: SubscribableDataset<InAndOutQuad\>

Dataset that allows developers to subscribe to a sepecific term and be alerted
if a quad is added or removed containing that term. It's methods follow the
EventEmitter interface except take in namedNodes as keys.

## Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `InAndOutQuad` | BaseQuad | BaseQuad |

## Hierarchy

- [*BulkEditableDataset*](bulkeditabledataset.md)<InAndOutQuad\>

  ↳ **SubscribableDataset**

## Implemented by

- [*WrapperSubscribableDataset*](../classes/wrappersubscribabledataset.md)

## Table of contents

### Properties

- [size](subscribabledataset.md#size)

### Methods

- [[Symbol.iterator]](subscribabledataset.md#[symbol.iterator])
- [add](subscribabledataset.md#add)
- [addAll](subscribabledataset.md#addall)
- [addListener](subscribabledataset.md#addlistener)
- [bulk](subscribabledataset.md#bulk)
- [contains](subscribabledataset.md#contains)
- [delete](subscribabledataset.md#delete)
- [deleteMatches](subscribabledataset.md#deletematches)
- [difference](subscribabledataset.md#difference)
- [emit](subscribabledataset.md#emit)
- [equals](subscribabledataset.md#equals)
- [eventNames](subscribabledataset.md#eventnames)
- [every](subscribabledataset.md#every)
- [filter](subscribabledataset.md#filter)
- [forEach](subscribabledataset.md#foreach)
- [getMaxListeners](subscribabledataset.md#getmaxlisteners)
- [has](subscribabledataset.md#has)
- [import](subscribabledataset.md#import)
- [intersection](subscribabledataset.md#intersection)
- [listenerCount](subscribabledataset.md#listenercount)
- [listeners](subscribabledataset.md#listeners)
- [map](subscribabledataset.md#map)
- [match](subscribabledataset.md#match)
- [off](subscribabledataset.md#off)
- [on](subscribabledataset.md#on)
- [once](subscribabledataset.md#once)
- [prependListener](subscribabledataset.md#prependlistener)
- [prependOnceListener](subscribabledataset.md#prependoncelistener)
- [rawListeners](subscribabledataset.md#rawlisteners)
- [reduce](subscribabledataset.md#reduce)
- [removeAllListeners](subscribabledataset.md#removealllisteners)
- [removeListener](subscribabledataset.md#removelistener)
- [setMaxListeners](subscribabledataset.md#setmaxlisteners)
- [some](subscribabledataset.md#some)
- [startTransaction](subscribabledataset.md#starttransaction)
- [toArray](subscribabledataset.md#toarray)
- [toCanonical](subscribabledataset.md#tocanonical)
- [toStream](subscribabledataset.md#tostream)
- [toString](subscribabledataset.md#tostring)
- [union](subscribabledataset.md#union)

## Properties

### size

• `Readonly` **size**: *number*

A non-negative integer that specifies the number of quads in the set.

Inherited from: [BulkEditableDataset](bulkeditabledataset.md).[size](bulkeditabledataset.md#size)

Defined in: node_modules/@rdfjs/types/dataset.d.ts:11

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<InAndOutQuad, any, undefined\>

**Returns:** *Iterator*<InAndOutQuad, any, undefined\>

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

Defined in: node_modules/@rdfjs/types/dataset.d.ts:47

___

### add

▸ **add**(`quad`: InAndOutQuad): [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Adds the specified quad to the dataset.

Existing quads, as defined in `Quad.equals`, will be ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | InAndOutQuad |

**Returns:** [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

Defined in: node_modules/@rdfjs/types/dataset.d.ts:18

___

### addAll

▸ **addAll**(`quads`: *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[]): [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Imports the quads into this dataset.

This method differs from `Dataset.union` in that it adds all `quads` to the current instance, rather than
combining `quads` and the current instance to create a new instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads` | *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[] |

**Returns:** [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

Defined in: node_modules/@rdfjs/types/dataset.d.ts:64

___

### addListener

▸ **addListener**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms), `listener`: [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>): [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Alias for emitter.on(eventName, listener).

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |
| `listener` | [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\> |

**Returns:** [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Defined in: [lib/types.ts:59](https://github.com/o-development/o-dataset-pack/blob/631ca3e/lib/types.ts#L59)

___

### bulk

▸ **bulk**(`changes`: [*DatasetChanges*](datasetchanges.md)<InAndOutQuad\>): [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `changes` | [*DatasetChanges*](datasetchanges.md)<InAndOutQuad\> |

**Returns:** [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

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

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

Defined in: node_modules/@rdfjs/types/dataset.d.ts:72

___

### delete

▸ **delete**(`quad`: InAndOutQuad): [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Removes the specified quad from the dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | InAndOutQuad |

**Returns:** [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

Defined in: node_modules/@rdfjs/types/dataset.d.ts:23

___

### deleteMatches

▸ **deleteMatches**(`subject?`: Term, `predicate?`: Term, `object?`: Term, `graph?`: Term): [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

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

**Returns:** [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

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

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

Defined in: node_modules/@rdfjs/types/dataset.d.ts:90

___

### emit

▸ **emit**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms), `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>, `datasetChanges`: [*DatasetChanges*](datasetchanges.md)<InAndOutQuad\>): *boolean*

Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |
| `dataset` | *Dataset*<InAndOutQuad, InAndOutQuad\> |
| `datasetChanges` | [*DatasetChanges*](datasetchanges.md)<InAndOutQuad\> |

**Returns:** *boolean*

true if the event had listeners, false otherwise.

Defined in: [lib/types.ts:71](https://github.com/o-development/o-dataset-pack/blob/631ca3e/lib/types.ts#L71)

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

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

Defined in: node_modules/@rdfjs/types/dataset.d.ts:97

___

### eventNames

▸ **eventNames**(): [*SubscribableTerms*](../modules.md#subscribableterms)[]

Returns an array listing the events for which the emitter has registered listeners. The values in the array are strings or Symbols.

**Returns:** [*SubscribableTerms*](../modules.md#subscribableterms)[]

Defined in: [lib/types.ts:80](https://github.com/o-development/o-dataset-pack/blob/631ca3e/lib/types.ts#L80)

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

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

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

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

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

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

Defined in: node_modules/@rdfjs/types/dataset.d.ts:123

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

Returns the current max listener value for the EventEmitter which is either set by emitter.setMaxListeners(n) or defaults to events.defaultMaxListeners.

**Returns:** *number*

Defined in: [lib/types.ts:85](https://github.com/o-development/o-dataset-pack/blob/631ca3e/lib/types.ts#L85)

___

### has

▸ **has**(`quad`: InAndOutQuad): *boolean*

Determines whether a dataset includes a certain quad.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | InAndOutQuad |

**Returns:** *boolean*

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

Defined in: node_modules/@rdfjs/types/dataset.d.ts:28

___

### import

▸ **import**(`stream`: *Stream*<InAndOutQuad\>): *Promise*<[*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>\>

Imports all quads from the given stream into the dataset.

The stream events `end` and `error` are wrapped in a Promise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | *Stream*<InAndOutQuad\> |

**Returns:** *Promise*<[*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>\>

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

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

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

Defined in: node_modules/@rdfjs/types/dataset.d.ts:135

___

### listenerCount

▸ **listenerCount**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms)): *number*

Returns the number of listeners listening to the event named eventName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |

**Returns:** *number*

Defined in: [lib/types.ts:90](https://github.com/o-development/o-dataset-pack/blob/631ca3e/lib/types.ts#L90)

___

### listeners

▸ **listeners**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms)): [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>[]

Returns a copy of the array of listeners for the event named eventName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |

**Returns:** [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>[]

Defined in: [lib/types.ts:95](https://github.com/o-development/o-dataset-pack/blob/631ca3e/lib/types.ts#L95)

___

### map

▸ **map**(`iteratee`: (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => InAndOutQuad): *Dataset*<InAndOutQuad, InAndOutQuad\>

Returns a new dataset containing all quads returned by applying `iteratee` to each quad in the current dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: InAndOutQuad, `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>) => InAndOutQuad |

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

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

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

Defined in: node_modules/@rdfjs/types/dataset.d.ts:195

___

### off

▸ **off**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms), `listener`: [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>): *void*

Alias for emitter.removeListener()

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |
| `listener` | [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\> |

**Returns:** *void*

Defined in: [lib/types.ts:100](https://github.com/o-development/o-dataset-pack/blob/631ca3e/lib/types.ts#L100)

___

### on

▸ **on**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms), `listener`: [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>): [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Adds the listener function to the end of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |
| `listener` | [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\> |

**Returns:** [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Defined in: [lib/types.ts:108](https://github.com/o-development/o-dataset-pack/blob/631ca3e/lib/types.ts#L108)

___

### once

▸ **once**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms), `listener`: [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>): [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Adds a one-time listener function for the event named eventName. The next time eventName is triggered, this listener is removed and then invoked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |
| `listener` | [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\> |

**Returns:** [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Defined in: [lib/types.ts:116](https://github.com/o-development/o-dataset-pack/blob/631ca3e/lib/types.ts#L116)

___

### prependListener

▸ **prependListener**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms), `listener`: [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>): [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Adds the listener function to the beginning of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |
| `listener` | [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\> |

**Returns:** [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Defined in: [lib/types.ts:124](https://github.com/o-development/o-dataset-pack/blob/631ca3e/lib/types.ts#L124)

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms), `listener`: [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>): [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Adds a one-time listener function for the event named eventName to the beginning of the listeners array. The next time eventName is triggered, this listener is removed, and then invoked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |
| `listener` | [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\> |

**Returns:** [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Defined in: [lib/types.ts:132](https://github.com/o-development/o-dataset-pack/blob/631ca3e/lib/types.ts#L132)

___

### rawListeners

▸ **rawListeners**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms)): [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>[]

Returns a copy of the array of listeners for the event named eventName, including any wrappers (such as those created by .once()).

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |

**Returns:** [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>[]

Defined in: [lib/types.ts:158](https://github.com/o-development/o-dataset-pack/blob/631ca3e/lib/types.ts#L158)

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

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

Defined in: node_modules/@rdfjs/types/dataset.d.ts:151

___

### removeAllListeners

▸ **removeAllListeners**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms)): [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Removes all listeners, or those of the specified eventName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |

**Returns:** [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Defined in: [lib/types.ts:140](https://github.com/o-development/o-dataset-pack/blob/631ca3e/lib/types.ts#L140)

___

### removeListener

▸ **removeListener**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms), `listener`: [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>): [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Removes the specified listener from the listener array for the event named eventName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |
| `listener` | [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\> |

**Returns:** [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Defined in: [lib/types.ts:145](https://github.com/o-development/o-dataset-pack/blob/631ca3e/lib/types.ts#L145)

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

By default EventEmitters will print a warning if more than 10 listeners are added for a particular event. This is a useful default that helps finding memory leaks. The emitter.setMaxListeners() method allows the limit to be modified for this specific EventEmitter instance. The value can be set to Infinity (or 0) to indicate an unlimited number of listeners.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | *number* |

**Returns:** [*SubscribableDataset*](subscribabledataset.md)<InAndOutQuad\>

Defined in: [lib/types.ts:153](https://github.com/o-development/o-dataset-pack/blob/631ca3e/lib/types.ts#L153)

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

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

Defined in: node_modules/@rdfjs/types/dataset.d.ts:161

___

### startTransaction

▸ **startTransaction**(): [*TransactionalDataset*](transactionaldataset.md)<InAndOutQuad\>

Returns a transactional dataset that will update this dataset when its transaction is committed.

**Returns:** [*TransactionalDataset*](transactionaldataset.md)<InAndOutQuad\>

Defined in: [lib/types.ts:169](https://github.com/o-development/o-dataset-pack/blob/631ca3e/lib/types.ts#L169)

___

### toArray

▸ **toArray**(): InAndOutQuad[]

Returns the set of quads within the dataset as a host language native sequence, for example an `Array` in
ECMAScript-262.

Since a `Dataset` is an unordered set, the order of the quads within the returned sequence is arbitrary.

**Returns:** InAndOutQuad[]

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

Defined in: node_modules/@rdfjs/types/dataset.d.ts:169

___

### toCanonical

▸ **toCanonical**(): *string*

Returns an N-Quads string representation of the dataset, preprocessed with
[RDF Dataset Normalization](https://json-ld.github.io/normalization/spec/) algorithm.

**Returns:** *string*

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

Defined in: node_modules/@rdfjs/types/dataset.d.ts:175

___

### toStream

▸ **toStream**(): *Stream*<InAndOutQuad\>

Returns a stream that contains all quads of the dataset.

**Returns:** *Stream*<InAndOutQuad\>

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

Defined in: node_modules/@rdfjs/types/dataset.d.ts:180

___

### toString

▸ **toString**(): *string*

Returns an N-Quads string representation of the dataset.

No prior normalization is required, therefore the results for the same quads may vary depending on the `Dataset`
implementation.

**Returns:** *string*

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

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

Inherited from: [BulkEditableDataset](bulkeditabledataset.md)

Defined in: node_modules/@rdfjs/types/dataset.d.ts:193
