import { DobounceTimeComponent } from './debounceTime';
import { PluckComponent } from './pluck';
import { SwitchComponent } from './switch';
import { DistinctComponent } from './distinct';
import { DistinctUntilChangedComponent } from './distinctUntilChanged';
import { DistinctUntilKeyChangedComponent } from './distinctUntilKeyChanged';

export const RXJS_COMPONENT = [
	DobounceTimeComponent,
	PluckComponent,
	SwitchComponent,
	DistinctComponent,
	DistinctUntilChangedComponent,
	DistinctUntilKeyChangedComponent
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
	}
];