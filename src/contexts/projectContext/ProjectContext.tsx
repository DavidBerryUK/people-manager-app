import { EnumSortColumn } from "../../constants/enums/EnumSortColumn";
import { IProjectContextDispatchCommand } from "./interfaces/IProjectContextDispatchCommand";
import DataListApiModel from "../../apiRepository/models/DataListApiModel";
import PaginationApiModel from "../../apiRepository/models/PaginationApiModel";
import ProjectApiModel from "../../apiRepository/models/ProjectApiModel";
import React, { Dispatch, Reducer } from "react";
import RepositoryProjectListParams from "../../apiRepository/project/models/RepositoryProjectListParams";

// Interface defining data structure stored in this context
//
export interface ProjectContextProps {
  projectList: DataListApiModel<ProjectApiModel>;
  previousProjectListParameters: RepositoryProjectListParams;
  pagination: PaginationApiModel;
}

// Strongly type interface for updating this context, which is done by using
// commands which support the IProjectContextDispatchCommand interface
export interface InitContextProps {
  state: ProjectContextProps;
  dispatch: Dispatch<IProjectContextDispatchCommand>;
}

// Setup the initial state of this context by creating new models
//
const initialState: ProjectContextProps = {
  projectList: DataListApiModel.zero<ProjectApiModel>(),
  previousProjectListParameters: RepositoryProjectListParams.zero,
  pagination: new PaginationApiModel(EnumSortColumn.Project),
};

// The reducer updates the actual data held in the context.
// All updates are done by passing in strongly typed command classes that are held in the actions holder.
// A command classes type determines what will be updated, and the class also holds a copy
// of the data that will be updated
//
const reducer: Reducer<ProjectContextProps, IProjectContextDispatchCommand> = (state, command) => {
  //
  // each command updates the context state
  // helping to keep the context cleaner
  //
  return command.execute(state);
};

// Create the actual context
//
const ProjectContext = React.createContext({} as InitContextProps);

// Provide function to 'provide' the context to the Project,
//  basically this defines a new HTML Tag that wraps any lower components
//  that need to access the context.
//
export function ProjectContextProvider(props: any) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <ProjectContext.Provider value={value}>{props.children}</ProjectContext.Provider>;
}

// Export the context
//
export const ProjectContextConsumer = ProjectContext.Consumer;
export default ProjectContext;

// Helper Function to access context
//
export const useProjectContext = () => {
  const context = React.useContext(ProjectContext);
  return context;
};
