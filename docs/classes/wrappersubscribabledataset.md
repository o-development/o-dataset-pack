[o-dataset-pack](../README.md) / [Exports](../modules.md) / WrapperSubscribableDataset

# Class: WrapperSubscribableDataset<InAndOutQuad\>

A wrapper for a dataset that allows subscriptions to be made on nodes to
be triggered whenever a quad containing that added or removed.

## Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `InAndOutQuad` | BaseQuad | BaseQuad |

## Implements

- [*SubscribableDataset*](../interfaces/subscribabledataset.md)<InAndOutQuad\>

## Table of contents

### Constructors

- [constructor](wrappersubscribabledataset.md#constructor)

### Properties

- [BLANK\_NODE\_KEY\_PREFIX](wrappersubscribabledataset.md#blank_node_key_prefix)
- [DEFAULT\_GRAPH\_KEY\_PREFIX](wrappersubscribabledataset.md#default_graph_key_prefix)
- [NAMED\_NODE\_KEY\_PREFIX](wrappersubscribabledataset.md#named_node_key_prefix)
- [SUBSCRIBABLE\_TERMS](wrappersubscribabledataset.md#subscribable_terms)
- [dataset](wrappersubscribabledataset.md#dataset)
- [datasetFactory](wrappersubscribabledataset.md#datasetfactory)
- [eventEmitter](wrappersubscribabledataset.md#eventemitter)

### Accessors

- [size](wrappersubscribabledataset.md#size)

### Methods

- [[Symbol.iterator]](wrappersubscribabledataset.md#[symbol.iterator])
- [add](wrappersubscribabledataset.md#add)
- [addAll](wrappersubscribabledataset.md#addall)
- [addListener](wrappersubscribabledataset.md#addlistener)
- [bulk](wrappersubscribabledataset.md#bulk)
- [contains](wrappersubscribabledataset.md#contains)
- [delete](wrappersubscribabledataset.md#delete)
- [deleteMatches](wrappersubscribabledataset.md#deletematches)
- [difference](wrappersubscribabledataset.md#difference)
- [emit](wrappersubscribabledataset.md#emit)
- [equals](wrappersubscribabledataset.md#equals)
- [eventNames](wrappersubscribabledataset.md#eventnames)
- [every](wrappersubscribabledataset.md#every)
- [filter](wrappersubscribabledataset.md#filter)
- [forEach](wrappersubscribabledataset.md#foreach)
- [getKeyFromNode](wrappersubscribabledataset.md#getkeyfromnode)
- [getMaxListeners](wrappersubscribabledataset.md#getmaxlisteners)
- [getNodeFromKey](wrappersubscribabledataset.md#getnodefromkey)
- [has](wrappersubscribabledataset.md#has)
- [import](wrappersubscribabledataset.md#import)
- [intersection](wrappersubscribabledataset.md#intersection)
- [listenerCount](wrappersubscribabledataset.md#listenercount)
- [listeners](wrappersubscribabledataset.md#listeners)
- [map](wrappersubscribabledataset.md#map)
- [match](wrappersubscribabledataset.md#match)
- [off](wrappersubscribabledataset.md#off)
- [on](wrappersubscribabledataset.md#on)
- [once](wrappersubscribabledataset.md#once)
- [prependListener](wrappersubscribabledataset.md#prependlistener)
- [prependOnceListener](wrappersubscribabledataset.md#prependoncelistener)
- [rawListeners](wrappersubscribabledataset.md#rawlisteners)
- [reduce](wrappersubscribabledataset.md#reduce)
- [removeAllListeners](wrappersubscribabledataset.md#removealllisteners)
- [removeListener](wrappersubscribabledataset.md#removelistener)
- [setMaxListeners](wrappersubscribabledataset.md#setmaxlisteners)
- [some](wrappersubscribabledataset.md#some)
- [startTransaction](wrappersubscribabledataset.md#starttransaction)
- [toArray](wrappersubscribabledataset.md#toarray)
- [toCanonical](wrappersubscribabledataset.md#tocanonical)
- [toStream](wrappersubscribabledataset.md#tostream)
- [toString](wrappersubscribabledataset.md#tostring)
- [triggerSubscriptionForNode](wrappersubscribabledataset.md#triggersubscriptionfornode)
- [triggerSubscriptionForQuads](wrappersubscribabledataset.md#triggersubscriptionforquads)
- [union](wrappersubscribabledataset.md#union)

## Constructors

### constructor

\+ **new WrapperSubscribableDataset**<InAndOutQuad\>(`datasetFactory`: *DatasetFactory*<InAndOutQuad, InAndOutQuad, Dataset<InAndOutQuad, InAndOutQuad\>\>, `initialDataset?`: *Dataset*<InAndOutQuad, InAndOutQuad\>): [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

#### Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `InAndOutQuad` | BaseQuad | BaseQuad |

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetFactory` | *DatasetFactory*<InAndOutQuad, InAndOutQuad, Dataset<InAndOutQuad, InAndOutQuad\>\> |
| `initialDataset?` | *Dataset*<InAndOutQuad, InAndOutQuad\> |

**Returns:** [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Defined in: [lib/WrapperSubscribableDataset.ts:31](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L31)

## Properties

### BLANK\_NODE\_KEY\_PREFIX

• `Private` **BLANK\_NODE\_KEY\_PREFIX**: *string*= "BlankNode"

Defined in: [lib/WrapperSubscribableDataset.ts:339](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L339)

___

### DEFAULT\_GRAPH\_KEY\_PREFIX

• `Private` **DEFAULT\_GRAPH\_KEY\_PREFIX**: *string*= "DefaultGraph"

Defined in: [lib/WrapperSubscribableDataset.ts:340](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L340)

___

### NAMED\_NODE\_KEY\_PREFIX

• `Private` **NAMED\_NODE\_KEY\_PREFIX**: *string*= "NamedNode"

==================================================================
EVENTEMITTER METHODS
==================================================================

Defined in: [lib/WrapperSubscribableDataset.ts:338](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L338)

___

### SUBSCRIBABLE\_TERMS

• `Private` **SUBSCRIBABLE\_TERMS**: *string*[]

Defined in: [lib/WrapperSubscribableDataset.ts:341](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L341)

___

### dataset

• `Private` **dataset**: *Dataset*<InAndOutQuad, InAndOutQuad\>

The underlying dataset

Defined in: [lib/WrapperSubscribableDataset.ts:27](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L27)

___

### datasetFactory

• `Private` **datasetFactory**: *DatasetFactory*<InAndOutQuad, InAndOutQuad, Dataset<InAndOutQuad, InAndOutQuad\>\>

The underlying dataset factory

Defined in: [lib/WrapperSubscribableDataset.ts:23](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L23)

___

### eventEmitter

• `Private` **eventEmitter**: *EventEmitter*

The underlying event emitter

Defined in: [lib/WrapperSubscribableDataset.ts:31](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L31)

## Accessors

### size

• get **size**(): *number*

A non-negative integer that specifies the number of quads in the set.

**Returns:** *number*

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md).[size](../interfaces/subscribabledataset.md#size)

Defined in: [lib/WrapperSubscribableDataset.ts:287](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L287)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<InAndOutQuad, unknown, undefined\>

Returns an iterator

**Returns:** *Iterator*<InAndOutQuad, unknown, undefined\>

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:329](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L329)

___

### add

▸ **add**(`quad`: InAndOutQuad): [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Adds the specified quad to the dataset.
Existing quads, as defined in Quad.equals, will be ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | InAndOutQuad |

**Returns:** [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

the dataset instance it was called on.

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:297](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L297)

___

### addAll

▸ **addAll**(`quads`: *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[]): [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Imports the quads into this dataset.
This method differs from Dataset.union in that it adds all quads to the current instance, rather than combining quads and the current instance to create a new instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads` | *Dataset*<InAndOutQuad, InAndOutQuad\> \| InAndOutQuad[] |

**Returns:** [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

the dataset instance it was called on.

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:59](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L59)

___

### addListener

▸ **addListener**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms), `listener`: [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>): [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Alias for emitter.on(eventName, listener).

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |
| `listener` | [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\> |

**Returns:** [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:469](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L469)

___

### bulk

▸ **bulk**(`changed`: [*DatasetChanges*](../interfaces/datasetchanges.md)<InAndOutQuad\>): [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Bulk add and remove triples

#### Parameters

| Name | Type |
| :------ | :------ |
| `changed` | [*DatasetChanges*](../interfaces/datasetchanges.md)<InAndOutQuad\> |

**Returns:** [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:73](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L73)

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

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:91](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L91)

___

### delete

▸ **delete**(`quad`: InAndOutQuad): [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Removes the specified quad from the dataset.
This method returns the dataset instance it was called on.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | InAndOutQuad |

**Returns:** [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:310](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L310)

___

### deleteMatches

▸ **deleteMatches**(`subject?`: Term, `predicate?`: Term, `object?`: Term, `graph?`: Term): [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

 This method removes the quads in the current instance that match the given arguments. The logic described in Quad Matching is applied for each quad in this dataset to select the quads which will be deleted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `subject?` | Term |
| `predicate?` | Term |
| `object?` | Term |
| `graph?` | Term |

**Returns:** [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

the dataset instance it was called on.

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:103](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L103)

___

### difference

▸ **difference**(`other`: *Dataset*<InAndOutQuad, InAndOutQuad\>): *Dataset*<InAndOutQuad, InAndOutQuad\>

Returns a new dataset that contains alls quads from the current dataset, not included in the given dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | *Dataset*<InAndOutQuad, InAndOutQuad\> |

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:121](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L121)

___

### emit

▸ **emit**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms), `dataset`: *Dataset*<InAndOutQuad, InAndOutQuad\>, `datasetChanges`: [*DatasetChanges*](../interfaces/datasetchanges.md)<InAndOutQuad\>): *boolean*

Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |
| `dataset` | *Dataset*<InAndOutQuad, InAndOutQuad\> |
| `datasetChanges` | [*DatasetChanges*](../interfaces/datasetchanges.md)<InAndOutQuad\> |

**Returns:** *boolean*

true if the event had listeners, false otherwise.

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:483](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L483)

___

### equals

▸ **equals**(`other`: *Dataset*<InAndOutQuad, InAndOutQuad\>): *boolean*

Returns true if the current instance contains the same graph structure as the given dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | *Dataset*<InAndOutQuad, InAndOutQuad\> |

**Returns:** *boolean*

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:131](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L131)

___

### eventNames

▸ **eventNames**(): [*SubscribableTerms*](../modules.md#subscribableterms)[]

Returns an array listing the events for which the emitter has registered listeners. The values in the array are strings or Symbols.

**Returns:** [*SubscribableTerms*](../modules.md#subscribableterms)[]

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:498](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L498)

___

### every

▸ **every**(`iteratee`: (`quad`: InAndOutQuad, `dataset`: [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>) => *boolean*): *boolean*

Universal quantification method, tests whether every quad in the dataset passes the test implemented by the provided iteratee.
This method immediately returns boolean false once a quad that does not pass the test is found.
This method always returns boolean true on an empty dataset.
Note: This method is aligned with Array.prototype.every() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: InAndOutQuad, `dataset`: [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>) => *boolean* |

**Returns:** *boolean*

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:142](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L142)

___

### filter

▸ **filter**(`iteratee`: (`quad`: InAndOutQuad, `dataset`: [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>) => *boolean*): *Dataset*<InAndOutQuad, InAndOutQuad\>

Creates a new dataset with all the quads that pass the test implemented by the provided iteratee.
Note: This method is aligned with Array.prototype.filter() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: InAndOutQuad, `dataset`: [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>) => *boolean* |

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:153](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L153)

___

### forEach

▸ **forEach**(`iteratee`: (`quad`: InAndOutQuad, `dataset`: [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>) => *void*): *void*

Executes the provided iteratee once on each quad in the dataset.
Note: This method is aligned with Array.prototype.forEach() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: InAndOutQuad, `dataset`: [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>) => *void* |

**Returns:** *void*

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:164](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L164)

___

### getKeyFromNode

▸ `Private` **getKeyFromNode**(`term`: [*SubscribableTerms*](../modules.md#subscribableterms)): *string*

Given a term, returns the string key to be used in an event emitter

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | [*SubscribableTerms*](../modules.md#subscribableterms) |

**Returns:** *string*

Defined in: [lib/WrapperSubscribableDataset.ts:350](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L350)

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

Returns the current max listener value for the EventEmitter which is either set by emitter.setMaxListeners(n) or defaults to events.defaultMaxListeners.

**Returns:** *number*

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:507](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L507)

___

### getNodeFromKey

▸ `Private` **getNodeFromKey**(`key`: *string*): [*SubscribableTerms*](../modules.md#subscribableterms)

Given a key, returns the node

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |

**Returns:** [*SubscribableTerms*](../modules.md#subscribableterms)

Defined in: [lib/WrapperSubscribableDataset.ts:364](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L364)

___

### has

▸ **has**(`quad`: InAndOutQuad): *boolean*

Determines whether a dataset includes a certain quad, returning true or false as appropriate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | InAndOutQuad |

**Returns:** *boolean*

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:322](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L322)

___

### import

▸ **import**(`stream`: *Stream*<InAndOutQuad\>): *Promise*<[*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>\>

Imports all quads from the given stream into the dataset.
The stream events end and error are wrapped in a Promise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | *Stream*<InAndOutQuad\> |

**Returns:** *Promise*<[*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>\>

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:173](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L173)

___

### intersection

▸ **intersection**(`other`: *Dataset*<InAndOutQuad, InAndOutQuad\>): *Dataset*<InAndOutQuad, InAndOutQuad\>

Returns a new dataset containing alls quads from the current dataset that are also included in the given dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | *Dataset*<InAndOutQuad, InAndOutQuad\> |

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:185](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L185)

___

### listenerCount

▸ **listenerCount**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms)): *number*

Returns the number of listeners listening to the event named eventName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |

**Returns:** *number*

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:514](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L514)

___

### listeners

▸ **listeners**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms)): [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>[]

Returns a copy of the array of listeners for the event named eventName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |

**Returns:** [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>[]

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:521](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L521)

___

### map

▸ **map**(`iteratee`: (`quad`: InAndOutQuad, `dataset`: [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>) => InAndOutQuad): *Dataset*<InAndOutQuad, InAndOutQuad\>

Returns a new dataset containing all quads returned by applying iteratee to each quad in the current dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: InAndOutQuad, `dataset`: [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>) => InAndOutQuad |

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:195](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L195)

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

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:275](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L275)

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

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:532](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L532)

___

### on

▸ **on**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms), `listener`: [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>): [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Adds the listener function to the end of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |
| `listener` | [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\> |

**Returns:** [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:542](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L542)

___

### once

▸ **once**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms), `listener`: [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>): [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Adds a one-time listener function for the event named eventName. The next time eventName is triggered, this listener is removed and then invoked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |
| `listener` | [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\> |

**Returns:** [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:553](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L553)

___

### prependListener

▸ **prependListener**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms), `listener`: [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>): [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Adds the listener function to the beginning of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |
| `listener` | [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\> |

**Returns:** [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:564](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L564)

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms), `listener`: [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>): [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Adds a one-time listener function for the event named eventName to the beginning of the listeners array. The next time eventName is triggered, this listener is removed, and then invoked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |
| `listener` | [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\> |

**Returns:** [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:575](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L575)

___

### rawListeners

▸ **rawListeners**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms)): [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>[]

Returns a copy of the array of listeners for the event named eventName, including any wrappers (such as those created by .once()).

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |

**Returns:** [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>[]

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:616](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L616)

___

### reduce

▸ **reduce**<A\>(`iteratee`: (`accumulator`: A, `quad`: InAndOutQuad, `dataset`: [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>) => A, `initialValue?`: A): A

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
| `iteratee` | (`accumulator`: A, `quad`: InAndOutQuad, `dataset`: [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>) => A |
| `initialValue?` | A |

**Returns:** A

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:208](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L208)

___

### removeAllListeners

▸ **removeAllListeners**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms)): [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Removes all listeners, or those of the specified eventName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |

**Returns:** [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:589](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L589)

___

### removeListener

▸ **removeListener**(`eventName`: [*SubscribableTerms*](../modules.md#subscribableterms), `listener`: [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\>): [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Removes the specified listener from the listener array for the event named eventName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [*SubscribableTerms*](../modules.md#subscribableterms) |
| `listener` | [*nodeEventListener*](../modules.md#nodeeventlistener)<InAndOutQuad\> |

**Returns:** [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:597](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L597)

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

By default EventEmitters will print a warning if more than 10 listeners are added for a particular event. This is a useful default that helps finding memory leaks. The emitter.setMaxListeners() method allows the limit to be modified for this specific EventEmitter instance. The value can be set to Infinity (or 0) to indicate an unlimited number of listeners.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | *number* |

**Returns:** [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:608](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L608)

___

### some

▸ **some**(`iteratee`: (`quad`: InAndOutQuad, `dataset`: [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>) => *boolean*): *boolean*

Existential quantification method, tests whether some quads in the dataset pass the test implemented by the provided iteratee.
Note: This method is aligned with Array.prototype.some() in ECMAScript-262.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`quad`: InAndOutQuad, `dataset`: [*WrapperSubscribableDataset*](wrappersubscribabledataset.md)<InAndOutQuad\>) => *boolean* |

**Returns:** *boolean*

boolean true once a quad that passes the test is found.

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:221](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L221)

___

### startTransaction

▸ **startTransaction**(): [*TransactionalDataset*](../interfaces/transactionaldataset.md)<InAndOutQuad\>

Returns a transactional dataset that will update this dataset when its transaction is committed.

**Returns:** [*TransactionalDataset*](../interfaces/transactionaldataset.md)<InAndOutQuad\>

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:633](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L633)

___

### toArray

▸ **toArray**(): InAndOutQuad[]

Returns the set of quads within the dataset as a host language native sequence, for example an Array in ECMAScript-262.
Note: Since a DatasetCore is an unordered set, the order of the quads within the returned sequence is arbitrary.

**Returns:** InAndOutQuad[]

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:231](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L231)

___

### toCanonical

▸ **toCanonical**(): *string*

Returns an N-Quads string representation of the dataset, preprocessed with RDF Dataset Normalization algorithm.

**Returns:** *string*

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:238](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L238)

___

### toStream

▸ **toStream**(): *Stream*<InAndOutQuad\>

Returns a stream that contains all quads of the dataset.

**Returns:** *Stream*<InAndOutQuad\>

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:245](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L245)

___

### toString

▸ **toString**(): *string*

Returns an N-Quads string representation of the dataset.
No prior normalization is required, therefore the results for the same quads may vary depending on the Dataset implementation.

**Returns:** *string*

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:253](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L253)

___

### triggerSubscriptionForNode

▸ `Private` **triggerSubscriptionForNode**(`term`: [*SubscribableTerms*](../modules.md#subscribableterms), `changed`: [*DatasetChanges*](../interfaces/datasetchanges.md)<InAndOutQuad\>): *void*

Triggers all subscriptions for a given term

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `term` | [*SubscribableTerms*](../modules.md#subscribableterms) | The term that should be triggered |
| `changed` | [*DatasetChanges*](../interfaces/datasetchanges.md)<InAndOutQuad\> | The changed triples of a certain transaction |

**Returns:** *void*

Defined in: [lib/WrapperSubscribableDataset.ts:410](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L410)

___

### triggerSubscriptionForQuads

▸ `Private` **triggerSubscriptionForQuads**(`changed`: [*DatasetChanges*](../interfaces/datasetchanges.md)<InAndOutQuad\>): *void*

Triggers all subscriptions based on an updated quads

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `changed` | [*DatasetChanges*](../interfaces/datasetchanges.md)<InAndOutQuad\> | The changed triples of the transaction |

**Returns:** *void*

Defined in: [lib/WrapperSubscribableDataset.ts:379](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L379)

___

### union

▸ **union**(`quads`: *Dataset*<InAndOutQuad, InAndOutQuad\>): *Dataset*<InAndOutQuad, InAndOutQuad\>

Returns a new Dataset that is a concatenation of this dataset and the quads given as an argument.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quads` | *Dataset*<InAndOutQuad, InAndOutQuad\> |

**Returns:** *Dataset*<InAndOutQuad, InAndOutQuad\>

Implementation of: [SubscribableDataset](../interfaces/subscribabledataset.md)

Defined in: [lib/WrapperSubscribableDataset.ts:261](https://github.com/o-development/o-dataset-pack/blob/7f31bc0/lib/WrapperSubscribableDataset.ts#L261)
