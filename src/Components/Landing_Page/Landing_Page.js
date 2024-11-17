import React, { useState } from "react"; // Importing React library
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import "./LandingPage.css"; // Importing the CSS for the landing page

// Defining the LandingPage component
const Landing_Page = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Handle input change
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
      </div>
    </section>
  );
};

export default Landing_Page;
