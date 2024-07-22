import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { createRoot } from 'react-dom/client';
import {
  HashRouter,
  Route,
  Routes,
  Link,
  NavLink,
  Outlet
} from 'react-router-dom';
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Registration from "./components/Registration";
import HomeHeader from "./components/HomeHeader";
import HomeThreeColumns from "./components/HomeThreeColumns";
import Sections1 from "./components/Sections1";
import About from "./components/About";
import Foundation from "./components/Foundation";
import Contact from "./components/Contact";
function App() {
  return (
      <>
          <Home/>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/login' element={<LogIn />} />
                  <Route path='/registration' element={<Registration />} />
                  <Route path='/header' element={<HomeHeader />} />
                  <Route path='/three_columns' element={<HomeThreeColumns />} />
                  <Route path='/description' element={<Sections1 />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/foundation' element={<Foundation />} />
                  <Route path='/contact' element={<Contact />} />
              </Routes>
      </>
  );
}

export default App;
