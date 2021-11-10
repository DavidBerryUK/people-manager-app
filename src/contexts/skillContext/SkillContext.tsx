import { ISkillContextDispatchCommand } from "./interfaces/ISkillContextDispatchCommand";
import PaginationStateModel from "../../contextsCommonModels/PaginationStateModel";
import React, { Dispatch, Reducer } from "react";
import SkillApiModel from "../../apiRepository/models/SkillApiModel";
import { EnumSortColumn } from "../../constants/EnumSortColumn";
import TableStatsResultsStateModel from "../../contextsCommonModels/TableStatusResultsStateModel";

// Interface defining data structure stored in this context
//
export interface SkillContextProps {
  skillList: Array<SkillApiModel>;
  pagination: PaginationStateModel;
  tableStatsResults: TableStatsResultsStateModel;
}

// Strongly type interface for updating this context, which is done by using
// commands which support the ISkillContextDispatchCommand interface
export interface InitContextProps {
  state: SkillContextProps;
  dispatch: Dispatch<ISkillContextDispatchCommand>;
}

// Setup the initial state of this context by creating new models
//
const initialState: SkillContextProps = {
  skillList: new Array<SkillApiModel>(),
  pagination: new PaginationStateModel(EnumSortColumn.Skill),
  tableStatsResults: new TableStatsResultsStateModel(),
};

// The reducer updates the actual data held in the context.
// All updates are done by passing in strongly typed command classes that are held in the actions holder.
// A command classes type determines what will be updated, and the class also holds a copy
// of the data that will be updated
//
const reducer: Reducer<SkillContextProps, ISkillContextDispatchCommand> = (state, command) => {
  //
  // each command updates the context state
  // helping to keep the context cleaner
  //
  return command.execute(state);
};

// Create the actual context
//
const SkillContext = React.createContext({} as InitContextProps);

// Provide function to 'provide' the context to the Skill,
//  basically this defines a new HTML Tag that wraps any lower components
//  that need to access the context.
//
export function SkillContextProvider(props: any) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <SkillContext.Provider value={value}>{props.children}</SkillContext.Provider>;
}

// Export the context
//
export const SkillContextConsumer = SkillContext.Consumer;
export default SkillContext;

// Helper Function to access context
//
export const useSkillContext = () => {
  const context = React.useContext(SkillContext);
  return context;
};
