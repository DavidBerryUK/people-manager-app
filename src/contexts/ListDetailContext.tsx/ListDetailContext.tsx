import { IListDetailDispatchCommand } from "./interfaces/IListDetailContextDispatchCommand";

import React, { Dispatch, Reducer } from "react";
import DetailViewStateModel from "./models/DetailViewStateModel";

// Interface defining data structure stored in this context
//
export interface ListDetailContextProps {
  detailView: DetailViewStateModel;
}

// Strongly type interface for updating this context, which is done by using
// commands which support the IListDetailContextDispatchCommand interface
export interface InitContextProps {
  state: ListDetailContextProps;
  dispatch: Dispatch<IListDetailDispatchCommand>;
}

// Setup the initial state of this context by creating new models
//
const initialState: ListDetailContextProps = {
  detailView: new DetailViewStateModel(),
};

// The reducer updates the actual data held in the context.
// All updates are done by passing in strongly typed command classes that are held in the actions holder.
// A command classes type determines what will be updated, and the class also holds a copy
// of the data that will be updated
//
const reducer: Reducer<ListDetailContextProps, IListDetailDispatchCommand> = (state, command) => {
  //
  // each command updates the context state
  // helping to keep the context cleaner
  //
  return command.execute(state);
};

// Create the actual context
//
const ListDetailContext = React.createContext({} as InitContextProps);

// Provide function to 'provide' the context to the list detail,
//  basically this defines a new HTML Tag that wraps any lower components
//  that need to access the context.
//
export function ListDetailContextProvider(props: any) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <ListDetailContext.Provider value={value}>{props.children}</ListDetailContext.Provider>;
}

// Export the context
//
export const ListDetailContextConsumer = ListDetailContext.Consumer;
export default ListDetailContext;

// Helper Function to access context
//
export const UseListDetailContext = () => {
  const context = React.useContext(ListDetailContext);
  return context;
};
