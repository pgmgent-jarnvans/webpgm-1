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

function generateGUID(numberOfCharacters) {
  const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let guid = '';

  for(let i = 0; i < numberOfCharacters; i++) {
    guid += possibleCharacters.charAt(Math.round(Math.random() * possibleCharacters.length));
  }

  return guid;
}

console.log(`Unique GUID: ${generateGUID(50)}`);
console.log(`Unique GUID: ${generateGUID(20)}`);

function extractCharactersFromString(word, amountOfCharactersToExtract) {
  return word.substring(0, amountOfCharactersToExtract);
}

console.log(`First 5 characters extracted from "Computerscherm" are ${extractCharactersFromString('Computerscherm', 5)}`);
console.log(`First 10 characters extracted from "Hottentottententententoonstelling" are ${extractCharactersFromString('Hottentottententententoonstelling', 10)}`);

function repeatWord(word, repeatCount) {
  let result = '';
  for(let i = 0; i < repeatCount; i++) {
    result += word + ' ';
  }

  return result;
}

console.log(repeatWord('kippen', 5));

function getCurrentDate(seperator) {
  const currentDate = new Date();
  return `${currentDate.getDate()}${seperator}${currentDate.getMonth() + 1}${seperator}${currentDate.getFullYear()}`;
}

console.log(getCurrentDate('-'));
console.log(getCurrentDate('/'));

function getVowelsFromSentence(sentence) {
  const vowels = sentence.match(/[aeiou]/gi);
  return vowels.length;
}

console.log(`The amount of vowels in this sentence is ${getVowelsFromSentence('The amount of vowels in this sentence is')}`);




