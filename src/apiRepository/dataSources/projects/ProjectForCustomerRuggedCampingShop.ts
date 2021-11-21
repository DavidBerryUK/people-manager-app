import { EnumCustomer } from "../../enums/EnumCustomer";
import { EnumProject } from "../../enums/EnumProject";
import { EnumProjectStatus } from "../../enums/EnumProjectStatus";
import ProjectApiModel from "../../entities/ProjectApiModel";
import ProjectForCustomerBase from "./ProjectForCustomerBase";

export default class ProjectForCustomerRuggedCampingShop extends ProjectForCustomerBase {
  createProjects(): Array<ProjectApiModel> {
    this.add(EnumProject.ShopFloorProductAuditing, EnumCustomer.RuggedCampingShop, EnumProjectStatus.Closed, "Shop Floor Product Stock Level");
    this.add(EnumProject.FastRestockProcess, EnumCustomer.RuggedCampingShop, EnumProjectStatus.Closed, "Fast restock process enhancements");
    this.add(EnumProject.OnlineCustomerOrders, EnumCustomer.RuggedCampingShop, EnumProjectStatus.PreSales, "Online Customer Orders");
    this.add(EnumProject.RealtimeStockLevels, EnumCustomer.RuggedCampingShop, EnumProjectStatus.Active, "realtime Stock Levels");

    return this.projects;
  }
}
