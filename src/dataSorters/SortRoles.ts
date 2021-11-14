import { EnumSortColumn } from "../constants/enums/EnumSortColumn";
import { EnumSortDirection } from "../constants/enums/EnumSortDirection";
import RoleApiModel from "../apiRepository/models/RoleApiModel";

type compareType = { (o1: RoleApiModel, o2: RoleApiModel): number };

export default class SortRoles {
  //
  // sort role lists
  //
  static sortData(data: Array<RoleApiModel>, sortColumn: EnumSortColumn, sortDirection: EnumSortDirection): Array<RoleApiModel> {
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
    // Role
    if (sortColumn === EnumSortColumn.Role) {
      if (sortDirection === EnumSortDirection.asc) {
        return (o1: RoleApiModel, o2: RoleApiModel): number => {
          return o1.name.localeCompare(o2.name)!;
        };
      } else {
        return (o1: RoleApiModel, o2: RoleApiModel): number => {
          return o2.name.localeCompare(o1.name)!;
        };
      }
    }

    // return sort by role name by default
    return (o1: RoleApiModel, o2: RoleApiModel): number => {
      return o1.name.localeCompare(o2.name)!;
    };
  }
}
