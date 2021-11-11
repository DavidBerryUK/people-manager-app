import { EnumPanelJustify } from "../../../constants/enums/EnumPanelJustify";

interface IProperties {
  border?: boolean;
  justify?: EnumPanelJustify;
}

const Panel: React.FC<IProperties> = (props) => {
  const className = (): string => {
    var style = "panel";
    if (props.border) {
      style = style + " border";
    }
    if (props.justify) {
      style = style + ` ${props.justify}`;
    }
    return style;
  };

  return <div className={className()}>{props.children}</div>;
};

export default Panel;
