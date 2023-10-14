import React, { useState } from "react";
import "../Review/Review.css";
import axios from "axios";

function Predict() {
  const [image, setImage] = useState("");  
  const [predictionImage, setPredictionImage] = useState(null);


  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(URL.createObjectURL(selectedImage)); 
  };

  const handlePredictionImage = async (image) => {
     try {
       const response = await axios.post("http://localhost:8000/api/predict/", {
      prediction_Image : image,
       });

       console.log(response, "kkk");
      //  setPredictionImage(predictionImage);
     } catch (error) {
       console.error("Error predicting sentiment:", error);
       setPredictionImage(null);
     }
  }

  return (
    <div className="app__review_bg w-full" id="review" style={{ paddingTop: "40px" }}>
      <div className="app__review">
        <div className="app__review-heading">
          <h4 className="headtext__cormorant">Predict Food</h4>
        </div>
        <div className="flex flex-col   gap-8 mb-4 ">
          <input
            type="file"
            onChange={handleImageChange}
          >
            </input>

          {image && (
            <img
              src={image}
              placeholder="Upload Image"
              alt="Uploaded Preview"
              className="w-[38vw]"
            />
          )}
        </div>

        <button
          type="button"
          className="custom__button"
          onClick={() => handlePredictionImage(image)}
          style={{ margin: "auto", marginTop: "20px" }}
        >
          <span className="p__cormorant">Get Prediction</span>
        </button>
      </div>
    </div>
  );
}

export default Predict;
