const weight = parseFloat(prompt('What\'s your weight?'));
const length = parseFloat(prompt('What\'s your length?'));
const waist = parseFloat(prompt('What\'s your length?'));

const bmi = weight / length * length;
const absi = waist / (Math.pow(bmi, 2 / 3) * Math.sqrt(length));

const message = `
  Your bmi is: ${bmi}\n
  Your absi is ${absi}
`;

alert(message);
