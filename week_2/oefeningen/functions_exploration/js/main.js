function checkAge(age) {
  // if (age > 18) {
  //   return true;
  // } else {
  //   window.confirm('Did your parents allow you?');
  // }

  // if (age > 18) {
  //   return true;
  // } 
  // window.confirm('Did your parents allow you?');
  
  return (age > 18) ? true : window.confirm('Did your parents allow you?');
}

console.log(checkAge(16));

function min(a, b) {
  return (a < b) ? a : b;
}

console.log(min(5, 8));
console.log(min(20, 7));
console.log(min(5, 5));

function pow(x, n) {
  return x**=n;
}

console.log(pow(2, 2));
console.log(pow(4, 3));
console.log(pow(5, 4));