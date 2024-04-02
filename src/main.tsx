// eslint-disable-next-line import/no-unresolved
import 'atropos/css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.tsx';
import './CSS/index.css';
import './CSS/games.css';
import './CSS/navBar.css';
import './CSS/home.css';
import './CSS/footer.css';
import './CSS/plans.css';
import './CSS/user.css';
import './CSS/loginRegister.css';
import './CSS/payment.css';
import './CSS/final.css';
// import Games from './Pages/Games.tsx';
import Plans from './Pages/Plans.tsx';
import LoginRegister from './Pages/LoginRegister.tsx';
// import User from './Pages/User.tsx';
import Payment from './Pages/Payment.tsx';
import Final from './Pages/Final.tsx';
import Games from './Pages/Games.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={ Home } />
        <Route path="/Jogos" Component={ Home } />
        <Route path="/Plans" Component={ Plans } />
        <Route path="/Login" Component={ LoginRegister } />
        <Route path="/User" Component={ Games } />
        <Route path="/Payment" Component={ Payment } />
        <Route path="Final" Component={ Final } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
