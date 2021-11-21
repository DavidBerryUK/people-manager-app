import { EnumCustomer } from "../../enums/EnumCustomer";
import { EnumProject } from "../../enums/EnumProject";
import { EnumProjectStatus } from "../../enums/EnumProjectStatus";
import ProjectApiModel from "../../entities/ProjectApiModel";
import ProjectForCustomerBase from "./ProjectForCustomerBase";

export default class ProjectForCustomerGlobalBank extends ProjectForCustomerBase {
  createProjects(): Array<ProjectApiModel> {
    this.add(EnumProject.AccountCentralAuditing, EnumCustomer.GlobalBank, EnumProjectStatus.Active, "Account Central Auditing");
    this.add(EnumProject.CustomerServicesUi, EnumCustomer.GlobalBank, EnumProjectStatus.Closed, "Customer Services UI Enhancements");
    this.add(EnumProject.FraudAiDetection, EnumCustomer.GlobalBank, EnumProjectStatus.Active, "Fraud AI Detection");
    this.add(EnumProject.RegulationReview2019, EnumCustomer.GlobalBank, EnumProjectStatus.Closed, "Regulation Review 2019");
    this.add(EnumProject.RegulationReview2020, EnumCustomer.GlobalBank, EnumProjectStatus.Closed, "Regulation Review 2020");
    this.add(EnumProject.RegulationReview2021, EnumCustomer.GlobalBank, EnumProjectStatus.Active, "Regulation Review 2021");

    return this.projects;
  }
}
