let secondsStart, seconds, years, days, hours, minutes;

seconds = parseInt(prompt('Give any amout of seconds?'));
secondsStart = seconds;

years = Math.floor(seconds / 31536000);
seconds %= 31536000;
days = Math.floor(seconds / 86400);
seconds %= 86400;
hours = Math.floor(seconds / 3600);
seconds %= 3600;
minutes = Math.floor(seconds / 60);
seconds = Math.floor(seconds % 60);

alert(`
  ${secondsStart} second(s) is
  ${years} year(s)
  ${days} day(s)
  ${hours} hour(s)
  ${minutes} minutes(s)
  ${seconds} second(s)
`)

// let seconds, years, days, hours, minutes;

// document.querySelector('#send').addEventListener('click', function(e) {
//   e.preventDefault();
//   seconds = parseInt(document.querySelector('#seconds').value);
//   secondsStart = seconds;

//   years = Math.floor(seconds / 31536000);
//   seconds %= 31536000;
//   days = Math.floor(seconds / 86400);
//   seconds %= 86400;
//   hours = Math.floor(seconds / 3600);
//   seconds %= 3600;
//   minutes = Math.floor(seconds / 60);
//   seconds = Math.floor(seconds % 60);

//   document.querySelector('#result').innerHTML = `
//     ${secondsStart} second(s) is<br>
//     ${years} year(s)<br>
//     ${days} day(s)<br>
//     ${hours} hour(s)<br>
//     ${minutes} minutes(s)<br>
//     ${seconds} second(s)<br>
//   `
// }, false);



