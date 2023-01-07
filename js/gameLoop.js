import Config from "./config.js";

export default class GameLoop {
  constructor(draw, update) {
    this.draw = draw;
    this.update = update;
    this.config = new Config();
    this.animation = this.animation.bind(this);
    this.animation();
  }
  animation() {
    requestAnimationFrame(this.animation);
    //Временно 
    // if (++this.config.step < this.config.maxStep) {
    //   return;
    // }
    // this.config.step = 0;

    //
    this.draw();
    this.update();
  }
}
