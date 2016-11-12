import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ListIcon } from '../src/components/list-icon/list-icon';

storiesOf('List Icon', module)
	.add('Medicine Icon', () => (
		<ListIcon icon="medicine" />
	))
	.add('Sport Icon', () => (
		<ListIcon icon="sport" />
	))
	.add('Food Icon', () => (
		<ListIcon icon="food" />
	))
	.add('Migraine Icon', () => (
		<ListIcon icon="migraine" />
	));
