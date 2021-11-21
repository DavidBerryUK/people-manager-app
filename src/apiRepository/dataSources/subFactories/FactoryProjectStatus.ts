import { EnumProjectStatus } from "../../enums/EnumProjectStatus";
import ProjectStatusApiModel from "../../entities/ProjectStatusApiModel";

//
// Create list of teams
//
export default class FactoryProjectStatus {
  static createList(): Array<ProjectStatusApiModel> {
    const list = new Array<ProjectStatusApiModel>();

    list.push(new ProjectStatusApiModel(EnumProjectStatus.None, "None"));
    list.push(new ProjectStatusApiModel(EnumProjectStatus.Active, "Active"));
    list.push(new ProjectStatusApiModel(EnumProjectStatus.BidCreating, "Bid Creating"));
    list.push(new ProjectStatusApiModel(EnumProjectStatus.BidFailed, "Bid Failed"));
    list.push(new ProjectStatusApiModel(EnumProjectStatus.BidSubmitted, "Bid Submitted"));
    list.push(new ProjectStatusApiModel(EnumProjectStatus.BidWon, "Bid Won"));
    list.push(new ProjectStatusApiModel(EnumProjectStatus.Closed, "Closed"));
    list.push(new ProjectStatusApiModel(EnumProjectStatus.Contract, "Contract Discussion"));
    list.push(new ProjectStatusApiModel(EnumProjectStatus.Paused, "Paused"));
    list.push(new ProjectStatusApiModel(EnumProjectStatus.PreSales, "PreSales"));
    list.push(new ProjectStatusApiModel(EnumProjectStatus.Proposal, "Proposal"));
    list.push(new ProjectStatusApiModel(EnumProjectStatus.Tendering, "Tendering"));

    return list;
  }
}
