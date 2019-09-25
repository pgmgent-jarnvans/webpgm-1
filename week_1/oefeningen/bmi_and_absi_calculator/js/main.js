let length, weight, waist, bmi, absi;

length = parseInt(prompt('What\'s your length? (in meter)'));
weight = parseInt(prompt('What\'s your weight? (in kg)'));
waist = parseInt(prompt('What\'s your waist? (in meter)'));

bmi = weight / (length * length);
absi = waist / (Math.pow(bmi, (2/3)) * Math.sqrt(length));

alert(`
  Your BMI: ${bmi}
  Your ABSI: ${absi}
`);

