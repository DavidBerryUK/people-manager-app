import { EnumSkill } from "../enums/EnumSkill";
import { EnumTeam } from "../enums/EnumTeam";
import PersonApiModel from "../models/PersonApiModel";
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
  people: Array<PersonApiModel>;
  teams: Array<TeamApiModel>;
  skills: Array<SkillApiModel>;
  nextId = 0;

  constructor(skills: Array<SkillApiModel>, teams: Array<TeamApiModel>) {
    this.people = new Array<PersonApiModel>();
    this.teams = teams;
    this.skills = skills;
    this.skillDictionary = skills.reduce((a, x) => ({ ...a, [x.id]: x }), {});
    this.teamDictionary = teams.reduce((a, x) => ({ ...a, [x.id]: x }), {});
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

  private createAccountingAndAdminTeams() {
    this.addPerson("Holly", "Willoughby", [EnumTeam.Administration, EnumTeam.Accountant], [new SkillLevel(EnumSkill.JiraAdmin, 4), new SkillLevel(EnumSkill.Accountant, 5)]);
    this.addPerson("Ryan", "Clark-Neal", [EnumTeam.Administration, EnumTeam.Accountant], [new SkillLevel(EnumSkill.JiraAdmin, 3), new SkillLevel(EnumSkill.Accountant, 1)]);
    this.addPerson("Dermot", "O'Leary", [EnumTeam.Administration, EnumTeam.Accountant], [new SkillLevel(EnumSkill.JiraAdmin, 2), new SkillLevel(EnumSkill.Accountant, 2)]);
    this.addPerson("Ben", "Shepherd", [EnumTeam.Administration], [new SkillLevel(EnumSkill.JiraAdmin, 2)]);
    this.addPerson("Alex", "Jones", [EnumTeam.Administration], [new SkillLevel(EnumSkill.JiraAdmin, 1)]);
  }

  private CreateDevOpsTeamA() {
    this.addPerson("Elvis", "Presley", [EnumTeam.DevOpsShiftA], [new SkillLevel(EnumSkill.TechnicalLead, 5), new SkillLevel(EnumSkill.ClientManager, 5)]);
    this.addPerson("Sammy", "Davis Jnr", [EnumTeam.DevOpsShiftA], [new SkillLevel(EnumSkill.Oracle, 4)]);
    this.addPerson("Frank", "Sinatra", [EnumTeam.DevOpsShiftA], [new SkillLevel(EnumSkill.ServiceDesk, 3), new SkillLevel(EnumSkill.DevOpsEngineerAws, 5), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 4)]);
  }

  private CreateDevOpsTeamB() {
    this.addPerson(
      "Meryl",
      "Streep",
      [EnumTeam.DevOpsShiftB],
      [new SkillLevel(EnumSkill.ServiceManager, 4), new SkillLevel(EnumSkill.KubernetesAdmin, 4), new SkillLevel(EnumSkill.DevOpsEngineerAws, 4), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 4), new SkillLevel(EnumSkill.AzurePipelines, 2)]
    );
    this.addPerson("Angelina", "Jolie", [EnumTeam.Sales, EnumTeam.DevOpsShiftB], [new SkillLevel(EnumSkill.ProjectManagement, 3), new SkillLevel(EnumSkill.DevOpsEngineerAws, 4), new SkillLevel(EnumSkill.KubernetesAdmin, 2)]);
    this.addPerson("Scarlett", "Johansson", [EnumTeam.DevOpsShiftB], [new SkillLevel(EnumSkill.ServiceDesk, 3), new SkillLevel(EnumSkill.DevOpsEngineerAws, 5), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 4)]);
    this.addPerson("Charlize", "Theron", [EnumTeam.DevOpsShiftB], [new SkillLevel(EnumSkill.ServiceDesk, 2), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 2), new SkillLevel(EnumSkill.SQL, 3)]);
    this.addPerson("Nicole", "Kidman", [EnumTeam.DevOpsShiftB], [new SkillLevel(EnumSkill.ServiceDesk, 2), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 1), new SkillLevel(EnumSkill.JiraAdmin, 4)]);
    this.addPerson("Ann", "Jathaway", [EnumTeam.DevOpsShiftB], [new SkillLevel(EnumSkill.ServiceDesk, 2), new SkillLevel(EnumSkill.DevOpsEngineerAws, 2)]);
  }

  private CreateDevOpsTeamC() {
    this.addPerson(
      "Al",
      "Pacino",
      [EnumTeam.DevOpsShiftC],
      [new SkillLevel(EnumSkill.ServiceManager, 4), new SkillLevel(EnumSkill.KubernetesAdmin, 4), new SkillLevel(EnumSkill.DevOpsEngineerAws, 4), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 4), new SkillLevel(EnumSkill.AzurePipelines, 2)]
    );
    this.addPerson("Ray", "Liotta", [EnumTeam.DevOpsShiftC], [new SkillLevel(EnumSkill.ServiceDesk, 3), new SkillLevel(EnumSkill.DevOpsEngineerAws, 4), new SkillLevel(EnumSkill.KubernetesAdmin, 2)]);
    this.addPerson("James", "Gandolfini", [EnumTeam.DevOpsShiftC], [new SkillLevel(EnumSkill.ServiceDesk, 3), new SkillLevel(EnumSkill.DevOpsEngineerAws, 5), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 4)]);
    this.addPerson("Robert", "De Niro", [EnumTeam.DevOpsShiftC], [new SkillLevel(EnumSkill.ServiceDesk, 2), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 2), new SkillLevel(EnumSkill.SQL, 3)]);
    this.addPerson("Leonardo", "DiCaprio", [EnumTeam.DevOpsShiftC], [new SkillLevel(EnumSkill.ServiceDesk, 2), new SkillLevel(EnumSkill.DevOpsEngineerAzure, 1), new SkillLevel(EnumSkill.JiraAdmin, 4)]);
    this.addPerson("Samuel", "L Jackson", [EnumTeam.DevOpsShiftC], [new SkillLevel(EnumSkill.ServiceDesk, 2), new SkillLevel(EnumSkill.DevOpsEngineerAws, 2)]);
  }

  private CreateDevTeamCouncil() {
    this.addPerson("Claire", "Balding", [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.ProjectManagement, 4), new SkillLevel(EnumSkill.JiraAdmin, 2)]);
    this.addPerson("Gabby", "Logan", [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.BusinessAnalyst, 3), new SkillLevel(EnumSkill.JiraUser, 4)]);
    this.addPerson("Matt", "Tebbutt", [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.TechnicalLead, 3), new SkillLevel(EnumSkill.Java, 4), new SkillLevel(EnumSkill.JavaSpring, 4)]);
    this.addPerson("jake", "humphrey", [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.UI, 4), new SkillLevel(EnumSkill.UX, 2), new SkillLevel(EnumSkill.React, 4), new SkillLevel(EnumSkill.VueJS, 5)]);
    this.addPerson("Dan", "Walker", [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.Java, 2), new SkillLevel(EnumSkill.Oracle, 3)]);
    this.addPerson("Suzi ", "Perry", [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.Javascript, 2), new SkillLevel(EnumSkill.React, 2)]);
  }

  private CreateDevTeamFinance() {
    this.addPerson("Beyonce", "Knowles", [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.ProjectManagement, 4), new SkillLevel(EnumSkill.JiraAdmin, 2)]);
    this.addPerson("Taylor", "Swift", [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.BusinessAnalyst, 3), new SkillLevel(EnumSkill.JiraUser, 4)]);
    this.addPerson("Ariana", "Grande", [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.TechnicalLead, 3), new SkillLevel(EnumSkill.CSharp, 4), new SkillLevel(EnumSkill.React, 4), new SkillLevel(EnumSkill.Typescript, 4)]);
    this.addPerson("Justin ", "Timberlake", [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.UI, 4), new SkillLevel(EnumSkill.UX, 5)]);
    this.addPerson("Justin", "Bieber", [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.CSharp, 5), new SkillLevel(EnumSkill.SQL, 3)]);
    this.addPerson("Katy ", "Perry", [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.Javascript, 2), new SkillLevel(EnumSkill.React, 5)]);
  }

  private CreateDesignTeam() {
    this.addPerson("Damien", "Hurst", [EnumTeam.Design], [new SkillLevel(EnumSkill.UI, 5), new SkillLevel(EnumSkill.UX, 5)]);
    this.addPerson("Yayoi", "Kusama", [EnumTeam.Design], [new SkillLevel(EnumSkill.UI, 4), new SkillLevel(EnumSkill.UX, 2)]);
    this.addPerson("Jeff", "Koons", [EnumTeam.Design], [new SkillLevel(EnumSkill.UX, 5), new SkillLevel(EnumSkill.UI, 2)]);
  }

  private createSalesTeam() {
    this.addPerson("James", "Dyson", [EnumTeam.Sales], [new SkillLevel(EnumSkill.Sales, 5), new SkillLevel(EnumSkill.ClientManager, 3)]);
    this.addPerson("Steve", "Jobs", [EnumTeam.Sales], [new SkillLevel(EnumSkill.Sales, 4), new SkillLevel(EnumSkill.ClientManager, 2)]);
    this.addPerson("Henry", "Ford", [EnumTeam.Sales], [new SkillLevel(EnumSkill.Sales, 5), new SkillLevel(EnumSkill.ClientManager, 1)]);
    this.addPerson("Jeff", "Bezos", [EnumTeam.Sales], [new SkillLevel(EnumSkill.Sales, 2), new SkillLevel(EnumSkill.ClientManager, 3)]);
    this.addPerson("Elon", "Musk", [EnumTeam.Sales], [new SkillLevel(EnumSkill.Sales, 3), new SkillLevel(EnumSkill.ClientManager, 2)]);
  }

  //
  // add a person to team, assign them skills and
  //  also add links from the teams and skill entities back to the person
  //  to simulate a  navigable relational database
  //
  private addPerson(forename: string, surname: string, teams: Array<EnumTeam>, skills: Array<SkillLevel>) {
    this.nextId = this.nextId + 1;
    const person = new PersonApiModel(this.nextId, forename, surname);
    skills.forEach((s) => {
      const skill = this.getSkill(s.skill);
      const skillLevel = this.getSkillLevel(person, skill, s.level);
      person.skills.push(skillLevel);
      skill.people.push(skillLevel);
    });
    teams.forEach((t) => {
      const team = this.getTeam(t);
      person.teams.push(team);
      team.people.push(person);
    });
    this.people.push(person);
  }

  getTeam(id: EnumTeam): TeamApiModel {
    return this.teamDictionary[id];
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
