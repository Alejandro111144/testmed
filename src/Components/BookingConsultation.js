import React, { useState } from 'react';
import DoctorCard from './DoctorCard/DoctorCard';  // Correct path
import FindDoctorSearch from './FindDoctorSearch/FindDoctorSearch';  // Correct path
import './BookingConsultation.css';  // Correct path

const BookingConsultation = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Handle doctor selection
  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <div className="booking-consultation">
      <h2>Book a Consultation</h2>

      {/* Doctor Search */}
      <div className="find-doctor-container">
        <FindDoctorSearch onDoctorSelect={handleDoctorSelect} />
      </div>

      {/* Doctor Card */}
      {selectedDoctor && (
        <div className="doctor-card-container">
          <DoctorCard doctor={selectedDoctor} />
        </div>
      )}
    </div>
  );
};

export default BookingConsultation;
