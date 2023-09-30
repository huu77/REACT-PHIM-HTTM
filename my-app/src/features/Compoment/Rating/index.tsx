import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  return (
    <div>
      <p>Đánh giá của bạn: {rating}</p>
      <div className="space-x-2">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => handleRatingClick(value)}
            className={`${
              value <= rating ? 'text-yellow-400' : 'text-gray-300'
            } text-2xl cursor-pointer`}
          >
            &#9733;
          </button>
        ))}
      </div>
    </div>
  );
};

export default Rating;
