import { EnumIconSize } from "../../../constants/enums/EnumIconSize";
import ImageBase from "../imageBase/ImageBase";

interface IProperties {
  fileName: string;
  size: EnumIconSize;
}

const ImageAvatar: React.FC<IProperties> = (props) => {
  return <ImageBase fileName={props.fileName} size={props.size} directory="avatars" cssAltName="portrail" />;
};

export default ImageAvatar;
