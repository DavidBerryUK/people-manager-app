import { EnumToolbar } from "../../../constants/enums/EnumToolbar";
import { usePeopleContext } from "../../../contexts/peopleContext/PeopleContext";
import CommandPageNumberSet from "../../../contexts/peopleContext/actions/CommandPageNumberSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import PeopleRowWidget from "./PeopleRowWidget";
import PeopleTableHeader from "./PeopleTableHeader";
import React  from "react";
import useDataTableUrlReader from "../../hooks/UseDataTableUrlReader";
import usePeopleListRepository from "../../hooks/UsePeopleListRepository";
import useToolbar from "../../hooks/UseToolbar";

const PeopleTableWidget: React.FC = () => {
  const { state: peopleState, dispatch: peopleDispatch } = usePeopleContext();

  useDataTableUrlReader();
  useToolbar(EnumToolbar.peopleTable);
  usePeopleListRepository();

  const handleOnPageChangeEvent = (pageNo: number) => {
    peopleDispatch(new CommandPageNumberSet(pageNo));
  };

  return (
    <div>
      <table>
        <PeopleTableHeader />
        <tbody>
          {peopleState.peopleList.data.map((row, index) => (
            <PeopleRowWidget key={index} person={row} />
          ))}
        </tbody>
      </table>
      <PaginationWidget page={peopleState.pagination.pageNo} pageCount={peopleState.peopleList.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default PeopleTableWidget;
