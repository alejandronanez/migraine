import { configure } from '@kadira/storybook';
import '../src/App.css';

function loadStories() {
	require('../stories/list-icon.js');
	require('../stories/list-item.js');
}

configure(loadStories, module);
