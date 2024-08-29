import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
    const location = useLocation();

    return (
        < div className="homepage" >
            <h1>Hello {location.state.id} and Welcome to Home</h1>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/signup")}>Signup</button>
        </div >
    )
}

export default Home;