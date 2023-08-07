import React, { useState } from "react";
import ReviewInput from "./Components/Review_Input";
import ReviewOutput from "./Components/Review_Output";
import axios from "axios";

function App() {
  const [prediction, setPrediction] = useState(null);

  const handlePredict = async (review) => {
    let response = await axios.post("http://localhost:8000/predict/", {
      customer_review: review,
    });
    console.log(response)
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
