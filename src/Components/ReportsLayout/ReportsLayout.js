import React, { useState } from 'react';
import './ReportsLayout.css'; // Import the CSS file for styling

const ReportsLayout = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // To manage dropdown toggle

  // Sample report data
  const reports = [
    { id: 1, title: 'Report 1', date: '2024-11-01', status: 'Completed' },
    { id: 2, title: 'Report 2', date: '2024-11-02', status: 'Pending' },
    { id: 3, title: 'Report 3', date: '2024-11-03', status: 'Completed' },
  ];

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to view report
  const viewReport = () => {
    window.open('/patient_report.pdf', '_blank');
  };

  return (
    <div className="reports-layout-container">
      <div className="dropdown">
        <button className="dropdown-button" onClick={toggleDropdown}>
          Your Reports
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <p>Profile</p>
            <p>Your Reports</p>
          </div>
        )}
      </div>

      <div className="reports-table">
        <h2>Your Reports</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>{report.title}</td>
                <td>{report.date}</td>
                <td>{report.status}</td>
                <td>
                  {/* Button to view the report */}
                  <button onClick={viewReport}>View</button>

                  {/* Download link */}
                  <a href="/patient_report.pdf" download="patient_report.pdf">
                    <button>Download</button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsLayout;
