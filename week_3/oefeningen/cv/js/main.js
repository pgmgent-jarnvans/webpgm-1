const cv = {
  firstName: 'Jarne',
  lastName : 'Van Steendam',
  sex: 'Male',
  age: 24,
  isMarried: false,
  avatar: '☻',
  catchPhrase: 'YOLO+',
  language: 'Dutch: 100%, English: 90%, French: 50%'
}

for(let item in cv) {
  console.log(item + ': ' + cv[item]);
}
