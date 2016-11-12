import moment from 'moment';
import { ListItem } from '../list-item';
import { ListIcon } from '../../list-icon/list-icon';
import { renderComponent } from '../../../helpers/render-helpers';

const shallowRender = renderComponent(ListItem, {
	icon: 'food',
	time: moment('2016-01-01', 'YYYY-MM-DD').format('hh:mm:ss'),
	content: 'I ate something delicious'
});

describe('<ListItem />', () => {
	it('should render ListIcon with the right props', () => {
		const tree = shallowRender();

		expect(tree.find(ListIcon).length).toBeTruthy();
		expect(tree.find(ListIcon).prop('icon')).toBe('food');
	});
});
