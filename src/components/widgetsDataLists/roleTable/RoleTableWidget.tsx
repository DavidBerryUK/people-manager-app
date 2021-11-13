import { useRoleContext } from "../../../contexts/roleContext/RoleContext";
import ApiRepositoryRoleList from "../../../apiRepository/role/ApiRepositoryRoleList";
import CommandPageNumberSet from "../../../contexts/roleContext/actions/CommandPageNumberSet";
import CommandRoleListSet from "../../../contexts/roleContext/actions/CommandRoleListSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React, { useMemo } from "react";
import RepositoryRoleListParams from "../../../apiRepository/role/models/RepositoryRoleListParams";
import RoleRowWidget from "./RoleRowWidget";
import RoleTableHeader from "./RoleTableHeader";
import useDataTableUrlReader from "../../hooks/UseDataTableUrlReader";
import useDataTableUrlWriter from "../../hooks/UseDataTableUrlWriter";

const RoleTableWidget: React.FC = () => {
  const { state: roleState, dispatch: roleDispatch } = useRoleContext();

  // URL Managers
  const { writeUrlHistory } = useDataTableUrlWriter();
  useDataTableUrlReader();

  useMemo(async () => {
    var params = new RepositoryRoleListParams(roleState.pagination.sortColumn, roleState.pagination.sortDirection, roleState.pagination.pageNo, roleState.pagination.rowsPerPage);
    if (params.isNotEqualTo(roleState.previousRoleListParameters)) {
      const apiRepositoryRoleList = new ApiRepositoryRoleList();
      const roleList = await apiRepositoryRoleList.getRolesAsync(params);
      roleDispatch(new CommandRoleListSet(roleList, params));
      writeUrlHistory();
    }
  }, [roleDispatch, roleState.pagination, roleState.previousRoleListParameters, writeUrlHistory]);

  //
  // Event Handlers
  //
  const handleOnPageChangeEvent = (pageNo: number) => {
    // update context with new page number to force data reload
    roleDispatch(new CommandPageNumberSet(pageNo));
  };

  return (
    <div>
      <table>
        <RoleTableHeader />
        <tbody>
          {roleState.roleList.data.map((row, index) => (
            <RoleRowWidget key={index} role={row} />
          ))}
        </tbody>
      </table>
      <PaginationWidget page={roleState.pagination.pageNo} pageCount={roleState.roleList.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default RoleTableWidget;
