import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm'; // Import AppointmentForm

const DoctorCard = () => {
  const [isBooking, setIsBooking] = useState(false); // Tracks whether the appointment form is open
  const [isBooked, setIsBooked] = useState(false); // Tracks whether an appointment has been booked

  // Handle booking the appointment
  const handleBookAppointment = () => {
    setIsBooking(true); // Show the appointment form
  };

  // Handle canceling the appointment
  const handleCancelAppointment = () => {
    setIsBooked(false); // Reset the booking status
    setIsBooking(false); // Close the appointment form if open
  };

  // Handle confirming the appointment
  const handleConfirmBooking = () => {
    setIsBooked(true); // Mark the appointment as booked
    setIsBooking(false); // Close the appointment form after booking
  };

  return (
    <div className="doctor-card">
      <h3>Dr. John Doe</h3>
      <p>Experience: 10 years</p>
      <p>Rating: 4.5/5</p>

      {/* Display buttons for booking or cancelling an appointment */}
      <div className="doctor-card-options-container">
        {!isBooked && !isBooking && (
          <button className="book-appointment-btn" onClick={handleBookAppointment}>
            Book Appointment
          </button>
        )}

        {isBooked && (
          <div>
            <button className="cancel-appointment-btn" onClick={handleCancelAppointment}>
              Cancel Appointment
            </button>
            <p>Appointment booked successfully!</p>
          </div>
        )}

        {isBooking && !isBooked && (
          <div>
            <AppointmentForm />
            <button className="confirm-booking-btn" onClick={handleConfirmBooking}>
              Confirm Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;
