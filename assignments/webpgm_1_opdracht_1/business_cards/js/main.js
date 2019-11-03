// Variables
let fontLatoRegular = '';
let fontLatoBold = '';

// Variable for home location coordinates
const homeLocation = {
  lat: 51.023926,
  long: 3.763298
}

// Variable for amount of images
const amountOfImages = 9;

// Variables to get the center of the screen
let xMid = 0;
let yMid = 0;

// Variable to get an array of business cards
let businessCards = [];

// Variable to keep track of the card index
let currentCardIndex = 0;

// Variable to get an array of images
let images = [];

// Variables for checking which arrow is pressed 
let pressedLeft = false;
let pressedRight = false;

// Variables to keep track of the amount of cards
let amountOfCards = 0;

/**
 * Object constructor to create a business card
 * 
 * @param {String} firstName 
 * @param {String} lastName 
 * @param {String} job 
 * @param {String} phone 
 * @param {String} mobile 
 * @param {String} email 
 * @param {String} website 
 * @param {Number} gender 
 * @param {Date} birthday 
 * @param {Object} address 
 * @param {Object} picture 
 */



function BusinessCard(firstName, lastName, job, phone, mobile, email, website, gender, birthday, address, picture) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.job = job;
  this.phone = phone;
  this.mobile = mobile;
  this.email = email;
  this.website = website;
  this.gender = gender;
  this.birthday = birthday;
  this.address = {
    street: address.street,
    number: address.number,
    postalCode: address.postalCode,
    city: address.city,
    geolocation: {
      lat: address.geolocation.lat,
      long: address.geolocation.long
    }
  },
  this.picture = picture;
  this.display = function() {
    const standardAlign = xMid - 5;
    const lat = this.address.geolocation.lat;
    const long = this.address.geolocation.long;

    textAlign(LEFT);
    
    noStroke();
    fill(33, 23, 23);
    rect(xMid, yMid, 700, 450);
    image(this.picture, xMid - 175, yMid + 75, 300, 300);
    stroke(245, 139, 84);
    strokeWeight(0.5);
    line(standardAlign, yMid - 35, standardAlign + 330, yMid - 35);
    line(standardAlign, yMid + 75, standardAlign + 330, yMid + 75);
    noStroke();
    fill(245, 139, 84);  
    rect(xMid, yMid - 150, 700, 100)
    fill(33, 23, 23);
    textSize(35);
    textStyle(BOLD);
    text(`${this.firstName.toUpperCase()}\n${this.lastName.toUpperCase()}`, xMid - 325, yMid - 155);
    textSize(25);
    textStyle(NORMAL);
    text(this.job.toUpperCase(), standardAlign, yMid - 155);
    fill(245, 139, 84); 
    textSize(18);
    textStyle(NORMAL);
    text(`${getGender(this.gender)} ${calculateAge(this.birthday)}`, standardAlign, yMid - 55);
    text(`${this.address.street} ${this.address.number}`, standardAlign, yMid - 5);
    text(`${this.address.postalCode} ${this.address.city}`, standardAlign, yMid + 25);
    text(`${distance(lat, long, homeLocation.lat, homeLocation.long, 'K').toFixed(0)} km`, standardAlign, yMid + 55);
    text(`\u{1F4DE} ${this.phone}`, standardAlign,yMid + 110);
    text(`\u{1F4F1}`, standardAlign, yMid + 140);
    text(`${this.mobile}`, standardAlign + 29, yMid + 140);
    text(`\u{1F4E7} ${this.email}`, standardAlign, yMid + 170);
    text(`\u{1F310}`, standardAlign, yMid + 200);
    text(`${this.website}`, standardAlign + 31, yMid + 200);
  }
}

/**
 * function that handles loading of images
 */

function preload() {
  for(let i = 1; i <= amountOfImages; i++) {
    const image = loadImage(`images/image${i}.jpg`)

    images.push(image);
  }
}

/**
 * function that creates the canvas and handles all functions and assignments before drawing 
 */

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  rectMode(CENTER);
  imageMode(CENTER);
  fillArrayWithBusinessCards();
  xMid = width / 2;
  yMid = height / 2; 
  amountOfCards = businessCards.length;
}

/**
 * function that draws the bussines card to the screen
 * - checks which button is pressed
 * - checks which arrows needs to be drawn
 * - shows general info
 */

