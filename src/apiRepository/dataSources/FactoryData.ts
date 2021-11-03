import FactoryPeople from "./FactoryPeople";
import FactorySkills from "./FactorySkills";
import FactoryTeams from "./FactoryTeams";
import PersonApiModel from "../models/PersonApiModel";
import SkillApiModel from "../models/SkillApiModel";
import TeamApiModel from "../models/TeamApiModel";

interface IData {
  people: Array<PersonApiModel>;
  skills: Array<SkillApiModel>;
  teams: Array<TeamApiModel>;
}

export default class FactoryData {
  static createData(): IData {
    const skills = FactorySkills.createList();
    const teams = FactoryTeams.createList();

    const peopleFactory = new FactoryPeople(skills, teams);
    const people = peopleFactory.createList();

    const response = { people: people, skills: skills, teams: teams };
    return response;
  }
}
