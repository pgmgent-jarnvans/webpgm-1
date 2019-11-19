const lastName = 'Van Steendam';
const firstName = 'Jarne';
const sex = 'Male';
const age = 24;
const isMarried = false;
const avatar = '\u{1f466}';
const catchPhrase = 'Honor! Justice! Reinhardt Reinhardt Reinhardt!';
const languageDutch = '**********';
const languageFrench = '*****';
const languageEnglish = '*********';

const cv = `
  My personal Curriculum Vitae
  ===============================================================
  Firstname:      ${firstName}
  Lastname:       ${lastName}
  Sex:            ${sex}
  Age:            ${age}
  Married:        ${isMarried}
  Avatar:         ${avatar}
  Catch phrase:   ${catchPhrase}
  ---------------------------------------------------------------
  Languages
  ---------------------------------------------------------------
  Dutch:          ${languageDutch}
  English:        ${languageEnglish}
  French:         ${languageFrench}
  ===============================================================
`;

console.log(cv);
