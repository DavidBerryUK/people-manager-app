import { EnumTeam } from "../enums/EnumTeam";
import TeamApiModel from "../models/TeamApiModel";

//
// Create list of teams
//
export default class FactoryTeams {
  static createList(): Array<TeamApiModel> {
    const list = new Array<TeamApiModel>();

    list.push(new TeamApiModel(EnumTeam.Accountant, "Accountant"));
    list.push(new TeamApiModel(EnumTeam.Sales, "Sales"));
    list.push(new TeamApiModel(EnumTeam.Administration, "Administration"));
    list.push(new TeamApiModel(EnumTeam.ProtoType, "Rapid Prototyping"));
    list.push(new TeamApiModel(EnumTeam.DevTeamRetail, "Retail Development"));
    list.push(new TeamApiModel(EnumTeam.DevTeamFinance, "Finance Development"));
    list.push(new TeamApiModel(EnumTeam.DevTeamPensions, "Pension Development"));
    list.push(new TeamApiModel(EnumTeam.DevTeamCouncil, "Council Services Development"));
    list.push(new TeamApiModel(EnumTeam.Design, "UI & UX Design"));
    list.push(new TeamApiModel(EnumTeam.DevOpsShiftA, "DevOps Early Shift"));
    list.push(new TeamApiModel(EnumTeam.DevOpsShiftB, "DevOps Day Shift"));
    list.push(new TeamApiModel(EnumTeam.DevOpsShiftC, "DevOps Night Shift"));

    return list;
  }
}
