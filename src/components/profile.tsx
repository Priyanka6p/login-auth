import React from 'react'

const Profile: React.FC = () => {
  const user = localStorage.getItem('email');
  return (
    <div>
      <h1>Profile</h1>
      <h2>Hello, '{user}'</h2>
    </div>
  )
}

export default Profile;