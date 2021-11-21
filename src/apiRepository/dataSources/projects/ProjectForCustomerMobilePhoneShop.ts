import { EnumCustomer } from "../../enums/EnumCustomer";
import { EnumProject } from "../../enums/EnumProject";
import { EnumProjectStatus } from "../../enums/EnumProjectStatus";
import ProjectApiModel from "../../entities/ProjectApiModel";
import ProjectForCustomerBase from "./ProjectForCustomerBase";

export default class ProjectForCustomerMobilePhoneShop extends ProjectForCustomerBase {
  createProjects(): Array<ProjectApiModel> {
    this.add(EnumProject.IosCustomerApp, EnumCustomer.MobilePhoneShop, EnumProjectStatus.Closed, "IOS Application, Customer");
    this.add(EnumProject.IosNetworkCoverageMap, EnumCustomer.MobilePhoneShop, EnumProjectStatus.PreSales, "IOS Application, network coverage");
    this.add(EnumProject.CustomerFeedback, EnumCustomer.MobilePhoneShop, EnumProjectStatus.Proposal, "Customer Feedback Portal");

    return this.projects;
  }
}
