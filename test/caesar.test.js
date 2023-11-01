const chai = require('chai');
const expect = chai.expect;
const { caesar } = require('../src/caesar');

describe('caesar function', () => {
  it('should return false if the shift value is 0, less than -25, greater than 25, or not present', () => {
    expect(caesar('message', 0)).to.equal(false);
    expect(caesar('message', -26)).to.equal(false);
    expect(caesar('message', 26)).to.equal(false);
    expect(caesar('message')).to.equal(false);
  });
  it('should ignore capital letters', () => {
    expect(caesar('A Message', 3)).to.equal(caesar('a message', 3));
  });
  it('should handle shifts that go past the end of the alphabet when encoding', () => {
    expect(caesar('z', 3)).to.equal('c');
  });
});

// describe('caesar function', () => {
//   it('should correctly encrypt the message with a given shift', () => {
//     expect(caesar('abc', 3)).toBe('def');
//   });

//   it('should correctly decrypt the message with a given shift', () => {
//     expect(caesar('def', -3)).toBe('abc');
//   });
// });