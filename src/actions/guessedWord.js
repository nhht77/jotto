import { GUESS_WORD } from './actionTypes';
export const guessWord = guessWord => (dispatch, getState) => {
  dispatch({
    type: GUESS_WORD,
    payload: guessWord
  });
};
