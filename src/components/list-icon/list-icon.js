import React, { PropTypes } from 'react';
import classNames from 'classnames';
import {
	MEDICINE,
	FOOD,
	SPORT,
	MIGRAINE
} from "../../constants/list-icon-constants";
import './list-icon.css';

const { string } = PropTypes;

export const ListIcon = ({ icon }) => {
	const cx = classNames('fa', {
		'fa-medkit': icon === MEDICINE,
		'fa-cutlery': icon === FOOD,
		'fa-bicycle': icon === SPORT,
		'fa-exclamation-triangle': icon === MIGRAINE
	});

	const wrapperCx = classNames('list-icon', {
		'icon-alert': icon === MIGRAINE
	});

	return (
		<div className={wrapperCx}>
			<i className={cx} aria-hidden="true"></i>
		</div>
	);
}

ListIcon.propTypes = {
	icon: string.isRequired
};

ListIcon.displayName = 'ListIcon';
