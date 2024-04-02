import logo2 from '../Assets/Logo2.png';
import spiderMan from '../Images/SpiderMan.png';
import spiderMan2 from '../Images/SpiderMan2.png';
import spiderManMiles from '../Images/SpiderManMiles.png';
import GodOfWar from '../Images/GodRagnar2.png';
import baldursGate from '../Images/BaldursGate2.png';
import horizon from '../Images/Horizon2.png';
import ori from '../Images/Ori.jpg';
import itTakesTwo from '../Images/ItTakesTwo.png';
import dmc from '../Images/DMC.png';

function FirstPage() {
  return (
    <div className="homePage" data-testid="first-page">
      {' '}
      <div
        id="mainContent"
        className="mainContent"
        data-testid="main-content"
      >
        {' '}

        <div className="homeGamesBoxs" data-testid="home-games-boxs">
          <img
            className="homeGamesBox"
            data-testid="home-games-box"
            src={ spiderMan }
            alt="Spider man Remastered ps4"
          />
          <img
            className="homeGamesBox"
            data-testid="home-games-box"
            src={ spiderManMiles }
            alt="Spider man Miles morales"
          />
          <img
            className="homeGamesBox"
            data-testid="home-games-box"
            src={ spiderMan2 }
            alt="Spider man 2"
          />
          <img
            className="homeGamesBox"
            data-testid="home-games-box"
            src={ dmc }
            alt="Devil May Cry definitive edition"
          />
          <img
            className="homeGamesBox"
            data-testid="home-games-box"
            height="280"
            src={ ori }
            alt="Ori For The Will And The Wisps"
          />
          <img
            className="homeGamesBox"
            data-testid="home-games-box"
            src={ itTakesTwo }
            alt="It Takes Two"
          />

        </div>

        <div className="content" data-testid="content">

          <div className="home" data-testid="home">
            <img
              data-testid="pass-logo"
              className="passLogo"
              src={ logo2 }
              alt="Logo do Hole pass"
            />
            <h1 data-testid="home-title" className="homeTitle">Hole Pass</h1>
          </div>

          <p data-testid="pass-desc" className="passDesc">
            Seja o primeiro a jogar novos jogos no primeiro dia.
            Além disso, jogue centenas de jogos de alta qualidade no
            console, PC e nuvem. Com jogos adicionados o tempo inteiro,
            sempre há algo novo para jogar.
          </p>

        </div>

      </div>

      <div data-testid="home-games" className="homeGames">
        <img
          data-testid="home-game"
          className="homeGame"
          src={ horizon }
          alt="Horizon zero dawn"
        />

        <img
          data-testid="home-game"
          className="homeGame"
          src={ GodOfWar }
          alt="God Of War Ragnarok"
        />
        <img
          data-testid="home-game"
          className="homeGame"
          src={ baldursGate }
          alt="Baldurs Gate 3"
        />
      </div>

    </div>
  );
}

export default FirstPage;
