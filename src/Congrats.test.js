import React from 'react'
import Enzyme, { shallow } from "enzyme";
import  EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => shallow(<Congrats {...props} />)

test('renders without errors', () => {

})

test(`renders no text when 'success' props is false`, () => {

})

test('renders congrats message when success prop is true', () => {

})