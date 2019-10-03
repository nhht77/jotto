import React from 'react';
import { shallow } from 'enzyme';

import { findComponentByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

const setup = (initState = {}) => {
  const store = storeFactory(initState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

setup();

describe('render', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ success: false });
  });
  describe('word has not been guessed', () => {
    test('renders component without error', () => {
      const component = findComponentByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('renders input box', () => {
      const inputBox = findComponentByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });
    test('renders submit button', () => {
      const submitBtn = findComponentByTestAttr(wrapper, 'submit-button');
      expect(submitBtn.length).toBe(1);
    });
  });
  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test('renders component without error', () => {
      const component = findComponentByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('does not render input box', () => {
      const inputBox = findComponentByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });
    test('does not render submit button', () => {
      const submit = findComponentByTestAttr(wrapper, 'submit-button');
      expect(submit.length).toBe(0);
    });
  });
});

describe('update state', () => {});
