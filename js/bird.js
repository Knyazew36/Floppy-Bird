import Config from "./config.js";
import Gravity from "./gravity.js";
export default class Bird {
  constructor(context) {
    this.gravity = new Gravity();
    this.config = new Config();
    this.context = context;

    this.img = new Image();
    this.img.src = this.config.spriteSrc;

    this.x = 50;
    this.y = 150;
    this.running = true;
    this.control();
  }

  draw() {
    this.context.drawImage(
      this.img,
      this.config.BirdX,
      this.config.BirdY,
      this.config.BirdWidth,
      this.config.BirdHeight,
      this.x,
      this.y,
      this.config.BirdWidth,
      this.config.BirdHeight
    );
  }
  control() {
    document.addEventListener("click", () => {
      if (this.running) {
        this.y -= this.config.jump;
      }
    });
  }
  update() {
    if (this.running) {
      let y = this.y + this.gravity.dy;
      if (y <= 0) {
        this.y = 0;
      }
      this.y += this.gravity.dy;
    }
  }
  end() {
    this.running = false;
  }
}
