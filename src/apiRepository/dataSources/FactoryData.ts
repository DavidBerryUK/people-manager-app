import CustomerApiModel from "../entities/CustomerApiModel";
import FactoryCustomers from "./subFactories/FactoryCustomers";
import FactoryPeople from "./subFactories/FactoryPeople";
import FactoryProjects from "./subFactories/FactoryProject";
import FactoryProjectStatus from "./subFactories/FactoryProjectStatus";
import FactoryRoles from "./subFactories/FactoryRoles";
import FactorySkills from "./subFactories/FactorySkills";
import FactoryTeams from "./subFactories/FactoryTeams";
import PersonApiModel from "../entities/PersonApiModel";
import ProjectApiModel from "../entities/ProjectApiModel";
import ProjectStatusApiModel from "../entities/ProjectStatusApiModel";
import RoleApiModel from "../entities/RoleApiModel";
import SkillApiModel from "../entities/SkillApiModel";
import TeamApiModel from "../entities/TeamApiModel";
import ProjectBuilder from "./builders/ProjectBuilder";

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

    const projectBuilder = new ProjectBuilder();

    projects.forEach((project) => {
      projectBuilder.createTestData(project);
    });

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
