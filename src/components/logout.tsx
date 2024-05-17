import React, { useEffect } from 'react'
import { useNavigate, NavigateFunction } from 'react-router-dom';

const Logout = () => {
    let navigate: NavigateFunction = useNavigate();

    useEffect(()=>{
        localStorage.removeItem("email");
        return navigate('/');
    }, [3000]);

  return (
    <div>You are logging out...</div>
  )
}

export default Logout;