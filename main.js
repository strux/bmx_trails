var mainState = {
    preload: function() {
      game.load.image('player', 'assets/player.png');
      game.load.image('concrete', 'assets/concrete.png')
    },

    create: function() {
      game.stage.backgroundColor = '#3498db';
      game.physics.startSystem(Phaser.Physics.ARCADE);
      this.cursor = game.input.keyboard.createCursorKeys();

      this.createWorld();

      this.player = game.add.sprite(50, game.world.centerY, 'player');
      this.player.anchor.setTo(0.5, 0.5);
      game.physics.arcade.enable(this.player);
      this.player.body.gravity.y = 500;

    },

    update: function() {
      game.physics.arcade.collide(this.player, this.ground);
      this.movePlayer();
    },

    movePlayer: function() {
      if (this.cursor.right.isDown) {
        this.player.body.velocity.x = 200;
      }
   },

   createWorld: function() {
      this.ground = game.add.sprite(0, 300, 'concrete');
      this.ground.scale.setTo(13,1);
      game.physics.arcade.enable(this.ground);
      this.ground.body.immovable = true;
   },
};
// Create a 500px by 340px game in the 'gameDiv' element of the index.html
var game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');

// Add the 'mainState' to Phaser, and call it 'main'
game.state.add('main', mainState);

game.state.start('main');
