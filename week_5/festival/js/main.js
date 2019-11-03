/**
 * 50 shades of grey
 * 
 * Developed by: Jarne Van Steendam
 * Last updated: 10-17-2019 11:20
 * 
 * Contains a setup for an easy website
 */

 // IIFE
(() => {
  // eslint-disable-next-line strict
  'use strict'; // strict mode

  const convertDateToMilliseconds = date => date.getTime();
  // Array with concerts
  const lineUp = [
    {
      name: 'FM',
      startTime: convertDateToMilliseconds(new Date(2019, 6, 23, 11, 45, 0)),
      duration: 45,
      stage: 'Main Stage 1',
      description: `
        De Britse hardrockband FM maakte een veelbelovende start met het in 1986 verschenen debuutalbum ‘Indiscreet’. De band met in de gelederen de ritmetandem Merv Goldsworthy / Pete Jupp (beiden ex-Samson) en de broers Steve en Chris Overland (beiden ex-Wildlife) oogstte vooral in het Verenigd Koninkrijk flink wat succes. In 1995 gooide het vijftal echter de handdoek in de ring. Een reünieconcert twaalf jaar later bleek de aanzet voor een nieuwe carrière met opnieuw puik platenwerk zoals ‘Metropolis’ (2010) en ‘Rockville’ (2013). Dankzij tournees met onder meer Foreigner vestigde de band haar naam en uitstekende livereputatie ook in de rest van Europa. In maart 2018 verscheen het jongste album ‘Atomic Generation’. (#GMM19)
      `,
      links: [
        {
          type: 'Facebook',
          url: 'https://www.facebook.com/FMofficial',
        },
        {
          type: 'Twitter',
          url: 'https://www.twitter.com/FMofficial',
        },
        {
          type: 'YouTube',
          url: 'https://www.youtube.com/user/FMofficialTV',
        },
        {
          type: 'Spotify',
          url: 'https://open.spotify.com/artist/3BxngwxP94n0itZ8q1hwf9',
        },
      ],
      thumbnail: 'assets/images/fm.jpg'
    },
    {
      name: 'Inglorious',
      startTime: convertDateToMilliseconds(new Date(2019, 6, 23, 12, 35, 0)),
      duration: 40,
      stage: 'Main Stage 2',
      description: `
        Amper vijf jaar na de oprichting zijn de heren van Inglorious al aan hun derde plaat toe. En die komen ze in 2019 op GMM, waar ze eerder al indruk wisten te maken, voorstellen. Spilfiguur in de band is Nathan James. De zanger is vooral bekend van de tv-shows The Voice en Superstar, maar verdiende ook zijn sporen bij Trans-Siberian Orchestra en Uli Jon Roth. Muzikaal grijpt Inglorious terug naar de klassieke rocksound van de jaren 70. Vergelijkingen met topbands zoals Deep Purple, Whitesnake (ook vocaal), Bad Company en Aerosmith zijn niet uit de lucht gegrepen, toch weten ze stap voor stap een eigen sound neer te zetten. (#GMM19)
      `,
      links: [
        {
          type: 'Facebook',
          url: 'https://www.facebook.com/weareinglorious',
        },
        {
          type: 'Twitter',
          url: 'https://www.twitter.com/weareinglorious',
        },
        {
          type: 'YouTube',
          url: 'https://www.youtube.com/channel/UCiZrGK18u1LyvOL1Vo_hhAA',
        },
        {
          type: 'Spotify',
          url: 'https://open.spotify.com/artist/5BxR80mpdn8MmHgzKVtiP7?si=IUiRTFSpTlKiH5VgxSbmxA',
        },
        {
          type: 'Instagram',
          url: 'https://www.instagram.com/weareinglorious/',
        },
      ],
      thumbnail: 'assets/images/inglorious.jpg'
    },
    {
      name: 'Deadland Ritual',
      startTime: convertDateToMilliseconds(new Date(2019, 6, 23, 13, 25, 0)),
      duration: 45,
      stage: 'Main Stage 1',
      description: `
        Het wordt stilaan een traditie om tijdens GMM een band voor te stellen waarvan de leden allemaal grote namen zijn uit de rock-‘n-roll die voor een speciaal project de handen in elkaar hebben geslagen. De term ‘project’ klopt misschien niet helemaal want de artiesten in kwestie spreken liever over het bandgevoel dat ze samen hebben. Dit jaar is dat Deadland Ritual. Eind 2018 debuteerde de groep met het nummer ‘Down In Flames’, dat ze online op de wereld loslieten. Achter de microfoon staat Franky Perez, die eerder Apocalyptica vocaal een handje hielp. Steve Stevens laat de gitaar spreken, net zoals hij dat al jaren doet bij Billy Idol. Het brein achter Deadland Ritual is drummer Matt Sorum, die eerder furore maakte bij The Cult, Guns N’ Roses en Velvet Revolver. De enige missing link was nog de bassist. Daarvoor wisten ze Geezer Butler te overhalen en die had tijd en zin nu Black Sabbath in het rusthuis geparkeerd staat. Samen brengen ze lekkere groovy rock die doorspekt is met een flinke scheut blues. Kortom, klassieke hardrock in een modern jasje gebracht door oude rotten in het vak. Meer moet dat niet zijn.(#GMM19)
      `,
      links: [
        {
          type: 'Facebook',
          url: 'https://www.facebook.com/DeadlandRitual',
        },
        {
          type: 'Twitter',
          url: 'https://www.twitter.com/deadlandritual',
        },
        {
          type: 'YouTube',
          url: 'https://www.youtube.com/channel/UCsg0UIuyk-a1vD_-JKgCiKg',
        },
        {
          type: 'Spotify',
          url: 'https://open.spotify.com/artist/62aaTF04Hgbm6crne2ThvW',
        },
        {
          type: 'Instagram',
          url: 'https://www.instagram.com/deadlandritual/',
        },
      ],
      thumbnail: 'assets/images/deadland_ritual.jpg'
    },
    {
      name: 'Deadland Ritual',
      startTime: convertDateToMilliseconds(new Date(2019, 6, 23, 13, 25, 0)),
      duration: 45,
      stage: 'Main Stage 1',
      description: `
        Het wordt stilaan een traditie om tijdens GMM een band voor te stellen waarvan de leden allemaal grote namen zijn uit de rock-‘n-roll die voor een speciaal project de handen in elkaar hebben geslagen. De term ‘project’ klopt misschien niet helemaal want de artiesten in kwestie spreken liever over het bandgevoel dat ze samen hebben. Dit jaar is dat Deadland Ritual. Eind 2018 debuteerde de groep met het nummer ‘Down In Flames’, dat ze online op de wereld loslieten. Achter de microfoon staat Franky Perez, die eerder Apocalyptica vocaal een handje hielp. Steve Stevens laat de gitaar spreken, net zoals hij dat al jaren doet bij Billy Idol. Het brein achter Deadland Ritual is drummer Matt Sorum, die eerder furore maakte bij The Cult, Guns N’ Roses en Velvet Revolver. De enige missing link was nog de bassist. Daarvoor wisten ze Geezer Butler te overhalen en die had tijd en zin nu Black Sabbath in het rusthuis geparkeerd staat. Samen brengen ze lekkere groovy rock die doorspekt is met een flinke scheut blues. Kortom, klassieke hardrock in een modern jasje gebracht door oude rotten in het vak. Meer moet dat niet zijn.(#GMM19)
      `,
      links: [
        {
          type: 'Facebook',
          url: 'https://www.facebook.com/DeadlandRitual',
        },
        {
          type: 'Twitter',
          url: 'https://www.twitter.com/deadlandritual',
        },
        {
          type: 'YouTube',
          url: 'https://www.youtube.com/channel/UCsg0UIuyk-a1vD_-JKgCiKg',
        },
        {
          type: 'Spotify',
          url: 'https://open.spotify.com/artist/62aaTF04Hgbm6crne2ThvW',
        },
        {
          type: 'Instagram',
          url: 'https://www.instagram.com/deadlandritual/',
        },
      ],
      thumbnail: 'assets/images/deadland_ritual.jpg'
    },
    {
      name: 'Deadland Ritual',
      startTime: convertDateToMilliseconds(new Date(2019, 6, 23, 13, 25, 0)),
      duration: 45,
      stage: 'Main Stage 1',
      description: `
        Het wordt stilaan een traditie om tijdens GMM een band voor te stellen waarvan de leden allemaal grote namen zijn uit de rock-‘n-roll die voor een speciaal project de handen in elkaar hebben geslagen. De term ‘project’ klopt misschien niet helemaal want de artiesten in kwestie spreken liever over het bandgevoel dat ze samen hebben. Dit jaar is dat Deadland Ritual. Eind 2018 debuteerde de groep met het nummer ‘Down In Flames’, dat ze online op de wereld loslieten. Achter de microfoon staat Franky Perez, die eerder Apocalyptica vocaal een handje hielp. Steve Stevens laat de gitaar spreken, net zoals hij dat al jaren doet bij Billy Idol. Het brein achter Deadland Ritual is drummer Matt Sorum, die eerder furore maakte bij The Cult, Guns N’ Roses en Velvet Revolver. De enige missing link was nog de bassist. Daarvoor wisten ze Geezer Butler te overhalen en die had tijd en zin nu Black Sabbath in het rusthuis geparkeerd staat. Samen brengen ze lekkere groovy rock die doorspekt is met een flinke scheut blues. Kortom, klassieke hardrock in een modern jasje gebracht door oude rotten in het vak. Meer moet dat niet zijn.(#GMM19)
      `,
      links: [
        {
          type: 'Facebook',
          url: 'https://www.facebook.com/DeadlandRitual',
        },
        {
          type: 'Twitter',
          url: 'https://www.twitter.com/deadlandritual',
        },
        {
          type: 'YouTube',
          url: 'https://www.youtube.com/channel/UCsg0UIuyk-a1vD_-JKgCiKg',
        },
        {
          type: 'Spotify',
          url: 'https://open.spotify.com/artist/62aaTF04Hgbm6crne2ThvW',
        },
        {
          type: 'Instagram',
          url: 'https://www.instagram.com/deadlandritual/',
        },
      ],
      thumbnail: 'assets/images/deadland_ritual.jpg'
    },
    {
      name: 'Deadland Ritual',
      startTime: convertDateToMilliseconds(new Date(2019, 6, 23, 13, 25, 0)),
      duration: 45,
      stage: 'Main Stage 1',
      description: `
        Het wordt stilaan een traditie om tijdens GMM een band voor te stellen waarvan de leden allemaal grote namen zijn uit de rock-‘n-roll die voor een speciaal project de handen in elkaar hebben geslagen. De term ‘project’ klopt misschien niet helemaal want de artiesten in kwestie spreken liever over het bandgevoel dat ze samen hebben. Dit jaar is dat Deadland Ritual. Eind 2018 debuteerde de groep met het nummer ‘Down In Flames’, dat ze online op de wereld loslieten. Achter de microfoon staat Franky Perez, die eerder Apocalyptica vocaal een handje hielp. Steve Stevens laat de gitaar spreken, net zoals hij dat al jaren doet bij Billy Idol. Het brein achter Deadland Ritual is drummer Matt Sorum, die eerder furore maakte bij The Cult, Guns N’ Roses en Velvet Revolver. De enige missing link was nog de bassist. Daarvoor wisten ze Geezer Butler te overhalen en die had tijd en zin nu Black Sabbath in het rusthuis geparkeerd staat. Samen brengen ze lekkere groovy rock die doorspekt is met een flinke scheut blues. Kortom, klassieke hardrock in een modern jasje gebracht door oude rotten in het vak. Meer moet dat niet zijn.(#GMM19)
      `,
      links: [
        {
          type: 'Facebook',
          url: 'https://www.facebook.com/DeadlandRitual',
        },
        {
          type: 'Twitter',
          url: 'https://www.twitter.com/deadlandritual',
        },
        {
          type: 'YouTube',
          url: 'https://www.youtube.com/channel/UCsg0UIuyk-a1vD_-JKgCiKg',
        },
        {
          type: 'Spotify',
          url: 'https://open.spotify.com/artist/62aaTF04Hgbm6crne2ThvW',
        },
        {
          type: 'Instagram',
          url: 'https://www.instagram.com/deadlandritual/',
        },
      ],
      thumbnail: 'assets/images/deadland_ritual.jpg'
    },
  ];

  const app = {
    initialize () {
      this.lineUpElement = document.querySelector('#lineup');
      this.generateUIForLineup();
    },
    generateUIForLineup () {
      let tempStr = '';
      lineUp.forEach((concert) => {
        const date = new Date(concert.startTime);
        let endTimeMilliSeconds = concert.startTime + concert.duration * 60000;
        let endTime = new Date(endTimeMilliSeconds) 
        let dateFormat = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()} - ${endTime.getHours()}:${endTime.getMinutes()}`;
        tempStr += `
          <div class="concert">
            <div class="concert__image">
              <img src=${concert.thumbnail} alt="picture-${concert.name.toLowerCase}">
            </div>
            <div class="concert__info">
              <h1>${concert.name}</h1>
              <p>${concert.stage}<br>${dateFormat}</p>
            </div>
          </div>
        `;
      });

      this.lineUpElement.innerHTML = tempStr;
    },
  };

  app.initialize();
})();
