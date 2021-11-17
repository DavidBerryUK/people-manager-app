import { EnumToolbar } from "../../../constants/enums/EnumToolbar";
import { useRoleContext } from "../../../contexts/roleContext/RoleContext";
import CommandPageNumberSet from "../../../contexts/roleContext/actions/CommandPageNumberSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React from "react";
import RoleRowWidget from "./RoleRowWidget";
import RoleTableHeader from "./RoleTableHeader";
import useDataTableUrlReader from "../../hooks/UseDataTableUrlReader";
import useRoleListRepository from "../../hooks/UseRoleListRepository";
import useToolbar from "../../hooks/UseToolbar";

const RoleTableWidget: React.FC = () => {
  const { state: roleState, dispatch: roleDispatch } = useRoleContext();

  useDataTableUrlReader();
  useToolbar(EnumToolbar.roleTable);
  useRoleListRepository();

  const handleOnPageChangeEvent = (pageNo: number) => {
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
