import React, { useState } from "react";
import Header from "./components/Header";
import "./index.css";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <div>
      <Header />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </div>
  );
}
