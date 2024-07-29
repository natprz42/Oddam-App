import React from 'react';
import {Link} from "react-scroll";
import { Link as RouterLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="login">
                    <button className="btn1">
                        <RouterLink to="/login">Zaloguj</RouterLink>
                    </button>
                    <button className="btn1">
                        <RouterLink to="/registration">Załóż konto</RouterLink>
                    </button>
            </div>

                <div className='navBar'>
                    <ul>
                        <li>
                            <RouterLink to="/" spy={true} smootch={true} offset={50} duration={500}>Start</RouterLink>
                        </li>
                        <li>
                            <Link to="/description" spy={true} smootch={true} offset={50} duration={500}>O co chodzi?</Link>
                        </li>
                        <li>
                            <Link to="/about" spy={true} smootch={true} offset={50} duration={500}>O nas</Link>
                        </li>
                        <li>
                            <Link to="/foundation" spy={true} smootch={true} offset={50} duration={500}>Fundacja i organizacje</Link>
                        </li>
                        <li>
                            <Link to="/contact" spy={true} smootch={true} offset={50} duration={500}>Kontakt</Link>
                        </li>
                    </ul>
                </div>
        </div>
    );
};

export default Navbar;