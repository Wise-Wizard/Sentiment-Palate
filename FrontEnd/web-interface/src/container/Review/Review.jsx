import React, { useState } from "react";
import "./Review.css";

const Review = ({ onPredict }) => {
  const [review, setReview] = useState("");

  const handleInputChange = (e) => {
    setReview(e.target.value);
  };

  const handlePredictClick = () => {
    onPredict(review);
  };

  return (
    <div className="app__review_bg" id="review">
      <div className="app__review">
        <div className="app__review-heading">
          <h4 className="headtext__cormorant">Leave a Review 🌟 </h4>
        </div>
        <textarea
          rows="5"
          cols="100"
          placeholder="Enter your restaurant review here..."
          value={review}
          onChange={handleInputChange}
          className="app__review-input"
        ></textarea>
        <button
          type="button"
          className="custom__button"
          onClick={handlePredictClick}
          style={{ margin: "auto", marginTop: "20px" }}
        >
          <span className="p__cormorant">Submit Review</span>
        </button>
      </div>
    </div>
  );
};

export default Review;
