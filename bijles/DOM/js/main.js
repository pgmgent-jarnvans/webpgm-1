const words = [
  {
    word: 'Sleep',
    isNeeded: false,
  },
  {
    word: 'Drinking',
    isNeeded: true,
  },
  {
    word: 'Eating',
    isNeeded: true,
  },
  {
    word: 'Dying',
    isNeeded: false,
  },
  {
    word: 'Phillipé',
    isNeeded: false,
  },
  {
    word: 'Java',
    isNeeded: false,
  },
  {
    word: 'Evelientje',
    isNeeded: true,
  },
]

const wordsElement = document.querySelector('.words');
const btnElement = document.querySelector('.btn');

let wordElement;

const showWords = () => {
  words.forEach(woordje => {
    wordElement = document.createElement('div');
    wordElement.classList.add('word');
    wordElement.innerHTML = `
      <p>${woordje.word}</p>
      <p>${woordje.isNeeded}</p>
    `;

    wordsElement.appendChild(wordElement);
  });
}

btnElement.addEventListener('click', (e) => {
  e.preventDefault();
  showWords();
})




  
