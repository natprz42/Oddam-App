import React from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import Contact from "./Contact";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import Sections1 from "./Sections1";
import About from "./About";
import Foundation from "./Foundation";
import Registration from "./Registration";
import LogIn from "./LogIn";

const Home = () => {
    return (
        <>
            <h1>JOme</h1>
            <HomeHeader/>

        </>
    );
};

export default Home;