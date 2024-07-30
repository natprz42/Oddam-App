import React, {useState} from 'react';
import Navbar from "./Navbar";
import Decoration from "../assets/Decoration.png";
import {Link as RouterLink} from "react-router-dom";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <Navbar/>
            <div className="loginMain">
                <div className="contactTitle">
                    <h1>Zaloguj się</h1>
                    <img className="decoration2" src={Decoration} alt={"decoration"}/>
                </div>
                    <form className="loginFrom" onSubmit={handleLogin}>
                        <div className="backgroundLogin">
                            <div className="loginEmail formSection2">
                                <label>Email</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            </div>
                            <div className="loginPassword formSection2">
                                <label>Hasło</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                <div> {password.length > 6 ? <p style = {{ color: "green" }}>Hasło jest poprawne</p> : <p style = {{ color: "red" }}>Hasło jest za krótkie</p>}
                                </div>
                            </div>
                        </div>
                        <div className="buttonLogin">
                            <button className="btn4">
                                <RouterLink to="/registration">Załóż konto</RouterLink>
                            </button>
                            <button type="submit" className="btn4">Zaloguj</button>
                        </div>
                    </form>
            </div>
        </div>
    );
};

export default LogIn;