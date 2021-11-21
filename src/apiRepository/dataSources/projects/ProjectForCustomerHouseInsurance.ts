import { EnumCustomer } from "../../enums/EnumCustomer";
import { EnumProject } from "../../enums/EnumProject";
import { EnumProjectStatus } from "../../enums/EnumProjectStatus";
import ProjectApiModel from "../../entities/ProjectApiModel";
import ProjectForCustomerBase from "./ProjectForCustomerBase";

export default class ProjectForCustomerHouseInsurance extends ProjectForCustomerBase {
  createProjects(): Array<ProjectApiModel> {
    this.add(EnumProject.ApiPerformanceImprovements, EnumCustomer.HouseInsurance, EnumProjectStatus.Closed, "Api Performance Improvements");
    this.add(EnumProject.CustomerSiteRefresh, EnumCustomer.HouseInsurance, EnumProjectStatus.Closed, "Customer Site Refresh");
    this.add(EnumProject.FastQuote, EnumCustomer.HouseInsurance, EnumProjectStatus.Active, "Fast Quote");
    this.add(EnumProject.QuoteUptakeAnalysis, EnumCustomer.HouseInsurance, EnumProjectStatus.Paused, "Quote Uptake Analysis");
    this.add(EnumProject.SocialMediaMarketing, EnumCustomer.HouseInsurance, EnumProjectStatus.PreSales, "Social Media Marketing");

    return this.projects;
  }
}
