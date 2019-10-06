import { GUESS_WORD } from '../actions/actionTypes';
import { getLetterMatchCount } from '../helpers';

export default (state = [], action) => {
  switch (action.type) {
    case GUESS_WORD:
      return {
        ...state,
        guessedWords: [
          {
            guessedWord: action.payload,
            LetterMatchCount: getLetterMatchCount(action.payload, 'party')
          }
        ]
      };
    default:
      return state;
  }
};
