import React, { PropTypes } from 'react';
import { ListIcon } from './../list-icon/list-icon';
import './list-item.css';

const { string } = PropTypes;

export const ListItem = ({
	icon,
	time,
	content
}) => {
	return (
		<div className="list-item">
			<h2 className="h3 list-item-title">{time}</h2>
			<div className="description">
				<ListIcon icon={icon} />
				<p>{content}</p>
			</div>
		</div>
	);
};

ListItem.displayName = 'ListItem';
ListItem.PropTypes = {
	icon: string.isRequired,
	time: string.isRequired,
	content: string.isRequired
};
