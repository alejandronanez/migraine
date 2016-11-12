import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ListItem } from '../src/components/list-item/list-item';

storiesOf('List Item', module)
	.add('Medicine Icon', () => (
		<ListItem
			icon='food'
			time='12:15:00'
			content='random content'
		/>
	));
