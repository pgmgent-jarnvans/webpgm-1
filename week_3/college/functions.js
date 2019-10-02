/*
Topic:        Functions
Developed by: Jarne
Last updated: 10-02-2019
*/

/*
Function declaration
=========================================================
*/

function showMessage(fullName, job) {
  console.log(`Hello ${fullName} the ${job.toLowerCase()}`);
}

// Call function
showMessage('Mr Dutroux', 'Childmolester');

// function declaration that returns something

const f = addNumbers(6, 5);

function addNumbers(a, b) {
  return a + b;
}

const c = addNumbers(6, -4);
console.log(c); 

/*
Function expressions
======================================================================
*/

const power = function (a) {
  return a * a;
}

const d = power(9);
console.log(d);


/*
Arguments object
=====================================================================
*/

function concat(separator) {
  let tempStr = '';
  for (let i = 1; i < arguments.length; i++){
    tempStr += arguments[i] + ((i < arguments.length - 1) ? `${separator}` : '');
  }
  return tempStr;
}

const msg = concat('|', 'ait-1', 'webdes', 'webpgm-1');
console.log(msg);

/*
Function parameters
=================================================
*/

function subtraction(a = 1, b = 1) {
  return a - b;
}

const g = subtraction(5);
console.log(g);

