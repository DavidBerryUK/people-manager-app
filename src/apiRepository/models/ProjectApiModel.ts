import CustomerApiModel from "./CustomerApiModel";
import ProjectHealthApiModel from "./ProjectHealthApiModel";
import ProjectStatusApiModel from "./ProjectStatusApiModel";

export default class ProjectApiModel {
  id: number;
  name: string;
  status: ProjectStatusApiModel;
  customer: CustomerApiModel;
  health: Array<ProjectHealthApiModel>;

  constructor(id?: number, name?: string, status?: ProjectStatusApiModel, customer?: CustomerApiModel) {
    this.id = id || 0;
    this.name = name || "";
    this.status = status || new ProjectStatusApiModel(-1, "");
    this.customer = customer || new CustomerApiModel();
    this.health = new Array<ProjectHealthApiModel>();
  }
}
