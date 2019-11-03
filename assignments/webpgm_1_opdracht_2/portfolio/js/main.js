/**
 *
 * App to make a portfolio that shows projects
 *
 * Developed by: Jarne Van Steendam
 * Updated: 28/10/2019
 */

(() => {
  // Variables
  const projects = [];

  /**
   * Object constructor to make project
   *
   * @param {String} title
   * @param {String} description
   * @param {String} content
   * @param {Array} team
   * @param {String} thumbnail
   * @param {Array} media
   * @param {Array} tags
   * @param {Array} comments
   */

  function Project (title, description, content, category, team, thumbnail, media, tags, comments) {
    this.title = title;
    this.description = description;
    this.content = content;
    this.category = category;
    this.team = team;
    this.thumbnail = thumbnail;
    this.media = media;
    this.tags = tags;
    this.likes = 0;
    this.views = 0;
    this.comments = comments;
    this.createdAt = Date.now();
    this.updatedAt = Date.now();
    this.publishedAt = Date.now();
  }

  const project1 = new Project(
    'Snek The Museum', 'Een app die je laat kennismaken met de musea van Gent op een interactieve manier samen in groep.',
    `
      <p>
        Het idee voor “snek the museum” is ontstaan uit een project voor “Apps for Ghent”. Dit is een initiatief om de open-data van gent maximaal te gaan benutten en de mogelijkheden ervan bij zoveel mogelijk mensen bekend te maken. 
        Ons idee komt voort uit een andere populaire app, “surprise.me” . Dit is een app die voor u willekeurig gaat bepalen waar u op reis gaat, net voordat u vertrekt. 
        Wij willen iets gelijkaardig creëren, maar dan voor Gentse musea. En dit met een toffe, speelse twist die u de musea beter leert kennen!Het idee voor “snek the museum” is ontstaan uit een project voor “Apps for Ghent”. 
      </p>
    `,
    'native app',
    [
      {
        firstName: 'Pieter',
        lastName: 'Vleminckx',
        isOwner: true,
        thumbnail: 'assets/images/team-1-1.jpg',
      },
      {
        firstName: 'Jérôme',
        lastName: 'Laroy',
        isOwner: false,
        thumbnail: 'assets/images/team-1-2.jpg',
      },
      {
        firstName: 'Nick',
        lastName: 'Boone',
        isOwner: false,
        thumbnail: 'assets/images/team-1-3.jpg',
      },
    ],
    'assets/images/sneck-the-museum-1.jpg',
    [
      {
        path: 'https://www.youtube.com/embed/axYMN_0XyoI',
        type: 'video',
        caption: 'Screencast of app',
        body: '',
      },
      {
        path: 'assets/images/sneck-the-museum-2.jpg',
        type: 'image',
        caption: 'Screendesigns of the app',
        body: '',
      },
    ],
    [
      'react native', 'react', 'redux', 'mongodb', 'firebase', 'node.js',
    ],
    [
      {
        name: 'Museumliefhebber',
        content: 'Zal ik zeker eens proberen',
        likes: 2,
        createdAt: Date.now(),
      },
      {
        name: 'Rudy Van Den Hove',
        content: 'Klinkt leuk',
        likes: 1,
        createdAt: Date.now(),
      },
    ]
  );

  const project2 = new Project(
    'Parkspot 3.0', 'Parkspot is een native mobile app met het doel gebruikers een parkeerplaats naar eigen voorkeuren te geven.',
    `
      <p>
        Parkspot is een native mobile app met het doel gebruikers een parkeerplaats naar eigen voorkeuren te geven en zo het eindelloos zoeken naar parking elimineren. 
        Hiermee maken we dan ook een impact op het milieu en verminderen we files. Onze API, gemaakt met Express haalt consumeert data van verschillende open data sources en uit onze eigen MongoDB database. 
        Deze API geven we het gekozen adres en de voorkeuren mee. De API geeft ons dan als resultaat passende parkeerplaatsen terug. Deze worden dan getoont in de app, waar de gebruiker kan zien hoe ver de parkeerplaats van de bestemming ligt. 
        De gebruiker kan dan met een druk op de knop waze openen die hem naar die parking zal leiden. Onderweg zal je een melding krijgen als deze parkeerplaats opeens bezet is en zal je een alternatief krijgen. 
      </p>
    `,
    'native app',
    [
      {
        firstName: 'Nawang',
        lastName: 'Tendar',
        isOwner: false,
        thumbnail: 'assets/images/team-2-1.jpg',
      },
      {
        firstName: 'Kevin',
        lastName: 'Leemans',
        isOwner: false,
        thumbnail: 'assets/images/team-2-2.jpg',
      },
      {
        firstName: 'Jan',
        lastName: 'Temmerman',
        isOwner: true,
        thumbnail: 'assets/images/team-2-3.jpg',
      },
    ],
    'assets/images/parkspot3-1.png',
    [
      {
        path: 'https://www.youtube.com/embed/TJyEMdpsMbU',
        type: 'video',
        caption: 'Screencast of app',
        body: '',
      },
      {
        path: 'assets/images/parkspot3-2.png',
        type: 'image',
        caption: 'Screenshot of the app',
        body: '',
      },
      {
        path: 'assets/images/parkspot3-3.png',
        type: 'image',
        caption: 'Screenshot of the app',
        body: '',
      },
    ],
    [
      'react native', 'mongodb', 'express',
    ],
    [
      {
        name: 'Dieter Van Asse',
        content: 'Eindelijk een app die het parkeren echt gemakkelijker maakt',
        likes: 4,
        createdAt: Date.now(),
      },
      {
        name: 'Robert',
        content: 'Groot gelijk dieter',
        likes: 1,
        createdAt: Date.now(),
      },
      {
        name: 'Nadine Van De Walle',
        content: 'Wanneer komt deze in de app store?',
        likes: 7,
        createdAt: Date.now(),
      },
      {
        name: 'Annelies',
        content: 'Mooi design!',
        likes: 7,
        createdAt: Date.now(),
      },
    ]
  );

  const project3 = new Project(
    'Swappit', 'Swappit laat je toe om festival tickets te kopen en ook door te verkopen via een veilingstie.',
    `
      <p>
        Swappit is een veilingsplatform voor festivaltickets dat kopers en verkopers in contact brengt. Dit platform garandeert dat de gebruiker zijn ticket kan ruilen op een veilige en eenvoudige manier. 
        De backoffice, gemaakt in Laravel, haalt data op uit een MySQL database en verdeelt dit via een eigen API. Via deze API consumeren we data in de frontoffice, die gemaakt is in Angular.
      </p>
    `,
    'web app',
    [
      {
        firstName: 'Jordy',
        lastName: 'Van Der Haegen',
        isOwner: true,
        thumbnail: 'assets/images/team-3-1.jpg',
      },
    ],
    'assets/images/swapit-1.png',
    [
      {
        path: 'assets/images/swapit-2.png',
        type: 'image',
        caption: 'Responsive',
        body: '',
      },
      {
        path: 'assets/images/swapit-3.png',
        type: 'image',
        caption: 'Screendesigns of the app',
        body: '',
      },
      {
        path: 'assets/images/swapit-4.png',
        type: 'image',
        caption: 'Screendesigns of the app',
        body: '',
      },
    ],
    [
      'laravel', 'mysql',
    ],
    [
      {
        name: 'Metal for life',
        content: 'Jaa een platform voor tickets te veilen, yes!',
        likes: 23,
        createdAt: Date.now(),
      },
      {
        name: 'Zuurpruim',
        content: 'Hebben we er niet al genoeg?',
        likes: 0,
        createdAt: Date.now(),
      },
    ]
  );

  const project4 = new Project(
    'Echo', 'Echo is een community-driven app voor muziekliefhebber die hun muzieksmaak helpt uitdiepen.',
    `
      <p>
      ECHO is een community-driven platform ontworpen voor muziekliefhebbers. 
      De applicatie biedt een hub voor mensen die houden van een betekenisvolle discussie en het uitdiepen van hun muzieksmaak. 
      Maakt niet uit welke genres je leuk vindt, iedereen heeft de mogelijkheid zijn mening te uiten en zijn muzikale horizon te verbreden. 
      De webapp, geschreven in React.js, staat in contact met een Node.js API die data uit de MongoDB database haalt en verwerkt.
      </p>
    `,
    'web app',
    [
      {
        firstName: 'Manaus',
        lastName: 'Transez',
        isOwner: true,
        thumbnail: 'assets/images/team-4-1.jpg',
      },
    ],
    'assets/images/echo-1.png',
    [
      {
        path: 'assets/images/echo-2.png',
        type: 'image',
        caption: 'Responsive',
        body: '',
      },
      {
        path: 'assets/images/echo-3.png',
        type: 'image',
        caption: 'Screendesigns of the app',
        body: '',
      },
    ],
    [
      'react', 'node.js', 'mongoDB',
    ],
    [
      {
        name: 'Mozart Liefhebber',
        content: 'Klinkt als iets leuk om nieuwe mensen te leren kennen die ook van klassieke muziek houden',
        likes: 0,
        createdAt: Date.now(),
      },
    ]
  );

  const project5 = new Project(
    'Festivote', 'Een app die het mogelijk maakt om te stemmen op een festival en zo mee te bepalen wie er komt. ',
    `
      <p>
        Opdracht: bedenk, ontwerp en programmeer een elektronisch stemsysteem voor verkiezingen en referenda dat bestaat uit een Mobile Web App, een API en een Backoffice en rekening houdt met authenticatie, privacy, beveiliging en integriteit.
      </p>
    `,
    'app',
    [
      {
        firstName: 'Thomas',
        lastName: 'Coppein',
        isOwner: false,
        thumbnail: 'assets/images/team-5-1.jpg',
      },
      {
        firstName: 'Julien',
        lastName: 'Lemoine',
        isOwner: true,
        thumbnail: 'assets/images/team-5-2.jpg',
      },
    ],
    'assets/images/festivote-1.png',
    [
      {
        path: 'assets/images/festivote-2.png',
        type: 'image',
        caption: 'Responsive',
        body: '',
      },
    ],
    [
      'laravel', 'vue',
    ],
    [
      {
        name: 'Damon Bedonder',
        content: 'Snap het doel niet echt van applicatie maar wel mooi bedacht',
        likes: 3,
        createdAt: Date.now(),
      },
      {
        name: 'Frederick',
        content: 'Een leuk initiatief',
        likes: 12,
        createdAt: Date.now(),
      },
      {
        name: 'Dirk Flugel',
        content: 'Das ist ein schönes Design',
        likes: 1,
        createdAt: Date.now(),
      },
    ]
  );

  const project6 = new Project(
    'Kleen', 'Kleen is een app die helpt om zwerfvuil te spotten en te melden en zo weg te krijgen uit de straten.',
    `
      <p>
        Opdracht: bedenk, ontwerp en programmeer een Hybrid App dat het ecologische, economische en sociaal probleem van zwerfvuil en sluikstorten kan helpen oplossen.
      </p>
    `,
    'app',
    [
      {
        firstName: 'Nicolas',
        lastName: 'Van Hecke',
        isOwner: true,
        thumbnail: 'assets/images/team-6-1.jpg',
      },
    ],
    'assets/images/kleen-3.png',
    [
      {
        path: 'assets/images/kleen-2.png',
        type: 'image',
        caption: 'Responsive',
        body: '',
      },
      {
        path: 'assets/images/kleen-1.png',
        type: 'image',
        caption: 'Concept',
        body: '',
      },
    ],
    [
      'ionic', 'laravel', 'angular',
    ],
    [
      {
        name: 'Damon Bedonder',
        content: 'Slick Design',
        likes: 1,
        createdAt: Date.now(),
      },
      {
        name: 'Bruno Van Horen',
        content: 'Mooi gedaan, het ziet er fantastisch uit',
        likes: 6,
        createdAt: Date.now(),
      },
    ]
  );

  // Fill the array with projects
  projects.push(project1, project2, project3, project4, project5, project6);

  /**
   * Object that contains all the functions
   */
  const app = {
    /**
     * Function that initializes the app
     */
    initialize () {
      console.log('1. Application initialized');
      this.projectsElement = document.querySelector('.projects');
      this.projectsDetailsElement = document.querySelector('.project__details');
      this.allElement = document.querySelector('.all');
      this.nativeAppElement = document.querySelector('.native-app');
      this.webAppElement = document.querySelector('.web-app');
      this.appElement = document.querySelector('.app');

      this.filteredProjects = projects;
      if (this.projectsElement !== null && this.projectsDetailsElement !== null &&
        this.allElement !== null && this.nativeAppElement !== null && this.webAppElement !== null &&
        this.appElement !== null) {
        this.generateProjectsList();

        this.allElement.addEventListener('click', (e) => {
          e.preventDefault();
          this.filteredProjects = projects;
          this.generateProjectsList();
        });

        this.nativeAppElement.addEventListener('click', (e) => {
          e.preventDefault();
          this.filteredProjects = projects.filter(project => project.category === 'native app');
          this.generateProjectsList();
        });

        this.webAppElement.addEventListener('click', (e) => {
          e.preventDefault();
          this.filteredProjects = projects.filter(project => project.category === 'web app');
          this.generateProjectsList();
        });

        this.appElement.addEventListener('click', (e) => {
          e.preventDefault();
          this.filteredProjects = projects.filter(project => project.category === 'app');
          this.generateProjectsList();
        });
      }
    },

    /**
     * Function that generates a list of projects
     */
    generateProjectsList () {
      let tempStr = '';
      let projectElement;

      this.projectsElement.innerHTML = '';

      this.filteredProjects.forEach((project, index) => {
        const owner = this.getOwnerCreators(true, project.team);
        projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.setAttribute('data-id', index);
        projectElement.setAttribute('data-category', project.category);

        tempStr = `
          <div class="project__image">
            <img src="${project.thumbnail}">
          </div>
          <div class="project__short-info">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <p class="project__owner">${owner[0].firstName} ${owner[0].lastName}</p>
            <div class="project__statistics">
              <div>
                <i class="fas fa-heart"></i>
                <p>${project.likes}</p>
              </div>
              <div>
                <i class="fas fa-eye"></i>
                <p>${project.views}</p>
              </div>
            </div>
          </div>
        `;

        projectElement.innerHTML = tempStr;
        this.projectsElement.appendChild(projectElement);

        projectElement.addEventListener('click', (e) => {
          window.scrollTo(0, 0);
          this.filteredProjects[index].views += 1;
          this.showDetails(true);
          this.generateDetails(index);
        });
      });
    },

    /**
     * Function that generates the details page of a project based on the projectId
     *
     * @param {Number} projectId
     */
    generateDetails (projectId) {
      const project = this.filteredProjects[projectId];
      const owner = this.getOwnerCreators(true, project.team);
      const coMembers = this.getOwnerCreators(false, project.team);

      console.log('You clicked me! :)', projectId);
      this.projectsDetailsElement.innerHTML = `
        <i class="fas fa-chevron-circle-left arrow-close"></i>
        <i class="fas fa-heart like-button"></i>
        <div class="project__info">
          <div class="project__info-header">
            <h2>${project.title}</h2>
            <div class="project__info-stats">
              <div>
                <i class="fas fa-heart"></i>
                <p>${project.likes}</p>
              </div>
              <div>
                <i class="fas fa-eye"></i>
                <p>${project.views}</p>
              </div>
            </div>
          </div>
          <p>${this.getReadableDate(project.publishedAt)}</p>
          <div class="project__info-content">
            <div>
              <h3>Description</h3>
              ${project.content}
              <div class="project__tags">
                ${this.generateTagsUI(project.tags)}
              </div>
            </div>
            <div>
              <h3>Owner</h3>
              ${this.generateTeamUI(owner)}
              <h3>Co-Creators</h3>
              ${this.generateTeamUI(coMembers)}
            </div>
          </div>
        </div>
        <div class="project__images">
          <h3>Images</h3>
          <div class="images">
            <div class="detail__image">
              <img src="${project.thumbnail}">
            </div>
            ${this.generateMediaUI(project.media, 'image')}
          </div>
          <h3>Videos</h3>
          <div class="videos">
            ${this.generateMediaUI(project.media, 'video')}
          </div>
        </div>
        <div class="project__comments">
          <h3>Comments</h3>
          ${this.generateCommentsUI(project.comments)}
        </div>
      `;

      document.querySelector('.arrow-close').addEventListener('click', () => {
        this.showDetails(false);
        this.generateProjectsList();
      });

      document.querySelector('.like-button').addEventListener('click', () => {
        this.filteredProjects[projectId].likes += 1;
        this.generateDetails(projectId);
      });
    },

    /**
     * Function that creates a readable date-time format
     *
     * @param {Number} ms
     *
     * @returns {String}
     */
    getReadableDate (ms) {
      const date = new Date(ms);
      const day = this.addZerosToDateTime(date.getDate());
      const month = this.addZerosToDateTime(date.getMonth() + 1);
      const year = date.getFullYear();
      const hour = this.addZerosToDateTime(date.getHours());
      const minutes = this.addZerosToDateTime(date.getMinutes());

      const dateString = `${day}/${month}/${year} | ${hour}:${minutes}`;

      return dateString;
    },

    /**
     * Function that adds zeros to value lower than 10
     *
     * @param {Number} value
     *
     * @returns {String}
     */
    addZerosToDateTime (value) {
      let dateNumber = '';
      if (value < 10) {
        dateNumber = `0${value}`;
      } else {
        dateNumber = value;
      }

      return dateNumber;
    },

    /**
     * Function that gets the specified group of creators based on wheter they are owner or not
     *
     * @param {Boolean} owner
     * @param {Array} teamList
     *
     * @returns {Array}
     */
    getOwnerCreators (owner, teamList) {
      let members = [];
      if (owner) {
        members = teamList.filter(member => member.isOwner);
      } else {
        members = teamList.filter(member => !member.isOwner);
      }
      return members;
    },

    /**
     * Function that generates a list of team members
     *
     * @param {Array} teamList
     *
     * @returns {String}
     */
    generateTeamUI (teamList) {
      let tempStr = '';

      if (teamList.length > 0) {
        teamList.forEach((member) => {
          tempStr += `
            <div class="member">
              <img src="${member.thumbnail}">
              <p>${member.firstName} ${member.lastName}</p>
            </div>
          `;
        });
      } else {
        tempStr = `
          <div class="member">
            <p>Geen</p>
          </div>
        `;
      }

      return tempStr;
    },

    /**
     * Function that generates list of tags
     *
     * @param {Array} tags
     *
     * @returns {String}
     */
    generateTagsUI (tags) {
      let tempStr = '';
      tags.forEach((tag) => {
        tempStr += `
          <div class="tag">
            <p>${tag}</p>
          </div>
        `;
      });

      return tempStr;
    },

    /**
     * Function that generates media list based on the type of media
     *
     * @param {Array} mediaList
     * @param {String} type
     *
     * @returns {String}
     */
    generateMediaUI (mediaList, type) {
      let tempStr = '';
      if (mediaList.length > 0) {
        mediaList.forEach((media) => {
          if (type === 'image' && media.type === type) {
            tempStr += `
              <div class="detail__image">
                <img src="${media.path}">
                <p>${media.caption}</p>
              </div>
            `;
          } else if (type === 'video' && media.type === type) {
            tempStr += `
              <div class="detail__image">
                <iframe src="${media.path}"></iframe>
                <p>${media.caption}</p>
              </div>
            `;
          }
        });
      }
      return tempStr;
    },

    /**
     * Function that generates the list of comments
     *
     * @param {Array} commentsList
     */
    generateCommentsUI (commentsList) {
      let tempStr = '';

      if (commentsList.length > 0) {
        commentsList.forEach((comment) => {
          tempStr += `
            <div class="comment">
              <p>${comment.name} <span><i class="fas fa-heart"></i> ${comment.likes}</span></p>
              <p>${this.getReadableDate(comment.createdAt)}</p>
              <p>${comment.content}</p>
            </div>
          `;
        });
      } else {
        tempStr = `
          <div class="comment">
            <p>Geen</p>
          </div>
        `;
      }

      return tempStr;
    },

    /**
     * Function that hides or shows the details element
     *
     * @param {Boolean} isOpen
     */
    showDetails (isOpen) {
      if (isOpen) {
        this.projectsDetailsElement.classList.add('open');
        this.projectsDetailsElement.classList.remove('close');
        document.body.style.overflow = 'hidden';
      } else {
        this.projectsDetailsElement.classList.add('close');
        this.projectsDetailsElement.classList.remove('open');
        document.body.style.overflow = 'visible';
      }
    },
  };

  // Call the initialize function and start the app
  app.initialize();
})();
