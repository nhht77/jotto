import reducer from './success';
import { CORRECT_GUESS } from '../actions/actionTypes';

describe('Success reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toBe(false);
  });

  test('should handle CORRECT_GUESS', () => {
    expect(reducer(undefined, { type: CORRECT_GUESS })).toBe(true);
  });
});
