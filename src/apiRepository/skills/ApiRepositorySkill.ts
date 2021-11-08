import FakeApiEndpoint from "../dataSources/FakeApiEndpoint";
import MockUtilities from "../../utilities/MockUtilities";
import SkillApiModel from "../models/SkillApiModel";

export default class ApiRepositorySkill {
  //
  // Get a Skill
  //
  async getSkillAsync(skillId: number): Promise<SkillApiModel> {
    // artificial delay
    await MockUtilities.demoNetworkDelayAsync();

    // get copy of people from fake api
    const fakeApi = new FakeApiEndpoint();
    let skills = fakeApi.skills?.filter((skill) => {
      return skill.id === skillId;
    });
    if (skills === undefined || skills.length === 0) {
      return new SkillApiModel();
    }
    return skills[0];
  }
}
