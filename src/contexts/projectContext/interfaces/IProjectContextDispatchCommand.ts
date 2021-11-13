import { ProjectContextProps } from "../ProjectContext";

export interface IProjectContextDispatchCommand {
  execute(state: ProjectContextProps): ProjectContextProps;
}
