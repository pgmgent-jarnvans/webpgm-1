const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

a.forEach((numberArray, index) => {
  console.log('row ' + index);
  console.log('------------------------------------------------------');
  numberArray.forEach(number => {
    console.log(number);
  });
  console.log('------------------------------------------------------');
});