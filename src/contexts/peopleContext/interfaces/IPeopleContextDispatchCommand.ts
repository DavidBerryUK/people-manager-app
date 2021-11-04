import { PeopleContextProps } from "../PeopleContext";

export interface IPeopleContextDispatchCommand {
  execute(state: PeopleContextProps): PeopleContextProps;
}
