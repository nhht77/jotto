import React from 'react'
import Enzyme, { shallow } from "enzyme";
import  EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';
import { findByTestAttr, checkProps } from '../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => shallow(<Congrats {...props} />)

test('renders without errors', () => {
    const wrapper   = setup({success: false});
    const component = findByTestAttr(wrapper, "congrats-msg") 
    expect(component.length).toBe(1);
})

test(`renders no text when 'success' props is false`, () => {
    const wrapper   = setup({success: false});
    const component = findByTestAttr(wrapper, "congrats-msg") 
    expect(component.text()).toBe('');
})

test('renders non-empty congrats message when success prop is true', () => {
    const wrapper   = setup({success: true});
    const component = findByTestAttr(wrapper, "congrats-msg");
    expect(component.text().length).not.toBe(0);
})

test('does not throw warning with expected props', () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps)
})