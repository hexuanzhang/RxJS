import { DobounceTimeComponent } from './debounceTime';
import { PluckComponent } from './pluck';
import { SwitchComponent } from './switch';
import { DistinctComponent } from './distinct';
import { DistinctUntilChangedComponent } from './distinctUntilChanged';
import { DistinctUntilKeyChangedComponent } from './distinctUntilKeyChanged';
import { PartitionComponent } from './partition';
import { DeferComponent } from './defer';
import { EmptyComponent } from './empty';
import { FromPromiseComponent } from './fromPromise';
import { RangeComponent } from './range';
import { ThrowComponent } from './throw';
import { AsapComponent } from './scheduler/asap';
import { FromComponent } from './from';
import { FromEventComponent } from './fromEvent';

export const RXJS_COMPONENT = [
	DobounceTimeComponent,
	PluckComponent,
	SwitchComponent,
	DistinctComponent,
	DistinctUntilChangedComponent,
	DistinctUntilKeyChangedComponent,
	PartitionComponent,
	DeferComponent,
	EmptyComponent,
	FromPromiseComponent,
	RangeComponent,
	ThrowComponent,
	AsapComponent,
	FromComponent,
	FromEventComponent
];

export const RXJS_TAB = [
	{
		id: 100,
		name: 'pluck'
	},
	{
		id: 101,
		name: 'debounceTime'
	},
	{
		id: 102,
		name: 'switch'
	},
	{
		id: 103,
		name: 'distinct'
	},
	{
		id: 104,
		name: 'distinctUntilChangedComponent'
	},
	{
		id: 105,
		name: 'distinctUntilKeyChangedComponent'
	},
	{
		id: 106,
		name: 'partition'
	},
	{
		id: 107,
		name: 'defer'
	},
	{
		id: 108,
		name: 'empty'
	},
	{
		id: 109,
		name: 'fromPromise'
	},
	{
		id: 110,
		name: 'range'
	},
	{
		id: 111,
		name: 'throw'
	},
	{
		id: 112,
		name: 'asap'
	},
	{
		id: 113,
		name: 'from'
	},
	{
		id: 114,
		name: 'fromEvent'
	}
];