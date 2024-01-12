import logo from '../Assets/Logo.png';
import logo2 from '../Assets/Logo2Glow.png';
import github from '../Assets/GitHub.png';
import linkedin from '../Assets/Linkedin.png';
import ps from '../Assets/ps.png';
import xbox from '../Assets/Xbox_Logo 1.png';

function Footer() {
  return (
    <footer className="footer" data-testid="footer">

      <div data-testid="footer-div" className="footerDivDesc">
        <div className="test">
          {' '}
          <img
            data-testid="footer-hole-logo"
            className="holeLogo"
            width="150px"
            src={ logo }
            alt="Logo minimalista de um buraco negro amarelo"
          />
          <h1 data-testid="footer-title" className="title">BLACK HOLE</h1>

        </div>

        <p data-testid="footer-desc" className="footerDesc">
          Este site serve apenas como uma ideia de um produto,
          sendo implementada para divulgar conhecimento de
          desenvolvimento web com checkout de pagamento, ou seja,
          os benefícios aqui presentes são apenas fictícios.
        </p>

      </div>

      <div data-testid="footer-div-logo" className="footerDivLogo">
        <img
          data-testid="footer-logo"
          className="footerLogo"
          width="200px"
          src={ logo2 }
          alt="Logo do Hole pass"
        />
        <p
          data-testid="bie"
          className="BIE"
        >
          Black Hole
          Interactive
          Entertainment

        </p>
      </div>

      <div data-testid="social-medias" className="socialMedias">
        <p
          data-testid="social-title"
          className="socialTitle"
        >
          Redes Sociais

        </p>
        <div>
          <img
            data-testid="social-icon"
            className="socialIcon"
            src={ github }
            alt="logo do github"
          />
          <img
            data-testid="social-icon"
            className="socialIcon"
            src={ linkedin }
            alt="logo do Linkedin"
          />

        </div>

        <p data-testid="social-title" className="socialTitle">Serviços de GamePass</p>
        <div>
          {' '}
          <img
            data-testid="social-icon"
            className="socialIcon"
            src={ ps }
            alt="logo do Playstation"
          />
          <img
            data-testid="social-icon"
            className="socialIcon"
            src={ xbox }
            alt="logo do xbox"
          />

        </div>

      </div>

    </footer>
  );
}

export default Footer;
