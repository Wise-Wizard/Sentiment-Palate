import React, { useState } from "react";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
  ReviewInput,
  ReviewOutput,
} from "./container";
import { Navbar } from "./components";
import "./App.css";
import axios from "axios";

const App = () => {
  const [prediction, setPrediction] = useState(null);
  const handlePredict = async (review) => {
    let response = await axios.post("http://localhost:8000/predict/", {
      customer_review: review,
    });
    let sentiment = response.data.sentiment_review;
    setPrediction(sentiment);
  };
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <ReviewInput onPredict={handlePredict} />
      {prediction !== null && <ReviewOutput prediction={prediction} />}
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default App;
