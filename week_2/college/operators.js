/*
Course: Operators 
===================================================
Developed by: Jarne Van Steendam
last updated: 09-26-19
Copyright: Artevelde University of Applied Sciences 
*/

/*
Toewijzings (Eng.: assignment) operatoren
*/

let x = 4;
const y = 6;
x = y; // The value of x is 6

let z = 8;
x = z = y; // The value of x, y, z is 6

let a = 5;
a += 3; // a contains 8

let b = 7;
b += true; // b contains 8

let c = false;
c += 4; // c contains 4

let d = 'John';
d += false; // d contains Johnfalse

let e = 'Hello';
e += " World"; // e contains Hello World

let f = 4;
f -= 6; // f contains -2
f -= "b" //f contains NaN

let g = 4;
g *= -6; // g contains -24
g *= 'b'; //g contains NaN

let h = 4;
g /= -2; // h contains -2
g /= 0; //g contains -Infinity

let i = 4;
i %= 3; // i contains 1

let j = 6;
j %= 6; // j contains NaN

let k = 4;
k **= 3; // k contains 64

/*
Vergelijkings (Eng.: comparison) operatoren
*/

const a1 = 3;
const b1 = 6;

console.log(a1 > b1); // false
console.log(a1 < b1); // true

const a2 = 4;
console.log(a2 != 4); // false
console.log(a2 == 4); // true
console.log(a2 == '4'); // true
console.log(a2 === '4'); // false

const b2 = "2";
console.log(b2 <= 12); // true
console.log(3 !== '3'); // true

/*
Logische (Eng.: logigal) operatoren
AND (&&), OR (||), NOT (!)
*/
console.log(true && false); // false
console.log(true && true); // true
console.log(false && 'pgm'); // false
console.log(true && (3 == 6)); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(true || false); // true
console.log(!true); // false
console.log(!false); // true
console.log(!'PGM'); // false
