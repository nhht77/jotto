import { combineReducers } from 'redux';
import success from './success';
import guessWords from './guessedWords';
import secretWord from './secretWord';

export default combineReducers({
  success,
  guessWords,
  secretWord
});
