const { expect } = require('chai');
const {
  accessName,
  accessObject,
  checkHasProperty,
  removeName,
  removeProperty,
  addProperty,
} = require('./objects-challenges');

describe('object practice', function () {

  describe('accessName()', () => {
    it('can acess name property from a person object', () => {
      let person = { name: 'Haz' };
      let actual = accessName(person);
      let expected = 'Haz';
      expect(actual).to.equal(expected);
      actual = accessName({ name: 'Sam' });
      expected = 'Sam';
      expect(actual).to.equal(expected);
    });
  });

  describe('accessObject()', () => {
    it('can access any value in an object given an arbitrary key', () => {
      const item = {
        fruit: 'apple',
      };
      const faveBook = {
        title: 'Blood Meridian',
        author: 'Cormac McCarthy',
      };
      let actual = accessObject(item, 'fruit');
      let expected = 'apple';
      expect(actual).to.equal(expected);
      actual = accessObject(faveBook, 'title');
      expected = 'Blood Meridian';
      expect(actual).to.equal(expected);
    });
  });

  describe('checkHasProperty()', () => {
    it('can check if a given object has a particular property', () => {
      const author = {
        name: 'Zadie Smith',
        debut: 'White Teeth',
      };
      let actual = checkHasProperty(author, 'name');
      expect(actual).to.be.true;
      actual = checkHasProperty(author, 'debut');
      expect(actual).to.be.true;
      actual = checkHasProperty(author, 'prizes');
      expect(actual).to.be.false;
    });
  });

  describe('removeName()', () => {
    it('removes the name property from an object', () => {
      const author = {
        name: 'Zadie Smith',
        debut: 'White Teeth',
      };
      let actual = removeName(author);
      expect(actual).to.eql({ debut: 'White Teeth' });
    });
  });

  describe('removeProperty()', () => {
    it('removes a given property from an object', () => {
      const oscarWinner = {
        title: 'Moonlight',
        director: 'Barry Jenkins',
      };
      let actual = removeProperty(oscarWinner, 'title');
      expect(actual).to.eql({ director: 'Barry Jenkins' });
    });
    it('repeatedly removes given properties from a object', () => {
      const oscarWinner = {
        title: 'Moonlight',
        director: 'Barry Jenkins',
      };
      let actual = removeProperty(oscarWinner, 'title');
      expect(actual).to.eql({ director: 'Barry Jenkins' });
      actual = removeProperty(oscarWinner, 'director');
      expect(actual).to.eql({});
    });
    it('returns the same object if a property inside the object is passed', () => {
      const oscarWinner = {
        title: 'Moonlight',
        director: 'Barry Jenkins',
      };
      let actual = removeProperty(oscarWinner, 'cast');
      expect(actual).to.eql({
        title: 'Moonlight',
        director: 'Barry Jenkins',
      });
    });
  });

  describe('addProperty()', () => {
    it('adds a key-value pair to an object', () => {
      const keyValuePair = ['name', 'mitch'];
      const person = { job: 'teacher' };
      let actual = addProperty(person, keyValuePair);
      expect(actual).to.eql({ name: 'mitch', job: 'teacher' });
    });
    it('returns the same object if no key-value pair is passed', () => {
      const person = { job: 'teacher' };
      let actual = addProperty(person);
      expect(actual).to.eql({ job: 'teacher' });
    });
  });
});



var FILL_ME_IN;
