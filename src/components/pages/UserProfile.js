import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>Displaying user information for user ID: {id}</p>
    </div>
  );
};

export default UserProfile;
