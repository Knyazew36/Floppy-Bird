import Config from "./config.js";
export default class Score {
  constructor(context) {
    this.config = new Config();
    this.context = context;
    this.img = new Image();
    this.img.src = this.config.spriteSrc;
    this.score = 0;
    this.scoreX = this.config.scoreX;
    this.scoreY = this.config.scoreY;
    this.recScoreX = this.config.recScoreX;
    this.recScoreY = this.config.recScoreY;
    this.recScore = !localStorage.getItem("myRecord")
      ? (this.recScore = 0)
      : localStorage.getItem("myRecord");
  }
  update() {}
  draw() {
    this.context.fillStyle = "red";
    this.context.font = "15px sans-serif";
    this.context.fillText(this.score, this.scoreX, this.scoreY);
    this.context.fillText(this.recScore, this.recScoreX, this.recScoreY);
  }
  up() {
    this.score += 1;
  }
  record() {
    if (this.score > localStorage.getItem("myRecord")) {
      this.recScore = this.score;
      localStorage.setItem("myRecord", this.recScore);
    }
  }
  end() {
    this.scoreX = 205;
    this.scoreY = 154;
    this.recScoreX = 205;
    this.recScoreY = 196;
    this.record();
  }
}
