import { EnumCustomer } from "../../enums/EnumCustomer";
import { EnumProject } from "../../enums/EnumProject";
import { EnumProjectStatus } from "../../enums/EnumProjectStatus";
import ProjectApiModel from "../../entities/ProjectApiModel";
import ProjectForCustomerBase from "./ProjectForCustomerBase";

export default class ProjectForCustomerNorthernBank extends ProjectForCustomerBase {
  createProjects(): Array<ProjectApiModel> {
    this.add(EnumProject.ArchitectureReview, EnumCustomer.NorthernUkBank, EnumProjectStatus.Proposal, "Architecture Review");
    this.add(EnumProject.BusinessReview, EnumCustomer.NorthernUkBank, EnumProjectStatus.Proposal, "Business Review");
    this.add(EnumProject.ScalingArchitecture, EnumCustomer.NorthernUkBank, EnumProjectStatus.Proposal, "Scaling Architecture");
    this.add(EnumProject.AgileTutoring, EnumCustomer.NorthernUkBank, EnumProjectStatus.Closed, "Agile Tutoring");

    return this.projects;
  }
}
