import { ListIcon } from '../list-icon';
import { renderComponent } from '../../../helpers/render-helpers';

const shallowRender = renderComponent(ListIcon, {});

describe('<ListIcon />', () => {

	it('should return a <span /> if icon is empty', () => {
		const tree = shallowRender({icon: ''});
		expect(tree.find('.list-icon').length).toBeFalsy();
	});

	it('should return a <span /> if icon is not medicine, food, sport, migraine', () => {
		const tree = shallowRender({icon: 'foo'});
		expect(tree.find('.list-icon').length).toBeFalsy();
	});

	it('should return add .icon-alert if icon is migraine', () => {
		const tree = shallowRender({icon: 'migraine'});
		expect(tree.find('.icon-alert').length).toBeTruthy();
	});

	it('should not return add .icon-alert if icon is not migraine', () => {
		const tree = shallowRender({icon: 'food'});
		expect(tree.find('.icon-alert').length).toBeFalsy();
	});

	it('should return add .fa-medkit if icon is medicine', () => {
		const tree = shallowRender({icon: 'medicine'});
		expect(tree.find('.fa-medkit').length).toBeTruthy();
	});

	it('should return add .fa-cutlery if icon is food', () => {
		const tree = shallowRender({icon: 'food'});
		expect(tree.find('.fa-cutlery').length).toBeTruthy();
	});

	it('should return add .fa-exclamation-triangle if icon is migraine', () => {
		const tree = shallowRender({icon: 'migraine'});
		expect(tree.find('.fa-exclamation-triangle').length).toBeTruthy();
	});

});
