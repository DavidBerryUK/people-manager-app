import SkillLevelApiModel from "./SkillLevelApiModel";

export default class SkillApiModel {
  id: number;
  name: string;
  iconName: string;
  people: Array<SkillLevelApiModel>;

  constructor(id: number, name: string, iconName: string) {
    this.id = id;
    this.name = name;
    this.iconName = iconName;
    this.people = new Array<SkillLevelApiModel>();
  }
}
