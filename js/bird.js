import Config from "./config.js";
import Gravity from "./gravity.js";
export default class Bird {
  constructor(context) {
    this.sounds = {
      sfx_hit: null,
      sfx_wing: null,
      sfx_point: null,
    };
    this.gravity = new Gravity();
    this.config = new Config();
    this.context = context;
    this.frames = 0;
    this.frame = 0;
    this.img = new Image();
    this.img.src = this.config.spriteSrc;

    this.x = 50;
    this.y = 150;
    this.running = true;
    this.sound();
    this.control();
    this.animate();
  }
  sound() {
    for (let key in this.sounds) {
      this.sounds[key] = new Audio();
      this.sounds[key].src = "../sounds/" + key + ".ogg";
    }
  }
  draw() {
    this.context.drawImage(
      this.img,
      this.config.BirdX,
      this.config.BirdY + this.frames,
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
        this.sounds.sfx_wing.play();
      }
    });
  }
  animate() {
    setInterval(() => {
      if (this.running) {
        if (this.frame < 2) {
          this.frames = ++this.frame * this.config.BirdHeight;
        } else {
          this.frame = -1;
        }
      }
    }, 100);
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
    this.sounds.sfx_hit.play();
  }
}
