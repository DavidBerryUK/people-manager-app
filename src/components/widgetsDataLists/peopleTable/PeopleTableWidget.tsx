import { usePeopleContext } from "../../../contexts/peopleContext/PeopleContext";
import ApiRepositoryPeopleList from "../../../apiRepository/people/ApiRepositoryPeopleList";
import CommandPageNumberSet from "../../../contexts/peopleContext/actions/CommandPageNumberSet";
import CommandPeopleListSet from "../../../contexts/peopleContext/actions/CommandPeopleListSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import PeopleRowWidget from "./PeopleRowWidget";
import PeopleTableHeader from "./PeopleTableHeader";
import React, { useMemo } from "react";
import RepositoryPeopleListParams from "../../../apiRepository/people/models/RepositoryPeopleListParams";
import useDataTableUrlReader from "../../hooks/UseDataTableUrlReader";
import useDataTableUrlWriter from "../../hooks/UseDataTableUrlWriter";

const PeopleTableWidget: React.FC = () => {
  const { state: peopleState, dispatch: peopleDispatch } = usePeopleContext();

  const { writeUrlHistory } = useDataTableUrlWriter();
  useDataTableUrlReader();

  useMemo(async () => {
    var params = new RepositoryPeopleListParams(peopleState.pagination.sortColumn, peopleState.pagination.sortDirection, peopleState.pagination.pageNo, peopleState.pagination.rowsPerPage);
    if (params.isNotEqualTo(peopleState.previousPeopleListParameters)) {
      const apiRepositoryPeopleList = new ApiRepositoryPeopleList();
      const peopleList = await apiRepositoryPeopleList.getPeopleAsync(params);
      peopleDispatch(new CommandPeopleListSet(peopleList.data, params, peopleList.totalPages, peopleList.totalRows));
      writeUrlHistory();
    }
  }, [peopleDispatch, peopleState.pagination, peopleState.previousPeopleListParameters, writeUrlHistory]);

  const handleOnPageChangeEvent = (pageNo: number) => {
    peopleDispatch(new CommandPageNumberSet(pageNo));
  };

  return (
    <div>
      <table>
        <PeopleTableHeader />
        <tbody>
          {peopleState.peopleList.map((row, index) => (
            <PeopleRowWidget key={index} person={row} />
          ))}
        </tbody>
      </table>
      <PaginationWidget page={peopleState.pagination.pageNo} pageCount={peopleState.tableStatsResults.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default PeopleTableWidget;
