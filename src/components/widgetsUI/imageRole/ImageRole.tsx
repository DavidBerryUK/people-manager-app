import { EnumIconSize } from "../../../constants/EnumIconSize";
import ImageBase from "../imageBase/ImageBase";

interface IProperties {
  fileName: string;
  size: EnumIconSize;
}

const ImageRole: React.FC<IProperties> = (props) => {
  return <ImageBase fileName={props.fileName} size={props.size} directory="roles" cssAltName="role" />;
};

export default ImageRole;
