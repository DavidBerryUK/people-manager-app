import { EnumCustomer } from "../../enums/EnumCustomer";
import { EnumProject } from "../../enums/EnumProject";
import { EnumProjectStatus } from "../../enums/EnumProjectStatus";
import ProjectApiModel from "../../entities/ProjectApiModel";
import ProjectForCustomerBase from "./ProjectForCustomerBase";

export default class ProjectForCustomerVehicleServicingLtd extends ProjectForCustomerBase {
  createProjects(): Array<ProjectApiModel> {
    this.add(EnumProject.BackOfficeProcessing, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.Closed, "Back Office Processing");
    this.add(EnumProject.ClientPortal, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.Closed, "Client Portal");
    this.add(EnumProject.CustomerPortal, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.Closed, "Customer Portal");
    this.add(EnumProject.DatabaseArchitectureReview, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.Closed, "Database Architecture Review");
    this.add(EnumProject.GarageRepairPortal, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.Closed, "Garage Repair Portal");
    this.add(EnumProject.Invoicing, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.Paused, "Invoicing");
    this.add(EnumProject.IosCustomerServicingApp, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.Paused, "Ios Customer Servicing App");
    this.add(EnumProject.IosEmergencyApp, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.Paused, "Ios Emergency App");
    this.add(EnumProject.IosOrderManagementApp, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.Active, "Ios OrderManagement App");
    this.add(EnumProject.LiveOrderStatus, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.Active, "Live Order Status");
    this.add(EnumProject.PlatformArchitectureReview, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.PreSales, "Platform Architecture Review");
    this.add(EnumProject.TechnologyRefresh, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.PreSales, "Technology Refresh");

    return this.projects;
  }
}
