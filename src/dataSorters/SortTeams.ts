import { EnumSortColumn } from "../constants/enums/EnumSortColumn";
import { EnumSortDirection } from "../constants/enums/EnumSortDirection";
import TeamApiModel from "../apiRepository/models/TeamApiModel";

type compareType = { (o1: TeamApiModel, o2: TeamApiModel): number };

export default class SortTeams {
  //
  // sort team lists
  //
  static sortData(data: Array<TeamApiModel>, sortColumn: EnumSortColumn, sortDirection: EnumSortDirection): Array<TeamApiModel> {
    var comparator: compareType;

    comparator = this.comparatorFactory(sortColumn, sortDirection);

    data = data.sort((p1, p2) => {
      return comparator(p1, p2);
    });

    return data;
  }

  //
  // Provide sort function depending on the sort column and direction
  //
  private static comparatorFactory(sortColumn: EnumSortColumn, sortDirection: EnumSortDirection): compareType {
    // Team
    if (sortColumn === EnumSortColumn.Team) {
      if (sortDirection === EnumSortDirection.asc) {
        return (o1: TeamApiModel, o2: TeamApiModel): number => {
          return o1.name.localeCompare(o2.name)!;
        };
      } else {
        return (o1: TeamApiModel, o2: TeamApiModel): number => {
          return o2.name.localeCompare(o1.name)!;
        };
      }
    }

    // return sort by team by default
    return (o1: TeamApiModel, o2: TeamApiModel): number => {
      return o1.name.localeCompare(o2.name)!;
    };
  }
}
