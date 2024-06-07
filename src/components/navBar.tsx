import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    let emailId = localStorage.getItem("email");
    const [email] = useState(emailId)
    console.log('test');
    return (
        <nav>
            {email ?
                <>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/logout">Logout</Link>
                </> :
                <>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                </>
            }
        </nav>
    );
}