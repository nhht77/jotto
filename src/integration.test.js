import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions/guessWord';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';
  describe('no guessed words', () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{
          guessedWord: unsuccessfulGuess,
          letterMatchCount: 3
        }]
      };
      expect(newState).toEqual(expectedState);
    });

    test('update state correctly for successful guess', () => {});
  });

  describe('There is some guessed words', () => {
    test('update state correctly for unsuccessful guess', () => {});

    test('update state correctly for successful guess', () => {});
  });
});
