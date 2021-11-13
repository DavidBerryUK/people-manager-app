//
// Remember to update convertors and tests if you
// add a new entry
//
export enum EnumSortColumn {
  None,
  Email,
  Forename,
  Role,
  Skill,
  Project,
  Surname,
  Team,
}

const noneText = "none";
const emailText = "email";
const forenameText = "forename";
const roleText = "role";
const skillText = "skill";
const surnameText = "surname";
const teamText = "team";
const projectText = "project";

// may be a better way of doing this, but could not
// get string->enum to compare with another enum correctly
export default class EnumSortColumnConvert {
  static toEnum(value: string): EnumSortColumn {
    if (value === undefined || value === null) {
      return EnumSortColumn.None;
    }

    switch (value.toLocaleLowerCase().trim()) {
      case noneText:
        return EnumSortColumn.None;
      case emailText:
        return EnumSortColumn.Email;
      case forenameText:
        return EnumSortColumn.Forename;
      case roleText:
        return EnumSortColumn.Role;
      case skillText:
        return EnumSortColumn.Skill;
      case surnameText:
        return EnumSortColumn.Surname;
      case teamText:
        return EnumSortColumn.Team;
      case projectText:
        return EnumSortColumn.Team;
    }

    return EnumSortColumn.None;
  }

  static toString(value: EnumSortColumn): string {
    if (value === undefined || value === null) {
      return noneText;
    }

    switch (value) {
      case EnumSortColumn.None:
        return noneText;
      case EnumSortColumn.Email:
        return emailText;
      case EnumSortColumn.Forename:
        return forenameText;
      case EnumSortColumn.Role:
        return roleText;
      case EnumSortColumn.Skill:
        return skillText;
      case EnumSortColumn.Surname:
        return surnameText;
      case EnumSortColumn.Team:
        return teamText;
      case EnumSortColumn.Project:
        return projectText;
    }
    return noneText;
  }
}
