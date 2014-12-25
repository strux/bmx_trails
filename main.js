var mainState = {
    preload: function() {
    },

    create: function() {
      game.stage.backgroundColor = '#3498db';
      game.physics.startSystem(Phaser.Physics.ARCADE);
    },

    update: function() {
    },
    // And here we will later add some of our own functions
};
// Create a 500px by 340px game in the 'gameDiv' element of the index.html
var game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');

// Add the 'mainState' to Phaser, and call it 'main'
game.state.add('main', mainState);

game.state.start('main');
