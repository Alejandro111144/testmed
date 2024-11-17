import React, { useEffect, useState, useCallback } from 'react';
import './InstantConsultation.css';
import { useSearchParams } from 'react-router-dom';
import FindDoctorSearchIC from './FindDoctorSearchIC/FindDoctorSearchIC';
import DoctorCardIC from './DoctorCardIC/DoctorCardIC';

const InstantConsultation = () => {
    const [searchParams] = useSearchParams();
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    // Memoize the getDoctorsDetails function to avoid unnecessary re-renders
    const getDoctorsDetails = useCallback(async () => {
        try {
            const response = await fetch('https://api.npoint.io/9a5543d36f1460da2f63');
            const data = await response.json();

            const speciality = searchParams.get('speciality');
            if (speciality) {
                const filtered = data.filter(doctor =>
                    doctor.speciality.toLowerCase() === speciality.toLowerCase()
                );

                setFilteredDoctors(filtered);
                setIsSearched(true);
            } else {
                setFilteredDoctors([]);
                setIsSearched(false);
            }

            setDoctors(data);
        } catch (error) {
            console.error('Error fetching doctor details:', error);
        }
    }, [searchParams]);

    // Handle search functionality
    const handleSearch = (searchText) => {
        if (searchText.trim() === '') {
            setFilteredDoctors([]);
            setIsSearched(false);
        } else {
            const filtered = doctors.filter(doctor =>
                doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredDoctors(filtered);
            setIsSearched(true);
        }
    };

    useEffect(() => {
        getDoctorsDetails();
    }, [getDoctorsDetails]); // Include getDoctorsDetails in the dependency array

    return (
        <center>
            <div className="searchpage-container">
                <FindDoctorSearchIC onSearch={handleSearch} />

                <div className="search-results-container">
                    {isSearched ? (
                        <center>
                            <h2>
                                {filteredDoctors.length} doctors available {searchParams.get('location') ? `in ${searchParams.get('location')}` : ''}
                            </h2>
                            <h3>Book appointments with minimum wait-time & verified doctor details</h3>
                            {filteredDoctors.length > 0 ? (
                                filteredDoctors.map(doctor => (
                                    <DoctorCardIC className="doctorcard" {...doctor} key={doctor.name} />
                                ))
                            ) : (
                                <p>No doctors found for the specified search.</p>
                            )}
                        </center>
                    ) : (
                        <p>Please search for doctors by speciality or location.</p>
                    )}
                </div>
            </div>
        </center>
    );
};

export default InstantConsultation;
