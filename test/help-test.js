const { expect } = require('chai');
const { helpMenu } = require('../src/commands/help');

describe('help command', async () => {
  it('should return the help menu', () => {
    const expected = 'Help Menu';
    const actual = helpMenu();
    expect(actual).to.equal(expected);
  });
});