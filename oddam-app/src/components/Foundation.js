import Decoration from "../assets/Decoration.png";
import React, { useState } from 'react';
import FSection1 from "./FSection1";
import FSection2 from "./FSection2";
import FSection3 from "./FSection3";

const Foundation = () => {
    const [active, setActive] = useState("FirstPagination")
    return (
        <div className="foundation" id="/foundation">
            <div>
                <h1 id="help">Komu pomagamy</h1>
                <img className="decoration2" src={Decoration} alt={"decoration"}/>
            </div>
            <div className="categories">
                <button className="btn3" onClick={() => setActive("FirstPagination")}>
                    Fundacjom
                </button>
                <button className="btn3" onClick={() => setActive("SecondPagination")}>
                    Organizacjom pozarządowym
                </button>
                <button className="btn3" onClick={() => setActive("ThirdPagination")}>
                    Lokalnym zbiórkom
                </button>
            </div>
            <div>
                <p className="foundationDescription">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
            {active === "FirstPagination" && <FSection1/>}
            {active === "SecondPagination" && <FSection2/>}
            {active === "ThirdPagination" && <FSection3/>}
        </div>
    );
};

export default Foundation;