import React, { useState } from 'react';

// Dummy doctor data (you can replace this with actual data)
const doctors = [
  { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist' },
  { id: 2, name: 'Dr. Jane Smith', specialty: 'Dermatologist' },
  { id: 3, name: 'Dr. Richard Roe', specialty: 'Pediatrician' },
];

const FindDoctorSearch = ({ onDoctorSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter doctors based on search query
  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="find-doctor-search">
      <input
        type="text"
        placeholder="Search by doctor name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {filteredDoctors.map(doctor => (
          <li key={doctor.id} onClick={() => onDoctorSelect(doctor)}>
            {doctor.name} - {doctor.specialty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FindDoctorSearch;
