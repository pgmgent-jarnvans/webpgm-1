/*
Course: Control Flow 
===================================================
- Block statements
- Conditional statements
===================================================
Developed by: Jarne Van Steendam
last updated: 09-26-19
Copyright: Artevelde University of Applied Sciences 
*/

/*
if ... else statement
*/

let isPlaying = false;

if (isPlaying) {
  console.log('I\'m playing!');
}
isPlaying = true;

if (!isPlaying) {
  console.log('I\'m killed by a bee!')
} else {
  console.log('I\'m playing with a cat!');
}

/*
if ... else if ... else statement
*/

let deviceWidth = 860;

if (deviceWidth < 480) {
  console.log('Hey dude buy some new stuff no drugs!')
}
else if (deviceWidth >= 480 && deviceWidth < 768) {
  console.log('Hey bro you are using a 2nd generation device.')
} else if (deviceWidth >= 768 && deviceWidth < 1200) {
  console.log('Hey bro you are using a 3th generation device.')
} 
else {
  console.log('Hey hipster you are up to date :)')
}

/*
switch ... case statement
*/
/*
N: Noorden
E: Oosten
S: Zuiden
W: Westen
*/

let windDirection = 'W', msg="normal";
switch(windDirection) {
  case 'N':
    msg = 'chill';
    break;
  case 'E':
    msg = 'nuclear'
    break;
  case 'S':
    msg = 'dusty'
    break;
  case 'W':
    msg = 'wet'
    break;
  default:
    msg = 'normal';
    break;
}

console.log(msg);