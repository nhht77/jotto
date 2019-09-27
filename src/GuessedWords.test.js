import React from 'react';
import { shallow } from 'enzyme';
import { findComponentByTestAttr, checkProps } from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [{ guessedWord: 'noodle', letterMatchCount: 3 }]
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test('renders without any error', () => {
    const component = findComponentByTestAttr(
      wrapper,
      'component-guessed-word'
    );
    expect(component.length).toBe(1);
  });

  test('render instruction text', () => {
    const instruction = findComponentByTestAttr(
      wrapper,
      'component-instruction'
    );
    expect(instruction.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {});
