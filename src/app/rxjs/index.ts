import { DobounceTimeComponent } from './debounceTime';
import { PluckComponent } from './pluck';
import { SwitchComponent } from './switch';
import { DistinctComponent } from './distinct';
import { DistinctUntilChangedComponent } from './distinctUntilChanged';
import { DistinctUntilKeyChangedComponent } from './distinctUntilKeyChanged';
import { PartitionComponent } from './partition';
import { DeferComponent } from './defer';

export const RXJS_COMPONENT = [
	DobounceTimeComponent,
	PluckComponent,
	SwitchComponent,
	DistinctComponent,
	DistinctUntilChangedComponent,
	DistinctUntilKeyChangedComponent,
	PartitionComponent,
	DeferComponent
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
	}
];