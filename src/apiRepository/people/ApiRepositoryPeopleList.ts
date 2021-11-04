import { EnumSortColumn } from "../../constants/EnumSortColumn";
import { EnumSortDirection } from "../../constants/EnumSortDirectory";
import FakeApiEndpoint from "../dataSources/FakeApiEndpoint";
import MockUtilities from "../../utilities/MockUtilities";
import PersonApiModel from "../models/PersonApiModel";
import SortPeople from "../sorters/SortPeople";
import DataListApiModel from "../models/DataListApiModel";

export default class ApiRepositoryPeopleList {
  //
  // Get List Of People
  //
  async getPeopleAsync(sortColumn: EnumSortColumn, sortDirection: EnumSortDirection): Promise<DataListApiModel<PersonApiModel>> {
    // artificial delay
    //
    await MockUtilities.delayAsync(20);

    // get copy of people from fake api
    //
    const fakeApi = new FakeApiEndpoint();
    let people = fakeApi.people!;

    // sort by forename
    //
    people = SortPeople.sortData(people, sortColumn, sortDirection);

    var dataList = new DataListApiModel(people, 5, people.length);

    // return
    //
    return dataList;
  }
}
