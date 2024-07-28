import React from 'react';
import Background from '../assets/Background.png'
import Decoration from '../assets/Decoration.png'
import Facebook from '../assets/Facebook.png'
import Instagram from '../assets/Instagram.png'
import Form from './Form'
const Contact = () => {
    return (
        <div className="contact" id="/contact">
            <div>
                <img className="background" src={Background} alt="background"/>
            </div>
            <div className="sectionFooter">
                <div className="sectionFormFooter">
                    <div className="contactTitle">
                        <h1>Skontaktuj się z nami</h1>
                        <img className="decoration2" src={Decoration} alt={"decoration"}/>
                    </div>
                    <Form/>
                </div>
                <div className="footer">
                    <p>Copyright by Coders Lab</p>
                    <div className="logos">
                        <img src={Facebook} alt="facebook"/>
                        <img src={Instagram} alt="instagram"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;