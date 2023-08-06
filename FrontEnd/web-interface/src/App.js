import React, { useState } from 'react';
import ReviewInput from './Components/Review_Input';
import ReviewOutput from './Components/Review_Output';
import axios from "axios"

function App() {
  const [prediction, setPrediction] = useState(null);

  const handlePredict = (review) => {
    // Perform API call to your ML model here
    // Set the prediction using setPrediction(result)
    // For simplicity, using a mock prediction
    const mockPrediction = Math.random() < 0.5 ? 0 : 1;
    setPrediction(mockPrediction);
  };

  return (
    <div className="App">
        <h1>Restaurant Review Sentiment Analysis</h1>
        <ReviewInput onPredict={handlePredict} />
        {prediction !== null && <ReviewOutput prediction={prediction} />}
    </div>
  );
}

export default App;