function draw() {
  clear();
  background(223, 221, 199);
  noStroke();
  if (pressedLeft) {
    currentCardIndex--;
    currentCardIndex = ((currentCardIndex === -1) ? 8 : currentCardIndex); 
    pressedLeft = false;
  }

  if (pressedRight) {
    currentCardIndex++;
    currentCardIndex = ((currentCardIndex === amountOfCards) ? 0 : currentCardIndex);
    pressedRight = false;
  }

  if (currentCardIndex > 0) {
    fill(33, 23, 23);
    triangle(xMid - 600, yMid, xMid - 500, yMid + 50,  xMid - 500, yMid - 50);
  }
  else {
    fill(223, 221, 199);
    rect(xMid - 550, yMid, 100, 100);
  } 

  if (currentCardIndex < amountOfCards - 1) {
    fill(33, 23, 23);
    triangle(xMid + 600, yMid, xMid + 500, yMid + 50,  xMid + 500, yMid - 50);
  }
  else {
    fill(223, 221, 199);
    rect(xMid + 550, yMid, 100, 100);
  }
  createLogo(false);
  textAlign(CENTER);
  fill(163, 74, 40);
  textSize(40);
  textStyle(BOLD);
  text('CODE EMPIRE', xMid, 200);
  textSize(24);
  textStyle(NORMAL);
  text(`${currentCardIndex + 1} / ${amountOfCards}`, xMid, yMid + 300);
  businessCards[currentCardIndex].display();
  createLogo(true);
}

/**
 * function that fills an array with business cards which were created with BusinessCard constructor
 */

function fillArrayWithBusinessCards() {
  const card1 = new BusinessCard(
    'Cedric', 'Coppens', 
    'Front-End\nDevelopper', 
    '09 252 54 84', '0476 68 44 00', 
    'cediric.coppens@codeempire.be', 'www.cedricco.be', 
    1, new Date(1995, 08, 16),
    {
      street: 'Werkhuizenstraat',
      number: 205,
      postalCode: 9050,
      city: 'Gentbrugge',
      geolocation: {
        lat: 51.023248,
        long: 3.764278,
      }
    },
    images[0]
  );

  const card2 = new BusinessCard(
    'Bobina', 'De Bouwer', 
    'Front-End\nDeveloper',
    '09 272 20 20', '0497 85 64 20', 
    'bobina.debouwer@codeempire.be', 'www.bobinadb.be', 
    2, new Date(1970, 12, 9),
    {
      street: 'Blekte',
      number: 15,
      postalCode: 9340,
      city: 'Oordegem',
      geolocation: {
        lat: 50.965622,
        long: 3.906555,
      }
    },
    images[1]
  );

  const card3 = new BusinessCard(
    'Pat', 'Fenis', 
    'Full-Stack\nDeveloper',
    '09 252 40 25', '0498 75 24 10', 
    'pat.fenis@codeempire.be', 'www.patfe.be', 
    0, new Date(1985, 2, 12),
    {
      street: 'Geraardsbergsesteenweg',
      number: 135,
      postalCode: 9090,
      city: 'Melle',
      geolocation: {
        lat: 50.984511,
        long: 3.797633,
      }
    },
    images[2]
  );

  const card4 = new BusinessCard(
    'Alberto', 'De Kapper', 
    'Senior\nDesigner',
    '09 232 42 21', '0455 23 44 31', 
    'alberto.dekapper@codeempire.be', 'www.albertodk.be', 
    9, new Date(1988, 11, 1),
    {
      street: 'Denderstraat',
      number: 22,
      postalCode: 9300,
      city: 'Aalst',
      geolocation: {
        lat: 50.943842,
        long: 4.036269,
      }
    },
    images[3]
  );

  const card5 = new BusinessCard(
    'Didier', 'Vanacker', 
    'CEO\nCode Empire',
    '09 220 18 58', '0485 45 43 11', 
    'didier.vanacker@codeempire.be', 'www.didierva.be', 
    1, new Date(1965, 4, 25),
    {
      street: 'Oude Brugsepoort',
      number: 25,
      postalCode: 9800,
      city: 'Deinze',
      geolocation: {
        lat: 50.988806,
        long: 3.521667,
      }
    },
    images[4]
  );

  const card6 = new BusinessCard(
    'Karen', 'Klager', 
    'Junior\nDesigner',
    '09 333 25 00', '0465 75 23 55', 
    'karen.klager@codeempire.be', 'www.karenkl.be', 
    2, new Date(1988, 10, 8),
    {
      street: 'Peperstraat',
      number: 10,
      postalCode: 9800,
      city: 'Deinze',
      geolocation: {
        lat: 50.996636,
        long: 3.547397,
      }
    },
    images[5]
  );

  const card7 = new BusinessCard(
    'Anna', 'Van Kamp', 
    'Front-End\nDeveloper',
    '09 230 55 11', '0487 82 00 20', 
    'anna.vankamp@codeempire.be', 'www.annavk.be', 
    2, new Date(1990, 10, 15),
    {
      street: 'Raketstraat',
      number: 5,
      postalCode: 9000,
      city: 'Gent',
      geolocation: {
        lat: 51.040376,
        long: 3.711820,
      }
    },
    images[6]
  );

  const card8 = new BusinessCard(
    'Inge', 'De Praet', 
    'Full-Stack\nDeveloper',
    '09 232 55 55', '0488 23 64 55', 
    'inge.depraet@codeempire.be', 'www.ingedp.be', 
    2, new Date(1965, 6, 12),
    {
      street: 'Muinklaan',
      number: 6,
      postalCode: 9000,
      city: 'Gent',
      geolocation: {
        lat: 51.042921,
        long: 3.729417,
      }
    },
    images[7]
  );

  const card9 = new BusinessCard(
    'Mario', 'Van Achteren', 
    'Back-End\nDeveloper',
    '09 260 15 75', '0478 85 25 14', 
    'mario.vanachteren@codeempire.be', 'www.mariova.be', 
    1, new Date(1970, 8, 8),
    {
      street: 'Kluizestraat',
      number: 8,
      postalCode: 9860,
      city: 'Oosterzele',
      geolocation: {
        lat: 50.940002,
        long: 3.791565,
      }
    },
    images[8]
  );

  businessCards.push(card1, card2, card3, card4, card5, card6, card7, card8, card9);
}

