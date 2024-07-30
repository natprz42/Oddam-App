import React from 'react';
import {Link} from "react-scroll";
import { Link as RouterLink} from 'react-router-dom'
import Navbar from "./Navbar";
import Decoration from "../assets/Decoration.png";

const Logout = () => {
    return (
        <div>
            <Navbar/>
            <div className="logout">
                <div className="box5">
                    <h1 className="slogan">Wylogowanie nastąpiło pomyślnie</h1>
                    <img className="decoration3" src={Decoration} alt={"decoration"}/>
                    <button className="btn3">
                        <RouterLink to="/">Strona główna</RouterLink>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Logout;