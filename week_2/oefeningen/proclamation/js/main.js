let score = parseInt(prompt('Geef een percentage in.'));

if(score > 50 && score < 68) {
  console.log('%c \u{1F3C6} Op voldoende wijze', 'color:red');
}
else if(score >= 68 && score < 77) {
  console.log('%c \u{1F3C6} Onderscheiding', 'color: orange');
}
else if(score >= 77 && score < 85) {
  console.log('%c \u{1F3C6} Grote onderscheiding', 'color:yellow');
}
else if(score >= 85 && score < 90) {
  console.log('%c \u{1F3C6} Grootste onderscheiding', 'color: green');
}
else {
  console.log('%c \u{1F3C6} Grootste onderscheiding en de gelukwensen van de examencommissie', 'color: gold')
}