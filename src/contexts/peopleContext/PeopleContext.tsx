import { EnumSortColumn } from "../../constants/enums/EnumSortColumn";
import { IPeopleContextDispatchCommand } from "./interfaces/IPeopleContextDispatchCommand";
import PaginationApiModel from "../../apiRepository/models/PaginationApiModel";
import PersonApiModel from "../../apiRepository/models/PersonApiModel";
import React, { Dispatch, Reducer } from "react";
import TableStatsResultsStateModel from "../../contextsCommonModels/TableStatusResultsStateModel";

// Interface defining data structure stored in this context
//
export interface PeopleContextProps {
  peopleList: Array<PersonApiModel>;
  pagination: PaginationApiModel;
  tableStatsResults: TableStatsResultsStateModel;
}

// Strongly type interface for updating this context, which is done by using
// commands which support the IPeopleContextDispatchCommand interface
export interface InitContextProps {
  state: PeopleContextProps;
  dispatch: Dispatch<IPeopleContextDispatchCommand>;
}

// Setup the initial state of this context by creating new models
//
const initialState: PeopleContextProps = {
  peopleList: new Array<PersonApiModel>(),
  pagination: new PaginationApiModel(EnumSortColumn.Forename),
  tableStatsResults: new TableStatsResultsStateModel(),
};

// The reducer updates the actual data held in the context.
// All updates are done by passing in strongly typed command classes that are held in the actions holder.
// A command classes type determines what will be updated, and the class also holds a copy
// of the data that will be updated
//
const reducer: Reducer<PeopleContextProps, IPeopleContextDispatchCommand> = (state, command) => {
  //
  // each command updates the context state
  // helping to keep the context cleaner
  //
  return command.execute(state);
};

// Create the actual context
//
const PeopleContext = React.createContext({} as InitContextProps);

// Provide function to 'provide' the context to the People,
//  basically this defines a new HTML Tag that wraps any lower components
//  that need to access the context.
//
export function PeopleContextProvider(props: any) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <PeopleContext.Provider value={value}>{props.children}</PeopleContext.Provider>;
}

// Export the context
//
export const PeopleContextConsumer = PeopleContext.Consumer;
export default PeopleContext;

// Helper Function to access context
//
export const usePeopleContext = () => {
  const context = React.useContext(PeopleContext);
  return context;
};
