import { EnumSkill } from "../enums/EnumSkill";
import SkillApiModel from "../models/SkillApiModel";

export default class FactorySkills {
  static createList(): Array<SkillApiModel> {
    const list = new Array<SkillApiModel>();

    list.push(new SkillApiModel(EnumSkill.Accountant, "Accountant"));
    list.push(new SkillApiModel(EnumSkill.AwsArchitect, "Aws Architect"));
    list.push(new SkillApiModel(EnumSkill.AzureArchitect, "Azure Architect"));
    list.push(new SkillApiModel(EnumSkill.AzurePipelines, "Azure Pipelines"));
    list.push(new SkillApiModel(EnumSkill.ClientManager, "Client Manager"));
    list.push(new SkillApiModel(EnumSkill.CSharp, "C#"));
    list.push(new SkillApiModel(EnumSkill.Css, "CSS"));
    list.push(new SkillApiModel(EnumSkill.Docker, "Docker"));
    list.push(new SkillApiModel(EnumSkill.EntityFramework, "Entity Framework"));
    list.push(new SkillApiModel(EnumSkill.Java, "Java"));
    list.push(new SkillApiModel(EnumSkill.Javascript, "Javascript"));
    list.push(new SkillApiModel(EnumSkill.JavaSpring, "Java Sprint"));
    list.push(new SkillApiModel(EnumSkill.JiraAdmin, "Jira Administrator"));
    list.push(new SkillApiModel(EnumSkill.JiraUser, "Jira User"));
    list.push(new SkillApiModel(EnumSkill.MsDatabaseDesigner, "Microsoft Database Designer"));
    list.push(new SkillApiModel(EnumSkill.Oracle, "Order"));
    list.push(new SkillApiModel(EnumSkill.BusinessAnalyst, "Business Analyst"));
    list.push(new SkillApiModel(EnumSkill.ProjectManagement, "Project Manager"));
    list.push(new SkillApiModel(EnumSkill.RapidPrototypeEngineer, "Rapid Proto type Engineer"));
    list.push(new SkillApiModel(EnumSkill.React, "ReactJS"));
    list.push(new SkillApiModel(EnumSkill.Sales, "Sales"));
    list.push(new SkillApiModel(EnumSkill.SQL, "SQL"));
    list.push(new SkillApiModel(EnumSkill.SupportTeam, "SupportTeam"));
    list.push(new SkillApiModel(EnumSkill.TechnicalLead, "Technical Lead"));
    list.push(new SkillApiModel(EnumSkill.Typescript, "Typescript"));
    list.push(new SkillApiModel(EnumSkill.UI, "User Interface Designer"));
    list.push(new SkillApiModel(EnumSkill.UX, "User Experience Designer"));
    list.push(new SkillApiModel(EnumSkill.VueJS, "VueJS"));

    return list;
  }
}
