/**
 * My first webapplication
 * Contains a setup for an easy website
 * Developed by: Jarne Van Steendam
 * Last updated: 10-17-2019 11:20
 * 
 * Contains a setup for an easy website
 */

 // IIFE
(() => {
  'use strict'; // strict mode

  // Students array

  const studentsArray = [
    {
      firstName: 'Jarne',
      lastName: 'Van Steendam'
    },
    {
      firstName: 'Alec',
      lastName: 'Meganck'
    },
    {
      firstName: 'Louis',
      lastName: 'Martens'
    },
    {
      firstName: 'Jesse',
      lastName: 'Vandermeersch'
    },
    {
      firstName: 'Jennifer',
      lastName: 'Lawrence'
    },
  ];

  // Select the HTML element width id="students"

  const studentsElement = document.getElementById('students');
  // const studentsElement = document.querySelector('#students');
  if (studentsElement !== null) {
    // studentsElement.innerText = 'This is sparta!';
    // studentsElement.innerHTML = `
    //   <h1>Greatings earthlings</h1>
    //   <p>
    //     Pokem ipsum dolor sit amet Wingull Beedrill you're not wearing shorts Musharna Ivysaur Swampert. Electric Lugia deserunt mollit Tornadus Carvanha Pallet Town Dwebble. Electric Ivysaur Wurmple Golett I'm on the road to Viridian City Crobat Cherubi. Wartortle Tauros I like shorts Golem Chimecho Machamp Leafeon. Rock Sinnoh Unown Silcoon Badge Ponyta Rotom.

    //     Rising Badge Torterra Darkrai Spiritomb Fearow Luxio to train them is my cause. Earthquake Cherubi Flygon Chatot Gible Burmy Miltank. Squirtle Tynamo Purrloin Calcium Magneton Donphan Combusken. Team Rocket Victini Slowpoke Youngster wants to fight Dunsparce Diglett Vanillish. Pewter City Cubchoo Arcanine Thunder Badge Petilil Scizor Hariyama.
        
    //     Gold Lumineon Venusaur Pokeball Dodrio Pallet Town Liepard. Volcano Badge Raticate Xatu Razor Leaf Mewtwo Strikes Back Taillow Magnezone. Johto Pawniard Surskit our courage will pull us through Beedrill Seadra Jumpluff. Pikachu Golduck Lugia Sudowoodo Darumaka Jynx Steelix. Sonic Boom Sigilyph Watchog Mr. Mime Chingling Empoleon Volbeat.
        
    //     Bug Zangoose Armaldo Victreebel Sawk Ursaring Charmeleon. Ivysaur Loudred Articuno Excadrill I'm on the road to Viridian City Nosepass Johto. Swift fishing rod Marill Igglybuff Samurott Pawniard Junichi Masuda. Pokemon Heroes Zangoose Deino Drowzee Delibird Meowth Simisear. Wing Attack Soul Badge Remoraid Pokemon Wooper Pallet Town Tynamo.
        
    //     Fuchsia City Dewott Carvanha Farfetch'd Elgyem Doduo Munna. Pokemon The Movie 2000 Ledian Porygon Gyarados Kabutops Electivire Magnezone. Sapphire Amoonguss Horsea Munna Duskull excepteur sint occaecat cupidatat non proident Phione. Pokemon Heroes Kanto Torchic Gigalith Sapphire Octillery Steel. Earthquake Ralts Rhyhorn Quagsire Bellsprout Mr. Mime Geodude. 
    //   </p>
    // `;
    let tempStr = '';
    studentsArray.forEach((student) => {
      tempStr += `
        <article>
          <h1>${student.firstName} ${student.lastName}</h1>
        </article>
      `
    });
    studentsElement.innerHTML = tempStr;
  }
})();