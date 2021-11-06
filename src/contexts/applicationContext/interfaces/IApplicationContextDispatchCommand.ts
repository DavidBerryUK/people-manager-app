import { ApplicationContextProps } from "../ApplicationContext";

export interface IApplicationContextDispatchCommand {
  execute(state: ApplicationContextProps): ApplicationContextProps;
}
