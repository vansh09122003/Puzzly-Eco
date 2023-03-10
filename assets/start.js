class start extends Phaser.Scene
{
    constructor()
    {
        super('start');
    }
    preload()
    {
        this.load.image('start','assets/startGraphic.jpeg');
        this.load.image('bk','assets/Background_2.png');
    }
    create()
    {
        this.next=this.add.image(700,400,'start').setScale(0.9);
        this.next.setInteractive();
        this.next.visible=true;
        this.next.on('pointerdown',()=>this.loadNext());
    }
    loadNext(){
        this.scene.switch('Menu');
    }
}