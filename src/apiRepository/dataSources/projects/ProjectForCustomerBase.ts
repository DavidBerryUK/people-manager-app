import { EnumCustomer } from "../../enums/EnumCustomer";
import { EnumProject } from "../../enums/EnumProject";
import { EnumProjectStatus } from "../../enums/EnumProjectStatus";
import CustomerApiModel from "../../entities/CustomerApiModel";
import ProjectApiModel from "../../entities/ProjectApiModel";
import ProjectStatusApiModel from "../../entities/ProjectStatusApiModel";

export default class ProjectForCustomerBase {
  projects = new Array<ProjectApiModel>();
  private customerDictionary: { [id: number]: CustomerApiModel };
  private projectStatusDictionary: { [id: number]: ProjectStatusApiModel };

  constructor(customers: Array<CustomerApiModel>, projectStatus: Array<ProjectStatusApiModel>) {
    //
    // create dictionary for arrays
    //
    this.customerDictionary = customers.reduce((a, x) => ({ ...a, [x.id]: x }), {});
    this.projectStatusDictionary = projectStatus.reduce((a, x) => ({ ...a, [x.id]: x }), {});
  }

  add(project: EnumProject, customer: EnumCustomer, status: EnumProjectStatus, name: string) {
    const customerModel = this.getCustomer(customer);
    const projectStatusModel = this.getProjectStatus(status);

    const projectModel = new ProjectApiModel(project, name, projectStatusModel, customerModel);
    customerModel.projects.push(projectModel);
    projectStatusModel.projects.push(projectModel);
    this.projects.push(projectModel);
  }

  getCustomer(id: EnumCustomer): CustomerApiModel {
    return this.customerDictionary[id];
  }

  getProjectStatus(id: EnumProjectStatus): ProjectStatusApiModel {
    return this.projectStatusDictionary[id];
  }
}
