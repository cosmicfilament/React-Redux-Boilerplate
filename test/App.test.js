import App from '../src/App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.find('h1').text()).toBe('React Redux Boilerplate');
        expect(wrapper).toMatchSnapshot
    });
});
