import React, { useState } from 'react'; // Import useState hook
import './Navbar.css'; // Import CSS styles
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import ProfileCard from '../ProfileCard/ProfileCard'; // Import the ProfileCard component

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle
    const [dropdownVisible, setDropdownVisible] = useState(false); // State for profile dropdown visibility
    const navigate = useNavigate(); // Hook for navigation

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
    };

    const toggleProfileDropdown = () => {
        setDropdownVisible(!dropdownVisible); // Toggle profile dropdown
    };

    // Mock user data (you can replace this with actual data later)
    const user = {
        name: 'John Doe',
        image: 'https://via.placeholder.com/100',
        email: 'john.doe@example.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    };

    return (
        <div>
            <nav>
                {/* Logo Section */}
                <div className="nav__logo">
                    <a href="/">
                        StayHealthy
                        <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 1000 1000" style={{ fill: "#3685fb" }}>
                            <title>Doctor With Stethoscope SVG icon</title>
                            <g>
                                <path d="M499.8,10c91.7,0,166,74.3,166,166c0,91.7-74.3,166-166,166c-91.7,0-166-74.3-166-166C333.8,84.3,408.1,10,499.8,10z"></path>
                                <path d="M499.8,522.8c71.2,0,129.1-58.7,129.1-129.1H370.6C370.6,464.1,428.6,522.8,499.8,522.8z"></path>
                                <path d="M693.2,395c-0.7,94.9-70.3,173.7-160.8,188.9v155.9c0,80.3-60.7,150.8-140.8,155.3c-83,4.7-152.7-58.9-157.6-139.7c-22-12.8-35.6-38.5-30.3-66.7c4.7-25.1,25.5-45.6,50.8-49.9c39.7-6.7,74.1,23.7,74.1,62.1c0,23-12.3,43-30.7,54.1c4.7,45.4,45.1,80.4,92.6,76c44.6-4,77.2-44.8,77.2-91.2V583.9c-90.5-15.1-160.1-94-160.8-188.9c-17.5-0.2-32.7-13.7-32.7-31.4V322c0-17.7,14.5-32.2,32.2-32.2h323.4c17.7,0,32.2,14.5,32.2,32.2v41.7C725.9,381.2,710.8,394.8,693.2,395z"></path>
                            </g>
                        </svg>
                    </a>
                    <span>.</span>
                </div>

                {/* Hamburger Menu Icon */}
                <div className="nav__icon" onClick={handleClick}>
                    <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>

                {/* Navigation Links */}
                <ul className={`nav__links ${isMenuOpen ? 'active' : ''}`}>
                    <li className="link">
                        <a href="../">Home</a>
                    </li>
                    <li className="link">
                        <button onClick={() => navigate('/instant-consultation')} className="btn-instant">
                            Instant Consultation
                        </button>
                    </li>
                    <li className="link">
                        <button onClick={handleClick}>Appointments</button>
                    </li>
                    <li className="link">
                        <a href="../signup">
                            <button className="btn1">Sign Up</button>
                        </a>
                    </li>
                    <li className="link">
                        <a href="../Login">
                            <button className="btn1">Login</button>
                        </a>
                    </li>
                    {/* View Reports Button */}
                    <li className="link">
                        <button onClick={() => navigate('/reports')} className="btn-reports">
                            View Reports
                        </button>
                    </li>

                    {/* Profile Dropdown */}
                    <li className="link">
                        <button onClick={toggleProfileDropdown} className="profile-btn">
                            Profile
                        </button>
                        {dropdownVisible && (
                            <div className="dropdown-menu">
                                <ProfileCard user={user} />
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
