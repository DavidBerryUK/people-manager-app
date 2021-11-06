import FactoryPeople from "./FactoryPeople";
import FactorySkills from "./FactorySkills";
import FactoryTeams from "./FactoryTeams";
import PersonApiModel from "../models/PersonApiModel";
import SkillApiModel from "../models/SkillApiModel";
import TeamApiModel from "../models/TeamApiModel";
import RoleApiModel from "../models/RoleApiModel";
import FactoryRoles from "./FactoryRoles";

interface IData {
  people: Array<PersonApiModel>;
  skills: Array<SkillApiModel>;
  teams: Array<TeamApiModel>;
  roles: Array<RoleApiModel>;
}

//
// Create data required for fake API calls
//
export default class FactoryData {
  static createData(): IData {
    const skills = FactorySkills.createList();
    const roles = FactoryRoles.createList();
    const teams = FactoryTeams.createList();
    const peopleFactory = new FactoryPeople(skills, teams, roles);
    const people = peopleFactory.createList();
    const response = { people: people, roles: roles, skills: skills, teams: teams };
    return response;
  }
}
