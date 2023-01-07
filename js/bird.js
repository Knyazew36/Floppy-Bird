import Config from "./config.js";
import Gravity from "./gravity.js";
export default class Bird {
  constructor(context, barrier) {
    this.gravity = new Gravity();
    this.config = new Config();
    this.context = context;
    this.barrier = barrier;
    this.img = new Image();
    this.img.src = this.config.spriteSrc;
    this.control();
    this.y = 150;
  }
  draw() {
    this.context.drawImage(
      this.img,
      this.config.BirdX,
      this.config.BirdY,
      this.config.BirdWidth,
      this.config.BirdHeight,
      50,
      this.y,
      this.config.BirdWidth,
      this.config.BirdHeight
    );
  }
  control() {
    document.addEventListener("click", () => {
      this.y -= this.config.jump;
    });
  }
  update() {
    let y = this.y + this.gravity.dy;
    if (y <= 0) {
      this.y = 0;
    }
    this.y += this.gravity.dy;
  }
}
