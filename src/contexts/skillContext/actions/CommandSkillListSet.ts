import SkillApiModel from "../../../apiRepository/models/SkillApiModel";
import RepositorySkillListParams from "../../../apiRepository/skills/models/RepositorySkillListParams";
import { ISkillContextDispatchCommand } from "../interfaces/ISkillContextDispatchCommand";
import { SkillContextProps } from "../SkillContext";
//
// Set Skill List

//
export default class CommandSkillListSet implements ISkillContextDispatchCommand {
  skillList: Array<SkillApiModel>;
  skillListParameters: RepositorySkillListParams;
  totalPages: number;
  totalRows: number;

  // Create the command with all data needed to update
  //  the state
  constructor(skillList: Array<SkillApiModel>, skillListParameters: RepositorySkillListParams, totalPages: number, totalRows: number) {
    this.skillList = skillList;
    this.skillListParameters = skillListParameters;
    this.totalPages = totalPages;
    this.totalRows = totalRows;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: SkillContextProps): SkillContextProps {
    const newTableResults = state.tableStatsResults.clone();
    newTableResults.totalPages = this.totalPages;
    newTableResults.totalRows = this.totalRows;

    const newSkillListParameters = this.skillListParameters.clone();

    return {
      ...state,
      skillList: this.skillList,
      previousSkillListParameters: newSkillListParameters,
      tableStatsResults: newTableResults,
    };
  }
}
