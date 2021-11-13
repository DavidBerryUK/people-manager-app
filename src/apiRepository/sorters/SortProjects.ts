import { EnumSortColumn } from "../../constants/enums/EnumSortColumn";
import { EnumSortDirection } from "../../constants/enums/EnumSortDirection";
import ProjectApiModel from "../models/ProjectApiModel";

type compareType = { (o1: ProjectApiModel, o2: ProjectApiModel): number };

export default class SortProjects {
  //
  // sort skill lists
  //
  static sortData(data: Array<ProjectApiModel>, sortColumn: EnumSortColumn, sortDirection: EnumSortDirection): Array<ProjectApiModel> {
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
    // Skill
    if (sortColumn === EnumSortColumn.Project) {
      if (sortDirection === EnumSortDirection.asc) {
        return (o1: ProjectApiModel, o2: ProjectApiModel): number => {
          return o1.name.localeCompare(o2.name)!;
        };
      } else {
        return (o1: ProjectApiModel, o2: ProjectApiModel): number => {
          return o2.name.localeCompare(o1.name)!;
        };
      }
    }

    // return sort by project name by default
    return (o1: ProjectApiModel, o2: ProjectApiModel): number => {
      return o1.name.localeCompare(o2.name)!;
    };
  }
}
