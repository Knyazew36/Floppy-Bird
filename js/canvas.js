import Config from "./config.js";

export default class Canvas {
  constructor(context) {
    this.config = new Config();
    this.context = context;
    this.img = new Image();
    this.img.src = this.config.spriteSrc;
    this.x = 0;
    this.running = true;
  }
  draw() {
    if (this.x <= -this.config.canvasWidth) {
      this.x = 0;
    }
    this.context.drawImage(
      this.img,
      this.config.backgroundX,
      this.config.backgroundY,
      this.config.backgroundWidth,
      this.config.backgroundHeight,
      this.x,
      this.config.canvasHeight - this.config.backgroundHeight,
      this.config.backgroundWidth,
      this.config.backgroundHeight
    );

    this.context.drawImage(
      this.img,
      this.config.backgroundX,
      this.config.backgroundY,
      this.config.backgroundWidth,
      this.config.backgroundHeight,
      this.x + this.config.canvasWidth,
      this.config.canvasHeight - this.config.backgroundHeight,
      this.config.backgroundWidth,
      this.config.backgroundHeight
    );
  }
  update() {
    if (this.running) {
      this.x -= this.config.speedBack;
    }
  }
  end() {
    this.running = false;
  }
}
