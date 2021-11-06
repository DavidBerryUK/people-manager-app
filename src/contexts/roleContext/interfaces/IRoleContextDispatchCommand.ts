import { RoleContextProps } from "../RoleContext";

export interface IRoleContextDispatchCommand {
  execute(state: RoleContextProps): RoleContextProps;
}
