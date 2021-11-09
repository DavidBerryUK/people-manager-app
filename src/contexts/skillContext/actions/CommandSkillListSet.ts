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
    // only update pagination if required or react will endup in an endless loop
    //
    const newPagination = state.pagination.clone();
    newPagination.rowsPerPage = this.rowsPerPage;
    newPagination.totalPages = this.totalPages;
    newPagination.totalRows = this.totalRows;

    if (newPagination.isEqualTo(state.pagination)) {
      return {
        ...state,
        skillList: this.skillList
      };
    }

    return {
      ...state,
      skillList: this.skillList,
      pagination: newPagination
    };
  }
}
