//
// Remember to update convertors and tests if you
// add a new entry
//

export enum EnumSortDirection {
  asc,
  desc
}

const ascText = "asc"
const descText = "desc"


// may be a better way of doing this, but could not 
// get string->enum to compare with another enum correctly
export default class EnumSortDirectionConvert {

  static toEnum(value: string): EnumSortDirection {
    switch (value.toLocaleLowerCase().trim()) {
      case ascText:
        return EnumSortDirection.asc;
      case descText:
        return EnumSortDirection.desc;
    }
    return EnumSortDirection.asc;
  }

  static toString(value: EnumSortDirection): string {
    switch (value) {
      case EnumSortDirection.asc:
        return ascText;
      case EnumSortDirection.desc:
        return descText;
    }
    return ascText;
  }

}