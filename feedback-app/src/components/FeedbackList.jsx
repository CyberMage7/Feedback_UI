import React from "react";
import FeedbackItem from "./FeedbackItem";
function FeedbackList({ feedback }) {
  if (feedback.length === 0 || !feedback) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
