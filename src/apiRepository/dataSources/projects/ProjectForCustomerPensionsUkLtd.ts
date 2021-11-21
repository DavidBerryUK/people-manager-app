import { EnumCustomer } from "../../enums/EnumCustomer";
import { EnumProject } from "../../enums/EnumProject";
import { EnumProjectStatus } from "../../enums/EnumProjectStatus";
import ProjectApiModel from "../../entities/ProjectApiModel";
import ProjectForCustomerBase from "./ProjectForCustomerBase";

export default class ProjectForCustomerPensionsUkLtd extends ProjectForCustomerBase {
  createProjects(): Array<ProjectApiModel> {
    this.add(EnumProject.InitialScoping, EnumCustomer.PensionsUkLtd, EnumProjectStatus.PreSales, "Initial Scoping");

    return this.projects;
  }
}
