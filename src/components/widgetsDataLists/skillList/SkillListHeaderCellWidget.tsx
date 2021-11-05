import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import { UseSkillContext } from "../../../contexts/skillContext/SkillContext";
import CommandSortByColumnSet from "../../../contexts/skillContext/actions/CommandSortByColumnSet";
import React from "react";
import SortIndicator from "../../widgetsUI/sortIndicator/SortIndicator";

interface IProperties {
  column: EnumSortColumn;
  sortable?: boolean;
}

const SkillListHeaderCellWidget: React.FC<IProperties> = (props) => {
  const { state: skillState, dispatch: skillDispatch } = UseSkillContext();

  // Event Handlers
  //
  const handleColumnClickEvent = () => {
    if (props.sortable) {
      // update context with new sort order
      skillDispatch(new CommandSortByColumnSet(props.column));
    }
  };

  // Determine Sort Icon for Column
  //
  const sortIcon = (): JSX.Element => {
    if (skillState.sortColumn !== props.column) {
      return <></>;
    }
    return <SortIndicator direction={skillState.sortDirection} />;
  };

  // Create Style
  //
  const className = (): string => {
    if (props.sortable === true) {
      return "sortable";
    }
    return "";
  };

  return (
    <th className={className()} onClick={handleColumnClickEvent}>
      <div className="title">{props.children}</div>
      <div className="icon">{sortIcon()}</div>
    </th>
  );
};

export default SkillListHeaderCellWidget;
