import { EnumRole } from "../enums/EnumRole";
import { EnumSkill } from "../enums/EnumSkill";
import { EnumTeam } from "../enums/EnumTeam";
import PersonApiModel from "../models/PersonApiModel";
import RoleApiModel from "../models/RoleApiModel";
import SkillApiModel from "../models/SkillApiModel";
import SkillLevelApiModel from "../models/SkillLevelApiModel";
import TeamApiModel from "../models/TeamApiModel";

class SkillLevel {
  skill: EnumSkill;
  level: number;

  constructor(skill: EnumSkill, level: number) {
    this.skill = skill;
    this.level = level;
  }
}

//
// Create people, assign them skills and teams
//
export default class FactoryPeople {
  skillDictionary: { [id: number]: SkillApiModel };
  teamDictionary: { [id: number]: TeamApiModel };
  roleDictionary: { [id: number]: RoleApiModel };
  people: Array<PersonApiModel>;
  roles: Array<RoleApiModel>;
  skills: Array<SkillApiModel>;
  teams: Array<TeamApiModel>;
  nextId = 0;

  constructor(skills: Array<SkillApiModel>, teams: Array<TeamApiModel>, roles: Array<RoleApiModel>) {
    this.people = new Array<PersonApiModel>();
    this.roles = roles;
    this.skills = skills;
    this.teams = teams;
    //
    // create dictionary for arrays
    //
    this.skillDictionary = skills.reduce((a, x) => ({ ...a, [x.id]: x }), {});
    this.teamDictionary = teams.reduce((a, x) => ({ ...a, [x.id]: x }), {});
    this.roleDictionary = roles.reduce((a, x) => ({ ...a, [x.id]: x }), {});
  }

  createList() {
    this.people = new Array<PersonApiModel>();

    this.createAccountingAndAdminTeams();
    this.CreateDesignTeam();
    this.CreateDevOpsTeamA();
    this.CreateDevOpsTeamB();
    this.CreateDevOpsTeamC();
    this.CreateDevTeamCouncil();
    this.CreateDevTeamFinance();
    this.createSalesTeam();

    //
    // order the data
    //
    this.sortPeopleSkills();
    this.sortPeopleTeams();
    this.sortTeamPeople();
    this.sortSkillsPeople();
    this.sortRolePeople();

    return this.people;
  }

  private sortPeopleSkills() {
    this.people.forEach((person) => {
      person.skills = person.skills.sort((s1, s2) => s1.skill.name.localeCompare(s2.skill.name));
    });
  }

  private sortPeopleTeams() {
    this.people.forEach((person) => {
      person.teams = person.teams.sort((t1, t2) => t1.name.localeCompare(t2.name));
    });
  }

  private sortTeamPeople() {
    this.teams.forEach((team) => {
      team.people = team.people.sort((p1, p2) => p1.forename.localeCompare(p2.forename));
    });
  }

  private sortSkillsPeople() {
    this.skills.forEach((skill) => {
      skill.people = skill.people.sort((s1, s2) => s1.person.forename.localeCompare(s2.person.forename));
    });
  }

  private sortRolePeople() {
    this.roles.forEach((role) => {
      role.people = role.people.sort((r1, r2) => r1.forename.localeCompare(r2.forename));
    });
  }

  private createAccountingAndAdminTeams() {
    this.addPerson("Ali", "Moore", EnumRole.Accountancy, [EnumTeam.Administration, EnumTeam.Accountant], [new SkillLevel(EnumSkill.JiraAdmin, 4), new SkillLevel(EnumSkill.Accountant, 5)]);
    this.addPerson("Barbara", "Partridge", EnumRole.Accountancy, [(EnumTeam.Administration, EnumTeam.Accountant)], [new SkillLevel(EnumSkill.JiraAdmin, 3), new SkillLevel(EnumSkill.Accountant, 1)]);
    this.addPerson("Brian", "Hardy", EnumRole.Accountancy, [(EnumTeam.Administration, EnumTeam.Accountant)], [new SkillLevel(EnumSkill.JiraAdmin, 2), new SkillLevel(EnumSkill.Accountant, 2)]);
    this.addPerson("Byron", "Wellman", EnumRole.Administration, [EnumTeam.Administration], [new SkillLevel(EnumSkill.JiraAdmin, 2)]);
    this.addPerson("Carl", "Rutledge", EnumRole.Administration, [EnumTeam.Administration], [new SkillLevel(EnumSkill.JiraAdmin, 1)]);
  }

