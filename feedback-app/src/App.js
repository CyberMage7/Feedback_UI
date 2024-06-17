import React, { useState } from 'react'
import Header from './components/Header'
import './index.css'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'

export default function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <div>
      <Header />
      <FeedbackList feedback={feedback}/>
    </div>
  )
}
