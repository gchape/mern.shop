import { JSX } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type RatingProps = {
  value: number;
  text: string;
  color?: string;
};

const renderRating = (value: number, color: string): JSX.Element[] => {
  const ratings: JSX.Element[] = [];

  for (let rating = value; rating >= 0.5; rating--) {
    ratings.push(
      <span>
        {rating >= 1 ? (
          <FaStar color={color} />
        ) : rating >= 0.5 ? (
          <FaStarHalfAlt color={color} />
        ) : (
          <FaRegStar color={color} />
        )}
      </span>
    );
  }

  return ratings;
};

function Rating({ value, text, color = "#f8e825" }: RatingProps) {
  return (
    <div className="rating">
      {renderRating(value, color)}

      <span className="rating-text">{text && text}</span>
    </div>
  );
}

export default Rating;
