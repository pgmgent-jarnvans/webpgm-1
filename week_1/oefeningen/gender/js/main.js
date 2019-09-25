let genderCode = parseInt(prompt('Give a gender code. (0, 1, 2, 9)'));

switch(genderCode) {
  case 1:
    console.log('%c Man ', 'color: blue');
    break;
  case 2:
    console.log('%c Vrouw ', 'color: red');
    break;
  case 9:
    console.log('%c Niet toepasbaar ', 'color: yellow');
    break;
  default:
    console.log('%c Niet gekend ', 'color: orange');
    break;
}