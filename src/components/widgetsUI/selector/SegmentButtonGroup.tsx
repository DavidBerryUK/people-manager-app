import OptionModel from "./model/OptionModel";
import SegmentButton from "./SegmentButton";

interface IProperties {
  options: Array<OptionModel>;
}

const SegmentButtonGroup: React.FC<IProperties> = (props) => {
  return (
    <div>
      {props.options.map((option) => (
        <SegmentButton key={option.id} option={option} />
      ))}
    </div>
  );
};

export default SegmentButtonGroup;
