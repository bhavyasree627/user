import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

function Signup() {
    const [ email, setEmail ] = useState("");
    const [password, setPassword] = useState("");
    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/signup",{
                email,passowrd
            })

        } catch (error) {
            console.log(e);
        }
    }

    return (
        <div className="login"> 
            <h1> Login </h1>
            <form action="POST">
                <input type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Username" />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="submit" onClick={submit} />
            </form>
            <br />
            <p>OR</p>
            <br/>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Signup;