import { useMemo } from "react";
import { useProjectContext } from "../../contexts/projectContext/ProjectContext";
import ApiRepositoryProjectList from "../../apiRepository/project/ApiRepositoryProjectList";
import CommandProjectListSet from "../../contexts/projectContext/actions/CommandProjectListSet";
import RepositoryProjectListParams from "../../apiRepository/project/models/RepositoryProjectListParams";
import useDataTableUrlWriter from "./UseDataTableUrlWriter";

//
// get project list data that represents the parameters
// held in the projectContext
//
function useProjectListRepository() {

    const { state: projectState, dispatch: projectDispatch } = useProjectContext();
    const { writeUrlHistory } = useDataTableUrlWriter();

    useMemo(async () => {
        var params = new RepositoryProjectListParams(projectState.pagination.sortColumn, projectState.pagination.sortDirection, projectState.pagination.pageNo, projectState.pagination.rowsPerPage);
        if (params.isNotEqualTo(projectState.previousProjectListParameters)) {
            const apiRepositoryProjectList = new ApiRepositoryProjectList();
            const projectList = await apiRepositoryProjectList.getProjectsAsync(params);
            projectDispatch(new CommandProjectListSet(projectList, params));
            writeUrlHistory();
        }
    }, [projectDispatch, projectState.pagination, projectState.previousProjectListParameters, writeUrlHistory]);

}

export default useProjectListRepository;