import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../Assets/Logo.png';
import perfil from '../Assets/Perfil.png';
import perfilLogin from '../Assets/Perfil2.png';

function NavBar() {
  const [login, setLogin] = useState(perfil);
  const [link, setLink] = useState('/Login');

  useEffect(() => {
    const loginUser = localStorage.getItem('blackHoleUser');
    if (loginUser) {
      setLogin(perfilLogin);
      setLink('/User');
    } else {
      setLogin(perfil);
      setLink('/Login');
    }
  }, []);

  return (
    <div>
      <nav>
        <Link to="/">
          <img
            width="150px"
            src={ logo }
            alt="Logo minimalista de um buraco negro amarelo"
          />
          <h1>BLACK HOLE</h1>
        </Link>

        <a href="/Jogos">Jogos</a>
        <a href="/Plans">Planos de Assinatura</a>
        <a href="/">Serviços de Gamepass</a>
        <a href="/">Outros Projetos</a>

        <a href="#plans">
          {' '}
          <button type="button">INSCREVA-SE AGORA</button>
        </a>

        <Link to={ link }>
          {' '}
          <img src={ login } alt="Icone de um perfil de usuário" />
        </Link>

      </nav>

    </div>
  );
}

export default NavBar;
