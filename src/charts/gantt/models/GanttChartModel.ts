import TimeLineModel from "./TimeLineModel";
import { differenceInCalendarDays } from "date-fns";

export default class GanttChartModel {
  timeLines: Array<TimeLineModel>;

  constructor() {
    this.timeLines = new Array<TimeLineModel>();
  }

  //
  // find earliest project stage
  //
  get earliestTimeLine(): TimeLineModel | undefined {
    if (this.timeLines.length === 0) {
      return undefined;
    }
    var stage = this.timeLines.reduce((acc, stage) => {
      if (acc === undefined) {
        return stage;
      }
      return acc.startDate < stage.startDate ? acc : stage;
    });
    return stage;
  }

  //
  // find latest project stage
  //
  get latestTimeLine(): TimeLineModel | undefined {
    if (this.timeLines.length === 0) {
      return undefined;
    }
    var stage = this.timeLines.reduce((acc, stage) => {
      if (acc === undefined) {
        return stage;
      }
      return acc.startDate > stage.startDate ? acc : stage;
    });
    return stage;
  }

  //
  // find earliest stage start date
  //
  get earliestStartDate(): Date | undefined {
    var stage = this.earliestTimeLine;
    if (stage !== undefined) {
      return stage.startDate;
    }
    return undefined;
  }

  //
  // find latest stage end date
  //
  get latestEndDate(): Date | undefined {
    var stage = this.latestTimeLine;
    if (stage !== undefined) {
      return stage.endDate;
    }
    return undefined;
  }

  get totalTimeLinesDurationInDays(): number | undefined {
    const earliest = this.earliestStartDate;
    const latest = this.latestEndDate;
    if (earliest === undefined || latest === undefined) {
      return undefined;
    }

    return Math.abs(differenceInCalendarDays(earliest, latest));
  }
}
