import CustomerApiModel from "../entities/CustomerApiModel";
import PersonApiModel from "../entities/PersonApiModel";
import ProjectApiModel from "../entities/ProjectApiModel";
import RoleApiModel from "../entities/RoleApiModel";
import SkillApiModel from "../entities/SkillApiModel";
import TeamApiModel from "../entities/TeamApiModel";
import DataFactory from "./FactoryData";

//
// fake online database
//
//
// this is a singleton class, this code ensures only 1
// instance of the class is ever generated
//
export default class FakeApiEndpoint {
  private static instance = new FakeApiEndpoint();

  // data simulating an online database
  //
  people: Array<PersonApiModel> | undefined;
  skills: Array<SkillApiModel> | undefined;
  teams: Array<TeamApiModel> | undefined;
  roles: Array<RoleApiModel> | undefined;
  projects: Array<ProjectApiModel> | undefined;
  customers: Array<CustomerApiModel> | undefined;

  constructor() {
    if (FakeApiEndpoint.instance) {
      return FakeApiEndpoint.instance;
    }
    FakeApiEndpoint.instance = this;
    FakeApiEndpoint.instance.initialiseData();
    return FakeApiEndpoint.instance;
  }

  //
  // Create initial data the
  //
  private initialiseData() {
    const data = DataFactory.createData();
    this.people = data.people;
    this.skills = data.skills;
    this.teams = data.teams;
    this.roles = data.roles;
    this.customers = data.customers;
    this.projects = data.projects;
  }
}
