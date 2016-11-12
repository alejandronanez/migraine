import React from "react";
import { shallow } from "enzyme";

export const renderComponent = (Component, defaults) => (options = {}) => {
	const opts = {
		...defaults,
		...options
	};

	return shallow(<Component {...opts} />);
};
