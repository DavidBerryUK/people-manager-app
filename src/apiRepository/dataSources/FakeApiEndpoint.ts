import PersonApiModel from "../models/PersonApiModel";
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
  private people: Array<PersonApiModel> | undefined;
  private skills: Array<SkillApiModel> | undefined;
  private teams: Array<TeamApiModel> | undefined;

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
  }
}
