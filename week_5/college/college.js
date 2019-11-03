/**
 * Week 5
 * Web Programming 1: Front-End (Basic)
 */

 /**
  * Arrow functions
  */

  // Define and assign persons (array of literal objects)
const persons = [
  {
    firstName: 'Jennifer',
    lastName: 'Lawrence'
  },
  {
    firstName: 'Scarlett',
    lastName: 'Johansson'
  },
  {
    firstName: 'Heidi',
    lastName: 'Shepherd'
  }
];

persons.forEach(function(person) {
  console.log(person);
});

persons.forEach((person) => {
  console.log(person);
});

persons.forEach(person => console.log(person));

const stuff = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

const nStuff = stuff.map(function(s) {
  return s.length;
});

console.log(nStuff);

const nStuffArrow = stuff.map(s => s.length);

console.log(nStuffArrow);

/**
 * Immediately Invoked Function Expression (IIFE)
 */

function add() {
  const x = 5;
  const y = -4;
  return x + y;
}

console.log(add());

(function add2() {
  const x = 5;
  const y = -4;
  return x + y;
});

//console.log(add2());

const a1 = (function() {
  const x = 5;
  const y = -4;
  return x + y;
})();

console.log(a1);

// This is the real deal => IIFE
const a2 = (() => {
  const x = 5;
  const y = -4;
  return x + y;
});

console.log(a2);

