import { TeamContextProps } from "../TeamContext";

export interface ITeamContextDispatchCommand {
  execute(state: TeamContextProps): TeamContextProps;
}
