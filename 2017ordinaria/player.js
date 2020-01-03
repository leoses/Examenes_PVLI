export default class Player extends Phaser.Physics.Matter.Sprite{
    constructor(scene, x, y, sprite, cursors, lives) {
        super(scene.matter.world, x, y, sprite,null,{label: 'player'});
        console.log(this);
        scene.add.existing(this);
        this.originalSize = 150;
        this.setDisplaySize(this.originalSize, this.originalSize);
        this.speed = 7.5; 
        this.speedYOffset = 1;
        this.scene = scene;
        this.lives = lives;
        this.setBody({
            type: 'rectangle',
            width: this.originalSize,
            height: this.originalSize,
        })
        this.cursors = cursors;
        
        //Para que el objeto rebote
        this.setBounce(1);
    }

    preUpdate(){
        if(this.cursors.up.isDown){
            this.applyForce({x: 0, y: -0.2});
        }

        if(this.cursors.left.isDown){
            this.setVelocityX(-this.speed);
        }
        else if(this.cursors.right.isDown){
            this.setVelocityX(this.speed);
        }
    }

    collision(){
        this.lives--;
        console.log(this.lives);
    }

}