import { EnumSortColumn } from "../../constants/enums/EnumSortColumn";
import { ICustomerContextDispatchCommand } from "./interfaces/ICustomerContextDispatchCommand";
import CustomerApiModel from "../../apiRepository/models/CustomerApiModel";
import DataListApiModel from "../../apiRepository/models/DataListApiModel";
import PaginationApiModel from "../../apiRepository/models/PaginationApiModel";
import React, { Dispatch, Reducer } from "react";
import RepositoryCustomerListParams from "../../apiRepository/customer/models/RepositoryCustomerListParams";

// Interface defining data structure stored in this context
//
export interface CustomerContextProps {
  customerList: DataListApiModel<CustomerApiModel>;
  previousCustomerListParameters: RepositoryCustomerListParams;
  pagination: PaginationApiModel;
}

// Strongly type interface for updating this context, which is done by using
// commands which support the ICustomerContextDispatchCommand interface
export interface InitContextProps {
  state: CustomerContextProps;
  dispatch: Dispatch<ICustomerContextDispatchCommand>;
}

// Setup the initial state of this context by creating new models
//
const initialState: CustomerContextProps = {
  customerList: DataListApiModel.zero<CustomerApiModel>(),
  previousCustomerListParameters: RepositoryCustomerListParams.zero,
  pagination: new PaginationApiModel(EnumSortColumn.Customer),
};

// The reducer updates the actual data held in the context.
// All updates are done by passing in strongly typed command classes that are held in the actions holder.
// A command classes type determines what will be updated, and the class also holds a copy
// of the data that will be updated
//
const reducer: Reducer<CustomerContextProps, ICustomerContextDispatchCommand> = (state, command) => {
  //
  // each command updates the context state
  // helping to keep the context cleaner
  //
  return command.execute(state);
};

// Create the actual context
//
const CustomerContext = React.createContext({} as InitContextProps);

// Provide function to 'provide' the context to the Customer,
//  basically this defines a new HTML Tag that wraps any lower components
//  that need to access the context.
//
export function CustomerContextProvider(props: any) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <CustomerContext.Provider value={value}>{props.children}</CustomerContext.Provider>;
}

// Export the context
//
export const CustomerContextConsumer = CustomerContext.Consumer;
export default CustomerContext;

// Helper Function to access context
//
export const useCustomerContext = () => {
  const context = React.useContext(CustomerContext);
  return context;
};
