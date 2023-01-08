import Config from "./config.js";
import Canvas from "./canvas.js";
import GameLoop from "./gameLoop.js";
import Bird from "./bird.js";
import Barrier from "./barrier.js";
import Score from "./score.js";
class Game {
  constructor() {
    this.ctx = document.querySelector("canvas").getContext("2d");
    this.config = new Config();
    this.canvas = new Canvas(this.ctx);
    this.bird = new Bird(this.ctx);
    this.score = new Score(this.ctx);
    this.barrier = new Barrier(this.ctx, this.bird, this.canvas, this.score);
    this.gameLoop = new GameLoop(this.draw.bind(this), this.update.bind(this));
  }
  draw() {
    this.ctx.clearRect(0, 0, this.config.canvasWidth, this.config.canvasHeight);
    this.canvas.draw();
    this.barrier.draw();
    this.bird.draw();
    this.score.draw();
  }
  update() {
    this.canvas.update();
    this.barrier.update();
    this.bird.update();
  }
}
window.addEventListener("load", () => {
  new Game();
});
