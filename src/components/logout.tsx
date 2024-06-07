import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout:React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("email");
    navigate('/login');
  }, [navigate]);

  return (
    <div>
      <center>
        <h3>You are logging out...</h3>
      </center>
    </div>
  );
}

export default Logout;
