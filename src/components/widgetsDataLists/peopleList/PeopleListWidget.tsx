import { UsePeopleContext } from "../../../contexts/peopleContext/PeopleContext";
import ApiRepositoryPeopleList from "../../../apiRepository/people/ApiRepositoryPeopleList";
import CommandPeopleListSet from "../../../contexts/peopleContext/actions/CommandPeopleListSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import PeopleLineWidget from "./PeopleLineWidget";
import PeopleListHeader from "./PeopleListHeader";
import React, { useMemo } from "react";
import CommandPageNumberSet from "../../../contexts/peopleContext/actions/CommandPageNumberSet";

const PeopleListWidget: React.FC = () => {
  const { state: peopleState, dispatch: peopleDispatch } = UsePeopleContext();

  //
  // Get the data from the repository
  //
  useMemo(async () => {
    const apiRepositoryPeopleList = new ApiRepositoryPeopleList();
    const peopleList = await apiRepositoryPeopleList.getPeopleAsync(peopleState.sortColumn, peopleState.sortDirection, peopleState.pageNumber, peopleState.rowsPerPage);

    // update context with data
    //
    peopleDispatch(new CommandPeopleListSet(peopleList.data, peopleList.rowsPerPage, peopleList.totalPages, peopleList.totalRows));
  }, [peopleDispatch, peopleState.sortColumn, peopleState.sortDirection, peopleState.rowsPerPage, peopleState.pageNumber]);

  //
  // Event Handlers
  //
  const handleOnPageChangeEvent = (pageNo: number) => {
    // update context with new page number
    //
    peopleDispatch(new CommandPageNumberSet(pageNo));
  };

  return (
    <div>
      <table>
        <PeopleListHeader />
        <tbody>
          {peopleState.peopleList.map((row, index) => (
            <PeopleLineWidget key={index} person={row} />
          ))}
        </tbody>
      </table>
      <PaginationWidget page={peopleState.pageNumber} pageCount={peopleState.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default PeopleListWidget;
