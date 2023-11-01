// Write your tests here!
const chai = require('chai');
const expect = chai.expect;
const {substitution} = require('../src/substitution'); // adjust the path according to your project structure

describe('substitution', () => {
  it('should return false if the given alphabet isn\'t exactly 26 characters long', () => {
    expect(substitution('message', 'short')).to.be.false;
    expect(substitution('message', 'thisisaverylongalphabetthatistoolong')).to.be.false;
  });

  it('should correctly translate the given phrase, based on the alphabet given to the function', () => {
    expect(substitution('message', 'plmoknijbuhvygctfxrdzeswaq')).to.equal('ykrrpik');
  });

  it('should return false if there are any duplicate characters in the given alphabet', () => {
    expect(substitution('message', 'abcabcabcabcabcabcabcabcab')).to.be.false;
  });
});