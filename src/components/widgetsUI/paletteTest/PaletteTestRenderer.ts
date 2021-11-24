import ColourModel from "../../../_packages/graphics/colour/ColourModel";
import GradientUtilities from "../../../_packages/graphics/colour/GradientUtilities";

export default class PaletteTestRenderer {
  render(canvas: HTMLCanvasElement | undefined | null) {
    if (canvas === undefined || canvas === null) {
      return;
    }

    const context = canvas.getContext("2d");
    if (context === null) {
      return;
    }
    // const border = 4;
    // const lineWidth = 20;
    const width = context.canvas.width;
    const height = context.canvas.height;
    const midY = height / 2;


    const colourFrom = ColourModel.rgb(255, 50, 50);
    const colourTo = ColourModel.rgb(50, 255, 50);

    context.clearRect(0, 0, width, height);
    this.drawBorder(context, width, height);

    const radius = 12;
    const radius2 = radius * 2;

    var steps = Math.floor((width) / radius2);

    var offset = (width - (radius2 * steps)) / 2;

    for (let index = 0; index < steps; index++) {
      const percent = index / (steps - 1);
      const colour = GradientUtilities.mix(colourFrom, colourTo, percent);
      context.fillStyle = colour.hex;
      this.drawCircle(context, offset + index * radius2 + radius, midY, radius)
    }


  }
  private drawBorder(context: CanvasRenderingContext2D, width: number, height: number) {
    context.strokeRect(0, 0, width, height);
  }


  private drawCircle(context: CanvasRenderingContext2D, x: number, y: number, radius: number) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fill();
  }
}
