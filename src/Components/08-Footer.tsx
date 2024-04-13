import logo from '../Assets/Logo.webp';
import logo2 from '../Assets/Logo2Glow.webp';
import github from '../Assets/GitHub.webp';
import linkedin from '../Assets/Linkedin.webp';
import ps from '../Assets/ps.webp';
import xbox from '../Assets/Xbox_Logo 1.webp';

function Footer() {
  return (
    <footer id="footer" className="footer" data-testid="footer">

      <div data-testid="footer-div" className="footerDivDesc">
        <div className="test">
          {' '}
          <img
            data-testid="footer-hole-logo"
            className="holeLogo"
            id="footerHoleLogo"
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
