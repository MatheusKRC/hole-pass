import logo2 from '../Assets/Logo2.png';
import spiderMan from '../Images/SpiderMan.png';
import spiderMan2 from '../Images/SpiderMan2.png';
import spiderManMiles from '../Images/SpiderManMiles.png';
import GodOfWar from '../Images/GodRagnar.png';
import baldursGate from '../Images/BaldursGate.png';
import horizon from '../Images/Horizon.png';
import ori from '../Images/Ori.jpg';
import itTakesTwo from '../Images/ItTakesTwo.png';
import dmc from '../Images/DMC.png';
import blackHole from '../Assets/BlackHole.png';

function FirstPage() {
  return (
    <div className="homePage">
      {' '}
      <div className="mainContent">
        {' '}
        <img
          className="homeGamesBox"
          src={ spiderMan }
          alt="Spider man Remastered ps4"
        />
        <img
          className="homeGamesBox"
          src={ spiderManMiles }
          alt="Spider man Miles morales"
        />
        <img
          className="homeGamesBox"
          src={ spiderMan2 }
          alt="Spider man 2"
        />
        <img
          className="homeGamesBox"
          src={ dmc }
          alt="Devil May Cry definitive edition"
        />
        <img
          className="homeGamesBox"
          height="280"
          src={ ori }
          alt="Ori For The Will And The Wisps"
        />
        <img
          className="homeGamesBox"
          src={ itTakesTwo }
          alt="It Takes Two"
        />

        <img className="passLogo" src={ logo2 } alt="Logo do Hole pass" />
        <h1 className="title">HOLE PASS</h1>

        <p className="passDesc">
          Seja o primeiro a jogar novos jogos no primeiro dia.
          Além disso, jogue centenas de jogos de alta qualidade no
          console, PC e nuvem. Com jogos adicionados o tempo inteiro,
          sempre há algo novo para jogar.
        </p>

        <a href="#plans">
          <button className="assignNow" type="button">ASSINE AGORA</button>

        </a>

      </div>

      <div className="homeGames">
        <img className="homeGame" src={ horizon } alt="Horizon zero dawn" />
        <img className="homeGame" src={ GodOfWar } alt="God Of War Ragnarok" />
        <img className="homeGame" src={ baldursGate } alt="Baldurs Gate 3" />
      </div>

      <img className="blackHole" src={ blackHole } alt="Buraco negro amarelo" />
    </div>
  );
}

export default FirstPage;
