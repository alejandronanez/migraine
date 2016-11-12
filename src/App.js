import React, { Component } from 'react';
import './App.css';
import { ListIcon } from './components/list-icon/list-icon';

class App extends Component {
	render() {
		return (
			<div>
				<ListIcon icon="medicine" />
				<ListIcon icon="sport" />
				<ListIcon icon="food" />
				<ListIcon icon="migraine" />
			</div>
		);
	}
}

export default App;
