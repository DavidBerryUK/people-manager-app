import { EnumSortColumn } from "../../constants/enums/EnumSortColumn";
import { ITeamContextDispatchCommand } from "./interfaces/ITeamContextDispatchCommand";
import PaginationStateModel from "../../contextsCommonModels/PaginationStateModel";
import React, { Dispatch, Reducer } from "react";
import TableStatsResultsStateModel from "../../contextsCommonModels/TableStatusResultsStateModel";
import TeamApiModel from "../../apiRepository/models/TeamApiModel";

// Interface defining data structure stored in this context
//
export interface TeamContextProps {
  teamList: Array<TeamApiModel>;
  pagination: PaginationStateModel;
  tableStatsResults: TableStatsResultsStateModel;
}

// Strongly type interface for updating this context, which is done by using
// commands which support the ITeamContextDispatchCommand interface
export interface InitContextProps {
  state: TeamContextProps;
  dispatch: Dispatch<ITeamContextDispatchCommand>;
}

// Setup the initial state of this context by creating new models
//
const initialState: TeamContextProps = {
  teamList: new Array<TeamApiModel>(),
  pagination: new PaginationStateModel(EnumSortColumn.Team),
  tableStatsResults: new TableStatsResultsStateModel(),
};

// The reducer updates the actual data held in the context.
// All updates are done by passing in strongly typed command classes that are held in the actions holder.
// A command classes type determines what will be updated, and the class also holds a copy
// of the data that will be updated
//
const reducer: Reducer<TeamContextProps, ITeamContextDispatchCommand> = (state, command) => {
  //
  // each command updates the context state
  // helping to keep the context cleaner
  //
  return command.execute(state);
};

// Create the actual context
//
const TeamContext = React.createContext({} as InitContextProps);

// Provide function to 'provide' the context to the Team,
//  basically this defines a new HTML Tag that wraps any lower components
//  that need to access the context.
//
export function TeamContextProvider(props: any) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <TeamContext.Provider value={value}>{props.children}</TeamContext.Provider>;
}

// Export the context
//
export const TeamContextConsumer = TeamContext.Consumer;
export default TeamContext;

// Helper Function to access context
//
export const useTeamContext = () => {
  const context = React.useContext(TeamContext);
  return context;
};
