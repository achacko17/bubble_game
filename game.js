
var config = {
    width: 615,
    height: 600,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug:false
        }
    }
}

window.onload = function () {
    var game = new Phaser.Game(config);
}