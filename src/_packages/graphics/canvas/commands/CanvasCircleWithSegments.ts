import Trigonometry, { IPoint } from "../../../trigonometry/Trigonometry";
import ColourModel from "../../colour/ColourModel";
import GradientUtilities from "../../colour/GradientUtilities";
import CanvasWrapper from "../CanvasWrapper";

export default class CanvasCircleWithSegments {

    static render(
        canvas: CanvasWrapper,
        origin: IPoint,
        innerRadius: number,
        outerRadius: number,
        segments: number,
        startAngleDegrees: number,
        segmentSpacingDegrees: number,
        strokeStartColour?: ColourModel,
        strokeEndColour?: ColourModel,
        fillStartColour?: ColourModel,
        fillEndColour?: ColourModel) {

        const degreeArcToDraw = 220;
        const segmentCount = segments;

        console.log(segmentCount);

        if (canvas === undefined || canvas.context === undefined) {
            return;
        }

        canvas.clearCanvas();
        canvas.drawRoundedRectangle(0, 0, canvas.width, canvas.height, 8, false, true);

        if (strokeStartColour) {
            canvas.context!.strokeStyle = strokeStartColour.hex;
            canvas.context!.stroke();
        }

        if (fillStartColour) {
            canvas.context!.fillStyle = fillStartColour.hex;
            canvas.context!.stroke();
        }

        // draw test circle
        canvas.context!.lineWidth = 2;
        canvas.context!.strokeStyle = "rgba(10,10,10)";
        for (let angle = 0; angle < 360; angle = angle + 5) {
            const radians = Trigonometry.degreesToRadians(angle - 90);
            const point = Trigonometry.offsetPoint(origin, radians, 150);
            canvas.drawCircle(point, 4, false, true);
        }

        const totalSegmentSpacingArc = segmentSpacingDegrees * segmentCount;
        const totalSegmentArc = degreeArcToDraw - totalSegmentSpacingArc;
        const segmentArc = totalSegmentArc / segmentCount;
        //startAngleDegrees = startAngleDegrees - segmentArc / 2;
        canvas.context!.lineWidth = 1;

        for (let i = 0; i < segmentCount; i++) {
            this.drawSegment(canvas, i, origin, innerRadius, outerRadius, segmentCount, startAngleDegrees, segmentSpacingDegrees, segmentArc)
        }

    }

    private static drawSegment(
        canvas: CanvasWrapper,
        segmentNo: number,
        origin: IPoint,
        innerRadius: number,
        outerRadius: number,
        segmentCount: number,
        startAngleDegrees: number,
        segmentSpacingDegrees: number,
        segmentArc: number) {

        const colourFrom = ColourModel.rgb(255, 50, 50);
        const colourTo = ColourModel.rgb(50, 255, 50);

        const percent = segmentNo / (segmentCount - 1);
        const colour = GradientUtilities.mix(colourFrom, colourTo, percent);

        canvas.context!.fillStyle = colour.hex;
        canvas.context!.strokeStyle = colour.hex;

        const degreesStart = (segmentNo * (segmentSpacingDegrees + segmentArc)) - 90 + startAngleDegrees;
        const degreesEnd = degreesStart + segmentArc
        const radiansStart = Trigonometry.degreesToRadians(degreesStart);
        const radiansEnd = Trigonometry.degreesToRadians(degreesEnd);

        const p1 = Trigonometry.offsetPoint(origin, radiansStart, innerRadius);
        const p2 = Trigonometry.offsetPoint(origin, radiansStart, outerRadius);


        canvas.context!.beginPath();
        canvas.context!.moveTo(p1.x, p1.y);
        canvas.context!.lineTo(p2.x, p2.y);

        canvas.context!.arc(origin.x, origin.y, outerRadius, radiansStart, radiansEnd, false);


        //canvas.context!.lineTo(p4.x, p4.y);

        canvas.context!.arc(origin.x, origin.y, innerRadius, radiansEnd, radiansStart, true);

        canvas.context!.closePath();
        canvas.context!.fill();
        canvas.context!.stroke();
    }
}