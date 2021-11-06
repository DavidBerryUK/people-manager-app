import { ListDetailContextProps } from "../ListDetailContext";

export interface IListDetailDispatchCommand {
  execute(state: ListDetailContextProps): ListDetailContextProps;
}
