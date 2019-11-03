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
  'use strict'; // strict mode

  const app = {
    initialize () {
      // console.log('Application initialized');
      this.shadesElement = document.getElementById('shades');
      let boxElement, colorValue, nBox = 50;
      if (this.shadesElement !== null) {
        for(let i = 0; i < nBox; i++) {
          boxElement = document.createElement('div'); // Create empty div-element
          boxElement.classList.add('box'); // Add value box to class attribute
          colorValue = 255 * i / nBox;
          boxElement.style.backgroundColor = `rgba(${colorValue}, ${colorValue}, ${colorValue}, 1)`
          this.shadesElement.appendChild(boxElement); // Append child to shadesElement
        }
      }
    },

  };

  app.initialize();
  
})();