let textString = `De update voegt de optie om met vrienden te spelen toe voor zowel de 'multiplayer-co-op-functie' als het multiplayeronderdeel waar tegen anderen wordt gespeeld. Ook kunnen spelers cursussen kiezen vanuit een lokaal opgeslagen lijst in Coursebot; dit is de robottool die spelers helpt om hun cursussen te beheren. Met deze update brengt Nintendo Super Mario Maker 2 naar versie 1.1.0.`;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
  noStroke();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
}

function draw() {
  let words = stringToArray(textString);
  for(let i = 0; i < words.length; i++) {
    textStyle(BOLD);
    textSize(10 + words[i].length * 2);
    text(words[i], random(width), random(height));
  }
}

function stringToArray(text) {
  let textNoPunctuation = '';
  textNoPunctuation = text.replace(/[.,\/#!$%\^&\*;:=\-_`~()']/g,'');
  return textNoPunctuation.split(' ');
}
