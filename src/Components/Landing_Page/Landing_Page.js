import React, { useState } from "react"; // Importing React library
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import DoctorCard from '../DoctorCard/DoctorCard'; // Adjust the path based on where DoctorCard.js is located
import "./LandingPage.css"; // Importing the CSS for the landing page

// Defining the LandingPage component
const Landing_Page = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Example data for doctors (you can fetch this data from an API in a real scenario)
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
    // Add more doctor objects as needed
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Handle input change
  };

  // Filter the doctors based on the search query
  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      {/* New Find a Doctor Section */}
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

        {/* Displaying the filtered doctor cards */}
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
    </section>
  );
};

export default Landing_Page;
