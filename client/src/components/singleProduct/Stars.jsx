import React from "react";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Stars = ({ stars, reviews }) => {
  // 5 LENGTH ARRAY MAKING - generating 1 to 5 number (0 to 4 )
  const ratingStar = Array.from({ length: 5 }, (element, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="star-icon-style" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="star-icon-style" />
        ) : (
          <AiOutlineStar className="star-icon-style" />
        )}
      </span>
    );
  });
  return (
    <p className="rateAndReview">
      {ratingStar}

      <span> ( {reviews} Reviews )</span>
    </p>
  );
};

export default Stars;
