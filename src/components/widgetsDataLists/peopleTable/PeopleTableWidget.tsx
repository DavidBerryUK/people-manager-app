import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import { usePeopleContext } from "../../../contexts/peopleContext/PeopleContext";
import ApiRepositoryPeopleList from "../../../apiRepository/people/ApiRepositoryPeopleList";
import CommandPageNumberSet from "../../../contexts/peopleContext/actions/CommandPageNumberSet";
import CommandPeopleListSet from "../../../contexts/peopleContext/actions/CommandPeopleListSet";
import PaginationStateModel from "../../../contextsCommonModels/PaginationStateModel";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import PeopleRowWidget from "./PeopleRowWidget";
import PeopleTableHeader from "./PeopleTableHeader";
import React, { useMemo, useState } from "react";
import useDataTableUrlReader from "../../hooks/UseDataTableUrlReader";
import useDataTableUrlWriter from "../../hooks/UseDataTableUrlWriter";

const PeopleTableWidget: React.FC = () => {
  const { state: peopleState, dispatch: peopleDispatch } = usePeopleContext();
  const [lastRequest, setLastRequest] = useState(new PaginationStateModel(EnumSortColumn.None));

  // URL Managers
  const { writeUrlHistory } = useDataTableUrlWriter();
  useDataTableUrlReader();

  useMemo(async () => {
    // use repository to get data when state changes, then add it to the people list context
    if (lastRequest.isNotEqualTo(peopleState.pagination)) {
      console.log("######################################## PEOPLE GET DATA #########################");
      const apiRepositoryPeopleList = new ApiRepositoryPeopleList();
      const peopleList = await apiRepositoryPeopleList.getPeopleAsync(peopleState.pagination.sortColumn, peopleState.pagination.sortDirection, peopleState.pagination.pageNumber, peopleState.pagination.rowsPerPage);
      setLastRequest(peopleState.pagination);
      peopleDispatch(new CommandPeopleListSet(peopleList.data, peopleList.rowsPerPage, peopleList.totalPages, peopleList.totalRows));
      writeUrlHistory();
    }
  }, [peopleDispatch, peopleState.pagination, writeUrlHistory, lastRequest]);

  //
  // Event Handlers - use selected new page
  //
  const handleOnPageChangeEvent = (pageNo: number) => {
    // update context with new page number to force data reload
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
      <PaginationWidget page={peopleState.pagination.pageNumber} pageCount={peopleState.tableStatsResults.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default PeopleTableWidget;
