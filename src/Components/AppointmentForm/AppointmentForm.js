import React, { useState } from "react";
import "./AppointmentForm.css"; // If you want to add styling

const AppointmentForm = () => {
  const [patientName, setPatientName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (could be sending data to an API, or saving in state, etc.)
    alert(`Appointment booked for ${patientName} on ${appointmentDate} at ${appointmentTime}`);
  };

  return (
    <div className="appointment-form-container">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <div>
          <label htmlFor="name">Patient's Name</label>
          <input
            type="text"
            id="name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Appointment Date</label>
          <input
            type="date"
            id="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="time">Appointment Time</label>
          <input
            type="time"
            id="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
