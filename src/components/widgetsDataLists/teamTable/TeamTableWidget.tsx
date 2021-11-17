import { EnumToolbar } from "../../../constants/enums/EnumToolbar";
import { useTeamContext } from "../../../contexts/teamContext/TeamContext";
import CommandPageNumberSet from "../../../contexts/teamContext/actions/CommandPageNumberSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React from "react";
import TeamRowWidget from "./TeamRowWidget";
import TeamTableHeader from "./TeamTableHeader";
import useDataTableUrlReader from "../../hooks/UseDataTableUrlReader";
import useTeamListRepository from "../../hooks/UseTeamListRepository";
import useToolbar from "../../hooks/UseToolbar";

const TeamTableWidget: React.FC = () => {
  const { state: teamState, dispatch: teamDispatch } = useTeamContext();

  useDataTableUrlReader();
  useToolbar(EnumToolbar.customerTable);
  useTeamListRepository();

  const handleOnPageChangeEvent = (pageNo: number) => {
    teamDispatch(new CommandPageNumberSet(pageNo));
  };

  return (
    <div>
      <table>
        <TeamTableHeader />
        <tbody>
          {teamState.teamList.data.map((row, index) => (
            <TeamRowWidget key={index} team={row} />
          ))}
        </tbody>
      </table>
      <PaginationWidget page={teamState.pagination.pageNo} pageCount={teamState.teamList.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default TeamTableWidget;
