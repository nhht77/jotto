import moxios from 'moxios';
import { CORRECT_GUESS } from './actionTypes';
import { correctGuess } from './success';

describe('correctGuess', () => {
  test('returns an action with type "CORRECT_GUESS"', () => {
    expect(correctGuess()).toEqual({
      type: CORRECT_GUESS
    });
  });
});

describe('secretWord', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
});
