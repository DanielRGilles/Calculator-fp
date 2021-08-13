// IMPORT MODULES under test here:
// import { example } from '../example.js';
import {
    add,
    subtract,
    divide,
    multiply
  } from '../utils.js'
const test = QUnit.test;

test('time to test a function', function(expect) {
  //Arrange
  // Set up your arguments and expectations
    const firstNumber = 3;
    const secondNumber = 4;
    const expectedResult = 7;

  //Act 
  // Call the function you're testing and set the result to a const
    const actualResult = add(firstNumber, secondNumber);

  //Expectation
  // Make expectations about what is expected and the actual result
    expect.equal(actualResult, expectedResult);
});
test('time to test a function', function(expect) {
  //Arrange
  // Set up your arguments and expectations
    const firstNumber = 3;
    const secondNumber = 4;
    const expectedResult = -1;

  //Act 
  // Call the function you're testing and set the result to a const
    const actualResult = subtract(firstNumber, secondNumber);

  //Expectation
  // Make expectations about what is expected and the actual result
    expect.equal(actualResult, expectedResult);
});test('time to test a function', function(expect) {
  //Arrange
  // Set up your arguments and expectations
    const firstNumber = 28;
    const secondNumber = 4;
    const expectedResult = 7;

  //Act 
  // Call the function you're testing and set the result to a const
    const actualResult = divide(firstNumber, secondNumber);

  //Expectation
  // Make expectations about what is expected and the actual result
    expect.equal(actualResult, expectedResult);
});test('time to test a function', function(expect) {
  //Arrange
  // Set up your arguments and expectations
    const firstNumber = 3;
    const secondNumber = 4;
    const expectedResult = 12;

  //Act 
  // Call the function you're testing and set the result to a const
    const actualResult = multiply(firstNumber, secondNumber);

  //Expectation
  // Make expectations about what is expected and the actual result
  expect.equal(actualResult, expectedResult);
});
