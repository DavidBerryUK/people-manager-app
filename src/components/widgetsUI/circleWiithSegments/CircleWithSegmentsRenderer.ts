import CanvasWrapper from "../../../_packages/graphics/canvas/CanvasWrapper";
import CanvasCircleWithSegments from "../../../_packages/graphics/canvas/commands/CanvasCircleWithSegments";
import ColourModel from "../../../_packages/graphics/colour/ColourModel";
import { IPoint } from "../../../_packages/trigonometry/Trigonometry";

export default class CircleWithSegmentsRenderer {
  render(canvasElement: HTMLCanvasElement | undefined | null) {
    if (canvasElement === undefined || canvasElement === null) {
      return;
    }

    const canvas = new CanvasWrapper(canvasElement);
    const point: IPoint = { x: canvas.width / 2, y: canvas.height / 2 };
    CanvasCircleWithSegments.render(canvas, point, 180, 220, -90, 0, undefined, undefined, ColourModel.rgb(255, 150, 50), ColourModel.rgb(50, 255, 50));
  }

}
