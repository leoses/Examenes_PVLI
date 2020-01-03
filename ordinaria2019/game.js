import Ball from './ball.js';
import Wall from './wall.js';

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
    this.collisionsLeft = 8;
  }
  preload() {  
    this.load.image('background', './resources/Background.png');
    this.load.image('ball', './resources/ball.png');
    this.load.image('wall', './resources/Wall.png')
  }

  create() {
    //this.add.image(0,0,'background').setOrigin(0,0);
    this.matter.world.setBounds();
    let wall1 = new Wall (this, 0,600, 'wall', 700, 100);
    let ball = new Ball(this, 700, 0, 'ball');

    let wall2 = new Wall (this, 500,200, 'wall', 500,50);

    const c1 = this.matter.world.nextCategory();
    const c2 = this.matter.world.nextCategory();

    console.log(this);

    wall2.setCollidesWith([c1, this.matter.world.walls]);

    wall1.setCollisionCategory(c1);
    ball.setCollisionCategory(c2);

  }

  update(time, delta) {    
  }
}