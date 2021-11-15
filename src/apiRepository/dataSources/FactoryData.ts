import CustomerApiModel from "../entities/CustomerApiModel";
import FactoryCustomers from "./FactoryCustomers";
import FactoryPeople from "./FactoryPeople";
import FactoryProjects from "./FactoryProject";
import FactoryRoles from "./FactoryRoles";
import FactorySkills from "./FactorySkills";
import FactoryTeams from "./FactoryTeams";
import PersonApiModel from "../entities/PersonApiModel";
import ProjectApiModel from "../entities/ProjectApiModel";
import RoleApiModel from "../entities/RoleApiModel";
import SkillApiModel from "../entities/SkillApiModel";
import TeamApiModel from "../entities/TeamApiModel";
import FactoryProjectStatus from "./FactoryProjectStatus";
import ProjectStatusApiModel from "../entities/ProjectStatusApiModel";

interface IData {
  customers: Array<CustomerApiModel>;
  people: Array<PersonApiModel>;
  projects: Array<ProjectApiModel>;
  roles: Array<RoleApiModel>;
  skills: Array<SkillApiModel>;
  teams: Array<TeamApiModel>;
  projectStatus: Array<ProjectStatusApiModel>;
}

//
// Create data required for fake API calls
//
export default class FactoryData {
  static createData(): IData {
    const customers = FactoryCustomers.createList();

    const roles = FactoryRoles.createList();
    const skills = FactorySkills.createList();
    const teams = FactoryTeams.createList();
    const projectStatus = FactoryProjectStatus.createList();

    const projectFactory = new FactoryProjects(customers, projectStatus);
    const projects = projectFactory.createList();

    const peopleFactory = new FactoryPeople(skills, teams, roles);
    const people = peopleFactory.createList();

    const response = {
      customers: customers,
      people: people,
      projects: projects,
      roles: roles,
      skills: skills,
      teams: teams,
      projectStatus: projectStatus,
    };
    return response;
  }
}
