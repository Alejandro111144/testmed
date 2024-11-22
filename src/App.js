import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notification from './Components/Notification/Notification';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/Landing_Page';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation'; 
import ReviewForm from './Components/ReviewForm/ReviewForm'; // Import ReviewForm

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Navbar appears on every page */}
        <Navbar />
        {/* Wrap all Routes within the Notification component */}
        <Notification>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/booking-consultation" element={<BookingConsultation />} />
            <Route path="/review-form" element={<ReviewForm />} /> {/* New Route for ReviewForm */}
          </Routes>
        </Notification>
      </BrowserRouter>
    </div>
  );
}

export default App;
