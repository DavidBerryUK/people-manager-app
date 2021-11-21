import CustomerApiModel from "./CustomerApiModel";
import ProjectStageApiModel from "./ProjectStageApiModel";
import ProjectHealthApiModel from "./ProjectHealthApiModel";
import ProjectStatusApiModel from "./ProjectStatusApiModel";
import { differenceInCalendarDays } from "date-fns";

export default class ProjectApiModel {
  id: number;
  name: string;
  customer: CustomerApiModel;
  status: ProjectStatusApiModel;
  healthRatings: Array<ProjectHealthApiModel>;
  stages: Array<ProjectStageApiModel>;

  constructor(id?: number, name?: string, status?: ProjectStatusApiModel, customer?: CustomerApiModel) {
    this.id = id || 0;
    this.name = name || "";
    this.status = status || new ProjectStatusApiModel(-1, "");
    this.customer = customer || new CustomerApiModel();
    this.healthRatings = new Array<ProjectHealthApiModel>();
    this.stages = new Array<ProjectStageApiModel>();
  }

  //
  // find earliest project stage
  //
  get earliestStage(): ProjectStageApiModel | undefined {
    if (this.stages.length === 0) {
      return undefined;
    }
    var stage = this.stages.reduce((acc, stage) => {
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
  get latestStage(): ProjectStageApiModel | undefined {
    if (this.stages.length === 0) {
      return undefined;
    }
    var stage = this.stages.reduce((acc, stage) => {
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
    var stage = this.earliestStage;
    if (stage !== undefined) {
      return stage.startDate;
    }
    return undefined;
  }

  //
  // find latest stage end date
  //
  get latestEndDate(): Date | undefined {
    var stage = this.latestStage;
    if (stage !== undefined) {
      return stage.endDate;
    }
    return undefined;
  }

  get totalStagesDurationInDays(): number | undefined {
    const earliest = this.earliestStartDate;
    const latest = this.latestEndDate;
    if (earliest === undefined || latest === undefined) {
      return undefined;
    }

    return Math.abs(differenceInCalendarDays(earliest, latest));
  }
}
