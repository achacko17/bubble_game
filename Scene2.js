class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        this.background = this.add.image(0, 0, "bath");
        this.background.setOrigin(0, 0);
        this.bubble = this.add.image(config.width / 2, config.height / 2, "bubble");

        this.bubble.setInteractive();
        this.input.on('gameobjectdown', this.destroyBubble, this);

        this.anims.create({
            key: "bubble-pop",
            frames: this.anims.generateFrameNumbers("bubble-pop"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete:true
        });

        var maxObjects = 10;
        for (var i = 0; i <= maxObjects; i++){
            var powerUp = this.physics.add.sprite(16, 16, "bubble");
            powerUp.setRandomPosition(0, 0, config.width, config.height);
            

            powerUp.setVelocity(100, 100);
            powerUp.setCollideWorldBounds(true);
            powerUp.setBounce(1);
        }

        this.add.text(20, 20, "Playing Game", { font: "25px Arial", fill: "white" });
    }

    moveBubble(bubble, speed) {
        bubble.y += speed;
        if (bubble.y > config.height) {
            this.resetBubblePos(bubble)
        }
    }

    resetBubblePos(bubble) {
        bubble.y = 0;
        var randomX = Phaser.Math.Between(0, config.width);
        bubble.x = randomX;
    }

    destroyBubble(pointer, gameObject) {
        gameObject.setTexture("bubble-pop");
        gameObject.play("bubble-pop");
    }

    update() {
        this.moveBubble(this.bubble, 1);
    }

}