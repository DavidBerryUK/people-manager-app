import { EnumCustomer } from "../../enums/EnumCustomer";
import { EnumProject } from "../../enums/EnumProject";
import { EnumProjectStatus } from "../../enums/EnumProjectStatus";
import ProjectApiModel from "../../entities/ProjectApiModel";
import ProjectForCustomerBase from "./ProjectForCustomerBase";

export default class ProjectForCustomerCarInsurance extends ProjectForCustomerBase {
  createProjects(): Array<ProjectApiModel> {
    this.add(EnumProject.MyAccount, EnumCustomer.CarInsurance, EnumProjectStatus.Active, "My Account Functions");
    this.add(EnumProject.QuickQuote, EnumCustomer.CarInsurance, EnumProjectStatus.Closed, "Quick Quotes");
    this.add(EnumProject.AutoRenew, EnumCustomer.CarInsurance, EnumProjectStatus.Active, "Auto Renew Policies");
    this.add(EnumProject.SubscriptionManager, EnumCustomer.CarInsurance, EnumProjectStatus.PreSales, "Contact Subscription Manager");
    this.add(EnumProject.DocumentManagement, EnumCustomer.CarInsurance, EnumProjectStatus.Active, "Document Management");
    this.add(EnumProject.QuoteStorage, EnumCustomer.CarInsurance, EnumProjectStatus.Active, "Quote Storage");
    this.add(EnumProject.LoginSecurityUpdate, EnumCustomer.CarInsurance, EnumProjectStatus.PreSales, "Login Security Updates");

    return this.projects;
  }
}
