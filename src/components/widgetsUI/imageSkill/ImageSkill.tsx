import { EnumIconSize } from "../../../constants/EnumIconSize";

interface IProperties {
  fileName: string;
  size: EnumIconSize;
}

const ImageSkill: React.FC<IProperties> = (props) => {
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
        return `/skills/small/${props.fileName}`;
      case EnumIconSize.medium:
        return `/skills/medium/${props.fileName}`;
      case EnumIconSize.large:
        return `/skills/large/${props.fileName}`;
    }
    return "";
  };

  return <img className={className()} src={fullPath()} alt="skill"></img>;
};

export default ImageSkill;
