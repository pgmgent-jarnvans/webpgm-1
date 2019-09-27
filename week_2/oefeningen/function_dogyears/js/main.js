temperature = parseInt(prompt('Geef een de leeftijd van je hond in'));

function convertFahrenheitToCelcius(age) {
  let ageDog = age * 7;
  return `Your dog is ${ageDog} years old in dogyears!`;
}

console.log(convertFahrenheitToCelcius(temperature));