export enum EnumRagStatus {
  none = 0,
  notApplicable = 1,
  Green = 2,
  Amber = 3,
  Red = 4
}

const noneText = "none";
const notApplicableText = "N/A";
const greenText = "Green";
const amberText = "Amber";
const redText = "Red";


// may be a better way of doing this, but could not 
// get string->enum to compare with another enum correctly
export default class EnumRagStatusConvert {

  static toEnum(value: string): EnumRagStatus {

    if (value === undefined || value === null) {
      return EnumRagStatus.none;
    }

    switch (value.toLocaleLowerCase().trim()) {
      case noneText:
        return EnumRagStatus.none;
      case notApplicableText:
        return EnumRagStatus.notApplicable;
      case greenText:
        return EnumRagStatus.Green;
      case amberText:
        return EnumRagStatus.Amber;
      case redText:
        return EnumRagStatus.Red;
    }
    return EnumRagStatus.none;
  }

  static toString(value: EnumRagStatus): string {

    if (value === undefined || value === null) {
      return noneText;
    }

    switch (value) {
      case EnumRagStatus.none:
        return noneText;
      case EnumRagStatus.notApplicable:
        return notApplicableText;
      case EnumRagStatus.Green:
        return greenText;
      case EnumRagStatus.Amber:
        return amberText;
      case EnumRagStatus.Red:
        return redText;
    }
    return noneText;
  }
}