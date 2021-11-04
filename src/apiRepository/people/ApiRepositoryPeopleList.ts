import { EnumSortColumn } from "../../constants/EnumSortColumn";
import { EnumSortDirection } from "../../constants/EnumSortDirectory";
import FakeApiEndpoint from "../dataSources/FakeApiEndpoint";
import MockUtilities from "../../utilities/MockUtilities";
import PersonApiModel from "../models/PersonApiModel";

export default class ApiRepositoryPeopleList {
  //
  // Get List Of People
  //
  async getPeopleAsync(sortColumn: EnumSortColumn, sortDirection: EnumSortDirection): Promise<Array<PersonApiModel>> {
    console.log("ApiRepositoryPeopleList:getPeopleAsync");

    // artificial delay
    //
    await MockUtilities.delayAsync(250);

    // get copy of people from fake api
    //
    const fakeApi = new FakeApiEndpoint();
    let people = fakeApi.people!;

    // sort by forename
    //
    people = this.sortData(people, sortColumn, sortDirection);

    // return
    //
    return people;
  }

  private sortData(data: Array<PersonApiModel>, sortColumn: EnumSortColumn, sortDirection: EnumSortDirection): Array<PersonApiModel> {
    data = data.sort((p1, p2) => {
      return p1.forename.localeCompare(p2.forename);
    });

    return data;
  }
}
