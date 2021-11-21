import { differenceInCalendarDays } from "date-fns";

import GanttChartModel from "../gantt/models/GanttChartModel";
import CanvasWrapper from "../lowLevel/CanvasWrapper";

export default class ProjectStagesChartBuilder {
  build(project: GanttChartModel, canvas: HTMLCanvasElement | undefined | null) {
    if (canvas === undefined || canvas === null) {
      return;
    }

    const myCanvas = new CanvasWrapper(canvas);

    if (!myCanvas.hasContext) {
      return;
    }

    // draw
    myCanvas.clearCanvas();
    this.drawStageText(myCanvas, project);
    this.drawStageDuration(myCanvas, project);
    this.drawTimeLineBackgrounds(myCanvas, project);
    this.drawTimeLineBars(myCanvas, project);
  }

  //
  // Draw the background for the each timeline
  //
  private drawTimeLineBackgrounds(myCanvas: CanvasWrapper, project: GanttChartModel) {
    if (myCanvas.context === undefined || myCanvas.context === null) {
      return;
    }

    myCanvas.context.fillStyle = "#e5e5e5";

    // timelines
    project.timeLines.forEach((timeline, index) => {
      const x = 200;
      const w = myCanvas.width - (x + 16);
      const y = 10 + index * 40;
      const h = 30;
      myCanvas.drawRoundedRectangle(x, y, w, h, 8, true, false);
    });
  }

  //
  // draw the actual time the timeline occupies
  //
  private drawTimeLineBars(myCanvas: CanvasWrapper, project: GanttChartModel) {
    if (myCanvas.context === undefined || myCanvas.context === null) {
      return;
    }

    myCanvas.context.fillStyle = "#ff0000";

    const baseX = 200;
    const border = 4;
    const baseW = myCanvas.width - (baseX + 16 + border * 2);
    const projectDurationInDays = project.totalTimeLinesDurationInDays || 1;
    const scale = baseW / projectDurationInDays;
    const baseDate = project.earliestStartDate;

    if (baseDate === undefined) {
      return;
    }

    // timelines
    project.timeLines.forEach((timeline, index) => {
      const xOffset = Math.abs(differenceInCalendarDays(baseDate, timeline.startDate));

      const x = baseX + xOffset * scale + border;
      const y = 14 + index * 40;
      const h = 22;
      let w = 2;

      if (timeline.duration) {
        w = timeline.duration * scale;
      }

      myCanvas.drawRoundedRectangle(x, y, w, h, 8, true, false);
    });
  }

  private drawStageText(myCanvas: CanvasWrapper, project: GanttChartModel) {
    if (myCanvas.context === undefined || myCanvas.context === null) {
      return;
    }
    myCanvas.context.font = "bold 14px Arial";
    myCanvas.context.textAlign = "left";

    project.timeLines.forEach((timeline, index) => {
      const x = 10;
      const w = 140;
      const y = 10 + index * 40;
      const h = 30;
      myCanvas.context!.fillStyle = "#eaeaea";
      myCanvas.drawRoundedRectangle(x, y, w, h, 8, true, false);

      myCanvas.context!.fillStyle = "#111";
      myCanvas.context!.fillText(timeline.name, 16, 30 + index * 40);
    });
  }

  private drawStageDuration(myCanvas: CanvasWrapper, project: GanttChartModel) {
    if (myCanvas.context === undefined || myCanvas.context === null) {
      return;
    }

    myCanvas.context.font = "bold 14px Arial";
    myCanvas.context.textAlign = "right";

    project.timeLines.forEach((timeline, index) => {
      const x = 154;
      const w = 42;
      const y = 10 + index * 40;
      const h = 30;
      myCanvas.context!.fillStyle = "#eaeaea";
      myCanvas.drawRoundedRectangle(x, y, w, h, 8, true, false);

      myCanvas.context!.fillStyle = "#111";
      myCanvas.context!.fillText(`${timeline.duration}`, x + 34, 30 + index * 40);
    });
  }
}
