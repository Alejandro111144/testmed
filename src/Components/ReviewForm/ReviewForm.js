import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle the feedback submission logic here (e.g., send to backend)
    console.log('Feedback submitted:', feedback);
  };

  return (
    <div className="review-form-container">
      {/* Show form if not submitted */}
      {!submitted ? (
        <form onSubmit={handleSubmit} className="review-form">
          <h2>Consultation Feedback</h2>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Provide your feedback here..."
            className="review-textarea"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Submit Feedback
          </button>
        </form>
      ) : (
        // Show thank you message if submitted
        <div className="thank-you-message">
          <h3>Thank you for your feedback!</h3>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
