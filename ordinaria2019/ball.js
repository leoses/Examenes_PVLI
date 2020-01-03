export default class ball extends Phaser.Physics.Matter.Sprite{
    constructor(scene, x, y, sprite) {
        super(scene.matter.world, x, y, sprite);
        scene.add.existing(this);
        this.originalSize = 150;
        this.setDisplaySize(this.originalSize, this.originalSize);

        this.setBody({
            type: 'circle',
            width: this.originalSize,
			height: this.originalSize
        })


        this.cursors = scene.input.keyboard.createCursorKeys();
        //Para que el objeto rebote
        this.setBounce(1);
    }

    preUpdate(){
        if(this.cursors.up.isDown){
            this.applyForce({x: 0, y: -0.2});
        }
        else if(this.cursors.left.isDown){
            this.applyForce({x: -0.1, y: 0});
        }
        else if(this.cursors.right.isDown){
            this.applyForce({x:0.1, y: 0});
        }
    }
}