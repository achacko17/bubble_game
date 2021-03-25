class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootgame");
    }

    preload() {
        this.load.image("bath", "assets/images/bath.png");
        this.load.image("bubble","assets/images/smaller-bubble.png");
        this.load.spritesheet("bubble-pop", "assets/spritesheets/bubble-pop.png", {
            frameWidth: 16,
            frameHeight: 16
        });

    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }

}