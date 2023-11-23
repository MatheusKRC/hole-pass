import logo from '../Assets/Logo.png';
import logo2 from '../Assets/Logo2.png';
import github from '../Assets/GitHub.png';
import linkedin from '../Assets/Linkedin.png';
import ps from '../Assets/ps.png';
import xbox from '../Assets/Xbox_Logo 1.png';

function Footer() {
  return (
    <footer>

      <div>
        <img
          width="150px"
          src={ logo }
          alt="Logo minimalista de um buraco negro amarelo"
        />
        <h1>BLACK HOLE</h1>

        <p>
          Este site serve apenas como uma ideia de um produto,
          sendo implementada para divulgar conhecimento de
          desenvolvimento web com checkout de pagamento, ou seja,
          os benefícios aqui presentes são apenas fictícios.
        </p>

      </div>

      <div>
        <img width="200px" src={ logo2 } alt="Logo do Hole pass" />
        <p>
          Black Hole
          Interactive
          Entertainment

        </p>
      </div>

      <div>
        <p>Redes Sociais</p>
        <img src={ github } alt="logo do github" />
        <img src={ linkedin } alt="logo do Linkedin" />

        <p>Serviços de GamePass</p>
        <img src={ ps } alt="logo do Playstation" />
        <img src={ xbox } alt="logo do xbox" />
      </div>

    </footer>
  );
}

export default Footer;
