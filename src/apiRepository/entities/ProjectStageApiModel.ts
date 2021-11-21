import { differenceInCalendarDays } from "date-fns";
import ProjectApiModel from "./ProjectApiModel";

export default class ProjectStageApiModel {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date | undefined;
  project: ProjectApiModel;
  duration: number | undefined;

  constructor(project: ProjectApiModel, id: number, name: string, startDate: Date, endDate?: Date | undefined) {
    this.id = id;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.project = project;

    if (endDate === undefined) {
      this.duration = undefined;
    } else {
      this.duration = Math.abs(differenceInCalendarDays(startDate, endDate!));
    }
  }
}