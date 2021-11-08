import FakeApiEndpoint from "../dataSources/FakeApiEndpoint";
import MockUtilities from "../../utilities/MockUtilities";
import PersonApiModel from "../models/PersonApiModel";

export default class ApiRepositoryPeople {
  //
  // Get a person
  //
  async getPersonAsync(personId: number): Promise<PersonApiModel> {
    // artificial delay
    await MockUtilities.demoNetworkDelayAsync();

    // get copy of people from fake api
    const fakeApi = new FakeApiEndpoint();
    let people = fakeApi.people?.filter((person) => {
      return person.id === personId;
    });
    if (people === undefined || people.length === 0) {
      return new PersonApiModel();
    }
    return people[0];
  }
}
