/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable import/no-unresolved */
import Atropos from 'atropos/react';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../Games/Logo.png';
import name from '../Games/Name.png';

function PlansComponent({
  games, plan, button, boxSize, nameSize, logoSize, planSize }:any) {
  const carousel = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);
  return (
    <div className="games" data-testid="games">

      <img
        data-testid="plans-background"
        id={ planSize }
        className="plansBackground"
        src={ plan }
        alt={ plan }
      />

      {
      button === 'true'
        ? (
          <Link data-testid="plan-link" className="planLink" to="/#plans">
            <button data-testid="buy-button" className="buyButton">Adquira Ja</button>

          </Link>) : (null)
}

      <motion.div
        data-testid="carrousel"
        ref={ carousel }
        whileTap={ { cursor: 'grabbing' } }
        className="carrousel"
        id={ planSize }
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
          {games.map(({ src, link }:any, index: any) => (

            <motion.div data-testid="motion-div" key={ index } className="atropos">
              <Atropos
                data-testid="atropos"
                key={ index }
                activeOffset={ 1 }
                shadowScale={ 1.05 }
                highlight={ false }
              >

                <img
                  data-testid="game-box"
                  className={ boxSize }
                  key={ src }
                  src={ src }
                  alt={ src }
                />

                <img
                  data-testid="over-logo"
                  className={ nameSize }
                  data-atropos-offset="10"
                  src={ logo2 }
                  alt="logo"
                />
                <Link data-testid="link-game" to={ link }>
                  <img
                    data-testid="over-name"
                    className={ logoSize }
                    data-atropos-offset="5"
                    src={ name }
                    alt="black hole name"
                  />

                </Link>

              </Atropos>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default PlansComponent;
