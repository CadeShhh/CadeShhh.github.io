(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.collectable = window.opspark.collectable || {};
  let collectable = window.opspark.collectable;

  let type = {
    db: { assetKey: "db", points: 10 },
    max: { assetKey: "max", points: 20 },
    steve: { assetKey: "steve", points: 30 },
    grace: { assetKey: "grace", points: 40 },
    kennedi: { assetKey: "kennedi", points: 50 },
  };

  window.opspark.collectable.type = type;

  /**
   * init: Initialize all collectables.
   *
   * GOAL: Add as many collectables as necessary to make your level challenging.
   *
   * Use the createCollectable() Function to create collectables for the level.
   * See the type Object, above, for the types of collectables and their point values.
   *
   * createCollectable() takes these arguments:
   *
   *      createCollectable(type, x, y, gravity, bounce);
   *
   *      type: The type of the collectable, use the type Object above.
   *      x: The x coordineate for the collectable.
   *      y: The y coordineate for the collectable.
   *      gravity: OPTIONAL The gravitational pull on the collectable.
   *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
   */
  function init(game) {
    let createCollectable = collectable.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    // example:
    
    createCollectable(type.db, 420, 540);              // level 1 middle platform collectable

    createCollectable(type.max, 90, 440);              //level 2 left platform collectable

    createCollectable(type.max, 750, 440);             //level 2 right platform collectable

    createCollectable(type.steve, 405, 300, 12, 0.9);  //level 3 middle platform collectable
    
    createCollectable(type.grace, 169, 230, 6, 0.7);   //level 4 left plaform collectable
    
    createCollectable(type.grace, 680, 230, 6, 0.7);   //level 4 right platform collectable

    createCollectable(type.kennedi, 425, 180);          //level 5 middle platform collectable


    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  collectable.init = init;
})(window);
