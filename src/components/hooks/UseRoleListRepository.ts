import { useMemo } from "react";
import { useRoleContext } from "../../contexts/roleContext/RoleContext";
import ApiRepositoryRoleList from "../../apiRepository/role/ApiRepositoryRoleList";
import CommandRoleListSet from "../../contexts/roleContext/actions/CommandRoleListSet";
import RepositoryRoleListParams from "../../apiRepository/role/models/RepositoryRoleListParams";
import useDataTableUrlWriter from "./UseDataTableUrlWriter";

//
// get role list data that represents the parameters
// held in the roleContext
//
function useRoleListRepository() {

    const { state: roleState, dispatch: roleDispatch } = useRoleContext();
    const { writeUrlHistory } = useDataTableUrlWriter();

    useMemo(async () => {
        var params = new RepositoryRoleListParams(roleState.pagination.sortColumn, roleState.pagination.sortDirection, roleState.pagination.pageNo, roleState.pagination.rowsPerPage);
        if (params.isNotEqualTo(roleState.previousRoleListParameters)) {
            const apiRepositoryRoleList = new ApiRepositoryRoleList();
            const roleList = await apiRepositoryRoleList.getRolesAsync(params);
            roleDispatch(new CommandRoleListSet(roleList, params));
            writeUrlHistory();
        }
    }, [roleDispatch, roleState.pagination, roleState.previousRoleListParameters, writeUrlHistory]);

}

export default useRoleListRepository;