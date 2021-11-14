import { EnumSortColumn } from "../../constants/enums/EnumSortColumn";
import { EnumSortDirection } from "../../constants/enums/EnumSortDirection";
import CustomerApiModel from "../models/CustomerApiModel";

type compareType = { (o1: CustomerApiModel, o2: CustomerApiModel): number };

export default class SortCustomers {
  //
  // sort Customers lists
  //
  static sortData(data: Array<CustomerApiModel>, sortColumn: EnumSortColumn, sortDirection: EnumSortDirection): Array<CustomerApiModel> {
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
    // Customer
    if (sortColumn === EnumSortColumn.Customer) {
      if (sortDirection === EnumSortDirection.asc) {
        return (o1: CustomerApiModel, o2: CustomerApiModel): number => {
          return o1.name.localeCompare(o2.name)!;
        };
      } else {
        return (o1: CustomerApiModel, o2: CustomerApiModel): number => {
          return o2.name.localeCompare(o1.name)!;
        };
      }
    }

    // return sort by project name by default
    return (o1: CustomerApiModel, o2: CustomerApiModel): number => {
      return o1.name.localeCompare(o2.name)!;
    };
  }
}
