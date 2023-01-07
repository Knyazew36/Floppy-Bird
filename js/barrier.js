import Config from "./config.js";
import { getRandomArbitrary } from "./supportFunc.js";
export default class Barrier {
  constructor(context) {
    this.context = context;
    this.config = new Config();
    this.img = new Image();
    this.random = this.img.src = this.config.spriteSrc;
    this.barriers = [{}];
    this.dx = 200;
    this.create();
  }
  draw() {
    for (let i = 0; i < this.barriers.length; i++) {
      this.context.drawImage(
        this.img,
        this.config.barrierTopX,
        this.config.barrierTopY,
        this.config.barrierWidth,
        this.config.barrierHeight,

        (this.barriers[i].x -= 0.5),
        -this.barriers[i].y,
        this.config.barrierWidth,
        this.config.barrierHeight
      );

      this.context.drawImage(
        this.img,
        this.config.barrierBottomX,
        this.config.barrierBottomY,
        this.config.barrierWidth,
        this.config.barrierHeight,

        (this.barriers[i].x -= 0.5),
        this.config.canvasHeight - this.barriers[i].y + this.config.jump * 2,
        this.config.barrierWidth,
        this.config.barrierHeight
      );
    }
  }
  update() {
    if (this.barriers.length >= 4) {
      this.barriers.shift();
    }
  }
  create() {
    setInterval(() => {
      this.barriers.push({
        y: getRandomArbitrary(100, 350),
        x: this.config.canvasWidth,
      });
    }, 2000);
  }
}
