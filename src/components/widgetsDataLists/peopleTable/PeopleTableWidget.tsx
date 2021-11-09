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
import HistoryUrlBuilder from "../../../services/urlManagers/HistoryUrlBuilder";

const PeopleTableWidget: React.FC = () => {
  const { state: peopleState, dispatch: peopleDispatch } = UsePeopleContext();
  const { state: listDetailContext } = UseListDetailContext();
  const history = useHistory();
  const location = useLocation();

  // detect url change
  useEffect(() => {
    if (history.action === "POP") {
      var urlStateModel = UrlManagerService.getStateFromParam(location.search);

      // either user entered url or back/forward button was pressed
      // decoded required variables from the url paramters
      // about to update the page state to display the correct data
      peopleDispatch(new CommandRestoreFromUrl(urlStateModel));
    }
  }, [peopleDispatch, location.search, history.action]);

  // Get data when pagination state changes
  useMemo(async () => {
    const apiRepositoryPeopleList = new ApiRepositoryPeopleList();
    const peopleList = await apiRepositoryPeopleList.getPeopleAsync(peopleState.pagination.sortColumn, peopleState.pagination.sortDirection, peopleState.pagination.pageNumber, peopleState.pagination.rowsPerPage);

    // update context with data
    peopleDispatch(new CommandPeopleListSet(peopleList.data, peopleList.rowsPerPage, peopleList.totalPages, peopleList.totalRows));
  }, [peopleDispatch, peopleState.pagination]);

  //
  // Event Handlers - use selected new page
  //
  const handleOnPageChangeEvent = (pageNo: number) => {
    // update context with new page number to force data reload
    peopleDispatch(new CommandPageNumberSet(pageNo));
    // update page number in url
    const newHistory = HistoryUrlBuilder.buildNewPageNoUrl(location.pathname, peopleState.pagination, listDetailContext.detailView, pageNo);
    history.push(newHistory);
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
