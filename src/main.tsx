// eslint-disable-next-line import/no-unresolved
import 'atropos/css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.tsx';
import './CSS/index.css';
import './CSS/games.css';
import './CSS/navBar.css';
import Games from './Pages/Games.tsx';
import Plans from './Pages/Plans.tsx';
import LoginRegister from './Pages/LoginRegister.tsx';
import User from './Pages/User.tsx';
import Payment from './Pages/Payment.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={ Home } />
        <Route path="/Jogos" Component={ Games } />
        <Route path="/Plans" Component={ Plans } />
        <Route path="/Login" Component={ LoginRegister } />
        <Route path="/User" Component={ User } />
        <Route path="/Payment" Component={ Payment } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
