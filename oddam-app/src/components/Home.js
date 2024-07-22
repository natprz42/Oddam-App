import React from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import Contact from "./Contact";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import Sections1 from "./Sections1";
import About from "./About";
import Foundation from "./Foundation";

const Home = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='header' element={<HomeHeader />} />
                <Route path='three_columns' element={<HomeThreeColumns />} />
                <Route path='description' element={<Sections1 />} />
                <Route path='about' element={<About />} />
                <Route path='foundation' element={<Foundation />} />
                <Route path='contact' element={<Contact />} />
            </Routes>
        </HashRouter>
    );
};

export default Home;