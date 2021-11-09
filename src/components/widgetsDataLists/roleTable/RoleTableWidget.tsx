import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import { UseRoleContext } from "../../../contexts/roleContext/RoleContext";
import ApiRepositoryRoleList from "../../../apiRepository/role/ApiRepositoryRoleList";
import CommandPageNumberSet from "../../../contexts/roleContext/actions/CommandPageNumberSet";
import CommandRoleListSet from "../../../contexts/roleContext/actions/CommandRoleListSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React, { useMemo } from "react";
import RoleRowWidget from "./RoleRowWidget";
import RoleTableHeader from "./RoleTableHeader";
import ListDetailUrlManager from "../../../services/urlManagers/ListDetailUrlManger";
import { useHistory, useLocation } from "react-router";

const RoleTableWidget: React.FC = () => {
  const { state: roleState, dispatch: roleDispatch } = UseRoleContext();
  const { state: ListDetailState } = UseListDetailContext();
  const location = useLocation();
  const history = useHistory();

  //
  // Get the data from the repository
  //
  useMemo(async () => {
    console.log("****************** Role Table [GET DATA] - get data ******************");
    const apiRepositoryRoleList = new ApiRepositoryRoleList();
    const roleList = await apiRepositoryRoleList.getRolesAsync(roleState.pagination.sortColumn, roleState.pagination.sortDirection, roleState.pagination.pageNumber, roleState.pagination.rowsPerPage);
    // update context with data
    //
    roleDispatch(new CommandRoleListSet(roleList.data, roleList.rowsPerPage, roleList.totalPages, roleList.totalRows));
  }, [roleDispatch, roleState.pagination]);

  useMemo(async () => {
    const params = ListDetailUrlManager.createUrlParams(roleState.pagination, ListDetailState.detailView);
    if (location.search !== params) {
      history.push({ pathname: location.pathname, search: params });
    }
  }, [roleState.pagination, ListDetailState.detailView, location, history]);

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
      <PaginationWidget page={roleState.pagination.pageNumber} pageCount={roleState.pagination.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default RoleTableWidget;
