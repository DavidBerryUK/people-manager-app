import PersonApiModel from "../models/PersonApiModel";
import ProjectApiModel from "../models/ProjectApiModel";
import RoleApiModel from "../models/RoleApiModel";
import SkillApiModel from "../models/SkillApiModel";
import TeamApiModel from "../models/TeamApiModel";
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
    this.projects = new Array<ProjectApiModel>();
    this.projects.push(new ProjectApiModel(1, "IOS Product Inventory"));
    this.projects.push(new ProjectApiModel(2, "Windows CE Shop Floor Audit"));
    this.projects.push(new ProjectApiModel(3, "Vehicle Service Bookings"));
  }
}
