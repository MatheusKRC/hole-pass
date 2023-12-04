// eslint-disable-next-line import/no-unresolved
import 'atropos/css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.tsx';
import './CSS/index.css';
import './CSS/games.css';
import Games from './Pages/Games.tsx';
import Plans from './Pages/Plans.tsx';
import LoginRegister from './Pages/LoginRegister.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={ Home } />
        <Route path="/Jogos" Component={ Games } />
        <Route path="/Plans" Component={ Plans } />
        <Route path="/Login" Component={ LoginRegister } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
