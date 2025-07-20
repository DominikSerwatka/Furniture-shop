import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';

function ProfilePage() {
  const { isLoggedIn, currentUser } = useAuth();

  return (
    <>
      <section className="pt-40 bg-white px-4">
        <h2>Profile Page</h2>
        {isLoggedIn ? <p>User is logged in {currentUser.name}</p> : <p>User is not logged in</p>}
      </section>
    </>
  );
}

export default ProfilePage;
