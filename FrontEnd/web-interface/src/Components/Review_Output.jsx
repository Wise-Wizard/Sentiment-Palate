import React from 'react';

const ReviewOutput = ({ prediction }) => {
  return (
    <div>
      <h2>Sentiment Prediction</h2>
      <p>{prediction === 1 ? 'Positive' : 'Negative'}</p>
    </div>
  );
};

export default ReviewOutput;
