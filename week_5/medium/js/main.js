/**
 * Medium.com
 * 
 * News portal website
 * 
 * Developed by: Jarne Van Steendam
 * Last updated: 10-18-19 09:20
 * Technologies:
 *  - HTML
 *  - CSS
 *  - JavaScript
 */

 /**
  * IIFE
  * 
  * function executed directely after definition
  */

(() => {
  'use strict';

  // Simulate a database
  const database = {
    posts: [
      {
        title: 'Kindle Hackers Are Disabling Tracking and Ads',
        synopsis: 'And installing ‘Zork’ while they’re at it',
        body: `
        It’s easy to make the case for a Kindle. It’s portable, you can read it in the dark, and it makes it dumb easy to download a book from Amazon almost instantaneously. But it’s still a device, standardized in a few different forms — the Oasis, the Paperwhite, and so on — lacking the personal touches you’d get in a book with that aged-paper smell, margin notes, dog-eared pages, whatever. A community of amateur and seasoned hackers have figured out how to tinker with Kindles to make the experience a little more “theirs,” reconfiguring them with unapproved fonts and bypassing the ads Amazon injects into cheaper versions of the e-reader.

        Some of these hacks also bypass Amazon’s storefront and approved file formats. Users might load pirated .epub books onto their Kindle rather than buying Amazon’s proprietary .mobi format, thereby limiting the amount of data the company is able to collect on their habits.

        Jessamyn West, a librarian and technologist in Vermont, says she was a pretty late adopter to the world of Kindles, but after a power outage left her unable to read one night, she was inspired to buy a refurbished backlit Kindle on eBay for about $50. West says she hated how her Kindle’s pages refreshed and went down a rabbit hole of Google searches to see if she could fix it. She ended up finding a community of Kindle hackers who had figured out how to do a bunch of stuff on the device she hadn’t thought of, like replacing Amazon’s stock wallpaper.

        “I just don’t like looking at it,” West says of the default images that would appear when she turned the Kindle off. “It had nothing to do with my reading experience. I just didn’t want to look at it.”
        `,
        author: {
          firstName: 'Melanie',
          lastName: 'Ehrenkranz',
          thumbnailUrl: 'https://miro.medium.com/fit/c/80/80/0*mYS2MgSma-Dj6l7F.jpeg',
        },
        thumbnailUrl: 'https://miro.medium.com/max/1200/1*rW8I9TuAv48RXW1CeazOnQ.gif',
        likes: 5,
        views: 301,
        tags: [
          'E-Books', 'Kindle', 'Tech', 'Consumer Tech', 'Amazon'
        ],
        comments: [
          {
            author: {
              firstName: 'Piet',
              lastName: 'Ingat',
            },
            content: 'Much nice, many like',
            claps: 5,
          }
        ]
      },
    ]
  }

  const app = {
    initialize () {
      console.log('Application started!');
      // Cache the element with id="posts" into the variable postElement
      this.postsElement = document.getElementById('posts');
      // Call the function GenerateUI()
      this.generateUI();
    },
    generateUI () {
      console.log('Generate User Interface');
      // let tempStr = '';
      // for(let i = 0; i < 1000; i++) {
      //   tempStr += `<p>${i}</p>`
      // }
      // this.postsElement.innerHTML = tempStr;
      
      const posts = database.posts;
      let postElement;
      posts.forEach((post) => {
        postElement = document.createElement('article');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h1 class="post__title">${post.title}</h1>
        `
        this.postsElement.appendChild(postElement);
      });
    },
  }

  app.initialize();
})();