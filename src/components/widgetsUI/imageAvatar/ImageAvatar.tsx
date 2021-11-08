import { EnumIconSize } from "../../../constants/EnumIconSize";

interface IProperties {
  fileName: string;
  size: EnumIconSize;
}

const ImageAvatar: React.FC<IProperties> = (props) => {
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
        return `/avatars/small/${props.fileName}`;
      case EnumIconSize.medium:
        return `/avatars/medium/${props.fileName}`;
      case EnumIconSize.large:
        return `/avatars/large/${props.fileName}`;
    }
    return "";
  };

  return <img className={className()} src={fullPath()} alt="face"></img>;
};

export default ImageAvatar;
