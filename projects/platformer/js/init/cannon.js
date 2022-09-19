(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.collectable = window.opspark.collectable || {};
  let cannon = window.opspark.cannon;

  /**
   * init: Initialize all cannons.
   *
   * GOAL: Add at least 3 cannons to make your level challenging.
   *
   * Use the createCannon Function to create cannons for the level.
   *
   * createCannon() takes these arguments:
   *
   *      createCannon(type, position, delay);
   *
   *      type: "top", "bottom", "left", or "right"
   *      position: The position of the cannon along whichever side the cannon is placed on
   *          - the x coordinate for "top" and "bottom" cannons
   *          - the y coordinate for "left" and "right" cannons
   *      delay: OPTIONAL the number of milliseconds to wait before firing the first projectile
   */
  function init(game) {
    let createCannon = cannon.create;
    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    // example:
    createCannon("bottom", 450, 1200);  //bottom of screen cannon

    createCannon("left", 300, 1500);    //left of screen 4th level cannon

    createCannon("top", 50);      //top of screen spawn point "death" cannon

    

    

    

    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  cannon.init = init;
})(window);
