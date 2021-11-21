import { differenceInCalendarDays } from "date-fns";

export default class TimeLineModel {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date | undefined;
  duration: number | undefined;

  constructor(id: number, name: string, startDate: Date, endDate?: Date | undefined) {
    this.id = id;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;

    if (endDate === undefined) {
      this.duration = undefined;
    } else {
      this.duration = Math.abs(differenceInCalendarDays(startDate, endDate!));
    }
  }
}
