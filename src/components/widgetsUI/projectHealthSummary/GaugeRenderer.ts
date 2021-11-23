export default class GaugeRenderer {
  build(canvas: HTMLCanvasElement | undefined | null, percentage: number) {
    if (canvas === undefined || canvas === null) {
      return;
    }

    const context = canvas.getContext("2d");
    if (context === null) {
      return;
    }
    const border = 4;
    const lineWidth = 20;
    const width = context.canvas.width;
    const height = context.canvas.height;
    const originX = width / 2;
    const originY = height / 2;

    const radius = Math.min(width, height) / 2 - border - lineWidth / 2;

    // clear canvas
    //
    context.clearRect(0, 0, width, height);

    // draw circle
    //
    context.beginPath();
    context.arc(originX, originY, radius, 0, 2 * Math.PI, false);
    context.lineWidth = lineWidth;
    context.strokeStyle = "rgba(255,255,255,0.4)";
    context.stroke();

    //Create gradient
    var gradient = context.createLinearGradient(0, height, 0, 0);

    gradient.addColorStop(0, "#c0e674");
    gradient.addColorStop(1, "#40d6a5");

    const angleStart = 0 * Math.PI - Math.PI / 2;
    const angleEnd = ((360 * percentage) / 100) * (Math.PI / 180) - Math.PI / 2;

    //Draw arc
    context.beginPath();
    context.arc(originX, originY, radius, angleStart, angleEnd);
    context.strokeStyle = gradient;
    context.lineWidth = lineWidth - 4;
    context.lineCap = "butt";
    context.stroke();
  }
}
