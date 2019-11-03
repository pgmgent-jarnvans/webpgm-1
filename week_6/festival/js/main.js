/**
 *
 * Example scroll to Bottom and Top
 */

(() => {
  const app = {
    initialize () {
      console.log('1. Application initialized');
      this.btnToTopElement = document.querySelector('.btn-totop');
      if (this.btnToDownElement !== null) {
        console.log(this.btnToTopElement);
      }
      this.btnToDownElement = document.querySelector('.btn-todown');
      if (this.btnToDownElement !== null) {
        console.log(this.btnToDownElement);
      }
      console.log('3. Register Event Listeners');

      this.btnToTopElement.addEventListener('click', (ev) => {
        console.log('Clicked on the button to the Top');
        this.scrollTo(0);
      }, false);

      this.btnToDownElement.addEventListener('click', (ev) => {
        console.log('Clicked on the button to the Down');
        this.scrollTo(document.body.clientHeight - window.innerHeight);
      }, false);
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
