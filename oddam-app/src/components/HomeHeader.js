import React from 'react';
import { Link } from 'react-router-dom'
import Decoration from '../assets/Decoration.png'

const HomeHeader = () => {
    return (
        <div>
            <div className="login">
                <button>
                    <Link to="/login">Zaloguj</Link>
                </button>
                <button>
                    <Link to="/registration">Załóż konto</Link>
                </button>
            </div>

            <div className='navBar'>
                <div className='start'>
                    <Link to="/">Start</Link>
                </div>
                <div className='description'>
                    <Link to="/description">O co chodzi?</Link>
                </div>
                <div className='about'>
                    <Link to="/about">O nas</Link>
                </div>
                <div className='foundation'>
                    <Link to="/foundation">Fundacja i organizacje</Link>
                </div>
                <div className='contact'>
                    <Link to="contact">Kontakt</Link>
                </div>
            </div>

            <div className="slogan">
                <h1>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
            </div>
            <img src={Decoration} alt={"decoration"}/>

            <div className="buttons_1">
                <button>
                    <Link to="/login">ODDAJ RZECZY</Link>
                </button>
                <button>
                    <Link to="/login">ZORGANIZUJ ZBIÓRKĘ</Link>
                </button>
            </div>
        </div>
    );
};

export default HomeHeader;