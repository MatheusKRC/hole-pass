import logo from '../Assets/Logo.png';
import logo2 from '../Assets/Logo2Glow.png';
import github from '../Assets/GitHub.png';
import linkedin from '../Assets/Linkedin.png';
import ps from '../Assets/ps.png';
import xbox from '../Assets/Xbox_Logo 1.png';

function Footer() {
  return (
    <footer className="footer">

      <div className="footerDivDesc">
        <div className="test">
          {' '}
          <img
            className="holeLogo"
            width="150px"
            src={ logo }
            alt="Logo minimalista de um buraco negro amarelo"
          />
          <h1 className="title">BLACK HOLE</h1>

        </div>

        <p className="footerDesc">
          Este site serve apenas como uma ideia de um produto,
          sendo implementada para divulgar conhecimento de
          desenvolvimento web com checkout de pagamento, ou seja,
          os benefícios aqui presentes são apenas fictícios.
        </p>

      </div>

      <div className="footerDivLogo">
        <img className="footerLogo" width="200px" src={ logo2 } alt="Logo do Hole pass" />
        <p className="BIE">
          Black Hole
          Interactive
          Entertainment

        </p>
      </div>

      <div className="socialMedias">
        <p className="socialTitle">Redes Sociais</p>
        <div>
          <img className="socialIcon" src={ github } alt="logo do github" />
          <img className="socialIcon" src={ linkedin } alt="logo do Linkedin" />

        </div>

        <p className="socialTitle">Serviços de GamePass</p>
        <div>
          {' '}
          <img className="socialIcon" src={ ps } alt="logo do Playstation" />
          <img className="socialIcon" src={ xbox } alt="logo do xbox" />

        </div>

      </div>

    </footer>
  );
}

export default Footer;
