import Config from "./config.js";
import { getRandomArbitrary } from "./supportFunc.js";
export default class Barrier {
  constructor(context, bird, canvas, score) {
    this.context = context;
    this.bird = bird;
    this.canvas = canvas;
    this.score = score;
    this.config = new Config();
    this.img = new Image();
    this.img.src = this.config.spriteSrc;
    this.barriers = [{}];
    this.running = true;
    this.barrierSpeed = 0.5;
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

        (this.barriers[i].x -= this.barrierSpeed),
        this.barriers[i].y,
        this.config.barrierWidth,
        this.config.barrierHeight
      );

      this.context.drawImage(
        this.img,
        this.config.barrierBottomX,
        this.config.barrierBottomY,
        this.config.barrierWidth,
        this.config.barrierHeight,

        (this.barriers[i].x -= this.barrierSpeed),
        this.barriers[i].y + this.barriers[i].dy,
        this.config.barrierWidth,
        this.config.barrierHeight
      );
      if (this.running) {
        if (
          this.bird.x + this.config.BirdWidth >= this.barriers[i].x &&
          this.bird.x <= this.barriers[i].x + this.config.barrierWidth &&
          (this.bird.y <= this.barriers[i].y + this.config.barrierHeight ||
            this.bird.y + this.config.BirdHeight >=
              this.barriers[i].y + this.barriers[i].dy)
        ) {
          this.end();
        }
      }

      if (
        this.bird.x + this.config.BirdWidth ==
        this.barriers[i].x + this.config.barrierWidth
      ) {
        this.score.up();
      }
    }
    this.bottomBounds();
    if (!this.running) {
      this.final();
    }
  }
  bottomBounds() {
    this.context.drawImage(
      this.img,
      this.config.bottomBoundsX,
      this.config.bottomBoundsY,
      this.config.bottomBoundsWidth,
      this.config.bottomBoundsHeight,
      0,
      this.config.canvasHeight - 100,
      this.config.canvasWidth,
      this.config.bottomBoundsHeight
    );
  }

  update() {
    if (this.running) {
      this.collideBottomBounds();
      if (this.barriers.length >= 4) {
        this.barriers.shift();
      }
    }
  }
  collideBottomBounds() {
    if (this.running) {
      if (
        this.bird.y + this.config.BirdHeight >=
        this.config.canvasHeight - 100
      ) {
        this.end();
      }
    }
  }
  create() {
    setInterval(() => {
      this.barriers.push({
        y: -getRandomArbitrary(230, 380),
        x: this.config.canvasWidth,
        dy: this.config.canvasHeight + this.config.jump * 2,
      });
    }, 2000);
  }
  endControl() {
    window.addEventListener("click", () => {
      window.location.reload();
    });
  }
  final() {
    this.context.drawImage(
      this.img,
      this.config.finallyPageX,
      this.config.finallyPageY,
      this.config.finallyPageWidth,
      this.config.finallyPageHeight,
      25,
      60,
      this.config.finallyPageWidth,
      this.config.finallyPageHeight
    );
  }
  end() {
    this.running = false;
    this.endControl();
    this.score.end();
    this.bird.end();
    this.canvas.end();
    this.barrierSpeed = 0;
  }
}
