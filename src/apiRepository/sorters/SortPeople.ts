import { EnumSortColumn } from "../../constants/enums/EnumSortColumn";
import { EnumSortDirection } from "../../constants/enums/EnumSortDirectory";
import PersonApiModel from "../models/PersonApiModel";

type compareType = { (o1: PersonApiModel, o2: PersonApiModel): number };

export default class SortPeople {
  //
  // sort people lists
  //
  static sortData(data: Array<PersonApiModel>, sortColumn: EnumSortColumn, sortDirection: EnumSortDirection): Array<PersonApiModel> {
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
    // Forename
    if (sortColumn === EnumSortColumn.Forename) {
      if (sortDirection === EnumSortDirection.asc) {
        return (o1: PersonApiModel, o2: PersonApiModel): number => {
          return o1.forename.localeCompare(o2.forename)!;
        };
      } else {
        return (o1: PersonApiModel, o2: PersonApiModel): number => {
          return o2.forename.localeCompare(o1.forename)!;
        };
      }
    }

    // Surname
    if (sortColumn === EnumSortColumn.Surname) {
      if (sortDirection === EnumSortDirection.asc) {
        return (o1: PersonApiModel, o2: PersonApiModel): number => {
          return o1.surname.localeCompare(o2.surname)!;
        };
      } else {
        return (o1: PersonApiModel, o2: PersonApiModel): number => {
          return o2.surname.localeCompare(o1.surname)!;
        };
      }
    }

    // email
    if (sortColumn === EnumSortColumn.Email) {
      if (sortDirection === EnumSortDirection.asc) {
        return (o1: PersonApiModel, o2: PersonApiModel): number => {
          return o1.email.localeCompare(o2.email)!;
        };
      } else {
        return (o1: PersonApiModel, o2: PersonApiModel): number => {
          return o2.email.localeCompare(o1.email)!;
        };
      }
    }

    // return sort by forename by default
    return (o1: PersonApiModel, o2: PersonApiModel): number => {
      return o1.forename.localeCompare(o2.forename)!;
    };
  }
}
