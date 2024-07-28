import React from 'react';
import { Link } from 'react-scroll'
import { Link as RouterLink} from 'react-router-dom'
import Decoration from '../assets/Decoration.png'
import HeroImage from '../assets/HeroImage.png'
import Navbar from "./Navbar";
const HomeHeader = () => {

    return (
        <div className="main" id="/">
            <Navbar/>
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