'use strict';

const alphabet = "abcdefghijklmnopqrstuvwxyz";

/**
 * 
 * @returns {string} String of 26 alphabets in lowercase
 * @customfunction
 */
function generateAlphabet() {
  result = "";
  for (let i=97; i < 97+26; i++) {
    result = result + String.fromCharCode(i);
  }
  return result;
}

function counter() {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    document.getElementById('app').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
  }, 1000);
}

counter();

/**
 * 
 * @param {number} A number to be moduloed
 * @param {number} modulo number
 * @returns {number}
 * @customfunction
 */
function moduloNumber(x, modulo) {
  let result = x % modulo;
  return (result == 0) ? modulo : result;
}

/**
 * Convert a string of name to an array of numbers
 * @param {String} string name
 * @returns {array} Array of integers from 1 to 9 (a:1, b:2,...,z: 8)
 * @customfunction
 */
function nameToInteger(name="  LE DO QUYNH HUONG  ") {
  let result = [];
  strName = name.trim().toLowerCase();
  for (let i = 0; i < strName.length; i++) {
    let position = alphabet.indexOf(strName[i]);
    if (position != -1) {
      result.push(position+1);
    }
  }
  let output = result.map(el => moduloNumber(el, 9));
  // console.log(result);
  return output;
}
