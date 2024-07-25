import React from 'react';
import ColumnsBackground from '../assets/ColumnsBackground.png'

const HomeThreeColumns = () => {
    return (
        <div>
            <div className="threeColumns">
                <div className="firstColumn">
                    <h1>10</h1>
                    <h2>ODDANYCH WORKÓW</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="secondColumn">
                    <h1>5</h1>
                    <h2>WSPARTYCH ORGANIZACJI</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="thirdColumn">
                    <h1>7</h1>
                    <h2>ZORGANIZOWANYCH ZBIÓREK</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </div>
        </div>
    );
};

export default HomeThreeColumns;