const { expect } = require('chai');
const {
  getExclaimed,
  getOldCats,
  getRecentTitles,
  getEvens,
  getMultiples,
} = require('./filter-challenges');

describe('using filter()', () => {
  describe('getExclaimed()', () => {
    it('returns names when have exclamation marks', () => {
      const names = ['Mitch!'];
      const actual = getExclaimed(names);
      const expected = ['Mitch!'];
      expect(actual).to.eql(expected);
    });
    it('returns empty array when no-one has exclamation marks', () => {
      const names = ['Mitch'];
      const actual = getExclaimed(names);
      const expected = [];
      expect(actual).to.eql(expected);
    });
    it('returns exclaimed names in mixed array of names ', () => {
      const names = ['Mitch', 'Vel!', 'Nicki!'];
      const actual = getExclaimed(names);
      const expected = ['Vel!', 'Nicki!'];
      expect(actual).to.eql(expected);
    });
  });

  describe('getOldCats()', () => {
    it('returns empty array when cat is younger than 8', () => {
      const cats = [{ name: 'Bean', age: 7 }];
      const actual = getOldCats(cats);
      const expected = [];
      expect(actual).to.eql(expected);
    });
    it('returns array of 1 cat when older than 8', () => {
      const cats = [{ name: 'Shnitz', age: 9 }];
      const actual = getOldCats(cats);
      const expected = [{ name: 'Shnitz', age: 9 }];
      expect(actual).to.eql(expected);
    });
    it('returns filtered cats when not all younger than 8', () => {
      const cats = [{ name: 'Shnitz', age: 4 }, { name: 'Bean', age: 9 }];
      const actual = getOldCats(cats);
      const expected = [{ name: 'Bean', age: 9 }];
      expect(actual).to.eql(expected);
    });
  });

  describe('getRecentTitles()', () => {
    it('returns empty array when films from before year 2000', () => {
      const films = [{ title: 'Jurassic Park', year: 1993 }];
      const actual = getRecentTitles(films);
      const expected = [];
      expect(actual).to.eql(expected);
    });
    it('returns array of 1 films when released after year 2000', () => {
      const films = [{ title: 'Inception', year: 2010 }];
      const actual = getRecentTitles(films);
      const expected = [{ title: 'Inception', year: 2010 }];
      expect(actual).to.eql(expected);
    });
    it('returns all films when all released after year 2000', () => {
      const films = [
        { title: 'Inception', year: 2010 },
        { title: 'Up', year: 2009 },
      ];
      const actual = getRecentTitles(films);
      const expected = [
        { title: 'Inception', year: 2010 },
        { title: 'Up', year: 2009 },
      ];
      expect(actual).to.eql(expected);
    });
    it('returns array of recent films with mixed year of release', () => {
      const films = [
        { title: 'Inception', year: 2010 },
        { title: 'Up', year: 2009 },
        { title: 'Jurassic Park', year: 1993 },
      ];
      const actual = getRecentTitles(films);
      const expected = [
        { title: 'Inception', year: 2010 },
        { title: 'Up', year: 2009 },
      ];
      expect(actual).to.eql(expected);
    });
  });

  describe('getEvens()', () => {
    it('returns [] when passed []', () => {
      const actual = getEvens([]);
      const expected = [];
      expect(actual).to.eql(expected);
    });
    it('returns array of even numbers with array of one number', () => {
      let numbers = [2];
      let actual = getEvens(numbers);
      let expected = [2];
      expect(actual).to.eql(expected);

      numbers = [3];
      actual = getEvens(numbers);
      expected = [];
      expect(actual).to.eql(expected);
    });
    it('returns even numbers from a mixed array', () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      const actual = getEvens(numbers);
      const expected = [2, 4, 6];
      expect(actual).to.eql(expected);
    });
    it('returns no numbers when only an odd array is passed', () => {
      const oddNums = [1, 3, 5, 7, 99];
      const actual = getEvens(oddNums);
      const expected = [];
      expect(actual).to.eql(expected);
    });
  });

  describe('getMultiples()', () => {
    it('returns array of multiples with array of 1 number', () => {
      let numbers = [1];
      let multiple = 1;
      let actual = getMultiples(numbers, multiple);
      let expected = [1];
      expect(actual).to.eql(expected);

      numbers = [4];
      multiple = 2;
      actual = getMultiples(numbers, multiple);
      expected = [4];
      expect(actual).to.eql(expected);
    });
    it('returns empty array when no mulitples', () => {
      let numbers = [3];
      let multiple = 2;
      let actual = getMultiples(numbers, multiple);
      let expected = [];
      expect(actual).to.eql(expected);

      numbers = [3, 7, 9];
      multiple = 4;
      actual = getMultiples(numbers, multiple);
      expected = [];
      expect(actual).to.eql(expected);
    });
    it('returns multiples from mixed array', () => {
      const numbers = [2, 3, 4, 5, 6];
      const multiple = 3;
      const actual = getMultiples(numbers, multiple);
      const expected = [3, 6];
      expect(actual).to.eql(expected);
    });
  });
});
