const { expect } = require('chai');
const {
  extractTotal,
  removeComments,
  getIDs,
  collectABs,
} = require('./challenge-1');

const codeStrings = require('./regex-data/code-strings');

describe('regex-problems', () => {
  describe('extractTotal()', () => {
    it('can find the total from a single code string', () => {
      const inputCode = 'abcd67yuio';
      const actual = extractTotal(inputCode);
      const desiredOutcome = 67;
      expect(actual).to.equal(desiredOutcome);
    });
    it('can find the total from multiple codeStrings', () => {
      let inputCode = 'abcd32audio\ncdhjkd10sudf';
      let actual = extractTotal(inputCode);
      let desiredOutcome = 42;
      expect(actual).to.equal(desiredOutcome);
      inputCode = 'c67281uidvm\nowfderkgzbpjmynuilx760453mxgcpej';
      actual = extractTotal(inputCode);
      desiredOutcome = 827734;
      expect(actual).to.equal(desiredOutcome);
    });
    it('can find the total from large number of multiple codeStrings', () => {
      let inputCode = codeStrings;
      let actual = extractTotal(inputCode);
      let desiredOutcome = 27581814788;
      expect(actual).to.equal(desiredOutcome);
    });
  });

  describe('removeComments()', () => {
    it('can remove a single comment from a string', () => {
      let inputCode = '// abc';
      let actual = removeComments(inputCode);
      let desiredOutcome = '';
      expect(actual).to.equal(desiredOutcome);
      inputCode = '//abc';
      actual = removeComments(inputCode);
      desiredOutcome = '';
      expect(actual).to.equal(desiredOutcome);
    });
    it('can remove a single comment from a string on two lines', () => {
      let inputCode = 'const sum = (a,b) => a + b;\n// abc';
      let actual = removeComments(inputCode);
      let desiredOutcome = 'const sum = (a,b) => a + b;\n';
      expect(actual).to.equal(desiredOutcome);
    });
    it('can remove multiple comments from a string', () => {
      let inputCode =
        'const sum = (a, b) => a + b;\n//something to be ignored\n// another comment intended for humans';
      let actual = removeComments(inputCode);
      let desiredOutcome = 'const sum = (a, b) => a + b;\n\n';
      expect(actual).to.equal(desiredOutcome);
    });
  });

  describe('getIDs()', () => {
    it('can get a single letter id from a div string with no inner text', () => {
      let inputCode = ['<div id="a"></div>'];
      let actual = getIDs(inputCode);
      let desiredOutcome = ['a'];
      expect(actual).to.eql(desiredOutcome);
      inputCode = ['<div id="z"></div>'];
      actual = getIDs(inputCode);
      desiredOutcome = ['z'];
      expect(actual).to.eql(desiredOutcome);
    });
    it('can get a mutliple letter id from a div string with no inner text', () => {
      let inputCode = ['<div id="menu"></div>'];
      let actual = getIDs(inputCode);
      let desiredOutcome = ['menu'];
      expect(actual).to.eql(desiredOutcome);
    });
    it('can get a multiple letter id from a single div containing a single word of inner text', () => {
      let inputCode = ['<div id="menu">Carte</div>'];
      let actual = getIDs(inputCode);
      let desiredOutcome = ['menu'];
      expect(actual).to.eql(desiredOutcome);
    });
    it('can get a multiple letter id from a single div containing multiple words of inner text', () => {
      let inputCode = ['<div id="menu">A La Carte</div>'];
      let actual = getIDs(inputCode);
      let desiredOutcome = ['menu'];
      expect(actual).to.eql(desiredOutcome);
    });
    it('can get a mutiple character id (including hyphens) from a div containing multiple words of inner text', () => {
      let inputCode = ['<div id="online-menu">A La Carte</div>'];
      let actual = getIDs(inputCode);
      let desiredOutcome = ['online-menu'];
      expect(actual).to.eql(desiredOutcome);
    });
    it('can get ids from an array of multiple div strings', () => {
      let inputCode = [
        '<div id="online-menu">A La Carte</div>',
        '<div id="red-box">Welcome to the site</div>',
        '<div id="northcoders-in-leeds">Hello</div>',
      ];
      let actual = getIDs(inputCode);
      let desiredOutcome = ['online-menu', 'red-box', 'northcoders-in-leeds'];
      expect(actual).to.eql(desiredOutcome);
    });
  });

  describe('collectABs()', () => {
    it('can filter out the strings consisting of a string with a multi-digit number', () => {
      let inputSequence = ['1', 'zsd'];
      let actual = collectABs(inputSequence);
      let desiredOutcome = ['1'];
      expect(actual).to.eql(desiredOutcome);
      inputSequence = ['12', '!@'];
      actual = collectABs(inputSequence);
      desiredOutcome = ['12'];
      expect(actual).to.eql(desiredOutcome);
      inputSequence = ['123', '1c2'];
      actual = collectABs(inputSequence);
      desiredOutcome = ['123'];
      expect(actual).to.eql(desiredOutcome);
    });
    it('can get strings consisting of a multi-digit string or letter a', () => {
      let inputSequence = ['12', 'a'];
      let actual = collectABs(inputSequence);
      let desiredOutcome = ['12', 'a'];
      expect(actual).to.eql(desiredOutcome);
      inputSequence = ['112', '345', 'a'];
      actual = collectABs(inputSequence);
      desiredOutcome = ['112', '345', 'a'];
      expect(actual).to.eql(desiredOutcome);
    });
    it('can get strings consisting of numbers, letter a or number followed by a', () => {
      let inputSequence = ['25', '13a', 'c', '13x', 'a'];
      let actual = collectABs(inputSequence);
      let desiredOutcome = ['25', '13a', 'a'];
      expect(actual).to.eql(desiredOutcome);
      inputSequence = ['2a', '123a', '1', '25c'];
      actual = collectABs(inputSequence);
      desiredOutcome = ['2a', '123a', '1'];
      expect(actual).to.eql(desiredOutcome);
    });
    it('can get strings consisting of numbers, letter a or number followed by a and letter b', () => {
      let inputSequence = ['25', '13a', 'b', 'c', '13x', 'a'];
      let actual = collectABs(inputSequence);
      let desiredOutcome = ['25', '13a', 'b', 'a'];
      expect(actual).to.eql(desiredOutcome);
      inputSequence = ['2a', '123a', '1', 'b', '25c'];
      actual = collectABs(inputSequence);
      desiredOutcome = ['2a', '123a', '1', 'b'];
      expect(actual).to.eql(desiredOutcome);
    });
    it('can get strings consisting of numbers, letter a or number followed by a and letter b and number followed by letter b', () => {
      let inputSequence = ['25', '13a', 'b', 'c', '13x', 'a', '100b'];
      let actual = collectABs(inputSequence);
      let desiredOutcome = ['25', '13a', 'b', 'a', '100b'];
      expect(actual).to.eql(desiredOutcome);
      inputSequence = ['2a', '123a', '1', 'b', '25c', '35b'];
      actual = collectABs(inputSequence);
      desiredOutcome = ['2a', '123a', '1', 'b', '35b'];
      expect(actual).to.eql(desiredOutcome);
    });
    it('can get strings consisting of numbers, letter a or number followed by a and letter b and string of mixes of a and b', () => {
      let inputSequence = ['25', '13a', 'b', 'c', '13x', 'a', '100b', 'ab'];
      let actual = collectABs(inputSequence);
      let desiredOutcome = ['25', '13a', 'b', 'a', '100b', 'ab'];
      expect(actual).to.eql(desiredOutcome);
      inputSequence = ['2a', '123a', '1', 'b', '25c', '35b', '31a24b'];
      actual = collectABs(inputSequence);
      desiredOutcome = ['2a', '123a', '1', 'b', '35b', '31a24b'];
      expect(actual).to.eql(desiredOutcome);
    });
  });
});
