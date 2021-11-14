import CustomerApiModel from "./CustomerApiModel";
import ProjectStatusApiModel from "./ProjectStatusApiModel";

export default class ProjectApiModel {
  id: number;
  name: string;
  status: ProjectStatusApiModel;
  customer: CustomerApiModel;

  constructor(id?: number, name?: string, status?: ProjectStatusApiModel, customer?: CustomerApiModel) {
    this.id = id || 0;
    this.name = name || "";
    this.status = status || new ProjectStatusApiModel(-1, "");
    this.customer = customer || new CustomerApiModel();
  }
}
