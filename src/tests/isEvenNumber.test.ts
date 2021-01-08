import isEvenNumber from './isEvenNumber';

describe('isEvenNumber Tests', () => {
  it('Its an even number', () => {
    [2, 4, 6, 100, 200, 0].map((n) => expect(isEvenNumber(n)).toEqual(true));
  });

  it('Its an odd number', () => {
    [3, 1, 1232141, 113, 11, 5].map((n) => expect(isEvenNumber(n)).toEqual(false));
  });
});
