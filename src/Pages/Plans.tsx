import logo2 from '../Assets/Logo2.png';
import estelar from '../Assets/Estel.png';
import intermediario from '../Assets/Interm.png';
import supermassivo from '../Assets/Superm.png';
import Footer from '../Components/08-Footer';
import NavBar from '../Components/01-Navbar';
import PlansComponent from '../Components/11-PlansComponent';
import { objGames } from '../Utils/importGames';
import Uncharted from '../Images/Uncharted.jpg';
import Nathan from '../Images/Nathan.png';
import Red from '../Images/Red.jfif';
import Control from '../Images/Control.png';
import Space from '../Images/Space.jfif';
import Starfield from '../Images/Starfield.png';
import plan2 from '../Assets/plan2.png';
import plan1 from '../Assets/plan1.png';
import plan3 from '../Assets/plan3.png';

function Plans() {
  const estelarPlan = objGames.filter(({ plan }) => plan === 'estelar');
  const intermediarioPlan = objGames.filter(({ plan }) => plan === 'intermediario');
  const supermassivoPlan = objGames.filter(({ plan }) => plan === 'supermassivo');
  return (
    <div>
      <NavBar />
      <div>
        <h1>ENTRE NO HORIZONTE DE EVENTOS</h1>

        <img width="200px" src={ logo2 } alt="Logo do Hole pass" />
        <h1>HOLE PASS</h1>

        <p>
          Aqui estão as bibliotecas de jogos presentes em cada plano
          de assinatura, estelar, intermediário e supermassivo, cada
          plano tem sua respectiva biblioteca, mas isso não significa
          que os outros jogos estão indisponiveis, cada plano vem com a
          biblioteca de seu anterior implementada
        </p>
        <img width="200px" src={ estelar } alt="Logo do Hole pass" />
        <img width="250px" src={ intermediario } alt="Logo do Hole pass" />
        <img width="300px" src={ supermassivo } alt="Logo do Hole pass" />
      </div>

      <PlansComponent
        games={ estelarPlan }
        background={ Uncharted }
        character={ Nathan }
        plan={ plan1 }
      />
      <PlansComponent
        games={ intermediarioPlan }
        background={ Red }
        character={ Control }
        plan={ plan3 }
      />
      <PlansComponent
        games={ supermassivoPlan }
        background={ Space }
        character={ Starfield }
        plan={ plan2 }
      />

      <Footer />
    </div>
  );
}

export default Plans;
