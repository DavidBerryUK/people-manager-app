import { EnumSkill } from "../enums/EnumSkill";
import { EnumTeam } from "../enums/EnumTeam";
import PersonApiModel from "../models/PersonApiModel";
import SkillLevelApiModel from "../models/SkillLevelApiModel";
import SkillApiModel from "../models/SkillApiModel";
import TeamApiModel from "../models/TeamApiModel";

class SkillLevel {
  skill: EnumSkill;
  level: number;

  constructor(skill: EnumSkill, level: number) {
    this.skill = skill;
    this.level = level;
  }
}

export default class FactoryPeople {
  skillDictionary: { [id: number]: SkillApiModel };
  teamDictionary: { [id: number]: TeamApiModel };
  people: Array<PersonApiModel>;
  nextId = 0;

  constructor(skills: Array<SkillApiModel>, teams: Array<TeamApiModel>) {
    this.people = new Array<PersonApiModel>();
    this.skillDictionary = skills.reduce((a, x) => ({ ...a, [x.id]: x }), {});
    this.teamDictionary = teams.reduce((a, x) => ({ ...a, [x.id]: x }), {});
  }

  createList() {
    this.people = new Array<PersonApiModel>();

    this.createAccountingAndAdminTeams();
    this.CreateCouncilDevelopmentTeam();
    this.CreateDevOpsTeamA();
    this.CreateDevOpsTeamB();
    this.CreateFinanceTeam();

    return this.people;
  }

  private createAccountingAndAdminTeams() {
    this.addPerson("Holly", "Willoughby", [EnumTeam.Administration, EnumTeam.Accountant], [new SkillLevel(EnumSkill.JiraAdmin, 4), new SkillLevel(EnumSkill.Accountant, 5)]);
    this.addPerson("Ryan", "Clark-Neal", [EnumTeam.Administration, EnumTeam.Accountant], [new SkillLevel(EnumSkill.JiraAdmin, 3), new SkillLevel(EnumSkill.Accountant, 1)]);
    this.addPerson("Dermot", "O'Leary", [EnumTeam.Administration, EnumTeam.Accountant], [new SkillLevel(EnumSkill.JiraAdmin, 2), new SkillLevel(EnumSkill.Accountant, 2)]);
    this.addPerson("Ben", "Shepherd", [EnumTeam.Administration], [new SkillLevel(EnumSkill.JiraAdmin, 2)]);
    this.addPerson("Alex", "Jones", [EnumTeam.Administration], [new SkillLevel(EnumSkill.JiraAdmin, 1)]);
  }

  private CreateDevOpsTeamB() {
    this.addPerson("Sam", "Smith", [EnumTeam.DevOpsShiftB], [new SkillLevel(EnumSkill.Oracle, 4), new SkillLevel(EnumSkill.AzurePipelines, 2)]);
  }

  private CreateDevOpsTeamA() {
    this.addPerson("Elvis", "Presley", [EnumTeam.DevOpsShiftA], [new SkillLevel(EnumSkill.TechnicalLead, 5), new SkillLevel(EnumSkill.ClientManager, 5)]);
    this.addPerson("Will", "Smith", [EnumTeam.DevOpsShiftA], [new SkillLevel(EnumSkill.Oracle, 4)]);
  }

  private CreateCouncilDevelopmentTeam() {
    this.addPerson("Claire", "Balding", [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.ProjectManagement, 4), new SkillLevel(EnumSkill.JiraAdmin, 2)]);
    this.addPerson("Gabby", "Logan", [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.BusinessAnalyst, 3), new SkillLevel(EnumSkill.JiraUser, 4)]);
    this.addPerson("Matt", "Tebbutt", [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.TechnicalLead, 3), new SkillLevel(EnumSkill.Java, 4), new SkillLevel(EnumSkill.JavaSpring, 4)]);
    this.addPerson("jake", "humphrey", [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.UI, 4), new SkillLevel(EnumSkill.UX, 2)]);
    this.addPerson("Dan", "Walker", [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.Java, 2), new SkillLevel(EnumSkill.Oracle, 3)]);
    this.addPerson("Suzi ", "Perry", [EnumTeam.DevTeamCouncil], [new SkillLevel(EnumSkill.Javascript, 2), new SkillLevel(EnumSkill.React, 2)]);
  }

  private CreateFinanceTeam() {
    this.addPerson("Beyonce", "Knowles", [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.ProjectManagement, 4), new SkillLevel(EnumSkill.JiraAdmin, 2)]);
    this.addPerson("Taylor", "Swift", [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.BusinessAnalyst, 3), new SkillLevel(EnumSkill.JiraUser, 4)]);
    this.addPerson(
      "Ariana",
      "Grande",
      [EnumTeam.DevTeamPensions],
      [new SkillLevel(EnumSkill.TechnicalLead, 3), new SkillLevel(EnumSkill.CSharp, 4), new SkillLevel(EnumSkill.React, 4), new SkillLevel(EnumSkill.Typescript, 4)]
    );
    this.addPerson("Justin ", "Timberlake", [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.UI, 4), new SkillLevel(EnumSkill.UX, 5)]);
    this.addPerson("Justin", "Bieber", [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.CSharp, 5), new SkillLevel(EnumSkill.SQL, 3)]);
    this.addPerson("Katy ", "Perry", [EnumTeam.DevTeamPensions], [new SkillLevel(EnumSkill.Javascript, 2), new SkillLevel(EnumSkill.React, 5)]);
  }

  private addPerson(forename: string, surname: string, teams: Array<EnumTeam>, skills: Array<SkillLevel>) {
    this.nextId = this.nextId + 1;
    const person = new PersonApiModel(this.nextId, forename, surname);
    skills.forEach((s) => {
      person.skills.push(this.getSkill(s.skill, s.level));
    });
    teams.forEach((t) => {
      person.teams.push(this.getTeam(t));
    });
  }

  getTeam(id: EnumTeam): TeamApiModel {
    return this.teamDictionary[id];
  }

  getSkill(id: EnumSkill, level: number): SkillLevelApiModel {
    var skill = this.skillDictionary[id];
    var model = new SkillLevelApiModel(skill, level);
    return model;
  }
}
