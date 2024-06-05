import * as PIXI from 'pixi.js';

export abstract class Particle {
  public square: PIXI.Graphics;
  public filled: boolean;
  public color: number;

  constructor(
    public x: number,
    public y: number,
    public w: number,
    color: number
  ) {
    this.color = color;
    this.square = new PIXI.Graphics();
    this.square.drawRect(0, 0, w, w);
    this.square.x = x;
    this.square.y = y;
    this.square.interactive = true;
    this.square.buttonMode = true;
    this.filled = false;
    this.square.on('pointerdown', () => {
      this.setColor(color);
      this.fill();
    });
  }

  addToStage(stage: PIXI.Container) {
    stage.addChild(this.square);
  }

  setColor(color: number) {
    this.color = color;
  }

  abstract fill(): void;

  abstract clear(): void;
}

export class Sand extends Particle {
  fill() {
    this.square.clear();
    this.square.beginFill(this.color);
    this.square.drawRect(0, 0, this.w, this.w);
    this.square.endFill();
    this.filled = true;
  }

  clear() {
    this.square.clear();
    this.square.drawRect(0, 0, this.w, this.w);
    this.square.endFill();
    this.filled = false;
  }
}
