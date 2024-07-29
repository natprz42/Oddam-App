import React, {useState} from 'react';
import Navbar from "./Navbar";
import Decoration from "../assets/Decoration.png";
import {Link as RouterLink} from "react-router-dom";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        if (password < 6){
            setErrorMessage("Password is less than 6.")
        }
    }

    return (
        <div>
            <Navbar/>
            <div className="loginMain">
                <div className="contactTitle">
                    <h1>Zaloguj się</h1>
                    <img className="decoration2" src={Decoration} alt={"decoration"}/>
                </div>
                <div className="backgroundLogin">
                    <form className="loginFrom" onSubmit={handleLogin}>
                        <div className="loginEmail formSection2">
                            <label>Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div className="loginPassword formSection2">
                            <label>Hasło</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            <div> {password.length > 6 ? <p style = {{ color: "green" }}>Password is ok</p> : <p style = {{ color: "red" }}>Password is too short</p>} </div>
                        </div>
                    </form>
                </div>
                <div className="buttonLogin">
                    <button className="btn4">
                        <RouterLink to="/registration">Załóż konto</RouterLink>
                    </button>
                    <button type="submit" className="btn4">Zaloguj</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;