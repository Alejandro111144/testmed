// Import necessary modules from React library
import React from 'react';

// Import the LandingPage component
import LandingPage from './Components/Landing_Page/Landing_Page';

// Import SignUp and Login components (Ensure these are renamed to PascalCase)
import SignUp from './Components/Sign_Up/Sign_Up'; // Changed 'Sign_Up' to 'SignUp'
import Login from './Components/Login/Login'; // Ensure 'Login' is in PascalCase

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';

// Function component for the main App
function App() {
  return (
    <div className="App">
      {/* Set up BrowserRouter for routing */}
      <BrowserRouter>
        {/* Display the Navbar component */}
        <Navbar />

        {/* Set up the Routes for different pages */}
        <Routes>
          {/* Define the Route for LandingPage component */}
          <Route path="/" element={<LandingPage />} /> {/* This will render LandingPage when the user visits the root URL */}

          {/* Define the Route for SignUp component */}
          <Route path="/signup" element={<SignUp />} /> {/* This will render SignUp page for /signup */}

          {/* Define the Route for Login component */}
          <Route path="/login" element={<Login />} /> {/* This will render Login page for /login */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;
