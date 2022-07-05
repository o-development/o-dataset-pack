[o-dataset-pack](../README.md) / [Exports](../modules.md) / WrapperSubscribableDataset

# Class: WrapperSubscribableDataset<InAndOutQuad\>

A wrapper for a dataset that allows subscriptions to be made on nodes to
be triggered whenever a quad containing that added or removed.

## Type parameters

| Name | Type |
| :------ | :------ |
| `InAndOutQuad` | extends `BaseQuad` = `BaseQuad` |

## Implements

- [`SubscribableDataset`](../interfaces/SubscribableDataset.md)<`InAndOutQuad`\>

## Table of contents

### Constructors

- [constructor](WrapperSubscribableDataset.md#constructor)

### Properties

- [BLANK\_NODE\_KEY\_PREFIX](WrapperSubscribableDataset.md#blank_node_key_prefix)
- [DEFAULT\_GRAPH\_KEY\_PREFIX](WrapperSubscribableDataset.md#default_graph_key_prefix)
- [NAMED\_NODE\_KEY\_PREFIX](WrapperSubscribableDataset.md#named_node_key_prefix)
- [SUBSCRIBABLE\_TERMS](WrapperSubscribableDataset.md#subscribable_terms)
- [dataset](WrapperSubscribableDataset.md#dataset)
- [datasetFactory](WrapperSubscribableDataset.md#datasetfactory)
- [eventEmitter](WrapperSubscribableDataset.md#eventemitter)

### Accessors

- [size](WrapperSubscribableDataset.md#size)

### Methods

- [[iterator]](WrapperSubscribableDataset.md#[iterator])
- [add](WrapperSubscribableDataset.md#add)
- [addAll](WrapperSubscribableDataset.md#addall)
- [addListener](WrapperSubscribableDataset.md#addlistener)
- [bulk](WrapperSubscribableDataset.md#bulk)
- [contains](WrapperSubscribableDataset.md#contains)
- [delete](WrapperSubscribableDataset.md#delete)
- [deleteMatches](WrapperSubscribableDataset.md#deletematches)
- [difference](WrapperSubscribableDataset.md#difference)
- [emit](WrapperSubscribableDataset.md#emit)
- [equals](WrapperSubscribableDataset.md#equals)
- [eventNames](WrapperSubscribableDataset.md#eventnames)
- [every](WrapperSubscribableDataset.md#every)
- [filter](WrapperSubscribableDataset.md#filter)
- [forEach](WrapperSubscribableDataset.md#foreach)
- [getKeyFromNode](WrapperSubscribableDataset.md#getkeyfromnode)
- [getMaxListeners](WrapperSubscribableDataset.md#getmaxlisteners)
- [getNodeFromKey](WrapperSubscribableDataset.md#getnodefromkey)
- [has](WrapperSubscribableDataset.md#has)
- [import](WrapperSubscribableDataset.md#import)
- [intersection](WrapperSubscribableDataset.md#intersection)
- [listenerCount](WrapperSubscribableDataset.md#listenercount)
- [listeners](WrapperSubscribableDataset.md#listeners)
- [map](WrapperSubscribableDataset.md#map)
- [match](WrapperSubscribableDataset.md#match)
- [off](WrapperSubscribableDataset.md#off)
- [on](WrapperSubscribableDataset.md#on)
- [once](WrapperSubscribableDataset.md#once)
- [prependListener](WrapperSubscribableDataset.md#prependlistener)
- [prependOnceListener](WrapperSubscribableDataset.md#prependoncelistener)
- [rawListeners](WrapperSubscribableDataset.md#rawlisteners)
- [reduce](WrapperSubscribableDataset.md#reduce)
- [removeAllListeners](WrapperSubscribableDataset.md#removealllisteners)
- [removeListener](WrapperSubscribableDataset.md#removelistener)
- [setMaxListeners](WrapperSubscribableDataset.md#setmaxlisteners)
- [some](WrapperSubscribableDataset.md#some)
- [startTransaction](WrapperSubscribableDataset.md#starttransaction)
- [toArray](WrapperSubscribableDataset.md#toarray)
- [toCanonical](WrapperSubscribableDataset.md#tocanonical)
- [toStream](WrapperSubscribableDataset.md#tostream)
- [toString](WrapperSubscribableDataset.md#tostring)
- [triggerSubscriptionForNode](WrapperSubscribableDataset.md#triggersubscriptionfornode)
- [triggerSubscriptionForQuads](WrapperSubscribableDataset.md#triggersubscriptionforquads)
- [union](WrapperSubscribableDataset.md#union)

## Constructors

### constructor

• **new WrapperSubscribableDataset**<`InAndOutQuad`\>(`datasetFactory`, `initialDataset?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InAndOutQuad` | extends `BaseQuad` = `BaseQuad` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetFactory` | `DatasetFactory`<`InAndOutQuad`, `InAndOutQuad`, `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>\> |
| `initialDataset?` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> |

## Properties

### BLANK\_NODE\_KEY\_PREFIX

• `Private` **BLANK\_NODE\_KEY\_PREFIX**: `string` = `"BlankNode"`

#### Defined in

[lib/WrapperSubscribableDataset.ts:342](https://github.com/o-development/o-dataset-pack/blob/e8a7e34/lib/WrapperSubscribableDataset.ts#L342)

___

### DEFAULT\_GRAPH\_KEY\_PREFIX

• `Private` **DEFAULT\_GRAPH\_KEY\_PREFIX**: `string` = `"DefaultGraph"`

#### Defined in

[lib/WrapperSubscribableDataset.ts:343](https://github.com/o-development/o-dataset-pack/blob/e8a7e34/lib/WrapperSubscribableDataset.ts#L343)

___

### NAMED\_NODE\_KEY\_PREFIX

• `Private` **NAMED\_NODE\_KEY\_PREFIX**: `string` = `"NamedNode"`

==================================================================
EVENTEMITTER METHODS
==================================================================

#### Defined in

[lib/WrapperSubscribableDataset.ts:341](https://github.com/o-development/o-dataset-pack/blob/e8a7e34/lib/WrapperSubscribableDataset.ts#L341)

___

### SUBSCRIBABLE\_TERMS

• `Private` **SUBSCRIBABLE\_TERMS**: `string`[]

#### Defined in

[lib/WrapperSubscribableDataset.ts:344](https://github.com/o-development/o-dataset-pack/blob/e8a7e34/lib/WrapperSubscribableDataset.ts#L344)

___

### dataset

• `Private` **dataset**: `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

The underlying dataset

#### Defined in

[lib/WrapperSubscribableDataset.ts:27](https://github.com/o-development/o-dataset-pack/blob/e8a7e34/lib/WrapperSubscribableDataset.ts#L27)

___

### datasetFactory

• `Private` **datasetFactory**: `DatasetFactory`<`InAndOutQuad`, `InAndOutQuad`, `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>\>

The underlying dataset factory

#### Defined in

[lib/WrapperSubscribableDataset.ts:23](https://github.com/o-development/o-dataset-pack/blob/e8a7e34/lib/WrapperSubscribableDataset.ts#L23)

___

### eventEmitter

• `Private` **eventEmitter**: `EventEmitter`

The underlying event emitter

#### Defined in

[lib/WrapperSubscribableDataset.ts:31](https://github.com/o-development/o-dataset-pack/blob/e8a7e34/lib/WrapperSubscribableDataset.ts#L31)

## Accessors

### size

• `get` **size**(): `number`

A non-negative integer that specifies the number of quads in the set.

#### Returns

`number`

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[size](../interfaces/SubscribableDataset.md#size)

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<`InAndOutQuad`, `unknown`, `undefined`\>

Returns an iterator

#### Returns

`Iterator`<`InAndOutQuad`, `unknown`, `undefined`\>

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[[iterator]](../interfaces/SubscribableDataset.md#[iterator])

___

### add

▸ **add**(`quad`): [`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

Adds the specified quad to the dataset.
Existing quads, as defined in Quad.equals, will be ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | `InAndOutQuad` |

#### Returns

[`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

the dataset instance it was called on.

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[add](../interfaces/SubscribableDataset.md#add)

___

### addAll

▸ **addAll**(`quads`): [`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

Imports the quads into this dataset.
This method differs from Dataset.union in that it adds all quads to the current instance, rather than combining quads and the current instance to create a new instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> \| `InAndOutQuad`[] |

#### Returns

[`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

the dataset instance it was called on.

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[addAll](../interfaces/SubscribableDataset.md#addall)

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

Alias for emitter.on(eventName, listener).

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`SubscribableTerms`](../modules.md#subscribableterms) |
| `listener` | [`nodeEventListener`](../modules.md#nodeeventlistener)<`InAndOutQuad`\> |

#### Returns

[`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[addListener](../interfaces/SubscribableDataset.md#addlistener)

___

### bulk

▸ **bulk**(`changed`): [`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

Bulk add and remove triples

#### Parameters

| Name | Type |
| :------ | :------ |
| `changed` | [`DatasetChanges`](../interfaces/DatasetChanges.md)<`InAndOutQuad`\> |

#### Returns

[`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[bulk](../interfaces/SubscribableDataset.md#bulk)

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

[SubscribableDataset](../interfaces/SubscribableDataset.md).[contains](../interfaces/SubscribableDataset.md#contains)

___

### delete

▸ **delete**(`quad`): [`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

Removes the specified quad from the dataset.
This method returns the dataset instance it was called on.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | `InAndOutQuad` |

#### Returns

[`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[delete](../interfaces/SubscribableDataset.md#delete)

___

### deleteMatches

▸ **deleteMatches**(`subject?`, `predicate?`, `object?`, `graph?`): [`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

This method removes the quads in the current instance that match the given arguments. The logic described in Quad Matching is applied for each quad in this dataset to select the quads which will be deleted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `subject?` | `Term` |
| `predicate?` | `Term` |
| `object?` | `Term` |
| `graph?` | `Term` |

#### Returns

[`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

the dataset instance it was called on.

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[deleteMatches](../interfaces/SubscribableDataset.md#deletematches)

___

### difference

▸ **difference**(`other`): `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

Returns a new dataset that contains alls quads from the current dataset, not included in the given dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> |

#### Returns

`Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[difference](../interfaces/SubscribableDataset.md#difference)

___

### emit

▸ **emit**(`eventName`, `dataset`, `datasetChanges`): `boolean`

Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`SubscribableTerms`](../modules.md#subscribableterms) |
| `dataset` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> |
| `datasetChanges` | [`DatasetChanges`](../interfaces/DatasetChanges.md)<`InAndOutQuad`\> |

#### Returns

`boolean`

true if the event had listeners, false otherwise.

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[emit](../interfaces/SubscribableDataset.md#emit)

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

[SubscribableDataset](../interfaces/SubscribableDataset.md).[equals](../interfaces/SubscribableDataset.md#equals)

___

### eventNames

▸ **eventNames**(): [`SubscribableTerms`](../modules.md#subscribableterms)[]

Returns an array listing the events for which the emitter has registered listeners. The values in the array are strings or Symbols.

#### Returns

[`SubscribableTerms`](../modules.md#subscribableterms)[]

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[eventNames](../interfaces/SubscribableDataset.md#eventnames)

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
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>) => `boolean` |

#### Returns

`boolean`

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[every](../interfaces/SubscribableDataset.md#every)

___

### filter

▸ **filter**(`iteratee`): `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

Creates a new dataset with all the quads that pass the test implemented by the provided iteratee.
Note: This method is aligned with Array.prototype.filter() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>) => `boolean` |

#### Returns

`Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[filter](../interfaces/SubscribableDataset.md#filter)

___

### forEach

▸ **forEach**(`iteratee`): `void`

Executes the provided iteratee once on each quad in the dataset.
Note: This method is aligned with Array.prototype.forEach() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>) => `void` |

#### Returns

`void`

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[forEach](../interfaces/SubscribableDataset.md#foreach)

___

### getKeyFromNode

▸ `Private` **getKeyFromNode**(`term`): `string`

Given a term, returns the string key to be used in an event emitter

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | [`SubscribableTerms`](../modules.md#subscribableterms) |

#### Returns

`string`

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the EventEmitter which is either set by emitter.setMaxListeners(n) or defaults to events.defaultMaxListeners.

#### Returns

`number`

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[getMaxListeners](../interfaces/SubscribableDataset.md#getmaxlisteners)

___

### getNodeFromKey

▸ `Private` **getNodeFromKey**(`key`): [`SubscribableTerms`](../modules.md#subscribableterms)

Given a key, returns the node

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`SubscribableTerms`](../modules.md#subscribableterms)

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

[SubscribableDataset](../interfaces/SubscribableDataset.md).[has](../interfaces/SubscribableDataset.md#has)

___

### import

▸ **import**(`stream`): `Promise`<[`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>\>

Imports all quads from the given stream into the dataset.
The stream events end and error are wrapped in a Promise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `Stream`<`InAndOutQuad`\> |

#### Returns

`Promise`<[`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>\>

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[import](../interfaces/SubscribableDataset.md#import)

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

[SubscribableDataset](../interfaces/SubscribableDataset.md).[intersection](../interfaces/SubscribableDataset.md#intersection)

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

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[listenerCount](../interfaces/SubscribableDataset.md#listenercount)

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

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[listeners](../interfaces/SubscribableDataset.md#listeners)

___

### map

▸ **map**(`iteratee`): `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

Returns a new dataset containing all quads returned by applying iteratee to each quad in the current dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>) => `InAndOutQuad` |

#### Returns

`Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[map](../interfaces/SubscribableDataset.md#map)

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

[SubscribableDataset](../interfaces/SubscribableDataset.md).[match](../interfaces/SubscribableDataset.md#match)

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

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[off](../interfaces/SubscribableDataset.md#off)

___

### on

▸ **on**(`eventName`, `listener`): [`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

Adds the listener function to the end of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`SubscribableTerms`](../modules.md#subscribableterms) |
| `listener` | [`nodeEventListener`](../modules.md#nodeeventlistener)<`InAndOutQuad`\> |

#### Returns

[`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[on](../interfaces/SubscribableDataset.md#on)

___

### once

▸ **once**(`eventName`, `listener`): [`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

Adds a one-time listener function for the event named eventName. The next time eventName is triggered, this listener is removed and then invoked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`SubscribableTerms`](../modules.md#subscribableterms) |
| `listener` | [`nodeEventListener`](../modules.md#nodeeventlistener)<`InAndOutQuad`\> |

#### Returns

[`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[once](../interfaces/SubscribableDataset.md#once)

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

Adds the listener function to the beginning of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`SubscribableTerms`](../modules.md#subscribableterms) |
| `listener` | [`nodeEventListener`](../modules.md#nodeeventlistener)<`InAndOutQuad`\> |

#### Returns

[`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[prependListener](../interfaces/SubscribableDataset.md#prependlistener)

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

Adds a one-time listener function for the event named eventName to the beginning of the listeners array. The next time eventName is triggered, this listener is removed, and then invoked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`SubscribableTerms`](../modules.md#subscribableterms) |
| `listener` | [`nodeEventListener`](../modules.md#nodeeventlistener)<`InAndOutQuad`\> |

#### Returns

[`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[prependOnceListener](../interfaces/SubscribableDataset.md#prependoncelistener)

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

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[rawListeners](../interfaces/SubscribableDataset.md#rawlisteners)

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
| `iteratee` | (`accumulator`: `A`, `quad`: `InAndOutQuad`, `dataset`: [`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>) => `A` |
| `initialValue?` | `A` |

#### Returns

`A`

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[reduce](../interfaces/SubscribableDataset.md#reduce)

___

### removeAllListeners

▸ **removeAllListeners**(`eventName`): [`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

Removes all listeners, or those of the specified eventName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`SubscribableTerms`](../modules.md#subscribableterms) |

#### Returns

[`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[removeAllListeners](../interfaces/SubscribableDataset.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

Removes the specified listener from the listener array for the event named eventName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`SubscribableTerms`](../modules.md#subscribableterms) |
| `listener` | [`nodeEventListener`](../modules.md#nodeeventlistener)<`InAndOutQuad`\> |

#### Returns

[`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[removeListener](../interfaces/SubscribableDataset.md#removelistener)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

By default EventEmitters will print a warning if more than 10 listeners are added for a particular event. This is a useful default that helps finding memory leaks. The emitter.setMaxListeners() method allows the limit to be modified for this specific EventEmitter instance. The value can be set to Infinity (or 0) to indicate an unlimited number of listeners.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[setMaxListeners](../interfaces/SubscribableDataset.md#setmaxlisteners)

___

### some

▸ **some**(`iteratee`): `boolean`

Existential quantification method, tests whether some quads in the dataset pass the test implemented by the provided iteratee.
Note: This method is aligned with Array.prototype.some() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: `InAndOutQuad`, `dataset`: [`WrapperSubscribableDataset`](WrapperSubscribableDataset.md)<`InAndOutQuad`\>) => `boolean` |

#### Returns

`boolean`

boolean true once a quad that passes the test is found.

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[some](../interfaces/SubscribableDataset.md#some)

___

### startTransaction

▸ **startTransaction**(): [`TransactionalDataset`](../interfaces/TransactionalDataset.md)<`InAndOutQuad`\>

Returns a transactional dataset that will update this dataset when its transaction is committed.

#### Returns

[`TransactionalDataset`](../interfaces/TransactionalDataset.md)<`InAndOutQuad`\>

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[startTransaction](../interfaces/SubscribableDataset.md#starttransaction)

___

### toArray

▸ **toArray**(): `InAndOutQuad`[]

Returns the set of quads within the dataset as a host language native sequence, for example an Array in ECMAScript-262.
Note: Since a DatasetCore is an unordered set, the order of the quads within the returned sequence is arbitrary.

#### Returns

`InAndOutQuad`[]

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[toArray](../interfaces/SubscribableDataset.md#toarray)

___

### toCanonical

▸ **toCanonical**(): `string`

Returns an N-Quads string representation of the dataset, preprocessed with RDF Dataset Normalization algorithm.

#### Returns

`string`

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[toCanonical](../interfaces/SubscribableDataset.md#tocanonical)

___

### toStream

▸ **toStream**(): `Stream`<`InAndOutQuad`\>

Returns a stream that contains all quads of the dataset.

#### Returns

`Stream`<`InAndOutQuad`\>

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[toStream](../interfaces/SubscribableDataset.md#tostream)

___

### toString

▸ **toString**(): `string`

Returns an N-Quads string representation of the dataset.
No prior normalization is required, therefore the results for the same quads may vary depending on the Dataset implementation.

#### Returns

`string`

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[toString](../interfaces/SubscribableDataset.md#tostring)

___

### triggerSubscriptionForNode

▸ `Private` **triggerSubscriptionForNode**(`term`, `changed`): `void`

Triggers all subscriptions for a given term

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `term` | [`SubscribableTerms`](../modules.md#subscribableterms) | The term that should be triggered |
| `changed` | [`DatasetChanges`](../interfaces/DatasetChanges.md)<`InAndOutQuad`\> | The changed triples of a certain transaction |

#### Returns

`void`

___

### triggerSubscriptionForQuads

▸ `Private` **triggerSubscriptionForQuads**(`changed`): `void`

Triggers all subscriptions based on an updated quads

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `changed` | [`DatasetChanges`](../interfaces/DatasetChanges.md)<`InAndOutQuad`\> | The changed triples of the transaction |

#### Returns

`void`

___

### union

▸ **union**(`quads`): `Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

Returns a new Dataset that is a concatenation of this dataset and the quads given as an argument.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads` | `Dataset`<`InAndOutQuad`, `InAndOutQuad`\> |

#### Returns

`Dataset`<`InAndOutQuad`, `InAndOutQuad`\>

#### Implementation of

[SubscribableDataset](../interfaces/SubscribableDataset.md).[union](../interfaces/SubscribableDataset.md#union)
