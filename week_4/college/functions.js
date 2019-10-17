
/**
 * Content Management System (CMS)
 * 
 * Objects (constructor function):
 * - Blog
 * - Post
 */
function Blog(name, description) {
  this.name = name;
  this.description = description;
  this.posts = [];
  this.addPost = function(post) {
      this.posts.push(post);
  }
  this.postsToConsoleString = function() {
      let tempStr = '';
      this.posts.forEach(function(post, index) {
          tempStr += post.toConsoleString();
      });
      return tempStr;
  }
  this.toConsoleString = function() {
      return `
      Blog
      ============================================
      ${this.name}
      ${this.postsToConsoleString()}
      ============================================
      `;
  }
}

function Post(title, synopsis, body) {
  this.title = title;
  this.synopsis = synopsis;
  this.body = body;
  this.createdAt = Date.now();
  this.tags = [];
  this.addTag = function(tag) {
      this.tags.push(tag);
  }
  this.toConsoleString = function() {
      return `
      Post
      ============================================
      ${this.title}
      ============================================
      `;
  }
}

// Make a blog
const blog = new Blog('Sport', 'Real sports in the world.');

// Make some new posts
const post1 = new Post('Simone Biles reigns supreme with fifth world all-around gymnastics title', 'Simone Biles continued to stake her claim as one of the most dominant athletes of her generation as she bulldozed all competition to win her fifth world championships individual all‑around gold medal with a score of 58.999 in Stuttgart. The 22-year-old American won with a cushion of 2.1 points, her biggest at a world all-around event, as Tang Xijing of China claimed silver and Russia’s Angelina Melnikova took bronze.', '<p>“It means the world to me,” Biles said. “For my fifth, that’s kind of unheard of, so it was really exciting. But we finished strong and we gave it our all. It’s super exciting we had the opportunity to do this.”</p><p>One year ago Biles fell twice in the all-around final and left the arena seething despite her clear victory. She seems to have learned from those mistakes. Instead of opting for all of the risky, mind-blowing skills she has written into gymnastics history in the past two years, she decided to play things relatively safe. The greatest measure of Biles’s dominance is that her version of “safe” is still far beyond what any of her rivals could dream of.</p>');
post1.addTag('gymnastic');
post1.addTag('injuries');
const post2 = new Post('Formula One cancels all Saturday running as Typhoon Hagibis looms at Japan GP', 'Organisers of Japan’s Formula One Grand Prix have cancelled all practice and qualifying sessions scheduled for Saturday due to the approach of Typhoon Hagibis.', '<p>Originally scheduled to take place at 3pm local time on Saturday, the hour-long qualifying session that decides the grid order for the race will now be held at 10am on Sunday, a revised schedule issued by organisers showed.</p><p>The final practice session, which would normally take place before qualifying, will not be held. The race will go ahead as planned at 2:10pm on Sunday.');
post2.addTag('formula1');
post2.addTag('accidents');

// Add posts to blog
blog.addPost(post1);
blog.addPost(post2);
console.log(blog.toConsoleString());
