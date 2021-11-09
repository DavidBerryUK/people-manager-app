import { EnumIconSize } from "../../../constants/EnumIconSize";

interface IProperties {
  cssAltName: string;
  directory: string;
  fileName: string;
  size: EnumIconSize;
}

const ImageBase: React.FC<IProperties> = (props) => {
  const className = (): string => {
    switch (props.size) {
      case EnumIconSize.small:
        return "avatar small";
      case EnumIconSize.medium:
        return "avatar medium";
      case EnumIconSize.large:
        return "avatar large";
    }
  };

  const fullPath = (): string => {
    switch (props.size) {
      case EnumIconSize.small:
        return `/${props.directory}/small/${props.fileName}`;
      case EnumIconSize.medium:
        return `/${props.directory}/medium/${props.fileName}`;
      case EnumIconSize.large:
        return `/${props.directory}/large/${props.fileName}`;
    }
    return "";
  };

  return <img className={className()} src={fullPath()} alt={props.cssAltName}></img>;
};

export default ImageBase;
