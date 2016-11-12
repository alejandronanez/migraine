import React from 'react';
import classNames from 'classnames';
import { ListIconRecord } from '../../records/list-icon-record';
import {
	MEDICINE,
	FOOD,
	SPORT,
	MIGRAINE
} from "../../constants/list-icon-constants";
import './list-icon.css';

export const ListIcon = ({ icon }) => {
	const iconName = ListIconRecord.includes(icon) ? icon : null;

	if (!iconName) {
		return <span />;
	}

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
