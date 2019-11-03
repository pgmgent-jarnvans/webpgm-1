/**
 *
 * Example scroll to Bottom and Top
 */

(() => {
  const app = {
    initialize () {
      console.log('1. Application started.');
      console.log('2. Cache elements');
      this.boxesElement = document.querySelector('.boxes');
      this.boxSelectedElement = document.querySelector('.box-selected');

      if (this.boxesElement !== null && this.boxSelectedElement !== null) {
        let boxElement;
        for (let i = 0; i < 50; i++) {
          boxElement = document.createElement('div');
          boxElement.classList.add('box');
          boxElement.setAttribute('data-id', i);
          boxElement.innerHTML = `<span>${i}</span>`;
          this.boxesElement.appendChild(boxElement);

          boxElement.addEventListener('click', (e) => {
            this.boxSelectedElement.innerHTML = `<span>${e.target.dataset.id || e.target.parentNode.dataset.id}</span>`;
          });
        }
      }
    },
  };

  app.initialize();
})();
