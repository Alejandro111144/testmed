import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(""); // State to store username
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [isNotificationVisible, setIsNotificationVisible] = useState(true);

  useEffect(() => {
    // Retrieve stored username, doctor data, and appointment data
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername); // Set the username from sessionStorage
    }
    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }
    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []);

  useEffect(() => {
    // Hide the notification if there's no appointment data
    if (!appointmentData) {
      setIsNotificationVisible(false);
    }
  }, [appointmentData]);

  // Function to cancel the appointment and hide the notification
  const handleCancelAppointment = () => {
    setIsNotificationVisible(false);
  };

  return (
    <div>
      <Navbar />
      {children}
      {isLoggedIn && isNotificationVisible && appointmentData && (
        <div className="appointment-card">
          <div className="appointment-card__content">
            <h3 className="appointment-card__title">Appointment Details</h3>
            <p className="appointment-card__message">
              <strong>User:</strong> {username}
            </p>
            <p className="appointment-card__message">
              <strong>Doctor:</strong> {doctorData?.name}
            </p>
            <p className="appointment-card__message">
              <strong>Date:</strong> {appointmentData?.date}
            </p>
            <p className="appointment-card__message">
              <strong>Time:</strong> {appointmentData?.time}
            </p>
            <button onClick={handleCancelAppointment} className="cancel-button">
              Cancel Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
