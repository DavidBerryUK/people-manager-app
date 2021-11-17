import { EnumToolbar } from "../../../constants/enums/EnumToolbar";
import { useSkillContext } from "../../../contexts/skillContext/SkillContext";
import CommandPageNumberSet from "../../../contexts/skillContext/actions/CommandPageNumberSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React from "react";
import SkillRowWidget from "./SkillRowWidget";
import SkillTableHeader from "./SkillTableHeader";
import useDataTableUrlReader from "../../hooks/UseDataTableUrlReader";
import useSkillListRepository from "../../hooks/UseSkillListRepository";
import useToolbar from "../../hooks/UseToolbar";

const SkillTableWidget: React.FC = () => {
  const { state: skillState, dispatch: skillDispatch } = useSkillContext();

  useDataTableUrlReader();
  useToolbar(EnumToolbar.skillTable);
  useSkillListRepository();

  const handleOnPageChangeEvent = (pageNo: number) => {
    skillDispatch(new CommandPageNumberSet(pageNo));
  };

  return (
    <div>
      <table>
        <SkillTableHeader />
        <tbody>
          {skillState.skillList.data.map((row, index) => (
            <SkillRowWidget key={index} skill={row} />
          ))}
        </tbody>
      </table>
      <PaginationWidget page={skillState.pagination.pageNo} pageCount={skillState.skillList.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default SkillTableWidget;
