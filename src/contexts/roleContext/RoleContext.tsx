import { EnumSortColumn } from "../../constants/enums/EnumSortColumn";
import { IRoleContextDispatchCommand } from "./interfaces/IRoleContextDispatchCommand";
import DataListApiModel from "../../apiRepository/entities/DataListApiModel";
import PaginationModel from "../../apiRepository/models/PaginationModel";
import React, { Dispatch, Reducer } from "react";
import RepositoryRoleListParams from "../../apiRepository/role/models/RepositoryRoleListParams";
import RoleApiModel from "../../apiRepository/entities/RoleApiModel";

// Interface defining data structure stored in this context
//
export interface RoleContextProps {
  roleList: DataListApiModel<RoleApiModel>;
  previousRoleListParameters: RepositoryRoleListParams;
  pagination: PaginationModel;
}

// Strongly type interface for updating this context, which is done by using
// commands which support the IRoleContextDispatchCommand interface
export interface InitContextProps {
  state: RoleContextProps;
  dispatch: Dispatch<IRoleContextDispatchCommand>;
}

// Setup the initial state of this context by creating new models
//
const initialState: RoleContextProps = {
  roleList: DataListApiModel.zero<RoleApiModel>(),
  previousRoleListParameters: RepositoryRoleListParams.zero,
  pagination: new PaginationModel(EnumSortColumn.Role),
};

// The reducer updates the actual data held in the context.
// All updates are done by passing in strongly typed command classes that are held in the actions holder.
// A command classes type determines what will be updated, and the class also holds a copy
// of the data that will be updated
//
const reducer: Reducer<RoleContextProps, IRoleContextDispatchCommand> = (state, command) => {
  //
  // each command updates the context state
  // helping to keep the context cleaner
  //
  return command.execute(state);
};

// Create the actual context
//
const RoleContext = React.createContext({} as InitContextProps);

// Provide function to 'provide' the context to the Role,
//  basically this defines a new HTML Tag that wraps any lower components
//  that need to access the context.
//
export function RoleContextProvider(props: any) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <RoleContext.Provider value={value}>{props.children}</RoleContext.Provider>;
}

// Export the context
//
export const RoleContextConsumer = RoleContext.Consumer;
export default RoleContext;

// Helper Function to access context
//
export const useRoleContext = () => {
  const context = React.useContext(RoleContext);
  return context;
};
