import { FaStar, FaRegStar } from "react-icons/fa";

interface IProperties {
  rating: number;
}

const Rating: React.FC<IProperties> = (props) => {
  const StarIcon = (index: number): JSX.Element => {
    if (index <= props.rating) {
      return <FaStar />;
    }

    return <FaRegStar />;
  };

  return (
    <div>
      {StarIcon(1)}
      {StarIcon(2)}
      {StarIcon(3)}
      {StarIcon(4)}
      {StarIcon(5)}
    </div>
  );
};

export default Rating;
