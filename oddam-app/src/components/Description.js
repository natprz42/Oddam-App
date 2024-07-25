import React from 'react';
import Decoration from '../assets/Decoration.png'
import {Link} from "react-router-dom";
import Icon1 from "../assets/Icon1.png"
import Icon2 from "../assets/Icon2.png"
import Icon3 from "../assets/Icon3.png"
import Icon4 from "../assets/Icon4.png"

const Description = () => {
    return (
        <div>
            <div className="description">
                <div>
                    <h1 id="fourSteps">Wystarczą 4 proste kroki</h1>
                    <img className="decoration" src={Decoration} alt={"decoration"}/>
                </div>
                <div className="fourSteps">
                    <div className="firstStep">
                        <img src={Icon1} alt={"Icon1"}/>
                        <h2>Wybierz rzeczy</h2>
                        <div className="line"></div>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="secondStep">
                        <img src={Icon2} alt={"Icon2"}/>
                        <h2>Spakuj je</h2>
                        <div className="line"></div>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="thirdStep">
                        <img src={Icon3} alt={"Icon3"}/>
                        <h2>Zdecyduj komu chcesz pomóc</h2>
                        <div className="line"></div>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className="fourthStep">
                        <img src={Icon4} alt={"Icon4"}/>
                        <h2>Zamów kuriera</h2>
                        <div className="line"></div>
                        <p>kurier przyjedzie w dogodnym terminiels</p>
                    </div>
                </div>
                <button className="btn2 center">
                    <Link to="/login">ODDAJ RZECZY</Link>
                </button>

            </div>
        </div>
    );
};

export default Description;