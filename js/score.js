import Config from "./config.js";
export default class Score {
  constructor(context, bird) {
    this.config = new Config();
    this.context = context;
    this.bird = bird;
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
    this.running = true;

    this.medalParametrs = {
      sx: 0,
      sy: 382,
      width: 44,
      height: 44,
      x: 52,
      y: 237,
    };
  }
  draw() {
    this.context.fillStyle = "black";
    this.context.font = "16px game";
    this.context.fillText(
      this.running ? "score " + this.score : this.score,
      this.scoreX,
      this.scoreY
    );
    this.context.fillText(
      this.running ? "best " + this.recScore : this.recScore,
      this.recScoreX,
      this.recScoreY
    );

    if (!this.running) {
      this.context.drawImage(
        this.img,
        this.medalParametrs.sx,
        this.medalParametrs.sy,
        this.medalParametrs.width,
        this.medalParametrs.height,
        52,
        147,
        this.medalParametrs.width,
        this.medalParametrs.height
      );
    }
  }
  up() {
    this.score += 1;
    this.bird.sounds.sfx_point.play();
  }
  record() {
    if (this.score > localStorage.getItem("myRecord")) {
      this.recScore = this.score;
      localStorage.setItem("myRecord", this.recScore);
    }
  }
  medal() {
    if (this.score >= 10 && this.score <= 19) {
      this.medalParametrs.sx = 312;
      this.medalParametrs.sy = 112;
    } else if (this.score >= 20 && this.score <= 29) {
      this.medalParametrs.sx = 360;
      this.medalParametrs.sy = 158;
    } else if (this.score >= 30 && this.score <= 39) {
      this.medalParametrs.sx = 360;
      this.medalParametrs.sy = 112;
    } else if (this.score >= 40) {
      this.medalParametrs.sx = 312;
      this.medalParametrs.sy = 158;
    }
  }
  end() {
    this.running = false;
    this.medal();
    this.scoreX = 205;
    this.scoreY = 154;
    this.recScoreX = 205;
    this.recScoreY = 196;
    this.record();
  }
}
