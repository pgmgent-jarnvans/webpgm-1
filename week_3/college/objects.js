/*
Topic:        Objects
Developed by: Jarne
Last updated: 10-02-2019
*/

/*
Predefined objects
======================================
Ex.: String, Boolean, Number, Math
*/

let person = new Object();
person.firstName = 'Jarne';
person.lastName = 'Van Steendam';
person.age = 24;
person.sex = 'Male';
person.toString = function() {
  return `${this.firstName} ${this.lastName}`;
}

console.log(person);
console.log(person.toString());

/*
Object initializer
*/
let post = {
  title: 'Intel presenteert Cascade Lake-X-processor met prijshalvering per core',
  synopsis: `Intel heeft zijn Cascade Lake-X-processors gepresenteerd. De chips voor high-end desktop-pc's zijn wederom gemaakt op 14nm en het topmodel, de Core i9-10980XE, heeft wederom 18 cores. De grootste verandering zit in de prijzen. De cpu's zijn veel goedkoper dan hun voorgangers.`,
  body: `<p>Intel gaat de Core i9-10980XE met 18 cores uitbrengen voor 979 dollar. De voorganger, de i9-9980XE met hetzelfde aantal cores, kostte ten tijde van de introductie 1979 dollar. Ook bij de andere processors in de line-up zijn de prijzen ten opzichte van hun voorgangers vrijwel gehalveerd.</p>`,
  publishedAt: Date.now(),
  toString: function() {
    return this.title;
  }
}

console.log(post.toString());