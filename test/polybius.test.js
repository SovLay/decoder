const chai = require('chai');
const expect = chai.expect;
const { polybius } = require('../src/polybius'); // adjust the path according to your project structure

describe('polybius', () => {
  it('should encode i and j as 42', () => {
    expect(polybius('i')).to.equal('42');
    expect(polybius('j')).to.equal('42');
  });

  it('should decode 42 as i/j', () => {
    expect(polybius('42', false)).to.equal('(i/j)');
  });

  it('should ignore capital letters', () => {
    expect(polybius('A Message')).to.equal(polybius('a message'));
  });

  it('should maintain spaces in the message', () => {
    const message = 'Hello world';
    const encoded = polybius(message);
    const decoded = polybius(encoded, false);
    expect(encoded.split(' ').length).to.equal(message.split(' ').length);
    expect(decoded.split(' ').length).to.equal(message.split(' ').length);
  });
});