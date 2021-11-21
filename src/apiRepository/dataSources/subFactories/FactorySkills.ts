import { EnumSkill } from "../../enums/EnumSkill";
import SkillApiModel from "../../entities/SkillApiModel";

//
// Create list of skills
//
export default class FactorySkills {
  static createList(): Array<SkillApiModel> {
    const list = new Array<SkillApiModel>();

    list.push(new SkillApiModel(EnumSkill.Accountant, "Accountant", "accountant.png"));
    list.push(new SkillApiModel(EnumSkill.AdobeAfterEffects, "Adobe After Effects", "adobe-after-effects.png"));
    list.push(new SkillApiModel(EnumSkill.AdobeIllustrator, "Adobe illustrator", "adobe-illustrator.png"));
    list.push(new SkillApiModel(EnumSkill.AdobeLightRoom, "Adobe LightRoom", "adobe-light-room.png"));
    list.push(new SkillApiModel(EnumSkill.AdobePhotoShop, "Adobe PhotoShop", "adobe-photo-shop.png"));
    list.push(new SkillApiModel(EnumSkill.AdobePremierPro, "Adobe Premier Pro", "adobe-premier-pro.png"));
    list.push(new SkillApiModel(EnumSkill.AdobeXD, "Adobe XD", "adobe-xd.png"));
    list.push(new SkillApiModel(EnumSkill.AffinityDesigner, "AffinityDesigner", "affinity-designer.jpg"));
    list.push(new SkillApiModel(EnumSkill.Angular1, "Angular v1", "angular.png"));
    list.push(new SkillApiModel(EnumSkill.Angular10, "Angular v10", "angular.png"));
    list.push(new SkillApiModel(EnumSkill.Aurelia, "Aurelia", "aurelia.png"));
    list.push(new SkillApiModel(EnumSkill.AwsArchitect, "Aws Architect", "aws.png"));
    list.push(new SkillApiModel(EnumSkill.AzureArchitect, "Azure Architect", "azure.png"));
    list.push(new SkillApiModel(EnumSkill.AzureBus, "Azure Bus", "azure-bus.png"));
    list.push(new SkillApiModel(EnumSkill.AzureDeveloper, "Azure Developer", "azure.png"));
    list.push(new SkillApiModel(EnumSkill.AzurePipelines, "Azure Pipelines", "azure.png"));
    list.push(new SkillApiModel(EnumSkill.BackboneJs, "BackboneJs", "backbone.png"));
    list.push(new SkillApiModel(EnumSkill.BackEndDeveloper, "Back end Developer", "backend-end-dev.png"));
    list.push(new SkillApiModel(EnumSkill.BusinessAnalyst, "Business Analyst", "business-analyst.png"));
    list.push(new SkillApiModel(EnumSkill.ClientManager, "Client Manager", "client-manager.png"));
    list.push(new SkillApiModel(EnumSkill.CSharp, "C#", "csharp.png"));
    list.push(new SkillApiModel(EnumSkill.Css, "CSS", "css.png"));
    list.push(new SkillApiModel(EnumSkill.DevOpsEngineerAws, "AWS DevOps Engineer", "aws-devops.png"));
    list.push(new SkillApiModel(EnumSkill.DevOpsEngineerAzure, "Azure DevOps Engineer", "azure-devops.png"));
    list.push(new SkillApiModel(EnumSkill.Docker, "Docker", "docker.png"));
    list.push(new SkillApiModel(EnumSkill.Electron, "Electron", "electron.png"));
    list.push(new SkillApiModel(EnumSkill.Ember, "Ember", "ember.png"));
    list.push(new SkillApiModel(EnumSkill.EntityFramework, "Entity Framework", "entity-framework.png"));
    list.push(new SkillApiModel(EnumSkill.Figma, "Figma", "figma.png"));
    list.push(new SkillApiModel(EnumSkill.FrontEndDeveloper, "Front End Developer", "front-end-dev.png"));
    list.push(new SkillApiModel(EnumSkill.FullStackDeveloper, "Full Stack Developer", "full-stack-dev.jpg"));
    list.push(new SkillApiModel(EnumSkill.Git, "Git", "git.png"));
    list.push(new SkillApiModel(EnumSkill.GoogleAnalytics, "Google Analytics", "google-analytics.png"));
    list.push(new SkillApiModel(EnumSkill.GraphQL, "Graph QL", "graphql.png"));
    list.push(new SkillApiModel(EnumSkill.Html, "Html", "html5.png"));
    list.push(new SkillApiModel(EnumSkill.IOS, "IOS Development", "ios.png"));
    list.push(new SkillApiModel(EnumSkill.Java, "Java", "java.jpg"));
    list.push(new SkillApiModel(EnumSkill.Javascript, "Javascript", "javascript.jpg"));
    list.push(new SkillApiModel(EnumSkill.JavaSpring, "Java Spring", "javaspring.png"));
    list.push(new SkillApiModel(EnumSkill.Jest, "Jest", "jest.png"));
    list.push(new SkillApiModel(EnumSkill.JiraAdmin, "Jira Administrator", "jira.jpg"));
    list.push(new SkillApiModel(EnumSkill.JiraUser, "Jira User", "jira.jpg"));
    list.push(new SkillApiModel(EnumSkill.JQuery, "JQuery", "jquery.png"));
    list.push(new SkillApiModel(EnumSkill.KubernetesAdmin, "Kubernetes Administrator", "kubernetes.png"));
    list.push(new SkillApiModel(EnumSkill.Less, "Less", "less.png"));
    list.push(new SkillApiModel(EnumSkill.Marionette, "Marionette", "marionette.png"));
    list.push(new SkillApiModel(EnumSkill.MondoDb, "MongoDb", "mondodb.png"));
    list.push(new SkillApiModel(EnumSkill.MsDatabaseDesigner, "Microsoft Database Designer", "mssql.png"));
    list.push(new SkillApiModel(EnumSkill.NetCore, "Net Core", "netcore.png"));
    list.push(new SkillApiModel(EnumSkill.Node, "Node", "node.png"));
    list.push(new SkillApiModel(EnumSkill.Npm, "Npm", "npm.png"));
    list.push(new SkillApiModel(EnumSkill.Oracle, "Oracle", "oracle.png"));
    list.push(new SkillApiModel(EnumSkill.ProjectManagement, "Project Manager", "project-manager.jpg"));
    list.push(new SkillApiModel(EnumSkill.Python, "Python", "python.png"));
    list.push(new SkillApiModel(EnumSkill.RapidPrototypeEngineer, "Rapid Proto type Engineer", "prototype.png"));
    list.push(new SkillApiModel(EnumSkill.React, "ReactJS", "reactjs.png"));
    list.push(new SkillApiModel(EnumSkill.Sage, "Sage", "sage.png"));
    list.push(new SkillApiModel(EnumSkill.Sales, "Sales", "sales.png"));
    list.push(new SkillApiModel(EnumSkill.Sass, "Sass", "sass.png"));
    list.push(new SkillApiModel(EnumSkill.ServiceDesk, "Service Desk", "service-desk.jpg"));
    list.push(new SkillApiModel(EnumSkill.ServiceManager, "Service Manager", "service-desk.jpg"));
    list.push(new SkillApiModel(EnumSkill.Sketch, "Sketch", "sketch.png"));
    list.push(new SkillApiModel(EnumSkill.SQL, "SQL", "sql.png"));
    list.push(new SkillApiModel(EnumSkill.SupportTeam, "SupportTeam", "supportteam.png"));
    list.push(new SkillApiModel(EnumSkill.Swift, "Swift", "swift.png"));
    list.push(new SkillApiModel(EnumSkill.TechnicalLead, "Technical Lead", "technical-lead.jpg"));
    list.push(new SkillApiModel(EnumSkill.Typescript, "Typescript", "typescript.png"));
    list.push(new SkillApiModel(EnumSkill.UI, "User Interface Designer", "ui.jpg"));
    list.push(new SkillApiModel(EnumSkill.UserResearch, "User Research", "research.jpeg"));
    list.push(new SkillApiModel(EnumSkill.UX, "User Experience Designer", "ux.png"));
    list.push(new SkillApiModel(EnumSkill.VisualStudioCode, "Visual Studio Code", "visual-studio-code.png"));
    list.push(new SkillApiModel(EnumSkill.VueJS, "VueJS", "vuejs.png"));
    list.push(new SkillApiModel(EnumSkill.Vuetify, "Vuetify", "vuetify.png"));
    list.push(new SkillApiModel(EnumSkill.Webpack, "Webpack", "webpack.png"));
    list.push(new SkillApiModel(EnumSkill.Yarn, "Yarn", "yarn.png"));

    return list;
  }
}
