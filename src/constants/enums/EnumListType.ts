//
// Remember to update convertors and tests if you
// add a new entry
//
export enum EnumListType {
    people,
    roles,
    skills,
    teams,
}

const peopleText = "people"
const rolesText = "roles"
const skillsText = "skills"
const teamsText = "teams"

// may be a better way of doing this, but could not 
// get string->enum to compare with another enum correctly
export default class EnumListTypeConvert {

    static toEnum(value: string): EnumListType {

        if (value === undefined || value === null) {
            return EnumListType.people;
        }

        switch (value.toLocaleLowerCase().trim()) {
            case peopleText:
                return EnumListType.people;
            case rolesText:
                return EnumListType.roles;
            case skillsText:
                return EnumListType.skills;
            case teamsText:
                return EnumListType.teams;
        }
        return EnumListType.people;
    }

    static toString(value: EnumListType): string {

        if (value === undefined || value === null) {
            return peopleText;
        }

        switch (value) {
            case EnumListType.people:
                return peopleText;
            case EnumListType.roles:
                return rolesText;
            case EnumListType.skills:
                return skillsText;
            case EnumListType.teams:
                return teamsText;
        }
        return peopleText;
    }
}