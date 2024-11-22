import React, { useEffect, useState } from 'react';
import './ProfileCard.css'; // Ensure styles are applied
import ReportsLayout from '../ReportsLayout/ReportsLayout'; // Import ReportsLayout

const ProfileCard = () => {
  const [user, setUser] = useState(null); // State for user data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Fetch the user profile when the component mounts
    const fetchUserProfile = async () => {
      try {
        const authtoken = sessionStorage.getItem("auth-token");
        const email = sessionStorage.getItem("email");

        if (!authtoken || !email) {
          window.location.href = "/login"; // Redirect if no auth token or email found
          return;
        }

        // API call to fetch user data
        const response = await fetch(`${process.env.API_URL}/api/auth/user`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Email": email,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await response.json();
        setUser(userData); // Set user data in state
      } catch (err) {
        setError(err.message); // Handle any errors
      } finally {
        setLoading(false); // Set loading to false after the fetch is done
      }
    };

    fetchUserProfile(); // Call the fetch function when component mounts
  }, []);

  // If loading, display a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there is an error, display the error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render user details once they are loaded
  return (
    <div className="profile-card">
      {user && (
        <>
          <div className="profile-image">
            <img src={user.image || '/default-profile.jpg'} alt={`${user.name}'s profile`} />
          </div>
          <div className="profile-details">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.bio}</p>
          </div>
        </>
      )}

      {/* Include the ReportsLayout component */}
      <ReportsLayout />
    </div>
  );
};

export default ProfileCard;
