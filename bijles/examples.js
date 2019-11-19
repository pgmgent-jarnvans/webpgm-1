// let number = 0;

// if (isLol) {
//   number = 16;
//   var number2 = 16;
// }

// console.log(number);
// console.log(number2);

// let height = parseFloat(prompt('Give your height?'));

// height += 0.35; 

// console.log(`You will grow till ${height}`);

// height = prompt('Give your height?');

// height += 0.35; 

// console.log(`You will grow till ${height}`);

// function sendHelp() {
//   console.log('Help!');
// }

// sendHelp();

// function sendHelp2(message) {
//   console.log(message);
// }

// sendHelp2('Help more!');

// function sendHelp3(message) {
//   return message + '!';
// }

// console.log(sendHelp3('Visje'));


const sendHelp = () => {
  console.log('Help!');
}

sendHelp();

const sendHelp2 = message => console.log('Help more!');


sendHelp2();

const sendHelp3 = message => {
  return message + '!';
}

const sendHelp4 = message => message + '!';

const isCow = true;

if (isCow) {
  console.log('Moeh!');
}

let points = 7;

if (points < 10) {
  console.log('Boe! :(');
}
else {
  console.log('Kan nog altijd beter!')
}

points = 17;

if (points < 10) {
  console.log('Boe! :(');
}
else if (points >= 10 || points < 15) {
  console.log('Kan nog altijd beter!')
}
else {
  console.log('Goed Gewerkt');
}




