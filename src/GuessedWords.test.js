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

describe('if there are words guessed', () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 }
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  test('renders without any errors', () => {
    const component = findComponentByTestAttr(
      wrapper,
      'component-guessed-word'
    );
    expect(component.length).toBe(1);
  });

  test('renders "guessed words" section', () => {
    const guessedWordsNode = findComponentByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  });

  test('correct number of guessed words', () => {
    const guessedWordsNode = findComponentByTestAttr(
      wrapper,
      'guessed-words-node'
    );
    expect(guessedWordsNode.length).toBe(guessedWords.length);
  });
});
