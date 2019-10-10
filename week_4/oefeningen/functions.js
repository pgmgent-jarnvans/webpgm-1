/**
 * For people reading my code:
 * - First I convert the number to a string
 * - Second I split the string and put every character in an array
 * - Third I reverse the string
 * - Fourth I make the array into a string again without any seperator
 * - Last I turn the string into a number again. 
 */

function reverseNumber(num) {
  return parseInt(num.toString().split('').reverse().join(''));
}

console.log(`12345 reversed is ${reverseNumber(12345)}`);
console.log(`12345 reversed is ${reverseNumber(98765)}`);

function isPalindrome(originalString) {
  originalString = originalString.replace(/[^a-zA-Z0-9]+/g,'');
  const newString = originalString.split('').reverse().join('');

  return (originalString === newString) ? `${originalString} is een palindroom` : `${originalString} is geen palindroom`;
}

console.log(isPalindrome('kok'));
console.log(isPalindrome('rukker'));

function checkWhichCountryNameIsLongest(countries) {
  let longestCountry = ''; 
  countries.forEach((element, index) => {
    const elementWithoutSpace = element.replace(' ', '');
    longestCountry = (longestCountry.length < elementWithoutSpace.length) ?  element : longestCountry;  
  });

  return longestCountry;
}

const countriesArray = ['Belgium', 'Germany', 'France', 'Russia', 'Spain', 'Portugal', 'Zimbabwe', 'United Kingdom', 'United States Of America', ''];
console.log(`The longest country name in the array is ${checkWhichCountryNameIsLongest(countriesArray)}`);




