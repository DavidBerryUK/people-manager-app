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
    let newPagination = state.pagination.clone();
    newPagination.rowsPerPage = this.rowsPerPage;

    if (newPagination.isEqualTo(state.pagination)) {
      // if pagination hasn't changed, then don't update it as it will
      // cause additional renders
      newPagination = state.pagination;
    }

    const newTableResults = state.tableStatsResults.clone();
    newTableResults.totalPages = this.totalPages;
    newTableResults.totalRows = this.totalRows;

    return {
      ...state,
      skillList: this.skillList,
      pagination: newPagination,
      tableStatsResults: newTableResults,
    };
  }
}
