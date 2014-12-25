var mainState = {
    preload: function() {
      game.load.image('player', 'assets/player.png');
    },

    create: function() {
      game.stage.backgroundColor = '#3498db';
      game.physics.startSystem(Phaser.Physics.ARCADE);
      this.cursor = game.input.keyboard.createCursorKeys();
      this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
      this.player.anchor.setTo(0.5, 0.5);
      game.physics.arcade.enable(this.player);
      this.player.body.gravity.y = 500;
    },

    update: function() {
      this.movePlayer();
    },

    movePlayer: function() {
      if (this.cursor.right.isDown) {
        this.player.body.velocity.x = 200;
      }
   },
};
// Create a 500px by 340px game in the 'gameDiv' element of the index.html
var game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');

// Add the 'mainState' to Phaser, and call it 'main'
game.state.add('main', mainState);

game.state.start('main');
