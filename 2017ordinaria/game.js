import Player from './player.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  

    this.load.image('player', './resources/wall.png');
  }

  create() {
    this.matter.world.setBounds();

    this.cursors2 = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.I,
      down: Phaser.Input.Keyboard.KeyCodes.K,
      left: Phaser.Input.Keyboard.KeyCodes.J,
      right: Phaser.Input.Keyboard.KeyCodes.L
    });

    this.cursors1 = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D
    });


    let player1 = new Player(this, 300, 0, 'player', this.cursors1, 10, 'p1');
    let player2 = new Player(this, 800, 0, 'player', this.cursors2, 5, 'p2');


    this.matter.world.on('collisionstart', function (event, bodyA, bodyB) {
      console.log(event.pairs[0].bodyA.gameObject);

      if(event.pairs[0].bodyB.gameObject !== null  && event.pairs[0].bodyA.gameObject !== null && event.pairs[0].bodyB.gameObject.texture.key === 'player' && event.pairs[0].bodyA.gameObject.texture.key === 'player'){
        bodyA.gameObject.collision();
        bodyB.gameObject.collision();
      }
    });

  }

  update(time, delta) {    
  }
}