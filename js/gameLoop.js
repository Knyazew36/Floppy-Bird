import Config from "./config.js";

export default class GameLoop {
  constructor(draw, update) {
    this.draw = draw;
    this.update = update;
    this.config = new Config();
    this.animation = this.animation.bind(this);
    this.animation();
    this.a = 0;
    this.b = 2;
  }
  animation() {
    requestAnimationFrame(this.animation);
    this.draw();
    this.update();
  }
}
