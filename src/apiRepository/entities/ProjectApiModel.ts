import CustomerApiModel from "./CustomerApiModel";
import ProjectStageApiModel from "./ProjectStageApiModel";
import ProjectHealthApiModel from "./ProjectHealthApiModel";
import ProjectStatusApiModel from "./ProjectStatusApiModel";

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
}
