import { UseRoleContext } from "../../../contexts/roleContext/RoleContext";
import ApiRepositoryRoleList from "../../../apiRepository/role/ApiRepositoryRoleList";
import CommandPageNumberSet from "../../../contexts/roleContext/actions/CommandPageNumberSet";
import CommandRoleListSet from "../../../contexts/roleContext/actions/CommandTeamListSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React, { useMemo } from "react";
import RoleRowWidget from "./RoleRowWidget";
import RoleTableHeader from "./RoleTableHeader";

const RoleTableWidget: React.FC = () => {
  const { state: roleState, dispatch: roleDispatch } = UseRoleContext();

  //
  // Get the data from the repository
  //
  useMemo(async () => {
    const apiRepositoryRoleList = new ApiRepositoryRoleList();
    const roleList = await apiRepositoryRoleList.getRolesAsync(roleState.sortColumn, roleState.sortDirection, roleState.pageNumber, roleState.rowsPerPage);

    // update context with data
    //
    roleDispatch(new CommandRoleListSet(roleList.data, roleList.rowsPerPage, roleList.totalPages, roleList.totalRows));
  }, [roleDispatch, roleState.sortColumn, roleState.sortDirection, roleState.rowsPerPage, roleState.pageNumber]);

  //
  // Event Handlers
  //
  const handleOnPageChangeEvent = (pageNo: number) => {
    // update context with new page number
    //
    roleDispatch(new CommandPageNumberSet(pageNo));
  };

  return (
    <div>
      <table>
        <RoleTableHeader />
        <tbody>
          {roleState.roleList.map((row, index) => (
            <RoleRowWidget key={index} role={row} />
          ))}
        </tbody>
      </table>
      <PaginationWidget page={roleState.pageNumber} pageCount={roleState.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default RoleTableWidget;