/**
 * function that creates logo and checks whether it has to be on the card or on top
 * @param {Boolean} onCard 
 */

function createLogo(onCard) {
  let point1X, point1Y, point2X, point3Y;

  if (onCard) {
    point1X = xMid + 250;
    point1Y = yMid - 150;
    point2X = xMid + 325;
    point2Y = yMid - 190;
    point3Y = yMid - 110;
    stroke(33, 23, 23);
    fill(33, 23, 23);
    strokeWeight(2);
    line(point1X, point1Y, point2X, point1Y);
    line(point1X, point1Y, point1X, point2Y);
    line(point1X, point1Y, point1X, point3Y);
    line(point2X, point1Y, point2X, point3Y);
    line(point2X, point1Y, point2X, point2Y);
    line(point1X, point2Y, point2X, point3Y);
    line(point1X, point3Y, point2X, point2Y);
    ellipse(xMid + 288, yMid - 150, 30, 30);
  }
  else {
    point1X = xMid - 40;
    point1Y = 80;
    point2X = xMid + 40;
    point2Y = 40;
    point3Y = 120;
    fill(163, 74, 40);
    stroke(163, 74, 40);
    strokeWeight(2);
    ellipse(xMid, 80, 30, 30);
    line(point1X, point1Y, point2X, point1Y);
    line(point1X, point1Y, point1X, point2Y);
    line(point1X, point1Y, point1X, point3Y);
    line(point2X, point1Y, point2X, point3Y);
    line(point2X, point1Y, point2X, point2Y);
    line(point1X, point2Y, point2X, point3Y);
    line(point1X, point3Y, point2X, point2Y);
  }
    

}

/**
 * function that checks if the mouse is clicked on the specified postion and then redraws the card
 */

function mousePressed() {
  if((mouseX < xMid - 600 + 100 && mouseY < yMid + 50) && (mouseX > xMid - 600 && mouseY > yMid - 50) && currentCardIndex > 0) {
    pressedLeft = true;
  }

  if((mouseX < xMid + 600 && mouseY < yMid + 50) && (mouseX > xMid + 600 - 100 && mouseY > yMid - 50) && currentCardIndex < amountOfCards - 1) {
    pressedRight = true;
  }
  redraw();
}

/**
 * function that checks if the left or right arrow key is pressed the card
 */

function keyPressed() {
  if(keyCode === 37 && currentCardIndex > 0) {
    pressedLeft = true;
  }

  if(keyCode === 39 && currentCardIndex < amountOfCards - 1) {
    pressedRight = true;
  }
  redraw();
}

/**
 * function that checks the gender code and gives an icon in return
 * 
 * @param {Number} genderCode 
 */

function getGender(genderCode) {
  let gender = '';
  switch(genderCode) {
    case 0:
      gender = '🤷';
      break;
    case 1:
      gender = '👨';
      break;
    case 2:
      gender = '👩';
      break;
    case 9:
      gender = '⛔';
      break;
    default:
      gender = 'ND';
      break;
  }

  return gender;
}

/**
 * function that calculates the age based on the birthday
 * 
 * @param {Date} date 
 */

function calculateAge(date) {
  let age = 0;
  const today = new Date();
  age = today.getFullYear() - date.getFullYear();
  if (today.getMonth() < date.getMonth() - 1 || (today.getMonth() === date.getMonth() - 1 && today.getDate() < date.getDate())) {
    age--;
  }
  
  return age;
}

/**
 * function that calculates the distance between 2 sets of coordinates
 * 
 * @param {Number} lat1 
 * @param {Number} lon1 
 * @param {Number} lat2 
 * @param {Number} lon2 
 * @param {String} unit 
 */

function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}
