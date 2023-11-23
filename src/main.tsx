import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.tsx';
import './CSS/index.css';
import Games from './Pages/Games.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={ Home } />
        <Route path="/Jogos" Component={ Games } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
