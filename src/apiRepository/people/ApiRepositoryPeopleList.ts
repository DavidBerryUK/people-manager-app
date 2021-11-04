import MockUtilities from "../../utilities/MockUtilities";
import FakeApiEndpoint from "../dataSources/FakeApiEndpoint";
import PersonApiModel from "../models/PersonApiModel";

export default class ApiRepositoryPeopleList {
  //
  // Get List Of People
  //
  async getPeopleAsync(): Promise<Array<PersonApiModel>> {
    // artificial delay
    //
    await MockUtilities.delayAsync(250);

    // get copy of people from fake api
    //
    const fakeApi = new FakeApiEndpoint();
    let people = fakeApi.people!;

    // sort by forename
    //
    people = people.sort((p1, p2) => {
      return p1.forename.localeCompare(p2.forename);
    });

    // return
    //
    return people;
  }
}
