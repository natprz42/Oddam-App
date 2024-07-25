import logo from './logo.svg';
import React, {Component} from 'react';
import { createRoot } from 'react-dom/client';
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet, BrowserRouter
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
import './scss/main.scss'
function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/login' element={<LogIn />} />
                  <Route path='/registration' element={<Registration />} />
              </Routes>
          </BrowserRouter>

      </>
  );
}

export default App;
