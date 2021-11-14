import { EnumProjectStatus } from "../enums/EnumProjectStatus";
import ProjectStatusApiModel from "../models/ProjectStatusApiModel";

//
// Create list of teams
//
export default class FactoryProjectStatus {
  static createList(): Array<ProjectStatusApiModel> {
    const list = new Array<ProjectStatusApiModel>();

    list.push(new ProjectStatusApiModel(EnumProjectStatus.None, "None"));
    list.push(new ProjectStatusApiModel(EnumProjectStatus.Active, "Active"));
    list.push(new ProjectStatusApiModel(EnumProjectStatus.Closed, "Closed"));
    list.push(new ProjectStatusApiModel(EnumProjectStatus.Contract, "Contract Discussion"));
    list.push(new ProjectStatusApiModel(EnumProjectStatus.Paused, "Paused"));
    list.push(new ProjectStatusApiModel(EnumProjectStatus.PreSales, "PreSales"));
    list.push(new ProjectStatusApiModel(EnumProjectStatus.Proposal, "Proposal"));
    list.push(new ProjectStatusApiModel(EnumProjectStatus.Tendering, "Tendering"));

    return list;
  }
}
