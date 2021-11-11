import { EnumListType } from "../../../constants/EnumListType";
import { useRoleContext } from "../../../contexts/roleContext/RoleContext";
import ApiRepositoryRoleList from "../../../apiRepository/role/ApiRepositoryRoleList";
import CommandPageNumberSet from "../../../contexts/roleContext/actions/CommandPageNumberSet";
import CommandRoleListSet from "../../../contexts/roleContext/actions/CommandRoleListSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React, { useMemo } from "react";
import RoleRowWidget from "./RoleRowWidget";
import RoleTableHeader from "./RoleTableHeader";
import useDataTableUrlReader from "../../hooks/UseDataTableUrlReader";
import useDataTableUrlWriter from "../../hooks/UseDataTableUrlWriter";

const RoleTableWidget: React.FC = () => {
  const { state: roleState, dispatch: roleDispatch } = useRoleContext();

  // URL Managers
  const { writeUrlHistory } = useDataTableUrlWriter(EnumListType.roles);
  useDataTableUrlReader(EnumListType.roles);

  useMemo(async () => {
    // use repository to get data when state changes, then add it to the people list context
    const apiRepositoryRoleList = new ApiRepositoryRoleList();
    const roleList = await apiRepositoryRoleList.getRolesAsync(roleState.pagination.sortColumn, roleState.pagination.sortDirection, roleState.pagination.pageNumber, roleState.pagination.rowsPerPage);
    roleDispatch(new CommandRoleListSet(roleList.data, roleList.rowsPerPage, roleList.totalPages, roleList.totalRows));
    writeUrlHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roleDispatch, roleState.pagination]);

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
          {roleState.roleList.map((row, index) => (
            <RoleRowWidget key={index} role={row} />
          ))}
        </tbody>
      </table>
      <PaginationWidget page={roleState.pagination.pageNumber} pageCount={roleState.tableStatsResults.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default RoleTableWidget;
