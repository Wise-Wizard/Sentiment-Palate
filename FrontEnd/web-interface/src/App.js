import React from "react";
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
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;

// function App() {
//   const [prediction, setPrediction] = useState(null);

//   const handlePredict = async (review) => {
//     let response = await axios.post("http://localhost:8000/predict/", {
//       customer_review: review,
//     });
//     console.log(response.data)
//     let sentiment = response.data.sentiment_review
//     setPrediction(sentiment);
//   };

//   return (
//     <div className="App">
//       <h1>Restaurant Review Sentiment Analysis</h1>
//       <ReviewInput onPredict={handlePredict} />
//       {prediction !== null && <ReviewOutput prediction={prediction} />}
//     </div>
//   );
// }

// export default App;
