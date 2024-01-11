import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../Assets/Logo.png';
import perfil from '../Assets/Perfil.png';
import perfilLogin from '../Assets/Perfil2.png';

function NavBar() {
  const [login, setLogin] = useState(perfil);
  const [userClass, setUserClass] = useState('defaultUser');
  const [link, setLink] = useState('/Login');

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

  return (

    <nav className="navBar">
      <Link className="home" to="/">
        <img
          className="holeLogo"
          src={ logo }
          alt="Logo minimalista de um buraco negro amarelo"
        />
        <h1 className="title">Black Hole</h1>
      </Link>

      <a className="navLink" href="/Jogos">Jogos</a>
      <a className="navLink" href="/Plans">Planos de Assinatura</a>
      <a className="navLink" href="/">Serviços de Gamepass</a>
      <a className="navLink" href="/">Outros Projetos</a>

      <a className="backButton" href="#plans">
        {' '}
        <button className="assignButton" type="button">INSCREVA-SE AGORA</button>
      </a>

      <Link to={ link }>
        {' '}
        <img className={ userClass } src={ login } alt="Icone de um perfil de usuário" />
      </Link>

    </nav>

  );
}

export default NavBar;
