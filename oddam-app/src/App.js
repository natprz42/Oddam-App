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
import Description from "./components/Description";
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
                  <Route path='/description' element={<Description />} />

              </Routes>
          </BrowserRouter>

      </>
  );
}

export default App;
