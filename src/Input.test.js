import React from 'react';
import { shallow } from 'enzyme';

import { findComponentByTestAttr } from '../test/testUtils';
import Input from './Input';

describe('render', () => {
  describe('words have not been guessed', () => {
    test('renders component without error', () => {});

    test('renders submit box', () => {});

    test('renders submit button', () => {});
  });

  describe('words have been guessed', () => {
    test('not renders submit box', () => {});

    test('not renders submit button', () => {});
  });
});

describe('update state', () => {});
