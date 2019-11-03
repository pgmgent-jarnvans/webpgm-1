(() => {
  const app = {
    initialize () {
      console.log('1. Application started.');
      console.log('2. Cache elements.');
      this.boxesElement = document.querySelector('.boxes');
      this.boxSelectedElement = document.querySelector('.box-selected');
      this.boxDetailElement = document.querySelector('.box-detail');
      if (this.boxesElement !== null && this.boxSelectedElement !== null) {
        let boxElement;
        for (let i = 0; i < 50; i++) {
          boxElement = document.createElement('div');
          boxElement.classList.add('box');
          boxElement.setAttribute('data-id', i);
          boxElement.innerHTML = `<span>${i}</span>`;
          this.boxesElement.appendChild(boxElement);

          boxElement.addEventListener('click', (ev) => {
            this.boxSelectedElement.innerHTML = `<span>${ev.target.dataset.id || ev.target.parentNode.dataset.id}</span>`;
            this.showDetails(true);
          });
        }
      }
    },
    showDetails (isOpen) {
      if (isOpen) {
        this.boxDetailElement.classList.add('open');
        this.boxDetailElement.classList.remove('close');
      } else {
        this.boxDetailElement.classList.add('close');
        this.boxDetailElement.classList.remove('open');
      }
    },
  };
  app.initialize();
})();
