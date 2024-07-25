import React from 'react';
import Decoration from "../assets/Decoration.png";

const Foundation = () => {
    return (
        <div className="foundation" id="/foundation">
            <div>
                <h1 id="help">Komu pomagamy</h1>
                <img className="decoration2" src={Decoration} alt={"decoration"}/>
            </div>
            <div className="categories">
                <button className="btn3">
                    Fundacjom
                </button>
                <button className="btn3">
                    Organizacjom pozarządowym
                </button>
                <button className="btn3">
                    Lokalnym zbiórkom
                </button>
            </div>
            <div>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
        </div>
    );
};

export default Foundation;