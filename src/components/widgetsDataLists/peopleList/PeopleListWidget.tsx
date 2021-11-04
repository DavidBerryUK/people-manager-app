import { UsePeopleContext } from "../../../contexts/peopleContext/PeopleContext";
import ApiRepositoryPeopleList from "../../../apiRepository/people/ApiRepositoryPeopleList";
import CommandPeopleListSet from "../../../contexts/peopleContext/actions/CommandPeopleListSet";
import PeopleLineWidget from "./PeopleLineWidget";
import PeopleListHeader from "./PeopleListHeader";
import React, { useMemo } from "react";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";

const PeopleListWidget: React.FC = () => {
  const { state: peopleState, dispatch: peopleDispatch } = UsePeopleContext();

  //
  // Get the data from the repository
  //
  useMemo(async () => {
    const apiRepositoryPeopleList = new ApiRepositoryPeopleList();
    const peopleList = await apiRepositoryPeopleList.getPeopleAsync(peopleState.sortColumn, peopleState.sortDirection);
    peopleDispatch(new CommandPeopleListSet(peopleList));
  }, [peopleDispatch, peopleState.sortColumn, peopleState.sortDirection]);

  //
  // Event Handlers
  //
  const handleOnPageChangeEvent = (pageNo: number) => {
    console.log(pageNo);
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
      <PaginationWidget page={1} pageCount={5} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default PeopleListWidget;
