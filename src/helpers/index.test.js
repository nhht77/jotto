import { getLetterMatchCount } from './index';

describe('getLetterMatchCount', () => {
  const guessWord = 'party';
  test('It shoud return correct count when there is 0 matching', () => {
    expect(getLetterMatchCount('bones', guessWord)).toBe(0);
  });

  test('It should return the correct count when there is 3 matching', () => {
    expect(getLetterMatchCount('park', guessWord)).toBe(3);
  });

  test('It should return the correct count when there is duplicate', () => {
    expect(getLetterMatchCount('parkarp', guessWord)).toBe(3);
  });
});
