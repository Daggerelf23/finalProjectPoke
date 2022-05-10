import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pokeComponents/Home';
import Project from './pokeComponents/Project';

import { BrowserRouter, Routes, Route } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<App />} >
          <Route index element={<Home />} />
          <Route path="/projects" >
            <Route index element = {<Project />} />
           </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

