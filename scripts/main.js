var game = new Phaser.Game(800, 600, Phaser.AUTO);

var GameState = {
  preload: function() {
    this.load.image('background', './graphics/background.png');
  },

  create: function() {
    this.background = this.game.add.sprite(0, 0, 'background');
  },

  update: function() {

  }
};

game.state.add('GameState', GameState);
game.state.start('GameState');
