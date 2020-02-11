const { expect } = require('chai');
const {
  incrementNums,
  multiplyNums,
  extractCatNames,
  getFullNames,
  getObjectProperties,
} = require('./map-challenges');

describe('using map()', () => {
  describe('incrementNums()', () => {
    it('returns the same list when no increment is provided', () => {
      const list = [1, 2];
      const actual = incrementNums(list);
      const expected = [1, 2];
      expect(actual).to.eql(expected);
    });
    it('returns array of one number with number increased by provided increment', () => {
      const list = [3];
      const actual = incrementNums(list, 1);
      const expected = [4];
      expect(actual).to.eql(expected);
    });
    it('returns array with every number incremented by provided increment', () => {
      let list = [3, 4];
      let actual = incrementNums(list, 1);
      let expected = [4, 5];
      expect(actual).to.eql(expected);

      list = [3, 4, 66, 74];
      actual = incrementNums(list, 1);
      expected = [4, 5, 67, 75];
      expect(actual).to.eql(expected);

      actual = incrementNums(list, 10);
      expected = [13, 14, 76, 84];
      expect(actual).to.eql(expected);
    });
  });

  describe('multiplyNums()', () => {
    it('returns an array with original numbers, when no increment is passed ', () => {
      const list = [1, 2, 3];
      const actual = multiplyNums(list);
      const expected = [1, 2, 3];
      expect(actual).to.eql(expected);
    });
    it('returns array with number multipled by provided multiplier ', () => {
      let list = [2];
      let num = 10;
      let actual = multiplyNums(list, num);
      let expected = [20];
      expect(actual).to.eql(expected);

      list = [3];
      num = 5;
      actual = multiplyNums(list, num);
      expected = [15];
      expect(actual).to.eql(expected);
    });
    it('returns array with all items multipled by provided multiplier', () => {
      let list = [1, 2];
      let num = 2;
      let actual = multiplyNums(list, num);
      let expected = [2, 4];
      expect(actual).to.eql(expected);

      list = [1, 2, 24, 31];
      num = 10;
      actual = multiplyNums(list, num);
      expected = [10, 20, 240, 310];
      expect(actual).to.eql(expected);
    });
  });

  describe('extractCatNames()', () => {
    it('returns empty array when it passed an empty array', () => {
      const actual = extractCatNames([]);
      const expected = [];
      expect(actual).to.eql(expected);
    });
    it('returns array of extracted cat names from array of one cat object', () => {
      const actual = extractCatNames([{ name: 'Zelda' }]);
      const expected = ['Zelda'];
      expect(actual).to.eql(expected);
    });
    it('returns array of extracted cat names from array of multiple cat objects', () => {
      let cats = [{ name: 'Zelda' }, { name: 'Opal' }];
      let actual = extractCatNames(cats);
      let expected = ['Zelda', 'Opal'];
      expect(actual).to.eql(expected);

      cats = [{ name: 'Shnitz', age: 4 }, { name: 'Minou', age: 1 }];
      actual = extractCatNames(cats);
      expected = ['Shnitz', 'Minou'];
      expect(actual).to.eql(expected);
    });
  });

  describe('getFullNames()', () => {
    it('returns fullName in a new array for an array with a single person object', () => {
      const people = [{ firstName: 'Veronica', surName: 'Grape' }];
      const actual = getFullNames(people);
      const expected = ['Veronica Grape'];
      expect(actual).to.eql(expected);
    });
    it('returns fullNames for an array of multiple distinct people', () => {
      const people = [
        { firstName: 'Veronica', surName: 'Grape' },
        { firstName: 'Sam', surName: 'Caine' },
      ];
      const actual = getFullNames(people);
      const expected = ['Veronica Grape', 'Sam Caine'];
      expect(actual).to.eql(expected);
    });
  });

  describe('getObjectProperties()', () => {
    it('returns array of object value based on passed title key', () => {
      const list = [{ title: 'Ponyo' }];
      const key = 'title';
      const actual = getObjectProperties(list, key);
      const expected = ['Ponyo'];
      expect(actual).to.eql(expected);
    });
    it('returns array of length 1 of object values based on provided key', () => {
      const list = [{ title: 'Ponyo', year: 2008 }];
      let key = 'title';
      let actual = getObjectProperties(list, key);
      let expected = ['Ponyo'];
      expect(actual).to.eql(expected);

      key = 'year';
      actual = getObjectProperties(list, key);
      expected = [2008];
      expect(actual).to.eql(expected);
    });

    it('returns an array of object values based on provided keys', () => {
      const list = [
        { title: 'Ponyo', year: 2008, ImdbRating: 7.7 },
        { title: 'Muppets Christmas Carol', year: 1992, ImdbRating: 9.7 },
      ];
      let key = 'title';
      let actual = getObjectProperties(list, key);
      let expected = ['Ponyo', 'Muppets Christmas Carol'];
      expect(actual).to.eql(expected);

      key = 'ImdbRating';
      actual = getObjectProperties(list, key);
      expected = [7.7, 9.7];
      expect(actual).to.eql(expected);
    });
  });
});
