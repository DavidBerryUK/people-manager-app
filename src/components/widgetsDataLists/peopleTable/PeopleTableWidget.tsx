import { UsePeopleContext } from "../../../contexts/peopleContext/PeopleContext";
import ApiRepositoryPeopleList from "../../../apiRepository/people/ApiRepositoryPeopleList";
import CommandPageNumberSet from "../../../contexts/peopleContext/actions/CommandPageNumberSet";
import CommandPeopleListSet from "../../../contexts/peopleContext/actions/CommandPeopleListSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import PeopleRowWidget from "./PeopleRowWidget";
import PeopleTableHeader from "./PeopleTableHeader";
import React, { useMemo } from "react";
import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import ListDetailUrlManager from "../../../services/urlManagers/ListDetailUrlManger";
import { useHistory, useLocation } from "react-router";

const PeopleTableWidget: React.FC = () => {
  const { state: peopleState, dispatch: peopleDispatch } = UsePeopleContext();
  const { state: ListDetailState } = UseListDetailContext();
  const location = useLocation();
  const history = useHistory();

  //
  // Get the data from the repository
  //
  useMemo(async () => {
    console.log("****************** People Table [GET DATA] - get data ******************");
    const apiRepositoryPeopleList = new ApiRepositoryPeopleList();
    const peopleList = await apiRepositoryPeopleList.getPeopleAsync(peopleState.pagination.sortColumn, peopleState.pagination.sortDirection, peopleState.pagination.pageNumber, peopleState.pagination.rowsPerPage);

    // update context with data
    //
    peopleDispatch(new CommandPeopleListSet(peopleList.data, peopleList.rowsPerPage, peopleList.totalPages, peopleList.totalRows));
  }, [peopleDispatch, peopleState.pagination]);

  //
  // Update URL
  //
  useMemo(async () => {
    const params = ListDetailUrlManager.createUrlParams(peopleState.pagination, ListDetailState.detailView);
    console.log("****************** People Table [Update URL] ******************");
    if (location.search !== params) {
      history.push({ pathname: location.pathname, search: params });
    }
  }, [peopleState.pagination, ListDetailState.detailView, location, history]);

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
