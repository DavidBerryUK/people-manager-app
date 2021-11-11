import { EnumIconSize } from "../../../constants/enums/EnumIconSize";
import ImageBase from "../imageBase/ImageBase";

interface IProperties {
  fileName: string;
  size: EnumIconSize;
}

const ImageTeam: React.FC<IProperties> = (props) => {
  return <ImageBase fileName={props.fileName} size={props.size} directory="teams" cssAltName="team" />;
};

export default ImageTeam;
