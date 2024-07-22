import React from 'react';

const HomeHeader = () => {
    return (
        <div>
            <button>
                <Link to="/login">Zaloguj</Link>
            </button>
            <button>
                <Link to="/registration">Załóż konto</Link>
            </button>
        </div>
    );
};

export default HomeHeader;