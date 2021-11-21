import { EnumCustomer } from "../../enums/EnumCustomer";
import { EnumProject } from "../../enums/EnumProject";
import { EnumProjectStatus } from "../../enums/EnumProjectStatus";
import ProjectApiModel from "../../entities/ProjectApiModel";
import ProjectForCustomerBase from "./ProjectForCustomerBase";

export default class ProjectForCustomerMetalsIncorporated extends ProjectForCustomerBase {
  createProjects(): Array<ProjectApiModel> {
    this.add(EnumProject.BackOfficePaymentTransfers, EnumCustomer.MetalsIncorporated, EnumProjectStatus.Closed, "Back Office payments transfers");
    this.add(EnumProject.IosCustomerIdentiyVerification, EnumCustomer.MetalsIncorporated, EnumProjectStatus.Closed, "IOS Application, Customer Identification and Verification");
    this.add(EnumProject.IosMetalsTransfersAuditing, EnumCustomer.MetalsIncorporated, EnumProjectStatus.Active, "IOS Application, Goods transfer auditing");
    this.add(EnumProject.PaymentReporting, EnumCustomer.MetalsIncorporated, EnumProjectStatus.Active, "Payment Reporting");

    return this.projects;
  }
}
