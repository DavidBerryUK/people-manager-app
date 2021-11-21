import { EnumCustomer } from "../../enums/EnumCustomer";
import { EnumProject } from "../../enums/EnumProject";
import { EnumProjectStatus } from "../../enums/EnumProjectStatus";
import ProjectApiModel from "../../entities/ProjectApiModel";
import ProjectForCustomerBase from "./ProjectForCustomerBase";

export default class ProjectForCustomerCareHireSpecialists extends ProjectForCustomerBase {
  createProjects(): Array<ProjectApiModel> {
    this.add(EnumProject.PatientCareRecords, EnumCustomer.HealthCareSpecialists, EnumProjectStatus.Active, "Patient Care Records - Internal System Creation");
    this.add(EnumProject.PatientPharmacyReview, EnumCustomer.HealthCareSpecialists, EnumProjectStatus.Closed, "Patient Pharmacy Review");
    this.add(EnumProject.LabResultsIntegration, EnumCustomer.HealthCareSpecialists, EnumProjectStatus.Closed, "Lab Result Integration");
    this.add(EnumProject.CovidVaccinationInvite, EnumCustomer.HealthCareSpecialists, EnumProjectStatus.Active, "Covid Vaccination Invite");
    this.add(EnumProject.TestAndTraceApp, EnumCustomer.HealthCareSpecialists, EnumProjectStatus.Active, "Test and Trace App");
    this.add(EnumProject.ManagementTimeAndMotionStudy, EnumCustomer.HealthCareSpecialists, EnumProjectStatus.Tendering, "Management Time and Motion Study");
    this.add(EnumProject.ManagementEfficiencyReview, EnumCustomer.HealthCareSpecialists, EnumProjectStatus.Tendering, "Management Efficiency Review");

    return this.projects;
  }
}
