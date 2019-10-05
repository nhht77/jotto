import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions/guessWord';

describe('guessWord action dispatcher', () => {
    const secretWord ='party';
    const unsuccessfulGuess = 'train';
  describe('There is no guessed words', () => {
      let store;
        let initState = {secretWord}
      beforeEach(() => {
        store = storeFactory(initState);
      })
    test('update state correctly for unsuccessful guess', () => {
        store.dispatch(guessWord(unsuccessfulGuess));
        const expectedState = {
            ...initState,
            success: false,
            guessedWords : [{
                guessedWord: unsuccessfulGuess,
                letterMatchCount: 3
            }]
        }
        const newState = store.getState();
        expect(newState).toEqual(expectedState);
    });

    test('update state correctly for successful guess', () => {});
  });

  describe('There is some guessed words', () => {
    test('update state correctly for unsuccessful guess', () => {});

    test('update state correctly for successful guess', () => {});
  });
});
