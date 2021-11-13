import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import { useRoleContext } from "../../../contexts/roleContext/RoleContext";
import ApiRepositoryRoleList from "../../../apiRepository/role/ApiRepositoryRoleList";
import CommandPageNumberSet from "../../../contexts/roleContext/actions/CommandPageNumberSet";
import CommandRoleListSet from "../../../contexts/roleContext/actions/CommandRoleListSet";
import PaginationApiModel from "../../../apiRepository/models/PaginationApiModel";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React, { useMemo, useState } from "react";
import RoleRowWidget from "./RoleRowWidget";
import RoleTableHeader from "./RoleTableHeader";
import useDataTableUrlReader from "../../hooks/UseDataTableUrlReader";
import useDataTableUrlWriter from "../../hooks/UseDataTableUrlWriter";

const RoleTableWidget: React.FC = () => {
  const { state: roleState, dispatch: roleDispatch } = useRoleContext();
  const [lastRequest, setLastRequest] = useState(new PaginationApiModel(EnumSortColumn.None));

  // URL Managers
  const { writeUrlHistory } = useDataTableUrlWriter();
  useDataTableUrlReader();

  useMemo(async () => {
    if (lastRequest.isNotEqualTo(roleState.pagination)) {
      console.log("######################################## ROLE GET DATA #########################");
      // use repository to get data when state changes, then add it to the people list context
      const apiRepositoryRoleList = new ApiRepositoryRoleList();
      const roleList = await apiRepositoryRoleList.getRolesAsync(roleState.pagination.sortColumn, roleState.pagination.sortDirection, roleState.pagination.pageNo, roleState.pagination.rowsPerPage);
      setLastRequest(roleState.pagination);
      roleDispatch(new CommandRoleListSet(roleList.data, roleList.rowsPerPage, roleList.totalPages, roleList.totalRows));
      writeUrlHistory();
    }
  }, [roleDispatch, roleState.pagination, writeUrlHistory, lastRequest]);

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
      <PaginationWidget page={roleState.pagination.pageNo} pageCount={roleState.tableStatsResults.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default RoleTableWidget;
