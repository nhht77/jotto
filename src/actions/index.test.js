import moxios from 'moxios';
import { CORRECT_GUESS } from './actionTypes';
import { correctGuess } from './success';
import { getSecretWord } from "./secretWord";
import { storeFactory } from '../../test/testUtils';

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

  test('add secret words after make request', () => {
    const secretWord = 'party';
    const store      = storeFactory();
    
    moxios.wait(() =>{
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: secretWord
      })
    })

    return store.dispatch(getSecretWord())
    .then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toEqual(secretWord);
    })

  })
});
