/**
 * Objects
 * ------------------------------------------------------------------------------
 * Course: Web Programming 1: Front-End (Basics)
 * Week:    4
 */

// Date object

const now = new Date();
console.log(`The date is: ${now}`);
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
console.log(`The time is now: ${hours}:${minutes}:${seconds}`);

// Function declaration
function getTimeInDigitalFormat(showMilliseconds) {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let milliseconds = now.getMilliseconds();

  let timeStr = `${convertTimepartToDigits(hours, 2)}:${convertTimepartToDigits(minutes, 2)}:${convertTimepartToDigits(seconds, 2)}`;

  if (showMilliseconds) {
    timeStr += ':' + convertTimepartToDigits(milliseconds, 3);
  }

  return timeStr;
}

function convertTimepartToDigits(t, nDigits) {
  t = String(t);
  while(t.length < nDigits) {
    t = '0' + t;
  }

  return t;
}

// Call the function getTimeInDigitalFormat
let digitalClock = getTimeInDigitalFormat();

// for (let i = 0; i < 1000; i++) {
//   digitalClock = getTimeInDigitalFormat(false);
//   console.log(`The time is now: ${digitalClock}`);

// }

// Declaration and assignment of array

const persons = [];
persons[0] = 'Jarne';
persons[1] = 'Nina';
persons[2] = 'Louis';
persons[3] = 'Jaimy';
console.log(persons.length);

const amountOfPersonsInArray = persons.length;

for(let i = 0; i < amountOfPersonsInArray; i++) {
  console.log(`The person on index ${i} is ${persons[i]}`);
}

persons.forEach((element, index) => {
  console.log(`The person on index ${index} is ${element}`);
});

// Add elements to the array with push() method at the end of the array

persons.push('Christiaan');
persons.push('Thibault');
persons.push('Alec');

persons.forEach((element, index) => {
  console.log(`The person on index ${index} is ${element}`);
});

// Remove elements from the array with pop() method, the last element will be removed

console.log(`The length of the array is ${persons.length}`);
const removedElement = persons.pop();
console.log(`The removed student is ${removedElement}`)
console.log(`The length of the array is ${persons.length}`);

// Add elements to the array with the unshift() method, insert before all the other elements

persons.unshift('Alec', 'Lennert', 'Jens', 'Jarne', 'Mathieu');
console.log(`The length of the array is ${persons.length}`);

// Add elements to the array with splice() method, insert on certain index

persons.splice(3, 0, 'Terminator', 'R2-D2', 'Wall-E');

persons.forEach((element, index) => {
  console.log(`The person on index ${index} is ${element}`);
});

// Remove elements with splice() method

persons.splice(1, 4);
persons.forEach((element, index) => {
  console.log(`The person on index ${index} is ${element}`);
});

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);
console.log(`The length of the array is ${numbers.length}`);

// Exercise Cars

const cars = [
  ['Volvo', 22, 18],
  ['BMW', 15, 13],
  ['Saab', 5, 2],
  ['Land Rover', 17, 15],
  ['Lada', 0, 0],
];

cars.forEach(car => {
  console.log(`${car[0]}: ${car[1]} in stock and ${car[2]} sold`);
});

/**
 * Exercise Humans
 * Properties of a human:
 * - firstName
 * - lastName
 * - dayOfBirth
 * - email
 * - hairColor
 * - height
 * - date created
 */

const humans = [
  {
    firstName: 'Jarne',
    lastName: 'Van Steendam',
    dayOfBirth: new Date(1995, 07, 16),
    email: 'jarnvans@student.arteveldehs.be',
    hairColor: 'Brown',
    height: 1.78,
    "date created": Date.now()
  },
  {
    firstName: 'Pieter',
    lastName: 'De Beuker',
    dayOfBirth: new Date(2000, 02, 16),
    email: 'pietertje@hotmail.com',
    hairColor: 'Black',
    height: 2.05,
    "date created": Date.now()
  },
  {
    firstName: 'Louis',
    lastName: 'Martens',
    dayOfBirth: new Date(1999, 06, 08),
    email: 'louimart@student.arteveldehs.be',
    hairColor: 'Pink',
    height: 1.85,
    "date created": Date.now()
  }
];

humans.forEach(element => {
  console.log(`
    ================================================================
    Human
    ================================================================
    Firstname:        ${element.firstName}
    Lastname:         ${element.lastName}
    Day of birth:     ${element.dayOfBirth.toDateString()}
    Email:            ${element.email}
    Hair color:       ${element.hairColor}
    Height:           ${element.height}
    Created at:       ${element["date created"].toString()}
    =================================================================
  `)
});

function convertDayOfWeekNumberToReadableString(dayOfWeekNumber) {
  return daysOfTheWeek[dayOfWeekNumber];
}

//Days of the week

const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'ThursDay',
  'Friday',
  'Saturday'
]

console.log(`The day is ${convertDayOfWeekNumberToReadableString(1)}`);
console.log(`The day is ${convertDayOfWeekNumberToReadableString(5)}`);

// months of the year as an array of string values
const monthsOfTheYear = [
    'Jan',
    'Fed',
    'Mrt',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
/**
 * convertMonthFromNumberToReadableString() function declaration
 * return the readable format for the day of the week
 * parameter monthNumber: the day of the week as a number 0 is January
 */
function convertMonthFromNumberToReadableString(monthNumber) {
    return monthsOfTheYear[monthNumber];
}
console.log(`The month is ${convertMonthFromNumberToReadableString(0)}.`);
console.log(`The month is ${convertMonthFromNumberToReadableString(10)}.`);


