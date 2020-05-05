const { createTally, countVowels, tallyMPs } = require('./counting-challenges');
const MPs = require('./data/mps');
const NCFruitBowl = require('./data/nc-fruit-bowl');

describe('counting challenges', () => {
  describe('createTally()', () => {
    it('returns empty object when given empty array', () => {
      expect(createTally([])).toEqual({});
    });
    it('returns single key-value pair tally when given single element array', () => {
      expect(createTally(['a'])).toEqual({ a: 1 });
    });
    it('tallys the items for an array of multiple duplicate items', () => {
      expect(createTally(['a', 'a'])).toEqual({ a: 2 });
    });
    it('tallys the items for multiple distinct items', () => {
      expect(createTally(['a', 'b'])).toEqual({ a: 1, b: 1 });
    });
    it('returns tally for multiple items some distinct and some duplicated', () => {
      expect(createTally(['a', 'b', 'a'])).toEqual({ a: 2, b: 1 });
    });
    it('can tally larger array of miscellaenous items', () => {
      expect(createTally(NCFruitBowl)).toEqual({
        apple: 276,
        pear: 223,
        banana: 263,
        orange: 238,
        'lonesome plum': 1,
      });
    });
  });
  describe('countVowels()', () => {
    it('can get a vowel tally for a string containing one vowel', () => {
      let input = 'a';
      let actual = countVowels(input);
      let expected = { a: 1 };
      expect(actual).toEqual(expected);
      input = 'e';
      actual = countVowels(input);
      expected = { e: 1 };
      expect(actual).toEqual(expected);
      input = 'i';
      actual = countVowels(input);
      expected = { i: 1 };
      expect(actual).toEqual(expected);
    });
    it('will not count consonants in a string containing a single character', () => {
      let input = 'b';
      let actual = countVowels(input);
      let expected = {};
      expect(actual).toEqual(expected);
      input = 'z';
      actual = countVowels(input);
      expected = {};
      expect(actual).toEqual(expected);
    });
    it('will count the vowels in a string containing multiple duplicate vowels', () => {
      let input = 'aa';
      let actual = countVowels(input);
      let expected = { a: 2 };
      expect(actual).toEqual(expected);
      input = 'eee';
      actual = countVowels(input);
      expected = { e: 3 };
      expect(actual).toEqual(expected);
    });
    it('can obtain the vowel count for multiple distinct vowels', () => {
      let input = 'ae';
      let actual = countVowels(input);
      let expected = { a: 1, e: 1 };
      expect(actual).toEqual(expected);
      input = 'aeiou';
      actual = countVowels(input);
      expected = { a: 1, e: 1, i: 1, o: 1, u: 1 };
      expect(actual).toEqual(expected);
    });
    it('will ignore consonants in strings containing multiple characters', () => {
      let input = 'ayaefee';
      let actual = countVowels(input);
      let expected = { a: 2, e: 3 };
      expect(actual).toEqual(expected);
      input = 'ebeeigi';
      actual = countVowels(input);
      expected = { e: 3, i: 2 };
      expect(actual).toEqual(expected);
    });
  });
  describe('tallyMPs()', () => {
    it('will return an MP tally for a single MP object', () => {
      let input = [
        {
          member_id: '41834',
          person_id: '10523',
          name: 'Joan Ryan',
          party: 'Labour',
          constituency: 'Enfield North',
          office: [
            {
              dept: 'Panel of Chairs',
              position: 'Member',
              from_date: '2017-06-22',
              to_date: '9999-12-31',
            },
            {
              dept: 'Environmental Audit Committee',
              position: 'Member',
              from_date: '2017-09-11',
              to_date: '9999-12-31',
            },
          ],
        },
      ];
      let actual = tallyMPs(input);
      let expected = { Labour: 1 };
      expect(actual).toEqual(expected);
    });
    it('can tally MPs for an array of multiple MPs of the same party', () => {
      let input = [
        {
          member_id: '41834',
          person_id: '10523',
          name: 'Joan Ryan',
          party: 'Labour',
          constituency: 'Enfield North',
          office: [
            {
              dept: 'Panel of Chairs',
              position: 'Member',
              from_date: '2017-06-22',
              to_date: '9999-12-31',
            },
            {
              dept: 'Environmental Audit Committee',
              position: 'Member',
              from_date: '2017-09-11',
              to_date: '9999-12-31',
            },
          ],
        },
        {
          member_id: '41460',
          person_id: '10259',
          name: 'David Hanson',
          party: 'Labour',
          constituency: 'Delyn',
          office: [
            {
              dept: 'Panel of Chairs',
              position: 'Member',
              from_date: '2017-06-22',
              to_date: '9999-12-31',
            },
            {
              dept: 'Justice Committee',
              position: 'Member',
              from_date: '2017-09-11',
              to_date: '9999-12-31',
            },
            {
              dept: 'Intelligence and Security Committee of Parliament',
              position: 'Member',
              from_date: '2017-11-16',
              to_date: '9999-12-31',
            },
          ],
        },
      ];
      let actual = tallyMPs(input);
      let expected = { Labour: 2 };
      expect(actual).toEqual(expected);
    });
    it('can tally MPS for an array of MPs in distinct parties', () => {
      let input = [
        {
          member_id: '41834',
          person_id: '10523',
          name: 'Joan Ryan',
          party: 'Labour',
          constituency: 'Enfield North',
          office: [
            {
              dept: 'Panel of Chairs',
              position: 'Member',
              from_date: '2017-06-22',
              to_date: '9999-12-31',
            },
            {
              dept: 'Environmental Audit Committee',
              position: 'Member',
              from_date: '2017-09-11',
              to_date: '9999-12-31',
            },
          ],
        },
        {
          member_id: '41460',
          person_id: '10259',
          name: 'David Hanson',
          party: 'Labour',
          constituency: 'Delyn',
          office: [
            {
              dept: 'Panel of Chairs',
              position: 'Member',
              from_date: '2017-06-22',
              to_date: '9999-12-31',
            },
            {
              dept: 'Justice Committee',
              position: 'Member',
              from_date: '2017-09-11',
              to_date: '9999-12-31',
            },
            {
              dept: 'Intelligence and Security Committee of Parliament',
              position: 'Member',
              from_date: '2017-11-16',
              to_date: '9999-12-31',
            },
          ],
        },
        {
          member_id: '41560',
          person_id: '11884',
          name: 'Greg Clark',
          party: 'Conservative',
          constituency: 'Tunbridge Wells',
          office: [
            {
              dept: '',
              position:
                'The Secretary of State for Business, Energy and Industrial Strategy ',
              from_date: '2016-07-14',
              to_date: '9999-12-31',
            },
          ],
        },
      ];
      let actual = tallyMPs(input);
      let expected = { Labour: 2, Conservative: 1 };
      expect(actual).toEqual(expected);
    });
    it('can make tally for multiple MPs in distinct parties', () => {
      let actual = tallyMPs(MPs);
      let expected = {
        Labour: 2,
        Conservative: 5,
        'Scottish National Party': 3,
      };
      expect(actual).toEqual(expected);
    });
  });
});
