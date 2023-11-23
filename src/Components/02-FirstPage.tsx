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
    <div>
      {' '}
      <div>
        {' '}
        <img width="280" src={ spiderMan } alt="Spider man Remastered ps4" />
        <img width="280" src={ spiderManMiles } alt="Spider man Miles morales" />
        <img width="280" src={ spiderMan2 } alt="Spider man 2" />
        <img width="280" src={ dmc } alt="Devil May Cry definitive edition" />
        <img width="280" height="280" src={ ori } alt="Ori For The Will And The Wisps" />
        <img width="280" src={ itTakesTwo } alt="It Takes Two" />

        <img width="200px" src={ logo2 } alt="Logo do Hole pass" />
        <h1>HOLE PASS</h1>

        <p>
          Seja o primeiro a jogar novos jogos no primeiro dia.
          Além disso, jogue centenas de jogos de alta qualidade no
          console, PC e nuvem. Com jogos adicionados o tempo inteiro,
          sempre há algo novo para jogar.
        </p>

        <a href="#plans">
          <button type="button">ASSINE AGORA</button>

        </a>

      </div>

      <div>
        <img width="350px" src={ horizon } alt="Horizon zero dawn" />
        <img width="350px" src={ GodOfWar } alt="God Of War Ragnarok" />
        <img width="350px" src={ baldursGate } alt="Baldurs Gate 3" />
      </div>

      <img src={ blackHole } alt="Buraco negro amarelo" />
    </div>
  );
}

export default FirstPage;
