export default class Config {
  constructor() {
    this.canvasWidth = 276;
    this.canvasHeight = 400;

    //Координаты заднего фона
    this.spriteSrc = "./img/sprite.png";

    this.backgroundX = 0;
    this.backgroundY = 0;
    this.backgroundWidth = 276;
    this.backgroundHeight = 228;

    this.speedBack = 0.5; // Скорость фона

    this.BirdX = 276;
    this.BirdY = 113;
    this.BirdWidth = 34;
    this.BirdHeight = 26;

    this.jump = 50;

    this.barrierTopX = 554;
    this.barrierTopY = 0;

    this.barrierBottomX = 502;
    this.barrierBottomY = 0;

    this.barrierWidth = 52;
    this.barrierHeight = 400;

    this.bottomBoundsX = 276;
    this.bottomBoundsY = 0;
    this.bottomBoundsWidth = 223;
    this.bottomBoundsHeight = 112;

    this.scoreX = 5;
    this.scoreY = 20;
    this.recScoreX = 5;
    this.recScoreY = 40;

    this.finallyPageX = 174;
    this.finallyPageY = 228;
    this.finallyPageWidth = 226;
    this.finallyPageHeight = 200;
  }
}
