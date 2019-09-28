import { getLetterMatchCount } from "./utils";

describe('getLetterMatchCount', () => {
    const secretWord = 'party';

    test('should return zero when there is no match', () => {
        expect(getLetterMatchCount('bones', secretWord)).toBe(0);
    });

    test('should return match number when there is match', () => {
        expect(getLetterMatchCount('train', secretWord)).toBe(3);
    });

    test('should return match number even when there is duplicate', () => {
        expect(getLetterMatchCount('parka', secretWord)).toBe(3);
    });
})
