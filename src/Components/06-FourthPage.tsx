import blackHole from '../Images/BuracoNegro.png';
import { estelar, intermediário, supermassivo } from '../Utils/planBenefits';
import PlanCards from './07-PlanCards';
import Estelar from '../Assets/Estelar.png';
import Intermediario from '../Assets/Intermediario.png';
import Supermassivo from '../Assets/Supermassivo.png';
import Supermassive from '../Images/Supermassive.png';

function FourthPage() {
  return (
    <div id="plans">
      <h1>COMPARE OS PLANOS</h1>

      <img src={ blackHole } alt="buraco negro" />

      <div>
        <PlanCards
          name="estelar"
          img={ Estelar }
          benefits={ estelar }
          value="R$39,99"
        />
        <PlanCards
          name="intermediario"
          img={ Intermediario }
          benefits={ intermediário }
          value="R$59,99"
        />
        <PlanCards
          name="supermassivo"
          img={ Supermassivo }
          benefits={ supermassivo }
          value="R$79,99"
        />
      </div>

      <img src={ Supermassive } alt="Buraco negro amarelo enorme" />

      <div />
    </div>
  );
}

export default FourthPage;
