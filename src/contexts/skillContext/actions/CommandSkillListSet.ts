//
// Set Skill List

import SkillApiModel from "../../../apiRepository/models/SkillApiModel";
import { ISkillContextDispatchCommand } from "../interfaces/ISkillContextDispatchCommand";
import { SkillContextProps } from "../SkillContext";

//
export default class CommandSkillListSet implements ISkillContextDispatchCommand {
  skillList: Array<SkillApiModel>;
  rowsPerPage: number;
  totalPages: number;
  totalRows: number;

  // Create the command with all data needed to update
  //  the state
  constructor(skillList: Array<SkillApiModel>, rowsPerPage: number, totalPages: number, totalRows: number) {
    this.skillList = skillList;
    this.rowsPerPage = rowsPerPage;
    this.totalPages = totalPages;
    this.totalRows = totalRows;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: SkillContextProps): SkillContextProps {
    return {
      ...state,
      skillList: this.skillList,
      totalPages: this.totalPages,
      totalRows: this.totalRows,
      rowsPerPage: this.rowsPerPage,
    };
  }
}
