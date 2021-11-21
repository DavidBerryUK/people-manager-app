import ProjectApiModel from "../../../apiRepository/entities/ProjectApiModel";
import GanttChartModel from "../models/GanttChartModel";
import TimeLineModel from "../models/TimeLineModel";

export default class ConvertProjectToGanttChart {
  static convert(project: ProjectApiModel): GanttChartModel {
    var model = new GanttChartModel();

    project.stages.forEach((stage) => {
      model.timeLines.push(new TimeLineModel(stage.id, stage.name, stage.startDate, stage.endDate));
    });

    return model;
  }
}
