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
import Contact from "./components/Contact";
function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
