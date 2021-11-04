import React, { useMemo } from "react";
import ApiRepositoryPeopleList from "../../../apiRepository/people/ApiRepositoryPeopleList";
import CommandPeopleListSet from "../../../contexts/peopleContext/actions/CommandPeopleListSet";
import { UsePeopleContext } from "../../../contexts/peopleContext/PeopleContext";
import PeopleLineWidget from "./PeopleLineWidget";
import PeopleListHeader from "./PeopleListHeader";

const PeopleListWidget: React.FC = () => {
  const { state: peopleState, dispatch: peopleDispatch } = UsePeopleContext();

  //
  // Get the data from the repository
  //
  useMemo(async () => {
    const apiRepositoryPeopleList = new ApiRepositoryPeopleList();
    const peopleList = await apiRepositoryPeopleList.getPeopleAsync();
    peopleDispatch(new CommandPeopleListSet(peopleList));
  }, [peopleDispatch]);

  return (
    <table>
      <PeopleListHeader />
      <tbody>
        {peopleState.peopleList.map((row, index) => (
          <PeopleLineWidget key={index} person={row} />
        ))}
      </tbody>
    </table>
  );
};

export default PeopleListWidget;
