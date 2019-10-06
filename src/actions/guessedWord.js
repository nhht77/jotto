import { CORRECT_GUESS, GUESS_WORD } from './actionTypes';
import { getLetterMatchCount } from "../helpers";

export const guessWord = guessedWord => (dispatch, getState) => {
  const secretWord = getState().secretWord;
  const letterMatchCount = getLetterMatchCount(secretWord, guessedWord);

  dispatch({
      type: GUESS_WORD,
      payload: {guessedWord, letterMatchCount}
  })
    
    //IF GuessedWord is correct, then dispatch the action   
  if (guessedWord === secretWord) {
    dispatch({ type: CORRECT_GUESS });
  }
};
