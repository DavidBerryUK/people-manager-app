import { EnumCustomer } from "../../enums/EnumCustomer";
import { EnumProject } from "../../enums/EnumProject";
import { EnumProjectStatus } from "../../enums/EnumProjectStatus";
import ProjectApiModel from "../../entities/ProjectApiModel";
import ProjectForCustomerBase from "./ProjectForCustomerBase";

export default class ProjectForCustomerRetailKitchenware extends ProjectForCustomerBase {
  createProjects(): Array<ProjectApiModel> {
    this.add(EnumProject.InventorySystemsImprovements, EnumCustomer.RetailKitchenware, EnumProjectStatus.Active, "Product Inventory System");
    this.add(EnumProject.OnlineSalesProtoType, EnumCustomer.RetailKitchenware, EnumProjectStatus.PreSales, "Online Sales Portal");

    return this.projects;
  }
}
