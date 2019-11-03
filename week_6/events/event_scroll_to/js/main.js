/*
* Example: Scroll To Bottom and Top
*/

(() => {
  const app = {
    initialize () {
      console.log('1. Application initialized.');
      this.btnToTopElement = document.querySelector('.btn-totop');
      console.log('2. Cache Elements.');
      if (this.btnToTopElement !== null) {
        console.log(this.btnToTopElement);
      }
      this.btnToDownElement = document.querySelector('.btn-todown');
      if (this.btnToDownElement !== null) {
        console.log(this.btnToDownElement);
      }
      console.log('3. Register Event Listeners.');
      this.btnToTopElement.addEventListener('click', (ev) => {
        console.log('Clicked on the button To Top');
        this.scrollTo(0);
      });
      this.btnToDownElement.addEventListener('click', (ev) => {
        console.log('Clicked on the button To Bottom');
        this.scrollTo(document.body.clientHeight - window.innerHeight);
      });
    },
    scrollTo (yPosition) {
      window.scrollTo({
        top: yPosition,
        left: 0,
        behavior: 'smooth',
      });
    },
  };
  app.initialize();
})();
