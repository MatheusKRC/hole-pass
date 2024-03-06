/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../Assets/Logo.png';
import perfil from '../Assets/Perfil.png';
import perfilLogin from '../Assets/Perfil2.png';

function NavBar() {
  const [login, setLogin] = useState(perfil);
  const [userClass, setUserClass] = useState('defaultUser');
  const [link, setLink] = useState('/Login');
  const [active, setActive] = useState('');

  useEffect(() => {
    const loginUser = localStorage.getItem('blackHoleUser');
    if (loginUser) {
      setLogin(perfilLogin);
      setUserClass('userIcon');
      setLink('/User');
    } else {
      setLogin(perfil);
      setUserClass('defaultUser');
      setLink('/Login');
    }
  }, []);

  const addMobileClass = () => {
    if (active === '') {
      setActive('active');
      document.getElementById('games')?.classList.add('deactive');
      document.getElementById('allGames')?.classList.add('deactive');
      document.getElementById('gamesPage')?.classList.add('deactive');
      document.getElementById('mainContent')?.classList.add('deactive');
      document.getElementById('blackHole')?.classList.add('deactive');
    } else {
      setActive('');
      document.getElementById('games')?.classList.remove('deactive');
      document.getElementById('allGames')?.classList.remove('deactive');
      document.getElementById('gamesPage')?.classList.remove('deactive');
      document.getElementById('mainContent')?.classList.remove('deactive');
      document.getElementById('blackHole')?.classList.remove('deactive');
    }
  };

  return (

    <nav className="navBar" data-testid="nav-bar">
      <div
        onClick={ addMobileClass }
        onKeyUp={ addMobileClass }
        className="mobileMenu"
      >
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>

      <Link className="home" data-testid="home-link" to="/">
        <img
          data-testid="hole-logo"
          className="holeLogo"
          src={ logo }
          alt="Logo minimalista de um buraco negro amarelo"
        />
        <h1 data-testid="hole-title" className="title">Black Hole</h1>
      </Link>

      <div className={ `divLinks ${active}` }>
        <a data-testid="nav-link" className="navLink" href="/Jogos">Jogos</a>
        <a
          data-testid="nav-link"
          className="navLink"
          href="/Plans"
        >
          Planos de Assinatura
        </a>
        <a data-testid="nav-link" className="navLink" href="https://www.xbox.com/pt-BR/xbox-game-pass">Serviços de Gamepass</a>
        <a data-testid="nav-link" className="navLink" href="https://matheus-santos-leao.netlify.app/">Outros Projetos</a>
      </div>

      <a data-testid="back-button" className="backButton" href="#plans">
        {' '}
        <button
          data-testid="assign-button"
          className="assignButton"
          type="button"
        >
          INSCREVA-SE AGORA

        </button>
      </a>

      <Link data-testid="user-link" to={ link }>
        {' '}
        <img
          data-testid="user-icon"
          className={ userClass }
          src={ login }
          alt="Icone de um perfil de usuário"
        />
      </Link>

    </nav>

  );
}

export default NavBar;
