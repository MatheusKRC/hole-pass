import logo2 from '../Assets/Logo2.png';
import estelar from '../Assets/Estel.png';
import intermediario from '../Assets/Interm.png';
import supermassivo from '../Assets/Superm.png';
import Footer from '../Components/08-Footer';
import NavBar from '../Components/01-Navbar';
import PlansComponent from '../Components/11-PlansComponent';
import { objGames } from '../Utils/importGames';
import plan2 from '../Images/Supermassivo.png';
import plan1 from '../Images/Estelar.png';
import plan3 from '../Images/Intermediario.png';

function Plans() {
  const estelarPlan = objGames.filter(({ plan }) => plan === 'estelar');
  const intermediarioPlan = objGames.filter(({ plan }) => plan === 'intermediario');
  const supermassivoPlan = objGames.filter(({ plan }) => plan === 'supermassivo');
  return (
    <div className="plansPage">
      <NavBar />
      <div className="plansMain">
        <h1 className="allGamesTitle">ENTRE NO HORIZONTE DE EVENTOS</h1>

        <img className="passLogo" width="200px" src={ logo2 } alt="Logo do Hole pass" />
        <h1 className="title">Hole Pass</h1>

        <p className="passDesc">
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
        plan={ plan1 }
        button="true"
      />
      <PlansComponent
        games={ intermediarioPlan }
        plan={ plan3 }
        button="true"
      />
      <PlansComponent
        games={ supermassivoPlan }
        plan={ plan2 }
        button="true"
      />

      <Footer />
    </div>
  );
}

export default Plans;
