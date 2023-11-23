import logo from '../Assets/Logo.png';
import perfil from '../Assets/Perfil.png';

function NavBar() {
  return (
    <div>
      <nav>
        <img
          width="150px"
          src={ logo }
          alt="Logo minimalista de um buraco negro amarelo"
        />
        <h1>BLACK HOLE</h1>
        <a href="/">Jogos</a>
        <a href="/">Planos de Assinatura</a>
        <a href="/">Serviços de Gamepass</a>
        <a href="/">Outros Projetos</a>

        <button type="button">INSCREVA-SE AGORA</button>

        <img src={ perfil } alt="Icone de um perfil de usuário" />

      </nav>

    </div>
  );
}

export default NavBar;
