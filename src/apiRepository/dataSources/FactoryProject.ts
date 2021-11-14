import { EnumCustomer } from "../enums/EnumCustomer";
import { EnumProject } from "../enums/EnumProject";
import CustomerApiModel from "../models/CustomerApiModel";
import ProjectApiModel from "../models/ProjectApiModel";

//
// Create list of teams
//
export default class FactoryProjects {
  private list = new Array<ProjectApiModel>();
  customerDictionary: { [id: number]: CustomerApiModel };

  constructor(customers: Array<CustomerApiModel>) {
    //
    // create dictionary for arrays
    //
    this.customerDictionary = customers.reduce((a, x) => ({ ...a, [x.id]: x }), {});
  }

  createList(): Array<ProjectApiModel> {
    this.add(EnumProject.PatientCareRecords, EnumCustomer.CareHireSpecialists, "Patient Care Records - Internal System Creation");

    return this.list;
  }

  private add(project: EnumProject, customer: EnumCustomer, name: string) {
    const customerModel = this.getCustomer(customer);
    const projectModel = new ProjectApiModel(project, name, customerModel);
    customerModel.projects.push(projectModel);
    this.list.push(projectModel);
  }

  getCustomer(id: EnumCustomer): CustomerApiModel {
    return this.customerDictionary[id];
  }
}
