import { EnumRole } from "../../enums/EnumRole";
import RoleApiModel from "../../entities/RoleApiModel";

//
// Create list of teams
//
export default class FactoryRoles {
  static createList(): Array<RoleApiModel> {
    const list = new Array<RoleApiModel>();

    list.push(new RoleApiModel(EnumRole.Accountancy, "Accountancy", "accountancy.png"));
    list.push(new RoleApiModel(EnumRole.Administration, "Administration", "administration.png"));
    list.push(new RoleApiModel(EnumRole.AnalysisJnr, "Analysis Jnr", "business-analyst.png"));
    list.push(new RoleApiModel(EnumRole.AnalysisLead, "Analysis Lead", "business-analyst.png"));
    list.push(new RoleApiModel(EnumRole.AnalysisPrincipal, "Analysis Principal", "business-analyst.png"));
    list.push(new RoleApiModel(EnumRole.AnalysisSenior, "Analysis Senior", "business-analyst.png"));
    list.push(new RoleApiModel(EnumRole.Designer, "Designer", "designer.png"));
    list.push(new RoleApiModel(EnumRole.DesignerPrincipal, "Designer Principal", "designer.png"));
    list.push(new RoleApiModel(EnumRole.DeveloperJnr, "Developer Jnr", "developer.png"));
    list.push(new RoleApiModel(EnumRole.DeveloperLead, "Developer Lead", "developer.png"));
    list.push(new RoleApiModel(EnumRole.DeveloperPrincipal, "Developer Principal", "developer.png"));
    list.push(new RoleApiModel(EnumRole.DeveloperSenior, "Developer Senior", "developer.png"));
    list.push(new RoleApiModel(EnumRole.DevOps, "DevOps", "devops.png"));
    list.push(new RoleApiModel(EnumRole.DevOpsManager, "DevOps Manager", "devops.png"));
    list.push(new RoleApiModel(EnumRole.HumanResources, "Human Resources", "hr.png"));
    list.push(new RoleApiModel(EnumRole.ProjectManagerJnr, "Project Manager Jnr", "project-manager.jpg"));
    list.push(new RoleApiModel(EnumRole.ProjectManagerLead, "Project Manager Lead", "project-manager.jpg"));
    list.push(new RoleApiModel(EnumRole.ProjectManagerPrincipal, "Project Manager Principal", "project-manager.jpg"));
    list.push(new RoleApiModel(EnumRole.ProjectManagerSenior, "Project Manager Senior", "project-manager.jpg"));
    list.push(new RoleApiModel(EnumRole.Sales, "Sales", "salesman.png"));
    list.push(new RoleApiModel(EnumRole.SalesDirector, "Sales Director", "salesman.png"));
    list.push(new RoleApiModel(EnumRole.Tester, "Tester", "tester.jpeg"));
    list.push(new RoleApiModel(EnumRole.TestManager, "Test Manager", "tester.jpeg"));

    return list;
  }
}
