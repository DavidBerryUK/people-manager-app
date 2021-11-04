import { EnumSortColumn } from "../../constants/EnumSortColumn";
import { EnumSortDirection } from "../../constants/EnumSortDirectory";
import DataListApiModel from "../models/DataListApiModel";
import FakeApiEndpoint from "../dataSources/FakeApiEndpoint";
import MockUtilities from "../../utilities/MockUtilities";
import PersonApiModel from "../models/PersonApiModel";
import SortPeople from "../sorters/SortPeople";

export default class ApiRepositoryPeopleList {
  //
  // Get List Of People
  //
  async getPeopleAsync(sortColumn: EnumSortColumn, sortDirection: EnumSortDirection, pageNo: number, rowsPerPage: number): Promise<DataListApiModel<PersonApiModel>> {
    // artificial delay
    await MockUtilities.delayAsync(20);

    // get copy of people from fake api
    const fakeApi = new FakeApiEndpoint();
    let fullList = fakeApi.people!;

    // sort
    fullList = SortPeople.sortData(fullList, sortColumn, sortDirection);

    var skip = (pageNo - 1) * rowsPerPage;
    if (skip < 0) {
      skip = 0;
    }

    const rowsOnPage = fullList.slice(skip, skip + rowsPerPage);

    // create response
    var dataList = new DataListApiModel(rowsOnPage, rowsPerPage, fullList.length);

    return dataList;
  }
}
