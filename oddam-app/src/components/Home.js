import React from 'react';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Contact from "./Contact";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import Description from "./Description";
import About from "./About";
import Foundation from "./Foundation";
import Registration from "./Registration";
import LogIn from "./LogIn";

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeThreeColumns/>
            <Description/>
            <About/>
            <Foundation/>
        </>
    );
};

export default Home;