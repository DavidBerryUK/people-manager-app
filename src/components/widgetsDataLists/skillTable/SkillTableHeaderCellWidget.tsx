import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import { useSkillContext } from "../../../contexts/skillContext/SkillContext";
import CommandSortByColumnSet from "../../../contexts/skillContext/actions/CommandSortByColumnSet";
import React from "react";
import SortIndicator from "../../widgetsUI/sortIndicator/SortIndicator";

interface IProperties {
  column: EnumSortColumn;
  sortable?: boolean;
}

const SkillTableHeaderCellWidget: React.FC<IProperties> = (props) => {
  const { state: skillState, dispatch: skillDispatch } = useSkillContext();

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
    if (skillState.pagination.sortColumn !== props.column) {
      return <></>;
    }
    return <SortIndicator direction={skillState.pagination.sortDirection} />;
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

export default SkillTableHeaderCellWidget;
