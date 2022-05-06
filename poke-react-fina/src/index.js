import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pokeComponents/Home';
import Card from './pokeComponents/Card';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<App />} >
          <Route index element={<Home />} />
          <Route path="/pokemoncards" >
            <Route index element = {<Card />} />
           </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

