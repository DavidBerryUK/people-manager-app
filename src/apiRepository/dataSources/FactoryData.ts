import CustomerApiModel from "../models/CustomerApiModel";
import FactoryCustomers from "./FactoryCustomers";
import FactoryPeople from "./FactoryPeople";
import FactoryProjects from "./FactoryProject";
import FactoryRoles from "./FactoryRoles";
import FactorySkills from "./FactorySkills";
import FactoryTeams from "./FactoryTeams";
import PersonApiModel from "../models/PersonApiModel";
import ProjectApiModel from "../models/ProjectApiModel";
import RoleApiModel from "../models/RoleApiModel";
import SkillApiModel from "../models/SkillApiModel";
import TeamApiModel from "../models/TeamApiModel";
import FactoryProjectStatus from "./FactoryProjectStatus";
import ProjectStatusApiModel from "../models/ProjectStatusApiModel";

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
