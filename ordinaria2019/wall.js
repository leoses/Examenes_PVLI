export default class wall extends Phaser.Physics.Matter.Sprite{
    constructor(scene, x, y , sprite, sizeX, sizeY){
        super(scene.matter.world, x, y, sprite);
        //this.setOrigin(0,0);
        scene.add.existing(this);
        this.setDisplaySize(sizeX, sizeY);
        this.setIgnoreGravity(true);
        this.isStatic(true);

        this.setBody({
            type:'rectangle',
            width:sizeX,
            height: sizeY
        });
        
        this.setFrictionAir(0); //  fricción
    }
}