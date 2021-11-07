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
    this.addPerson("Holly", "Willoughby", EnumRole.Accountancy, [EnumTeam.Administration, EnumTeam.Accountant], [new SkillLevel(EnumSkill.JiraAdmin, 4), new SkillLevel(EnumSkill.Accountant, 5)]);
    this.addPerson("Ryan", "Clark-Neal", EnumRole.Accountancy, [(EnumTeam.Administration, EnumTeam.Accountant)], [new SkillLevel(EnumSkill.JiraAdmin, 3), new SkillLevel(EnumSkill.Accountant, 1)]);
    this.addPerson("Dermot", "O'Leary", EnumRole.Accountancy, [(EnumTeam.Administration, EnumTeam.Accountant)], [new SkillLevel(EnumSkill.JiraAdmin, 2), new SkillLevel(EnumSkill.Accountant, 2)]);
    this.addPerson("Ben", "Shepherd", EnumRole.Administration, [EnumTeam.Administration], [new SkillLevel(EnumSkill.JiraAdmin, 2)]);
    this.addPerson("Alex", "Jones", EnumRole.Administration, [EnumTeam.Administration], [new SkillLevel(EnumSkill.JiraAdmin, 1)]);
  }

  private CreateDevOpsTeamA() {
    this.addPerson("Elvis", "Presley", EnumRole.DevOpsManager, [EnumTeam.DevOpsShiftA], [new SkillLevel(EnumSkill.TechnicalLead, 5), new SkillLevel(EnumSkill.ClientManager, 5)]);
    this.addPerson("Sammy", "Davis Jnr", EnumRole.DevOps, [EnumTeam.DevOpsShiftA], [new SkillLevel(EnumSkill.Oracle, 4)]);
    this.addPerson("Frank", "Sinatra", EnumRole.DevOps, [EnumTeam.DevOpsShiftA], [new SkillLevel(EnumSkill.ServiceDesk, 3), new SkillLevel(EnumSkill.DevOpsEngineerAws, 5), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 4)]);
  }

  private CreateDevOpsTeamB() {
    this.addPerson(
      "Meryl",
      "Streep",
      EnumRole.DevOpsManager,
      [EnumTeam.DevOpsShiftB],
      [new SkillLevel(EnumSkill.ServiceManager, 4), new SkillLevel(EnumSkill.KubernetesAdmin, 4), new SkillLevel(EnumSkill.DevOpsEngineerAws, 4), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 4), new SkillLevel(EnumSkill.AzurePipelines, 2)]
    );
    this.addPerson(
      "Angelina",
      "Jolie",
      EnumRole.DevOpsManager,
      [(EnumTeam.Sales, EnumTeam.DevOpsShiftB)],
      [new SkillLevel(EnumSkill.ProjectManagement, 3), new SkillLevel(EnumSkill.DevOpsEngineerAws, 4), new SkillLevel(EnumSkill.KubernetesAdmin, 2)]
    );
    this.addPerson("Scarlett", "Johansson", EnumRole.DevOps, [EnumTeam.DevOpsShiftB], [new SkillLevel(EnumSkill.ServiceDesk, 3), new SkillLevel(EnumSkill.DevOpsEngineerAws, 5), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 4)]);
    this.addPerson("Charlize", "Theron", EnumRole.DevOps, [EnumTeam.DevOpsShiftB], [new SkillLevel(EnumSkill.ServiceDesk, 2), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 2), new SkillLevel(EnumSkill.SQL, 3)]);
    this.addPerson("Nicole", "Kidman", EnumRole.DevOps, [EnumTeam.DevOpsShiftB], [new SkillLevel(EnumSkill.ServiceDesk, 2), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 1), new SkillLevel(EnumSkill.JiraAdmin, 4)]);
    this.addPerson("Ann", "Hathaway", EnumRole.DevOps, [EnumTeam.DevOpsShiftB], [new SkillLevel(EnumSkill.ServiceDesk, 2), new SkillLevel(EnumSkill.DevOpsEngineerAws, 2)]);
  }

  private CreateDevOpsTeamC() {
    this.addPerson(
      "Al",
      "Pacino",
      EnumRole.DevOpsManager,
      [EnumTeam.DevOpsShiftC],
      [new SkillLevel(EnumSkill.ServiceManager, 4), new SkillLevel(EnumSkill.KubernetesAdmin, 4), new SkillLevel(EnumSkill.DevOpsEngineerAws, 4), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 4), new SkillLevel(EnumSkill.AzurePipelines, 2)]
    );
    this.addPerson("Ray", "Liotta", EnumRole.DevOpsManager, [EnumTeam.DevOpsShiftC], [new SkillLevel(EnumSkill.ServiceDesk, 3), new SkillLevel(EnumSkill.DevOpsEngineerAws, 4), new SkillLevel(EnumSkill.KubernetesAdmin, 2)]);
    this.addPerson("James", "Gandolfini", EnumRole.DevOpsManager, [EnumTeam.DevOpsShiftC], [new SkillLevel(EnumSkill.ServiceDesk, 3), new SkillLevel(EnumSkill.DevOpsEngineerAws, 5), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 4)]);
    this.addPerson("Robert", "De Niro", EnumRole.DevOps, [EnumTeam.DevOpsShiftC], [new SkillLevel(EnumSkill.ServiceDesk, 2), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 2), new SkillLevel(EnumSkill.SQL, 3)]);
    this.addPerson("Leonardo", "DiCaprio", EnumRole.DevOps, [EnumTeam.DevOpsShiftC], [new SkillLevel(EnumSkill.ServiceDesk, 2), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 1), new SkillLevel(EnumSkill.JiraAdmin, 4)]);
    this.addPerson("Samuel", "L Jackson", EnumRole.DevOps, [EnumTeam.DevOpsShiftC], [new SkillLevel(EnumSkill.ServiceDesk, 2), new SkillLevel(EnumSkill.DevOpsEngineerAws, 2)]);
  }

  private CreateDevTeamCouncil() {
    this.addPerson(
      "Tom",
      "Hardy",
      EnumRole.DeveloperPrincipal,
      [EnumTeam.DevTeamCouncil],
      [new SkillLevel(EnumSkill.SQL, 4), new SkillLevel(EnumSkill.JiraAdmin, 4), new SkillLevel(EnumSkill.React, 4), new SkillLevel(EnumSkill.VueJS, 4), new SkillLevel(EnumSkill.Typescript, 5), new SkillLevel(EnumSkill.CSharp, 4)]
    );
    this.addPerson("Claire", "Balding", EnumRole.DeveloperPrincipal, [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.ProjectManagement, 4), new SkillLevel(EnumSkill.JiraAdmin, 2)]);
    this.addPerson("Gabby", "Logan", EnumRole.DeveloperPrincipal, [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.BusinessAnalyst, 3), new SkillLevel(EnumSkill.JiraUser, 4)]);
    this.addPerson("Matt", "Tebbutt", EnumRole.DeveloperLead, [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.TechnicalLead, 3), new SkillLevel(EnumSkill.Java, 4), new SkillLevel(EnumSkill.JavaSpring, 4)]);
    this.addPerson("jake", "humphrey", EnumRole.DeveloperJnr, [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.UI, 4), new SkillLevel(EnumSkill.UX, 2), new SkillLevel(EnumSkill.React, 4), new SkillLevel(EnumSkill.VueJS, 5)]);
    this.addPerson("Dan", "Walker", EnumRole.DeveloperJnr, [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.Java, 2), new SkillLevel(EnumSkill.Oracle, 3)]);
    this.addPerson("Suzi ", "Perry", EnumRole.DeveloperLead, [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.Javascript, 2), new SkillLevel(EnumSkill.React, 2)]);
  }

  private CreateDevTeamFinance() {
    this.addPerson("Beyonce", "Knowles", EnumRole.DeveloperPrincipal, [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.ProjectManagement, 4), new SkillLevel(EnumSkill.JiraAdmin, 2)]);
    this.addPerson("Taylor", "Swift", EnumRole.DeveloperPrincipal, [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.BusinessAnalyst, 3), new SkillLevel(EnumSkill.JiraUser, 4)]);
    this.addPerson(
      "Ariana",
      "Grande",
      EnumRole.DeveloperSenior,
      [EnumTeam.DevTeamPensions],
      [new SkillLevel(EnumSkill.TechnicalLead, 3), new SkillLevel(EnumSkill.CSharp, 4), new SkillLevel(EnumSkill.React, 4), new SkillLevel(EnumSkill.Typescript, 4)]
    );
    this.addPerson("Justin ", "Timberlake", EnumRole.DeveloperSenior, [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.UI, 4), new SkillLevel(EnumSkill.UX, 5)]);
    this.addPerson("Justin", "Bieber", EnumRole.DeveloperLead, [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.CSharp, 5), new SkillLevel(EnumSkill.SQL, 3)]);
    this.addPerson("Katy ", "Perry", EnumRole.DeveloperLead, [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.Javascript, 2), new SkillLevel(EnumSkill.React, 5)]);
  }

  private CreateDesignTeam() {
    this.addPerson("Damien", "Hurst", EnumRole.DesignerPrincipal, [EnumTeam.Design], [new SkillLevel(EnumSkill.UI, 5), new SkillLevel(EnumSkill.UX, 5)]);
    this.addPerson("Yayoi", "Kusama", EnumRole.Designer, [EnumTeam.Design], [new SkillLevel(EnumSkill.UI, 4), new SkillLevel(EnumSkill.UX, 2)]);
    this.addPerson("Jeff", "Koons", EnumRole.Designer, [EnumTeam.Design], [new SkillLevel(EnumSkill.UX, 5), new SkillLevel(EnumSkill.UI, 2)]);
  }

  private createSalesTeam() {
    this.addPerson("James", "Dyson", EnumRole.SalesDirector, [EnumTeam.Sales], [new SkillLevel(EnumSkill.Sales, 5), new SkillLevel(EnumSkill.ClientManager, 3)]);
    this.addPerson("Steve", "Jobs", EnumRole.Sales, [EnumTeam.Sales], [new SkillLevel(EnumSkill.Sales, 4), new SkillLevel(EnumSkill.ClientManager, 2)]);
    this.addPerson("Henry", "Ford", EnumRole.Sales, [EnumTeam.Sales], [new SkillLevel(EnumSkill.Sales, 5), new SkillLevel(EnumSkill.ClientManager, 1)]);
    this.addPerson("Jeff", "Bezos", EnumRole.Sales, [EnumTeam.Sales], [new SkillLevel(EnumSkill.Sales, 2), new SkillLevel(EnumSkill.ClientManager, 3)]);
    this.addPerson("Elon", "Musk", EnumRole.Sales, [EnumTeam.Sales], [new SkillLevel(EnumSkill.Sales, 3), new SkillLevel(EnumSkill.ClientManager, 2)]);
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
    const avatarName = `${person.forename}.${person.surname}.png`.toLocaleLowerCase().replace(" ", "").replace("'", "").replace("-", "");
    person.avatarSmallUrl = `/avatars/small/${avatarName}`;
    person.avatarMediumUrl = `/avatars/medium/${avatarName}`;
    person.avatarLargeUrl = `/avatars/large/${avatarName}`;

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
