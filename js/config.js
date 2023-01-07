export default class Config {
  constructor() {
    this.canvasWidth = 275;
    this.canvasHeight = 400;

    // // Временно
    // this.step = 0;
    // this.maxStep = 0;

    //Координаты заднего фона
    this.spriteSrc = "./img/sprite.png";

    this.backgroundX = 0;
    this.backgroundY = 0;
    this.backgroundWidth = 276;
    this.backgroundHeight = 228;

    this.speedBack = 0.5; // Скорость фона

    this.BirdX = 276;
    this.BirdY = 114;
    this.BirdWidth = 34;
    this.BirdHeight = 24;

    this.jump = 50;

    this.barrierTopX = 554;
    this.barrierTopY = 0;

    this.barrierBottomX = 502;
    this.barrierBottomY = 0;

    this.barrierWidth = 52;
    this.barrierHeight = 400;

    // this.barrierSpeed = 2000;
  }
}
