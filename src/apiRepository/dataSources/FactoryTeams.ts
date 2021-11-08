import { EnumTeam } from "../enums/EnumTeam";
import TeamApiModel from "../models/TeamApiModel";

//
// Create list of teams
//
export default class FactoryTeams {
  static createList(): Array<TeamApiModel> {
    const list = new Array<TeamApiModel>();

    list.push(new TeamApiModel(EnumTeam.Accountant, "Accountant", "accountant.png"));
    list.push(new TeamApiModel(EnumTeam.Administration, "Administration", "administration.png"));
    list.push(new TeamApiModel(EnumTeam.Design, "UI & UX Design", "design.png"));
    list.push(new TeamApiModel(EnumTeam.DevOpsShiftA, "DevOps Early Shift", "shift-early.png"));
    list.push(new TeamApiModel(EnumTeam.DevOpsShiftB, "DevOps Day Shift", "shift-day.png"));
    list.push(new TeamApiModel(EnumTeam.DevOpsShiftC, "DevOps Night Shift", "shift-night.png"));
    list.push(new TeamApiModel(EnumTeam.DevTeamCouncil, "Council Services Development", "councilservices.png"));
    list.push(new TeamApiModel(EnumTeam.DevTeamFinance, "Finance Development", "finance.png"));
    list.push(new TeamApiModel(EnumTeam.DevTeamPensions, "Pension Development", "pension.png"));
    list.push(new TeamApiModel(EnumTeam.DevTeamRetail, "Retail Development", "retail.png"));
    list.push(new TeamApiModel(EnumTeam.ProtoType, "Rapid Prototyping", "rapid-prototyping.png"));
    list.push(new TeamApiModel(EnumTeam.Sales, "Sales", "sales.png"));

    return list;
  }
}
