import { EnumSkill } from "../enums/EnumSkill";
import SkillApiModel from "../models/SkillApiModel";

//
// Create list of skills
//
export default class FactorySkills {
  static createList(): Array<SkillApiModel> {
    const list = new Array<SkillApiModel>();

    list.push(new SkillApiModel(EnumSkill.Accountant, "Accountant", ""));
    list.push(new SkillApiModel(EnumSkill.Angular1, "Angular v1", "angular.png"));
    list.push(new SkillApiModel(EnumSkill.Angular10, "Angular v10", "angular.png"));
    list.push(new SkillApiModel(EnumSkill.Aurelia, "Aurelia", "aurelia.png"));
    list.push(new SkillApiModel(EnumSkill.AwsArchitect, "Aws Architect", ""));
    list.push(new SkillApiModel(EnumSkill.AzureArchitect, "Azure Architect", "azure.png"));
    list.push(new SkillApiModel(EnumSkill.AzureDeveloper, "Azure Developer", "azure.png"));
    list.push(new SkillApiModel(EnumSkill.AzurePipelines, "Azure Pipelines", "azure.png"));
    list.push(new SkillApiModel(EnumSkill.BackboneJs, "BackboneJs", "backbone.png"));
    list.push(new SkillApiModel(EnumSkill.BusinessAnalyst, "Business Analyst", "default.png"));
    list.push(new SkillApiModel(EnumSkill.ClientManager, "Client Manager", "default.png"));
    list.push(new SkillApiModel(EnumSkill.CSharp, "C#", "default.png"));
    list.push(new SkillApiModel(EnumSkill.Css, "Css", "css.png"));
    list.push(new SkillApiModel(EnumSkill.Css, "CSS", "css.png"));
    list.push(new SkillApiModel(EnumSkill.DevOpsEngineerAws, "AWS DevOps Engineer", "default.png"));
    list.push(new SkillApiModel(EnumSkill.DevOpsEngineerAzure, "Azure DevOps Engineer", "default.png"));
    list.push(new SkillApiModel(EnumSkill.Docker, "Docker", "default.png"));
    list.push(new SkillApiModel(EnumSkill.Ember, "Ember", "ember.png"));
    list.push(new SkillApiModel(EnumSkill.EntityFramework, "Entity Framework", "default.png"));
    list.push(new SkillApiModel(EnumSkill.Git, "Git", "git.png"));
    list.push(new SkillApiModel(EnumSkill.GoogleAnalytics, "Google Analytics", "googleanalytics.png"));
    list.push(new SkillApiModel(EnumSkill.GraphQL, "GraphQl", "graphql.png"));
    list.push(new SkillApiModel(EnumSkill.Html, "Html", "html5.png"));
    list.push(new SkillApiModel(EnumSkill.Java, "Java", "default.png"));
    list.push(new SkillApiModel(EnumSkill.Javascript, "Javascript", "default.png"));
    list.push(new SkillApiModel(EnumSkill.JavaSpring, "Java Sprint", "default.png"));
    list.push(new SkillApiModel(EnumSkill.JiraAdmin, "Jira Administrator", "default.png"));
    list.push(new SkillApiModel(EnumSkill.JiraUser, "Jira User", "default.png"));
    list.push(new SkillApiModel(EnumSkill.JQuery, "JQuery", "jquery.png"));
    list.push(new SkillApiModel(EnumSkill.KubernetesAdmin, "Kubernetes Administrator", "default.png"));
    list.push(new SkillApiModel(EnumSkill.Less, "Less", "less.png"));
    list.push(new SkillApiModel(EnumSkill.Marionette, "Marionette", "marionette.png"));
    list.push(new SkillApiModel(EnumSkill.MondoDb, "MongoDb", "mondodb.png"));
    list.push(new SkillApiModel(EnumSkill.MsDatabaseDesigner, "Microsoft Database Designer", "default.png"));
    list.push(new SkillApiModel(EnumSkill.NetCore, "Net Core", "netcore.png"));
    list.push(new SkillApiModel(EnumSkill.Node, "Node", "node.png"));
    list.push(new SkillApiModel(EnumSkill.Npm, "Npm", "npm.png"));
    list.push(new SkillApiModel(EnumSkill.Oracle, "Oracle", "default.png"));
    list.push(new SkillApiModel(EnumSkill.ProjectManagement, "Project Manager", "default.png"));
    list.push(new SkillApiModel(EnumSkill.RapidPrototypeEngineer, "Rapid Proto type Engineer", "default.png"));
    list.push(new SkillApiModel(EnumSkill.React, "ReactJS", "reactjs"));
    list.push(new SkillApiModel(EnumSkill.Sales, "Sales", "default.png"));
    list.push(new SkillApiModel(EnumSkill.Sass, "Sass", "sass.png"));
    list.push(new SkillApiModel(EnumSkill.ServiceDesk, "Service Desk", "default.png"));
    list.push(new SkillApiModel(EnumSkill.ServiceManager, "Service Manager", "default.png"));
    list.push(new SkillApiModel(EnumSkill.Sketch, "Sketch", "sketch.png"));
    list.push(new SkillApiModel(EnumSkill.SQL, "SQL", "default.png"));
    list.push(new SkillApiModel(EnumSkill.SupportTeam, "SupportTeam", "default.png"));
    list.push(new SkillApiModel(EnumSkill.Swift, "Swift", "swift.png"));
    list.push(new SkillApiModel(EnumSkill.TechnicalLead, "Technical Lead", "default.png"));
    list.push(new SkillApiModel(EnumSkill.Typescript, "Typescript", "typescript.png"));
    list.push(new SkillApiModel(EnumSkill.UI, "User Interface Designer", "default.png"));
    list.push(new SkillApiModel(EnumSkill.UX, "User Experience Designer", ""));
    list.push(new SkillApiModel(EnumSkill.VisualStudioCode, "Visual Studio Code", "visualstudiocode.png"));
    list.push(new SkillApiModel(EnumSkill.VueJS, "VueJS", "vuejs.png"));
    list.push(new SkillApiModel(EnumSkill.Vuetify, "Vuetify", "vuetify.png"));
    list.push(new SkillApiModel(EnumSkill.Webpack, "Webpack", "webpack.png"));

    return list;
  }
}
