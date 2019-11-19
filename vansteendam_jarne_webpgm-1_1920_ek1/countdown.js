const showCountdownTillDate = date => {
  const today = new Date();
  const difference = date - today;
  const day = 60 * 60 * 24;
  const hour = 60 * 60;
  const minute = 60;
  const dateFormat = `${addZeros(date.getDate())}/${addZeros(date.getMonth() + 1)}/${date.getFullYear()}, ${addZeros(date.getHours())}:${addZeros(date.getMinutes())}:${addZeros(date.getSeconds())}`
  let differenceInSeconds, days, hours, minutes, seconds, output = '';

  differenceInSeconds = difference / 1000;
  days = Math.floor(differenceInSeconds / day);
  differenceInSeconds %= day;
  hours = Math.floor(differenceInSeconds / hour);
  differenceInSeconds %= hour;
  minutes = Math.floor(differenceInSeconds / minute);
  differenceInSeconds %= minute;
  seconds = Math.floor(differenceInSeconds);

  output = `
    ======================================================
    Countdown
    ======================================================
    Future date: ${dateFormat}
    ------------------------------------------------------
    ${days} day(s) ${hours} hour(s) ${minutes} minute(s) ${seconds} seconds(s)
    ======================================================
  `;

  return output;
}

const addZeros = (time) => {
  return (time < 10) ? '0' + time : time;
}

console.log(showCountdownTillDate(new Date('2020-03-07 9:31')));
console.log(showCountdownTillDate(new Date('2020-10-07 10:00')));
