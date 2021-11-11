import { EnumIconSize } from "../../../constants/enums/EnumIconSize";
import ImageBase from "../imageBase/ImageBase";

interface IProperties {
  fileName: string;
  size: EnumIconSize;
}

const ImageSkill: React.FC<IProperties> = (props) => {
  return <ImageBase fileName={props.fileName} size={props.size} directory="skills" cssAltName="skill" />;
};

export default ImageSkill;
