/* eslint-disable react/jsx-max-depth */
import logo2 from '../Assets/Logo2.png';
import estelar from '../Assets/plan1.png';
import intermediario from '../Assets/plan2.png';
import supermassivo from '../Assets/plan3.png';
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
        <div className="divTitle">
          <h1 className="allGamesTitle">ENTRE NO HORIZONTE DE EVENTOS</h1>
        </div>

        <div className="PLANS">
          <div className="plansContent">
            <div className="home">
              <img
                className="passLogo"
                src={ logo2 }
                alt="Logo do Hole pass"
              />
              <h1 className="homeTitle">Hole Pass</h1>

              {' '}

            </div>
            <p className="passDesc">
              Aqui estão as bibliotecas de jogos presentes em cada plano
              de assinatura, estelar, intermediário e supermassivo, cada
              plano tem sua respectiva biblioteca, mas isso não significa
              que os outros jogos estão indisponiveis, cada plano vem com a
              biblioteca de seu anterior implementada
            </p>

          </div>

          <div className="plansHoles">
            {' '}
            <img
              className="planHole"
              width="400px"
              src={ estelar }
              alt="Logo do Hole pass"
            />
            <img
              className="planHole"
              width="450px"
              src={ intermediario }
              alt="Logo do Hole pass"
            />
            <img
              className="planHole"
              width="500px"
              src={ supermassivo }
              alt="Logo do Hole pass"
            />

          </div>

        </div>

      </div>

      <PlansComponent
        games={ estelarPlan }
        plan={ plan1 }
        button="true"
        boxSize="gameBox"
        nameSize="text-over"
        logoSize="text-over2"
      />
      <PlansComponent
        games={ intermediarioPlan }
        plan={ plan3 }
        button="true"
        boxSize="gameBox"
        nameSize="text-over"
        logoSize="text-over2"
      />
      <PlansComponent
        games={ supermassivoPlan }
        plan={ plan2 }
        button="true"
        boxSize="gameBox"
        nameSize="text-over"
        logoSize="text-over2"
      />

      <Footer />
    </div>
  );
}

export default Plans;
