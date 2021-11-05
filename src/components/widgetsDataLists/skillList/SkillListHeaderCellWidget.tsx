import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import { UseSkillContext } from "../../../contexts/skillContext/SkillContext";
import CommandSortByColumnSet from "../../../contexts/skillContext/actions/CommandSortByColumnSet";
import React from "react";
import SortIndicator from "../../widgetsUI/sortIndicator/SortIndicator";

interface IProperties {
  column: EnumSortColumn;
}

const SkillListHeaderCellWidget: React.FC<IProperties> = (props) => {
  const { state: skillState, dispatch: skillDispatch } = UseSkillContext();

  // Event Handlers
  //
  const handleColumnClickEvent = () => {
    // update context with new sort order
    skillDispatch(new CommandSortByColumnSet(props.column));
  };

  // Determine Sort Icon for Column
  //
  const sortIcon = (): JSX.Element => {
    if (skillState.sortColumn !== props.column) {
      return <></>;
    }
    return <SortIndicator direction={skillState.sortDirection} />;
  };

  return (
    <th onClick={handleColumnClickEvent}>
      <div className="title">{props.children}</div>
      <div className="icon">{sortIcon()}</div>
    </th>
  );
};

export default SkillListHeaderCellWidget;
