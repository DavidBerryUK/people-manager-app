import { EnumSortColumn } from "../../constants/EnumSortColumn";
import { EnumSortDirection } from "../../constants/EnumSortDirectory";
import MockUtilities from "../../utilities/MockUtilities";
import FakeApiEndpoint from "../dataSources/FakeApiEndpoint";
import DataListApiModel from "../models/DataListApiModel";
import SkillApiModel from "../models/SkillApiModel";
import SortSkills from "../sorters/SortSkills";

export default class ApiRepositorySkillList {
  //
  // Get List Of Skills
  //
  async getSkillsAsync(sortColumn: EnumSortColumn, sortDirection: EnumSortDirection, pageNo: number, rowsPerPage: number): Promise<DataListApiModel<SkillApiModel>> {
    // artificial delay
    await MockUtilities.delayAsync(20);

    // get copy of people from fake api
    const fakeApi = new FakeApiEndpoint();
    let fullList = fakeApi.skills!;

    // sort
    fullList = SortSkills.sortData(fullList, sortColumn, sortDirection);

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
