import { IApplicationContextDispatchCommand } from "./interfaces/IApplicationContextDispatchCommand";
import CurrentUserStateModel from "./models/CurrentUserStateModel";
import React, { Dispatch, Reducer } from "react";
import { EnumTheme } from "../../constants/EnumeTheme";

// Interface defining data structure stored in this context
//
export interface ApplicationContextProps {
  currentUser: CurrentUserStateModel;
  theme: EnumTheme;
}

// Strongly type interface for updating this context, which is done by using
// commands which support the IApplicationContextDispatchCommand interface
export interface InitContextProps {
  state: ApplicationContextProps;
  dispatch: Dispatch<IApplicationContextDispatchCommand>;
}

// Setup the initial state of this context by creating new models
//
const initialState: ApplicationContextProps = {
  currentUser: new CurrentUserStateModel(),
  theme: EnumTheme.red,
};

// The reducer updates the actual data held in the context.
// All updates are done by passing in strongly typed command classes that are held in the actions holder.
// A command classes type determines what will be updated, and the class also holds a copy
// of the data that will be updated
//
const reducer: Reducer<ApplicationContextProps, IApplicationContextDispatchCommand> = (state, command) => {
  //
  // each command updates the context state
  // helping to keep the context cleaner
  //
  return command.execute(state);
};

// Create the actual context
//
const ApplicationContext = React.createContext({} as InitContextProps);

// Provide function to 'provide' the context to the application,
//  basically this defines a new HTML Tag that wraps any lower components
//  that need to access the context.
//
export function ApplicationContextProvider(props: any) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <ApplicationContext.Provider value={value}>{props.children}</ApplicationContext.Provider>;
}

// Export the context
//
export const ApplicationContextConsumer = ApplicationContext.Consumer;
export default ApplicationContext;

// Helper Function to access context
//
export const UseApplicationContext = () => {
  const context = React.useContext(ApplicationContext);
  return context;
};
