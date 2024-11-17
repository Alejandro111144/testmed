import React, { useState } from 'react';
import './FindDoctorSearch.css';

const specialties = [
  'Dentist', 'Gynecologist/Obstetrician', 'General Physician', 'Dermatologist',
  'Ear-Nose-Throat (ENT) Specialist', 'Homeopath', 'Ayurveda'
];

const FindDoctorSearch = () => {
  const [searchDoctor, setSearchDoctor] = useState('');
  const [doctorResultHidden, setDoctorResultHidden] = useState(true);

  const handleDoctorSelect = (speciality) => {
    setSearchDoctor(speciality);
    setDoctorResultHidden(true);  // Hide the list once a speciality is selected
  };

  return (
    <div className="finddoctor">
      <center>
        <h1>Find a Doctor for Instant Consultation</h1>
        <div className="home-search-container">
          <div className="doctor-search-box">
            <input
              type="text"
              className="search-doctor-input-box"
              placeholder="Search doctors by specialty"
              value={searchDoctor}
              onChange={(e) => setSearchDoctor(e.target.value)}
              onFocus={() => setDoctorResultHidden(false)}  // Show the list when input is focused
              onBlur={() => setDoctorResultHidden(true)}    // Hide the list when input loses focus
            />
            <div className="search-doctor-input-results" hidden={doctorResultHidden}>
              {specialties.filter(speciality => speciality.toLowerCase().includes(searchDoctor.toLowerCase())).map(speciality => (
                <div
                  className="search-doctor-result-item"
                  key={speciality}
                  onMouseDown={() => handleDoctorSelect(speciality)}
                >
                  <span>{speciality}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default FindDoctorSearch;
