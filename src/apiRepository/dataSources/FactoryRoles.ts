import { EnumRole } from "../enums/EnumRole";
import RoleApiModel from "../models/RoleApiModel";

//
// Create list of teams
//
export default class FactoryRoles {
  static createList(): Array<RoleApiModel> {
    const list = new Array<RoleApiModel>();

    list.push(new RoleApiModel(EnumRole.Accountancy, "Accountancy"));
    list.push(new RoleApiModel(EnumRole.Administration, "Administration"));
    list.push(new RoleApiModel(EnumRole.AnalysisJnr, "Analysis Jnr"));
    list.push(new RoleApiModel(EnumRole.AnalysisLead, "Analysis Lead"));
    list.push(new RoleApiModel(EnumRole.AnalysisPrincipal, "Analysis Principal"));
    list.push(new RoleApiModel(EnumRole.AnalysisSenior, "Analysis Senior"));
    list.push(new RoleApiModel(EnumRole.Designer, "Designer"));
    list.push(new RoleApiModel(EnumRole.DesignerPrincipal, "Designer Principal"));
    list.push(new RoleApiModel(EnumRole.DeveloperJnr, "Developer Jnr"));
    list.push(new RoleApiModel(EnumRole.DeveloperLead, "Developer Lead"));
    list.push(new RoleApiModel(EnumRole.DeveloperPrincipal, "Developer Principal"));
    list.push(new RoleApiModel(EnumRole.DeveloperSenior, "Developer Senior"));
    list.push(new RoleApiModel(EnumRole.HumanResources, "Human Resources"));
    list.push(new RoleApiModel(EnumRole.ProjectManagerJnr, "Project Manager Jnr"));
    list.push(new RoleApiModel(EnumRole.ProjectManagerLead, "Project Manager Lead"));
    list.push(new RoleApiModel(EnumRole.ProjectManagerPrincipal, "Project Manager Principal"));
    list.push(new RoleApiModel(EnumRole.ProjectManagerSenior, "Project Manager Senior"));
    list.push(new RoleApiModel(EnumRole.Sales, "Sales"));
    list.push(new RoleApiModel(EnumRole.SalesDirector, "SalesDirector"));

    list.push(new RoleApiModel(EnumRole.DevOpsManager, "DevOps Manager"));
    list.push(new RoleApiModel(EnumRole.DevOps, "DevOps"));

    return list;
  }
}
