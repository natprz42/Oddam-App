import React from 'react';
import { Link } from 'react-router-dom';

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
            <div className="navigation">

            </div>
            <div className="slogan">

            </div>
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