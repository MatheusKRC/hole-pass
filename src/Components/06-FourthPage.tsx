import blackHole from '../Images/BuracoNegro.png';
import { estelar, intermediário, supermassivo } from '../Utils/planBenefits';
import PlanCards from './07-PlanCards';
import Estelar from '../Assets/Estelar.png';
import Intermediario from '../Assets/Intermediario.png';
import Supermassivo from '../Assets/Supermassivo.png';
import Supermassive from '../Assets/BlackHole.png';
import estelarPlan from '../Images/Estelar.png';
import intermPlan from '../Images/Intermediario.png';
import superPlan from '../Images/Supermassivo.png';

function FourthPage() {
  return (
    <div data-testid="compare-plans" className="comparePlans" id="plans">
      <h1 data-testid="plans-title" className="plansTitle">COMPARE OS PLANOS</h1>

      <img
        data-testid="plans-black-hole"
        className="plansBlackHole"
        src={ blackHole }
        alt="buraco negro"
      />

      <div data-testid="plan-cards" className="planCards">
        <PlanCards
          planCard=""
          name="estelar"
          planImage={ estelarPlan }
          img={ Estelar }
          benefits={ estelar }
          id="estelar"
          value="R$39,99"
        />
        <PlanCards
          planCard=""
          name="intermediario"
          planImage={ intermPlan }
          img={ Intermediario }
          benefits={ intermediário }
          id="intermediario"
          value="R$59,99"
        />
        <PlanCards
          planCard=""
          name="supermassivo"
          planImage={ superPlan }
          img={ Supermassivo }
          benefits={ supermassivo }
          id=""
          value="R$79,99"
        />
      </div>

      <img
        data-testid="big-black-hole"
        className="bigBlackHole"
        src={ Supermassive }
        alt="Buraco negro amarelo enorme"
      />

      <div />
    </div>
  );
}

export default FourthPage;
