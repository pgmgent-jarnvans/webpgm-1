const lastName = 'Van Steendam';
const firstName = 'Jarne';
const gender = 'male';
let age = 24;
let isMarried = false;
let avatar = ':)';
let catchPhrase = 'Tis allemaal de schuld van de sossen'
let languages = `
  Dutch:      **********
  English:    *********
  French:     *****
`;

let cv = `
  My personal Curriculum Vitae
  ====================================================
  Firstname: ${firstName}
  Lastname: ${lastName}
  Gender: ${gender}
  Age: ${age}
  Married: ${isMarried}
  Avatar: ${avatar}
  Catch phrase: ${catchPhrase}
  ----------------------------------------------------
  Languages
  ----------------------------------------------------
  ${languages}
  ====================================================
`

console.log(cv);
