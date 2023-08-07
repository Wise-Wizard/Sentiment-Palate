import React, { useState } from 'react';

const ReviewInput = ({ onPredict }) => {
  const [review, setReview] = useState('');

  const handleInputChange = (e) => {
    setReview(e.target.value);
  };

  const handlePredictClick = () => {
    onPredict(review);
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter your restaurant review here..."
        value={review}
        onChange={handleInputChange}
      ></textarea>
      <button onClick={handlePredictClick}>Predict Sentiment</button>
    </div>
  );
};

export default ReviewInput;
