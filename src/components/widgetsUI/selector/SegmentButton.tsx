import OptionModel from "./model/OptionModel";

interface IProperties {
  option: OptionModel;
}

const SegmentButton: React.FC<IProperties> = (props) => {
  return <div>{Option.name}</div>;
};

export default SegmentButton;
