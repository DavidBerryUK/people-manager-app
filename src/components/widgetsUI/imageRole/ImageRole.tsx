import { EnumIconSize } from "../../../constants/EnumIconSize";

interface IProperties {
  fileName: string;
  size: EnumIconSize;
}

const ImageRole: React.FC<IProperties> = (props) => {
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
        return `/roles/small/${props.fileName}`;
      case EnumIconSize.medium:
        return `/roles/medium/${props.fileName}`;
      case EnumIconSize.large:
        return `/roles/large/${props.fileName}`;
    }
    return "";
  };

  return <img className={className()} src={fullPath()} alt="role"></img>;
};

export default ImageRole;
