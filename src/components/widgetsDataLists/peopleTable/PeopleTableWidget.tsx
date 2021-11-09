import { useHistory, useLocation } from "react-router";
import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import { UsePeopleContext } from "../../../contexts/peopleContext/PeopleContext";
import ApiRepositoryPeopleList from "../../../apiRepository/people/ApiRepositoryPeopleList";
import CommandPageNumberSet from "../../../contexts/peopleContext/actions/CommandPageNumberSet";
import CommandPeopleListSet from "../../../contexts/peopleContext/actions/CommandPeopleListSet";
import CommandRestoreFromUrl from "../../../contexts/peopleContext/actions/CommandRestoreFromUrl";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import PeopleRowWidget from "./PeopleRowWidget";
import PeopleTableHeader from "./PeopleTableHeader";
import React, { useEffect, useMemo } from "react";
import UrlManagerService from "../../../services/urlManagers/UrlManagerService";

const PeopleTableWidget: React.FC = () => {
  const { state: peopleState, dispatch: peopleDispatch } = UsePeopleContext();
  const { state: listDetailContext } = UseListDetailContext();
  const history = useHistory();
  const location = useLocation();

  // detect url change
  useEffect(() => {
    console.log("****************** People Table [URL CHANGED] - get data ******************");

    if (history.action === "POP") {
      console.log(`Url Params Changed:${location.search}   History:${history.action}`);
      var urlStateModel = UrlManagerService.getStateFromParam(location.search);

      // either user entered url or back/forward button was pressed
      // decoded required variables from the url paramters
      // about to update the page state to display the correct data
      peopleDispatch(new CommandRestoreFromUrl(urlStateModel));
    }
  }, [peopleDispatch, location.search, history.action]);

  // Get data when pagination state changes
  useMemo(async () => {
    console.log("****************** People Table [GET DATA] - get data ******************");
    console.log(peopleState.pagination);

    const apiRepositoryPeopleList = new ApiRepositoryPeopleList();
    const peopleList = await apiRepositoryPeopleList.getPeopleAsync(peopleState.pagination.sortColumn, peopleState.pagination.sortDirection, peopleState.pagination.pageNumber, peopleState.pagination.rowsPerPage);
    // update context with data

    peopleDispatch(new CommandPeopleListSet(peopleList.data, peopleList.rowsPerPage, peopleList.totalPages, peopleList.totalRows));
  }, [peopleDispatch, peopleState.pagination]);

  //
  // Event Handlers
  //
  const handleOnPageChangeEvent = (pageNo: number) => {
    // update context with new page number
    peopleDispatch(new CommandPageNumberSet(pageNo));

    // set history
    var params = UrlManagerService.createUrlParams(peopleState.pagination, listDetailContext.detailView);
    history.push({ pathname: location.pathname, search: params });
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
