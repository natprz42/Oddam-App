import React from 'react';
import { Link } from 'react-scroll'
import { Link as RouterLink} from 'react-router-dom'
import Decoration from '../assets/Decoration.png'
import HeroImage from '../assets/HeroImage.png'
const HomeHeader = () => {

    return (
        <div className="main" id="/">
            <div className="login">
                <button className="btn1">
                    <Link to="/login">Zaloguj</Link>
                </button>
                <button className="btn1">
                    <Link to="/registration">Załóż konto</Link>
                </button>
            </div>

            <div className='navBar'>
                <ul>
                    <li>
                        <Link to="/" spy={true} smootch={true} offset={50} duration={500}>Start</Link>
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
            <img className="heroImage" src={HeroImage} alt={"decoration"}/>
            <div className="homePage">
                <div className="slogan">
                    <h1 className="slogan">Zacznij pomagać!</h1>
                    <h1 className="slogan">Oddaj niechciane rzeczy w zaufane ręce</h1>
                </div>
                <img className="decoration1" src={Decoration} alt={"decoration"}/>

                <div className="buttonSection">
                    <button className="btn2">
                        <RouterLink to="/login">ODDAJ RZECZY</RouterLink>
                    </button>
                    <button className="btn2">
                        <RouterLink to="/login">ZORGANIZUJ ZBIÓRKĘ</RouterLink>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;