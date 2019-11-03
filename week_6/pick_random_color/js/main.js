/*
* Example: Scroll To Bottom and Top
*/

(() => {
  const app = {
    initialize () {
      this.buttonPickColor = document.querySelector('.btn-pickcolor');
      this.boxCurrentColor = document.querySelector('.current-color');
      this.boxHistoryColors = document.querySelector('.history-colors');
      const historyArray;

      this.buttonPickColor.addEventListener('click', (e) => {
        this.generateRandomColor();
        console.log('Picked!');
      });
    },
    generateRandomColorAndHistory () {
      let tempStr = '';
      const color = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1,6);
      this.boxCurrentColor.style.backgroundColor = color;
    },
  };
  app.initialize();
})();
