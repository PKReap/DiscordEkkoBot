const { expect } = require('chai');


const { make_uwu, uwufy } = require('../src/commands/uwufy');

describe('Ekko Tests', async () => {

  const make_uwu_test_cases = [
    { input: 'r', expected: 'w' },
    { input: 'l', expected: 'w' },
    { input: 'R', expected: 'W' },
    { input: 'L', expected: 'W' },
    { input: 'o', expected: 'owo' },
    { input: 'O', expected: 'OWO' },
    { input: 'u', expected: 'uwu' },
    { input: 'U', expected: 'UWU' },
    { input: 'a', expected: 'a' },
    { input: 'A', expected: 'A' },
    { input: '!', expected: '!' },
  ];

  make_uwu_test_cases.forEach((test_case) => {
    it(`make_uwu test case: ${test_case.input}`, () => {
      expect(make_uwu(test_case.input)).to.equal(test_case.expected);
    });
  });


  const uwufy_test_cases = [
    { input: 'Hello', expected: 'Hewwowo' },
    { input: 'Hello World', expected: 'Hewwowo Wowowwd' },
    { input: 'Hello World!', expected: 'Hewwowo Wowowwd!' },
  ];

  uwufy_test_cases.forEach((test_case) => {
    it(`uwufy test case: ${test_case.input}`, () => {
      expect(uwufy(test_case.input)).to.equal(test_case.expected);
    });
  });
});
