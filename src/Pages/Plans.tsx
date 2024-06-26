/* eslint-disable react/jsx-max-depth */
import logo2 from '../Assets/Logo2.webp';
import estelar from '../Assets/plan1.webp';
import intermediario from '../Assets/plan2.webp';
import supermassivo from '../Assets/plan3.webp';
import Footer from '../Components/08-Footer';
import NavBar from '../Components/01-Navbar';
import PlansComponent from '../Components/11-PlansComponent';
import { objGames } from '../Utils/importGames';
import plan2 from '../Images/Supermassivo.webp';
import plan1 from '../Images/Estelar.webp';
import plan3 from '../Images/Intermediario.webp';
import { PlanI } from '../Interfaces/planPage';

function Plans() {
  const estelarPlan:Array<PlanI> = objGames.filter(
    ({ plan }) => plan === 'estelar',
  );
  const intermediarioPlan:Array<PlanI> = objGames.filter(
    ({ plan }) => plan === 'intermediario',
  );
  const supermassivoPlan:Array<PlanI> = objGames.filter(
    ({ plan }) => plan === 'supermassivo',
  );

  return (
    <div className="plansPage" data-testid="plans-page">
      <NavBar />
      <div id="plansMain" className="plansMain" data-testid="plans-main">
        <div id="divTitle" className="divTitle" data-testid="div-title">
          <h1
            className="allGamesTitle"
            data-testid="all-games-title"
          >
            ENTRE NO HORIZONTE DE EVENTOS

          </h1>
        </div>

        <div className="PLANS" data-testid="plans">
          <div className="plansContent" data-testid="plans-content">
            <div className="home" data-testid="home">
              <img
                data-testid="pass-logo"
                className="passLogo"
                src={ logo2 }
                alt="Logo do Hole pass"
              />
              <h1 data-testid="home-title" className="homeTitle">Hole Pass</h1>

              {' '}

            </div>
            <p data-testid="pass-desc" className="passDesc">
              Aqui estão as bibliotecas de jogos presentes em cada plano
              de assinatura, estelar, intermediário e supermassivo, cada
              plano tem sua respectiva biblioteca, mas isso não significa
              que os outros jogos estão indisponiveis, cada plano vem com a
              biblioteca de seu anterior implementada
            </p>

          </div>

          <div data-testid="plans-hole" className="plansHoles">
            {' '}
            <img
              data-testid="plan-hole"
              className="planHole"
              width="400px"
              id="planEstelar"
              src={ estelar }
              alt="Logo do Hole pass"
            />
            <img
              data-testid="plan-hole"
              className="planHole"
              width="450px"
              id="planInterm"
              src={ intermediario }
              alt="Logo do Hole pass"
            />
            <img
              data-testid="plan-hole"
              className="planHole"
              width="500px"
              id="planSuperm"
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
        planSize=""
      />
      <PlansComponent
        games={ intermediarioPlan }
        plan={ plan3 }
        planSize=""
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
        planSize=""
      />

      <Footer />
    </div>
  );
}

export default Plans;
