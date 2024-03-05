/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
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
  const carousel = useRef(null);
  const display = window.innerWidth;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(display);
    if (display < 500) {
      setWidth(display + 270);
    } else {
      setWidth(0);
    }
  }, []);

  return (
    <div data-testid="compare-plans" className="comparePlans" id="plans">
      <h1 data-testid="plans-title" className="plansTitle">COMPARE OS PLANOS</h1>

      <img
        data-testid="plans-black-hole"
        className="plansBlackHole"
        src={ blackHole }
        alt="buraco negro"
      />

      <motion.div
        data-testid="carrousel"
        ref={ carousel }
        whileTap={ { cursor: 'grabbing' } }
        className="carrouselPlans"
      >
        <motion.div
          data-testid="motion-div"
          className="inner"
          drag="x"
          dragConstraints={ { right: 0, left: -width } }
          initial={ { x: 300 } }
          animate={ { x: 0 } }
          transition={ { duration: 1 } }
        >

          <div data-testid="plan-cards" id="planCards" className="planCards">
            <PlanCards
              planCard=""
              name="estelar"
              planImage={ estelarPlan }
              img={ Estelar }
              benefits={ estelar }
              id="estelar"
              value="R$39.99"
            />
            <PlanCards
              planCard=""
              name="intermediario"
              planImage={ intermPlan }
              img={ Intermediario }
              benefits={ intermediário }
              id="intermediario"
              value="R$59.99"
            />
            <PlanCards
              planCard=""
              name="supermassivo"
              planImage={ superPlan }
              img={ Supermassivo }
              benefits={ supermassivo }
              id=""
              value="R$79.99"
            />
          </div>

        </motion.div>
      </motion.div>

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
