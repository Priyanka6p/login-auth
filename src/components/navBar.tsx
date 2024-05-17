import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    let email = localStorage.getItem("email");
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