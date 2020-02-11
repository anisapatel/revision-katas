'use strict';
const { expect } = require('chai');
const {
  getLastElement,
  getOuterSum,
  getAnyItem,
  getMiddle,
} = require('./array-challenges');

describe('accessing arrays', () => {
  describe('getLastElement()', () => {
    it('can access last element of an array', () => {
      const words = ['hello', 'there', 'I', 'am', 'coding!'];
      const actual = getLastElement(words);
      const expected = 'coding!';
      expect(actual).to.equal(expected);
    });
  });

  describe('getOuterSum()', () => {
    it('can get the outer sum of an array of two numbers', () => {
      const numberPair = [100, 3];
      const actual = getOuterSum(numberPair);
      const expected = 103;
      expect(actual).to.equal(expected);
    });
    it('can get the outer sum for an array of three items', () => {
      const numberPair = [100, 4, 3];
      const actual = getOuterSum(numberPair);
      const expected = 103;
      expect(actual).to.equal(expected);
    });
    it('can get the outer sum for an array of multiple items (more than 3)', () => {
      const numberPair = [100, 4, 3, 57, 98, 2, 41];
      const actual = getOuterSum(numberPair);
      const expected = 141;
      expect(actual).to.equal(expected);
    });
  });

  describe('getAnyItem()', () => {
    it('can access an array using an index less than the array length', () => {
      let arr = ['a', 'b', 'c'];
      let actual = getAnyItem(arr, 0);
      let expected = 'a';
      expect(actual).to.equal(expected);
      actual = getAnyItem(arr, 1);
      expected = 'b';
      expect(actual).to.equal(expected);
      actual = getAnyItem(arr, 2);
      expected = 'c';
      expect(actual).to.equal(expected);
    });
    it('can access an array using an index equal to the array length', () => {
      const arr = ['a', 'b', 'c'];
      const actual = getAnyItem(arr, 3);
      const expected = 'a';
      expect(actual).to.equal(expected);
    });
    it('can access an array using an index greater than the array length', () => {
      let arr = ['a', 'b', 'c'];
      let actual = getAnyItem(arr, 4);
      let expected = 'b';
      expect(actual).to.equal(expected);
      actual = getAnyItem(arr, 5);
      expected = 'c';
      expect(actual).to.equal(expected);
    });
  });

  describe('getMiddle()', () => {
    it('can access middle item for an array containing one item', () => {
      const arr = ['LEEDS!'];
      const actual = getMiddle(arr);
      const expected = ['LEEDS!'];
      expect(actual).to.eql(expected);
    });
    it('can access middle two items in an array contaninig two items', () => {
      const arr = ['NORTHCODERS', 'LEEDS'];
      const actual = getMiddle(arr);
      const expected = ['NORTHCODERS', 'LEEDS'];
      expect(actual).to.eql(expected);
    });
    it('can access middle item in an odd length array of multiple (more than 1) items', () => {
      const arr = ['Javascript!', 'woo', 'LEEDS!', 'yorkshire', 'coding'];
      const actual = getMiddle(arr);
      const expected = ['LEEDS!'];
      expect(actual).to.eql(expected);
    });
    it('can access middle two items in an even length array of more than 2 items', () => {
      const arr = [
        'Javascript!',
        'woo',
        'LEEDS!',
        'yorkshire',
        'coding',
        'northcoders',
      ];
      const actual = getMiddle(arr);
      const expected = ['LEEDS!', 'yorkshire'];
      expect(actual).to.eql(expected);
    });
  });
});

var STRING_HERE;
var INDEX_HERE;
var YOUR_EXPRESSION_HERE;
var EXPRESSION_HERE;
var NAME_OF_STRING;
var FILL_ME_IN;
