export default class CanvasWrapper {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D | null;
  width: number = 0;
  height: number = 0;

  get hasContext(): boolean {
    return this.context !== undefined && this.context !== null;
  }

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    if (this.context !== null) {
      this.width = this.context.canvas.width;
      this.height = this.context.canvas.height;
    }
  }

  clearCanvas() {
    if (this.context === undefined || this.context === null) {
      return;
    }
    this.context.fillStyle = "#fafafa";
    this.context.fillRect(0, 0, this.width, this.height);
  }

  drawRoundedRectangle(x: number, y: number, width: number, height: number, radius: number, fill: boolean, stroke: boolean) {
    if (this.context === undefined || this.context === null) {
      return;
    }
    if (radius > width / 2) {
      radius = width / 2;
    }
    this.context.beginPath();
    this.context.moveTo(x + radius, y);
    this.context.lineTo(x + width - radius, y);
    this.context.quadraticCurveTo(x + width, y, x + width, y + radius);
    this.context.lineTo(x + width, y + height - radius);
    this.context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    this.context.lineTo(x + radius, y + height);
    this.context.quadraticCurveTo(x, y + height, x, y + height - radius);
    this.context.lineTo(x, y + radius);
    this.context.quadraticCurveTo(x, y, x + radius, y);
    this.context.closePath();
    if (fill) {
      this.context.fill();
    }
    if (stroke) {
      this.context.stroke();
    }
  }
}
