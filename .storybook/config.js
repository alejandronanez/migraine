import { configure } from '@kadira/storybook';
import '../src/App.css';

function loadStories() {
	require('../stories/list-icon.js');
}

configure(loadStories, module);
