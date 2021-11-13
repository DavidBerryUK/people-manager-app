import { IProjectContextDispatchCommand } from "../interfaces/IProjectContextDispatchCommand";
import { ProjectContextProps } from "../ProjectContext";
import DataListApiModel from "../../../apiRepository/models/DataListApiModel";
import ProjectApiModel from "../../../apiRepository/models/ProjectApiModel";
import RepositoryProjectListParams from "../../../apiRepository/project/models/RepositoryProjectListParams";

//
// Set Project List

//
export default class CommandProjectListSet implements IProjectContextDispatchCommand {
  projectList: DataListApiModel<ProjectApiModel>;
  projectListParameters: RepositoryProjectListParams;

  // Create the command with all data needed to update
  //  the state
  constructor(projectList: DataListApiModel<ProjectApiModel>, projectListParameters: RepositoryProjectListParams) {
    this.projectList = projectList;
    this.projectListParameters = projectListParameters;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: ProjectContextProps): ProjectContextProps {
    const newProjectListParameters = this.projectListParameters.clone();

    return {
      ...state,
      projectList: this.projectList,
      previousProjectListParameters: newProjectListParameters,
    };
  }
}
