import PersonApiModel from "./PersonApiModel";
import SkillApiModel from "./SkillApiModel";

export default class SkillLevelApiModel {
  person: PersonApiModel;
  skill: SkillApiModel;
  level: number;

  constructor(person: PersonApiModel, skill: SkillApiModel, level: number) {
    this.person = person;
    this.skill = skill;
    this.level = level;
  }
}
