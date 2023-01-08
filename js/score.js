import Config from "./config.js";
export default class Score {
  constructor(context) {
    this.config = new Config();
    this.context = context;
    this.img = new Image();
    this.img.src = this.config.spriteSrc;
    this.score = 0;
  }
  up() {
    this.score += 1;
  }
  end() {
    this.score = 0;
  }
  update() {}
  draw() {
    this.context.fillStyle = "red";
    this.context.font = "15px sans-serif";
    this.context.fillText(this.score, 0, 100);
    // this.context.fillText(this.recScore, this.scoreRecX, this.scoreRecY);
  }
}
