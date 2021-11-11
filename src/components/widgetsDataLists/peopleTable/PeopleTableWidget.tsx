import { EnumListType } from "../../../constants/enums/EnumListType";
import { usePeopleContext } from "../../../contexts/peopleContext/PeopleContext";
import ApiRepositoryPeopleList from "../../../apiRepository/people/ApiRepositoryPeopleList";
import CommandPageNumberSet from "../../../contexts/peopleContext/actions/CommandPageNumberSet";
import CommandPeopleListSet from "../../../contexts/peopleContext/actions/CommandPeopleListSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import PeopleRowWidget from "./PeopleRowWidget";
import PeopleTableHeader from "./PeopleTableHeader";
import React, { useMemo } from "react";
import useDataTableUrlReader from "../../hooks/UseDataTableUrlReader";
import useDataTableUrlWriter from "../../hooks/UseDataTableUrlWriter";

const PeopleTableWidget: React.FC = () => {
  const { state: peopleState, dispatch: peopleDispatch } = usePeopleContext();

  // URL Managers
  const { writeUrlHistory } = useDataTableUrlWriter(EnumListType.people);
  useDataTableUrlReader(EnumListType.people);

  useMemo(async () => {
    console.log("PeopleTableWidget-getdata");
    // use repository to get data when state changes, then add it to the people list context
    const apiRepositoryPeopleList = new ApiRepositoryPeopleList();
    const peopleList = await apiRepositoryPeopleList.getPeopleAsync(peopleState.pagination.sortColumn, peopleState.pagination.sortDirection, peopleState.pagination.pageNumber, peopleState.pagination.rowsPerPage);
    peopleDispatch(new CommandPeopleListSet(peopleList.data, peopleList.rowsPerPage, peopleList.totalPages, peopleList.totalRows));

    writeUrlHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [peopleDispatch, peopleState.pagination]);

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
