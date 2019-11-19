(() => {
  const tags = [
    'Javascript',
    'Photoshop',
    'UX',
    'React',
    'CSS',
    'MongoDB',
  ];

  const app = {
    initialize () {
      this.tagsElement = document.querySelector('.tags');
      this.showOnScreen();
    },
    showOnScreen () {
      let element;
      tags.forEach((tag) => {
        element = document.createElement('p');
        element.classList.add('tag');
        element.innerHTML = tag;
        element.style.left = `${(Math.random() * 500)}px`;
        element.style.top = `${(Math.random() * 500)}px`;
        this.tagsElement.appendChild(element);
        element.addEventListener('click', () => {
          element.style.color = '#7d6b8b';
        });
      });
    },
  };

  app.initialize();
})();
