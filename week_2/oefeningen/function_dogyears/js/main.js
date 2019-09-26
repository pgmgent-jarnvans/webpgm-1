temperature = parseInt(prompt('Geef een temperatuur (°F)'));

function convertFahrenheitToCelcius(temp) {
  let celcius = temp * 5 / 9;
  return `Temperature of ${temp}°F equals to ${celcius.toFixed(1)}°C!`;
}

console.log(convertFahrenheitToCelcius(temperature));