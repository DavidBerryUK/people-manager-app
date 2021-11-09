import { UsePeopleContext } from "../../../contexts/peopleContext/PeopleContext";
import ApiRepositoryPeopleList from "../../../apiRepository/people/ApiRepositoryPeopleList";
import CommandPageNumberSet from "../../../contexts/peopleContext/actions/CommandPageNumberSet";
import CommandPeopleListSet from "../../../contexts/peopleContext/actions/CommandPeopleListSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import PeopleRowWidget from "./PeopleRowWidget";
import PeopleTableHeader from "./PeopleTableHeader";
import React, { useMemo } from "react";
//import ListDetailUrlManager from "../../../services/urlManagers/ListDetailUrlManger";
//import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";

const PeopleTableWidget: React.FC = () => {
  const { state: peopleState, dispatch: peopleDispatch } = UsePeopleContext();
  //const { state: listState } = UseListDetailContext();

  //
  // Get the data from the repository
  //
  useMemo(async () => {
    const apiRepositoryPeopleList = new ApiRepositoryPeopleList();
    const peopleList = await apiRepositoryPeopleList.getPeopleAsync(peopleState.pagination.sortColumn, peopleState.pagination.sortDirection, peopleState.pagination.pageNumber, peopleState.pagination.rowsPerPage);

    console.log("****************** PeopleTableWidget Component ******************");
    //   console.log("list state changed");

    // update context with data
    //
    peopleDispatch(new CommandPeopleListSet(peopleList.data, peopleList.rowsPerPage, peopleList.totalPages, peopleList.totalRows));
  }, [peopleDispatch, peopleState.pagination]);

  // useMemo(() => {
  //   console.log("****************** PeopleTableWidget Component ******************");
  //   console.log("list state changed");
  //   const params = ListDetailUrlManager.createUrlParams(peopleState.pagination, listState.detailView.viewType, listState.detailView.detailKey);
  //   console.log(params);
  // }, [peopleState.pagination, listState.detailView]);

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
        <PeopleTableHeader />
        <tbody>
          {peopleState.peopleList.map((row, index) => (
            <PeopleRowWidget key={index} person={row} />
          ))}
        </tbody>
      </table>
      <PaginationWidget page={peopleState.pagination.pageNumber} pageCount={peopleState.pagination.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default PeopleTableWidget;
