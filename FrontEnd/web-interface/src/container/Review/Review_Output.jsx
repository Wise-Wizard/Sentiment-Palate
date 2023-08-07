import React from 'react';

const ReviewOutput = ({ prediction }) => {
  return (
    <div>
      <h2>Sentiment Prediction</h2>
      <p>{prediction}</p>
    </div>
  );
};

export default ReviewOutput;
