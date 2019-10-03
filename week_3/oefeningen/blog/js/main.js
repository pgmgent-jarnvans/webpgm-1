function Blog(title, description, posts = '') {
  this.title = title;
  this.description = description;
  this.posts = 
  this.createdAt = Date.now();
  this.posts = posts
}

function Post(title, synopsis, body, category = '', tags = '') {
  this.title = title;
  this.synopsis = synopsis;
  this.body = body;
  this.category = category;
  this.tags = tags;
  this.createdAt = Date.now();
}

function Category(name, description, parent = '') {
  this.name = name;
  this.description = description;
  this.parent = parent;
  this.createdAt = Date.now();
}

const cat1 = new Category('Technology', 'Everything you need to know about technology');
const cat2 = new Category('Computer', 'Computer stuff', cat1);
const cat3 = new Category('Games', 'Gaming stuff');

const post1 = new Post(
  `Microsoft Surface Duo-smartphone krijgt mogelijk Snapdragon 855-opvolger`, 
  `Microsofts Android-smartphone met twee schermen die volgend jaar uitkomt, zal niet veel afwijken van het getoonde prototype. Dat zegt Microsofts chief product officer Panos Panay. Wel krijgt de Snapdragon 855-soc mogelijk een upgrade.`, 
  `
  Microsoft Surface Duo-smartphone krijgt mogelijk Snapdragon 855-opvolger

  Microsofts Android-smartphone met twee schermen die volgend jaar uitkomt, zal niet veel afwijken van het getoonde prototype. Dat zegt Microsofts chief product officer Panos Panay. Wel krijgt de Snapdragon 855-soc mogelijk een upgrade.

  Panay zegt tegen The Verge dat de hardware niet meer zal veranderen, maar dat de soc misschien nog een upgrade krijgt. In het getoonde prototype zit een Qualcomm Snapdragon 855 van dit jaar, als de Duo eind 2020 uitkomt, is die soc ruim een jaar oud. Het toestel kan volgens de Microsoft-topman nog een upgrade krijgen naar de opvolger van die chip. Waarschijnlijk kondigt Qualcomm de opvolger van de Snapdragon 855 eind dit jaar aan.

  Microsoft werkt volgens Panay achter de schermen al drie jaar aan de Surface Duo. De keuze voor Android is gemaakt vanwege de beschikbare apps voor dat platform. Wel wil Microsoft ontwikkelaars aanzetten tot het ontwikkelen en aanpassen van apps voor twee schermen, daarom is de smartphone nu al getoond, terwijl hij pas over ruim een jaar uitkomt.

  De Surface Duo werd woensdagavond door Microsoft gepresenteerd. Het is een Android-smartphone die bestaat uit twee schermen met een 360-gradenscharnier. Het apparaat is 4,8mm dik en heeft twee 5,6"-schermen met een 4:3-verhouding. Uitgeklapt staan de schermen gelijk aan een 8,3"-scherm, maar er is wel een duidelijk zichtbare rand in het midden.`,
  cat2,
  ['phone', 'microsoft', 'smartphone']
);
const post2 = new Post(
  `Microsoft Snapdragon 855-opvolger`, 
  `Microsofts Android-smartphone met twee schermen die volgend jaar uitkomt, zal niet veel afwijken van het getoonde prototype. Dat zegt Microsofts chief product officer Panos Panay. Wel krijgt de Snapdragon 855-soc mogelijk een upgrade.`, 
  `
  Microsoft Surface Duo-smartphone krijgt mogelijk Snapdragon 855-opvolger

  Microsofts Android-smartphone met twee schermen die volgend jaar uitkomt, zal niet veel afwijken van het getoonde prototype. Dat zegt Microsofts chief product officer Panos Panay. Wel krijgt de Snapdragon 855-soc mogelijk een upgrade.

  Panay zegt tegen The Verge dat de hardware niet meer zal veranderen, maar dat de soc misschien nog een upgrade krijgt. In het getoonde prototype zit een Qualcomm Snapdragon 855 van dit jaar, als de Duo eind 2020 uitkomt, is die soc ruim een jaar oud. Het toestel kan volgens de Microsoft-topman nog een upgrade krijgen naar de opvolger van die chip. Waarschijnlijk kondigt Qualcomm de opvolger van de Snapdragon 855 eind dit jaar aan.

  Microsoft werkt volgens Panay achter de schermen al drie jaar aan de Surface Duo. De keuze voor Android is gemaakt vanwege de beschikbare apps voor dat platform. Wel wil Microsoft ontwikkelaars aanzetten tot het ontwikkelen en aanpassen van apps voor twee schermen, daarom is de smartphone nu al getoond, terwijl hij pas over ruim een jaar uitkomt.

  De Surface Duo werd woensdagavond door Microsoft gepresenteerd. Het is een Android-smartphone die bestaat uit twee schermen met een 360-gradenscharnier. Het apparaat is 4,8mm dik en heeft twee 5,6"-schermen met een 4:3-verhouding. Uitgeklapt staan de schermen gelijk aan een 8,3"-scherm, maar er is wel een duidelijk zichtbare rand in het midden.`,
  cat1,
  ['phone', 'microsoft', 'smartphone']
);
const post3 = new Post(
  `California firefighter rescues a cat in Paradise - and now she won't leave his side`, 
  `The cat remained cuddled around his neck after the rescue `, 
  `
  A California firefighter has found a life-long friend in a cat he rescued while battling the Paradise wildfire.

  After saving the cat, Ryan Coleman, Engine Captain at Fairview Valley Fire Department, shared a video to Facebook in which the besotted cat clings to Coleman’s face.

  In the adorable video, which has been viewed nearly two million times, Coleman tells the cat: “Let’s go for a walk. Where are we going? We’re walking around.”
  Photos shared by the firefighter also show the obvious love the feline has for her saviour, with the cat pawing Coleman’s legs as he scratches her head, and cuddling up to him.

  “She just chilled on my neck and shoulders as I walked around,” Coleman wrote.

  “So sweet! Thank you for all you do. You are a true hero,” one person wrote.

  Another commented: “Omg this makes my heart so happy! Did you save her?”

  Unfortunately, Coleman wrote on Facebook that although he wishes he could keep the cat, he’s “still out here” battling the devastating California fires.
  `
);

const blog = new Blog('Everyday', 'Random shit all day', [post1, post2, post3]);

console.log(cat1);
console.log(cat2);
console.log(cat3);
console.log(post1);
console.log(post2);
console.log(post3);
console.log(blog);