  private CreateDevOpsTeamA() {
    this.addPerson("Cole", "Everett", EnumRole.DevOpsManager, [EnumTeam.DevOpsShiftA], [new SkillLevel(EnumSkill.TechnicalLead, 5), new SkillLevel(EnumSkill.ClientManager, 5)]);
    this.addPerson("Darren", "Jacobson", EnumRole.DevOps, [EnumTeam.DevOpsShiftA], [new SkillLevel(EnumSkill.Oracle, 4)]);
    this.addPerson("Delia", "Ellwood", EnumRole.DevOps, [EnumTeam.DevOpsShiftA], [new SkillLevel(EnumSkill.ServiceDesk, 3), new SkillLevel(EnumSkill.DevOpsEngineerAws, 5), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 4)]);
  }

  private CreateDevOpsTeamB() {
    this.addPerson(
      "Elina",
      "Patterson",
      EnumRole.DevOpsManager,
      [EnumTeam.DevOpsShiftB],
      [new SkillLevel(EnumSkill.ServiceManager, 4), new SkillLevel(EnumSkill.KubernetesAdmin, 4), new SkillLevel(EnumSkill.DevOpsEngineerAws, 4), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 4), new SkillLevel(EnumSkill.AzurePipelines, 2)]
    );
    this.addPerson(
      "Frank",
      "Cartwright",
      EnumRole.DevOpsManager,
      [(EnumTeam.Sales, EnumTeam.DevOpsShiftB)],
      [new SkillLevel(EnumSkill.ProjectManagement, 3), new SkillLevel(EnumSkill.DevOpsEngineerAws, 4), new SkillLevel(EnumSkill.KubernetesAdmin, 2)]
    );
    this.addPerson("Gavin", "Green", EnumRole.DevOps, [EnumTeam.DevOpsShiftB], [new SkillLevel(EnumSkill.ServiceDesk, 3), new SkillLevel(EnumSkill.DevOpsEngineerAws, 5), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 4)]);
    this.addPerson("Ho", "Williams", EnumRole.DevOps, [EnumTeam.DevOpsShiftB], [new SkillLevel(EnumSkill.ServiceDesk, 2), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 2), new SkillLevel(EnumSkill.SQL, 3)]);
    this.addPerson("Hue", "Foster", EnumRole.DevOps, [EnumTeam.DevOpsShiftB], [new SkillLevel(EnumSkill.ServiceDesk, 2), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 1), new SkillLevel(EnumSkill.JiraAdmin, 4)]);
    this.addPerson("Ian", "Weeks", EnumRole.DevOps, [EnumTeam.DevOpsShiftB], [new SkillLevel(EnumSkill.ServiceDesk, 2), new SkillLevel(EnumSkill.DevOpsEngineerAws, 2)]);
  }

  private CreateDevOpsTeamC() {
    this.addPerson(
      "Janet",
      "Griffith",
      EnumRole.DevOpsManager,
      [EnumTeam.DevOpsShiftC],
      [new SkillLevel(EnumSkill.ServiceManager, 4), new SkillLevel(EnumSkill.KubernetesAdmin, 4), new SkillLevel(EnumSkill.DevOpsEngineerAws, 4), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 4), new SkillLevel(EnumSkill.AzurePipelines, 2)]
    );
    this.addPerson("Jarad", "Salmon", EnumRole.DevOpsManager, [EnumTeam.DevOpsShiftC], [new SkillLevel(EnumSkill.ServiceDesk, 3), new SkillLevel(EnumSkill.DevOpsEngineerAws, 4), new SkillLevel(EnumSkill.KubernetesAdmin, 2)]);
    this.addPerson("Jeanne", "Wilkes", EnumRole.DevOpsManager, [EnumTeam.DevOpsShiftC], [new SkillLevel(EnumSkill.ServiceDesk, 3), new SkillLevel(EnumSkill.DevOpsEngineerAws, 5), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 4)]);
    this.addPerson("John", "Morris", EnumRole.DevOps, [EnumTeam.DevOpsShiftC], [new SkillLevel(EnumSkill.ServiceDesk, 2), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 2), new SkillLevel(EnumSkill.SQL, 3)]);
    this.addPerson("Karen", "Bryce", EnumRole.DevOps, [EnumTeam.DevOpsShiftC], [new SkillLevel(EnumSkill.ServiceDesk, 2), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 1), new SkillLevel(EnumSkill.JiraAdmin, 4)]);
    this.addPerson("Kieran", "Stark", EnumRole.DevOps, [EnumTeam.DevOpsShiftC], [new SkillLevel(EnumSkill.ServiceDesk, 2), new SkillLevel(EnumSkill.DevOpsEngineerAws, 2)]);
  }

  private CreateDevTeamCouncil() {
    this.addPerson(
      "Kristy",
      "Hass",
      EnumRole.DeveloperPrincipal,
      [EnumTeam.DevTeamCouncil],
      [new SkillLevel(EnumSkill.SQL, 4), new SkillLevel(EnumSkill.JiraAdmin, 4), new SkillLevel(EnumSkill.React, 4), new SkillLevel(EnumSkill.VueJS, 4), new SkillLevel(EnumSkill.Typescript, 5), new SkillLevel(EnumSkill.CSharp, 4)]
    );
    this.addPerson("Leon", "Whitmore", EnumRole.DeveloperPrincipal, [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.ProjectManagement, 4), new SkillLevel(EnumSkill.JiraAdmin, 2)]);
    this.addPerson("Lilly", "Fry", EnumRole.DeveloperPrincipal, [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.BusinessAnalyst, 3), new SkillLevel(EnumSkill.JiraUser, 4)]);
    this.addPerson("Malcolm", "Harris", EnumRole.DeveloperLead, [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.TechnicalLead, 3), new SkillLevel(EnumSkill.Java, 4), new SkillLevel(EnumSkill.JavaSpring, 4)]);
    this.addPerson("Mark", "Knapp", EnumRole.DeveloperJnr, [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.UI, 4), new SkillLevel(EnumSkill.UX, 2), new SkillLevel(EnumSkill.React, 4), new SkillLevel(EnumSkill.VueJS, 5)]);
    this.addPerson("Micheal", "Wells", EnumRole.DeveloperJnr, [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.Java, 2), new SkillLevel(EnumSkill.Oracle, 3)]);
    this.addPerson("Nicholas ", "Kirby", EnumRole.DeveloperLead, [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.Javascript, 2), new SkillLevel(EnumSkill.React, 2)]);
    this.addPerson("Tim ", "Parks", EnumRole.DeveloperLead, [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.Javascript, 2), new SkillLevel(EnumSkill.React, 5)]);
    this.addPerson("Toby ", "Terrell", EnumRole.DeveloperLead, [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.Javascript, 2), new SkillLevel(EnumSkill.React, 5)]);
  }

  private CreateDevTeamFinance() {
    this.addPerson("Oliver", "May", EnumRole.DeveloperPrincipal, [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.ProjectManagement, 4), new SkillLevel(EnumSkill.JiraAdmin, 2)]);
    this.addPerson("Patrick", "Moorhouse", EnumRole.DeveloperPrincipal, [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.BusinessAnalyst, 3), new SkillLevel(EnumSkill.JiraUser, 4)]);
    this.addPerson(
      "David",
      "Berry",
      EnumRole.DeveloperPrincipal,
      [EnumTeam.DevTeamPensions],
      [
        new SkillLevel(EnumSkill.AdobePhotoShop, 3),
        new SkillLevel(EnumSkill.AffinityDesigner, 3),
        new SkillLevel(EnumSkill.Angular1, 3),
        new SkillLevel(EnumSkill.AzureDeveloper, 4),
        new SkillLevel(EnumSkill.AzurePipelines, 4),
        new SkillLevel(EnumSkill.BackboneJs, 5),
        new SkillLevel(EnumSkill.BackEndDeveloper, 4),
        new SkillLevel(EnumSkill.CSharp, 5),
        new SkillLevel(EnumSkill.Css, 5),
        new SkillLevel(EnumSkill.Docker, 3),
        new SkillLevel(EnumSkill.EntityFramework, 4),
        new SkillLevel(EnumSkill.FrontEndDeveloper, 4),
        new SkillLevel(EnumSkill.FullStackDeveloper, 4),
        new SkillLevel(EnumSkill.Git, 3),
        new SkillLevel(EnumSkill.Html, 5),
        new SkillLevel(EnumSkill.Javascript, 4),
        new SkillLevel(EnumSkill.JiraUser, 4),
        new SkillLevel(EnumSkill.JQuery, 4),
        new SkillLevel(EnumSkill.Less, 3),
        new SkillLevel(EnumSkill.Marionette, 5),
        new SkillLevel(EnumSkill.MondoDb, 2),
        new SkillLevel(EnumSkill.MsDatabaseDesigner, 5),
        new SkillLevel(EnumSkill.NetCore, 4),
        new SkillLevel(EnumSkill.Npm, 2),
        new SkillLevel(EnumSkill.RapidPrototypeEngineer, 4),
        new SkillLevel(EnumSkill.React, 4),
        new SkillLevel(EnumSkill.Sass, 5),
        new SkillLevel(EnumSkill.Sketch, 3),
        new SkillLevel(EnumSkill.SQL, 5),
        new SkillLevel(EnumSkill.Swift, 4),
        new SkillLevel(EnumSkill.TechnicalLead, 4),
        new SkillLevel(EnumSkill.Typescript, 4),
        new SkillLevel(EnumSkill.UI, 4),
        new SkillLevel(EnumSkill.UX, 4),
        new SkillLevel(EnumSkill.VisualStudioCode, 4),
        new SkillLevel(EnumSkill.VueJS, 5),
        new SkillLevel(EnumSkill.Vuetify, 5),
        new SkillLevel(EnumSkill.IOS, 4),
        new SkillLevel(EnumSkill.Webpack, 3),
      ]
    );
    this.addPerson(
      "Olivia",
      "Brown",
      EnumRole.DeveloperSenior,
      [EnumTeam.DevTeamPensions],
      [new SkillLevel(EnumSkill.TechnicalLead, 3), new SkillLevel(EnumSkill.CSharp, 4), new SkillLevel(EnumSkill.React, 4), new SkillLevel(EnumSkill.Typescript, 4)]
    );
    this.addPerson("paul ", "Henderson", EnumRole.DeveloperSenior, [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.UI, 4), new SkillLevel(EnumSkill.UX, 5)]);
    this.addPerson("Peter", "Mendoza", EnumRole.DeveloperLead, [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.CSharp, 5), new SkillLevel(EnumSkill.SQL, 3)]);
    this.addPerson("Philip ", "Stein", EnumRole.DeveloperLead, [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.Javascript, 2), new SkillLevel(EnumSkill.React, 5)]);
    this.addPerson("Sonya ", "Ross", EnumRole.DeveloperLead, [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.Javascript, 2), new SkillLevel(EnumSkill.React, 5)]);
    this.addPerson("Tarik ", "Bowen", EnumRole.DeveloperLead, [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.Javascript, 2), new SkillLevel(EnumSkill.React, 5)]);
    this.addPerson("Taz ", "Moore", EnumRole.DeveloperLead, [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.Javascript, 2), new SkillLevel(EnumSkill.React, 5)]);
  }

  private CreateDesignTeam() {
    this.addPerson("phillipa", "Stephenson", EnumRole.DesignerPrincipal, [EnumTeam.Design], [new SkillLevel(EnumSkill.UI, 5), new SkillLevel(EnumSkill.UX, 5)]);
    this.addPerson("Richard", "Riley", EnumRole.Designer, [EnumTeam.Design], [new SkillLevel(EnumSkill.UI, 4), new SkillLevel(EnumSkill.UX, 2)]);
    this.addPerson("Sonya", "Roberts", EnumRole.Designer, [EnumTeam.Design], [new SkillLevel(EnumSkill.UX, 5), new SkillLevel(EnumSkill.UI, 2)]);
    this.addPerson("Tom", "Hawkins", EnumRole.Designer, [EnumTeam.Design], [new SkillLevel(EnumSkill.UI, 4), new SkillLevel(EnumSkill.UX, 2)]);
  }

  private createSalesTeam() {
    this.addPerson("Aaron", "Tully", EnumRole.SalesDirector, [EnumTeam.Sales], [new SkillLevel(EnumSkill.Sales, 5), new SkillLevel(EnumSkill.ClientManager, 3)]);
    this.addPerson("Brian", "Middleton", EnumRole.Sales, [EnumTeam.Sales], [new SkillLevel(EnumSkill.Sales, 4), new SkillLevel(EnumSkill.ClientManager, 2)]);
    this.addPerson("Jon", "Jackson", EnumRole.Sales, [EnumTeam.Sales], [new SkillLevel(EnumSkill.Sales, 5), new SkillLevel(EnumSkill.ClientManager, 1)]);
    this.addPerson("Kyle", "Whitehouse", EnumRole.Sales, [EnumTeam.Sales], [new SkillLevel(EnumSkill.Sales, 2), new SkillLevel(EnumSkill.ClientManager, 3)]);
    this.addPerson("Stephen", "Grant", EnumRole.Sales, [EnumTeam.Sales], [new SkillLevel(EnumSkill.Sales, 3), new SkillLevel(EnumSkill.ClientManager, 2)]);
  }

  //
  // add a person to team, assign them skills and
  //  also add links from the teams and skill entities back to the person
  //  to simulate a  navigable relational database
  //
  private addPerson(forename: string, surname: string, role: EnumRole, teams: Array<EnumTeam>, skills: Array<SkillLevel>) {
    this.nextId = this.nextId + 1;
    const person = new PersonApiModel(this.nextId, forename, surname);

    // add avatar image paths
    //
    person.iconName = `${person.forename}.${person.surname}.jpg`.toLocaleLowerCase().replace(" ", "").replace("'", "").replace("-", "");

    // Add person to role
    //
    const roleObj = this.getRole(role);
    roleObj.people.push(person);
    person.role = roleObj;

    // Add person Skills
    //
    skills.forEach((s) => {
      const skill = this.getSkill(s.skill);
      const skillLevel = this.getSkillLevel(person, skill, s.level);
      person.skills.push(skillLevel);
      skill.people.push(skillLevel);
    });

    // Add person Teams
    //
    teams.forEach((t) => {
      const team = this.getTeam(t);
      person.teams.push(team);
      team.people.push(person);
    });

    // Add person to collection
    //
    this.people.push(person);
  }

  getTeam(id: EnumTeam): TeamApiModel {
    return this.teamDictionary[id];
  }

  getRole(id: EnumRole): RoleApiModel {
    return this.roleDictionary[id];
  }

  getSkill(id: EnumSkill): SkillApiModel {
    var skill = this.skillDictionary[id];
    return skill;
  }

  getSkillLevel(person: PersonApiModel, skill: SkillApiModel, level: number): SkillLevelApiModel {
    var model = new SkillLevelApiModel(person, skill, level);
    return model;
  }
}
