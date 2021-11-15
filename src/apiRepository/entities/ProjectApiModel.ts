import CustomerApiModel from "./CustomerApiModel";
import ProjectEventsApiModel from "./ProjectEventApiModel";
import ProjectHealthApiModel from "./ProjectHealthApiModel";
import ProjectStatusApiModel from "./ProjectStatusApiModel";

export default class ProjectApiModel {
  id: number;
  name: string;
  status: ProjectStatusApiModel;
  customer: CustomerApiModel;
  healthRatings: Array<ProjectHealthApiModel>;
  events: Array<ProjectEventsApiModel>

  constructor(id?: number, name?: string, status?: ProjectStatusApiModel, customer?: CustomerApiModel) {
    this.id = id || 0;
    this.name = name || "";
    this.status = status || new ProjectStatusApiModel(-1, "");
    this.customer = customer || new CustomerApiModel();
    this.healthRatings = new Array<ProjectHealthApiModel>();
    this.events = new Array<ProjectEventsApiModel>();
  }
}
