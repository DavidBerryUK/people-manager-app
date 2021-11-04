import { EnumSortColumn } from "../../constants/EnumSortColumn";
import { EnumSortDirection } from "../../constants/EnumSortDirectory";
import SkillApiModel from "../models/SkillApiModel";

type compareType = { (o1: SkillApiModel, o2: SkillApiModel): number };

export default class SortSkills {
  //
  // sort skill lists
  //
  static sortData(data: Array<SkillApiModel>, sortColumn: EnumSortColumn, sortDirection: EnumSortDirection): Array<SkillApiModel> {
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
    if (sortColumn === EnumSortColumn.Skill) {
      if (sortDirection === EnumSortDirection.asc) {
        return (o1: SkillApiModel, o2: SkillApiModel): number => {
          return o1.name.localeCompare(o2.name)!;
        };
      } else {
        return (o1: SkillApiModel, o2: SkillApiModel): number => {
          return o2.name.localeCompare(o1.name)!;
        };
      }
    }

    // return sort by skill name by default
    return (o1: SkillApiModel, o2: SkillApiModel): number => {
      return o1.name.localeCompare(o2.name)!;
    };
  }
}
