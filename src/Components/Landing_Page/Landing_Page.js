import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import DoctorCard from "../DoctorCard/DoctorCard";
import "./LandingPage.css";

const Landing_Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showForm, setShowForm] = useState(false); // State to toggle the feedback form
  const [formData, setFormData] = useState({
    name: "",
    feedback: "",
  });

  const doctors = [
    {
      image: "https://via.placeholder.com/250",
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      experience: 15,
      rating: 5,
      profile:
        "Dr. John Doe is an experienced cardiologist with over 15 years of expertise in treating heart diseases and providing preventive care.",
    },
    {
      image: "https://via.placeholder.com/250",
      name: "Dr. Jane Smith",
      specialty: "Neurologist",
      experience: 10,
      rating: 4,
      profile:
        "Dr. Jane Smith is a skilled neurologist specializing in brain and spinal cord disorders with 10 years of experience.",
    },
  ];

  const reviews = [
    {
      patientName: "Alice Johnson",
      feedback: "The service was excellent, and the doctor was very attentive!",
      rating: 5,
      doctorName: "Dr. John Doe",
      doctorSpecialty: "Cardiology",
    },
    {
      patientName: "Michael Brown",
      feedback: "Quick and professional consultation. Highly recommended.",
      rating: 4,
      doctorName: "Dr. Jane Smith",
      doctorSpecialty: "Dermatology",
    },
  ];

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    alert("Feedback submitted! Thank you.");
    setFormData({ name: "", feedback: "" });
    setShowForm(false); // Hide the form after submission
  };

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <section className="hero-section">
      <div>
        <div data-aos="fade-up" className="flex-hero">
          <h1>
            Your Health<br />
            <span className="text-gradient">Our Responsibility</span>
          </h1>
          <div className="blob-cont">
            <div className="blue blob"></div>
          </div>
          <div className="blob-cont">
            <div className="blue1 blob"></div>
          </div>
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae
            ducimus. Suscipit omnis quibusdam non cum rem voluptatem!
          </h4>
          <Link to="#services">
            <button className="button">Get Started</button>
          </Link>
        </div>
      </div>

      {/* Find a Doctor Section */}
      <div className="find-doctor-section">
        <h2>Find a Doctor for Instant Consultation</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by specialty or doctor name"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>

        <div className="doctor-cards-container">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor, index) => (
              <DoctorCard key={index} doctor={doctor} />
            ))
          ) : (
            <p>No doctors found based on your search.</p>
          )}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h2>Reviews</h2>
        <div className="reviews-container">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <h3>Serial Number: {index + 1}</h3>
              <p><strong>Review Given:</strong> "{review.feedback}"</p>
              <p><strong>Doctor Name:</strong> {review.doctorName}</p>
              <p><strong>Doctor Specialty:</strong> {review.doctorSpecialty}</p>
              <div className="rating">Rating: {review.rating} / 5</div>
              <button
                className="feedback-button"
                onClick={() => setShowForm(true)}
              >
                Provide Feedback
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Button to navigate to Review Form */}
      <div className="navigate-to-review">
        <Link to="/review">
          <button className="go-to-review-button">Go to Review Form</button>
        </Link>
      </div>

      {/* Feedback Form */}
      {showForm && (
        <div className="feedback-form-container">
          <h2>Provide Your Feedback</h2>
          <form onSubmit={handleFormSubmit} className="feedback-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="form-input"
            />
            <textarea
              name="feedback"
              placeholder="Your Feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              required
              className="form-textarea"
            />
            <button type="submit" className="submit-button">
              Submit Feedback
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Landing_Page;
