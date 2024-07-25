import React from 'react';
import People from '../assets/People.png'
import Decoration from '../assets/Decoration.png'
import Signature from '../assets/Signature.svg'

const About = () => {
    return (
        <div className="about" id="/about">
            <div className="aboutDescription">
                <h1>O nas</h1>
                <img src={Decoration} className="decoration3" alt={"Decoration"}/>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={Signature} className="signature" alt={"Signature"}/>
            </div>
            <div className="people">
                <img src={People} alt={"People"}/>
            </div>
        </div>
    );
};

export default About;