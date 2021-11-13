export enum EnumDetailViewType {
  none,
  person,
  role,
  skill,
  team,
}

const noneText = "none";
const personText = "person";
const roleText = "role";
const skillText = "skill";
const teamText = "team";

// may be a better way of doing this, but could not
// get string->enum to compare with another enum correctly
export default class EnumDetailViewTypeConvert {
  static toEnum(value: string): EnumDetailViewType {
    if (value === undefined || value === null) {
      return EnumDetailViewType.none;
    }

    switch (value.toLocaleLowerCase().trim()) {
      case noneText:
        return EnumDetailViewType.none;
      case personText:
        return EnumDetailViewType.person;
      case roleText:
        return EnumDetailViewType.role;
      case skillText:
        return EnumDetailViewType.skill;
      case teamText:
        return EnumDetailViewType.team;
    }

    return EnumDetailViewType.none;
  }

  static toString(value: EnumDetailViewType): string {
    if (value === undefined || value === null) {
      return noneText;
    }

    switch (value) {
      case EnumDetailViewType.none:
        return noneText;
      case EnumDetailViewType.person:
        return personText;
      case EnumDetailViewType.role:
        return roleText;
      case EnumDetailViewType.skill:
        return skillText;
      case EnumDetailViewType.team:
        return teamText;
    }
    return noneText;
  }
}
