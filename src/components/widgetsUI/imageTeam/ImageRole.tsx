import { EnumIconSize } from "../../../constants/EnumIconSize";

interface IProperties {
  fileName: string;
  size: EnumIconSize;
}

const ImageTeam: React.FC<IProperties> = (props) => {
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
        return `/teams/small/${props.fileName}`;
      case EnumIconSize.medium:
        return `/teams/medium/${props.fileName}`;
      case EnumIconSize.large:
        return `/teams/large/${props.fileName}`;
    }
    return "";
  };

  return <img className={className()} src={fullPath()} alt="role"></img>;
};

export default ImageTeam;
