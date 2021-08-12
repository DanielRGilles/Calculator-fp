// import functions 
import {
  add,
  subtract,
  divide,
  multiply
} from './utils.js'
// grabbing from the dom
const numOne = document.getElementById('num-one')
const numTwo = document.getElementById('num-two')
const resultEl = document.getElementById('math-result')
const addBtn = document.getElementById('add-num')
const subBtn = document.getElementById('sub-num')
const divBtn = document.getElementById('div-num')
const multBtn = document.getElementById('mult-num')

// set event listeners 
addBtn.addEventListener('click', () => {
  const firstValue = numOne.value;
  const secondValue = numTwo.value;
  const sum = add(firstValue, secondValue);
  resultEl.textContent = sum;
});

subBtn.addEventListener('click', () => {
  const firstValue = numOne.value;
  const secondValue = numTwo.value;
  const sum = subtract(firstValue, secondValue);
  resultEl.textContent = sum;
});
divBtn.addEventListener('click', () => {
  const firstValue = numOne.value;
  const secondValue = numTwo.value;
  const sum = divide(firstValue, secondValue);
  resultEl.textContent = sum;
});
multBtn.addEventListener('click', () => {
  const firstValue = numOne.value;
  const secondValue = numTwo.value;
  const sum = multiply(firstValue, secondValue);
  resultEl.textContent = sum;
});

