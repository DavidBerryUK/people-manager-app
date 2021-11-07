import { EnumAvatarSize } from "../../../constants/EnumAvatarSize";

interface IProperties {
  url: string;
  size: EnumAvatarSize;
}

const Avatar: React.FC<IProperties> = (props) => {
  const className = (): string => {
    switch (props.size) {
      case EnumAvatarSize.small:
        return "avatar small";
      case EnumAvatarSize.medium:
        return "avatar medium";
      case EnumAvatarSize.large:
        return "avatar large";
    }
  };

  return <img className={className()} src={props.url} alt="face"></img>;
};

export default Avatar;
