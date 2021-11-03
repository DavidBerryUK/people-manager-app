import SkillLevelApiModel from "./SkillLevelApiModel";

export default class SkillApiModel {
  id: number;
  name: string;
  people: Array<SkillLevelApiModel>;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.people = new Array<SkillLevelApiModel>();
  }
}
