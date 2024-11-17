import React from 'react';
import LandingPage from './Components/Landing_Page/Landing_Page';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation'; // Import BookingConsultation
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'; // Navbar already imports FindDoctorSearch

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> {/* The Navbar already contains FindDoctorSearch */}

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          <Route path="/booking-consultation" element={<BookingConsultation />} /> {/* Added route for BookingConsultation */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
