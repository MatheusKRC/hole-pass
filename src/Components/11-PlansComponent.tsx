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
    <div className="games">

      <img id={ planSize } className="plansBackground" src={ plan } alt={ plan } />

      {
      button === 'true'
        ? (
          <Link className="planLink" to="/#plans">
            <button className="buyButton">Adquira Ja</button>

          </Link>) : (null)
}

      <motion.div
        ref={ carousel }
        whileTap={ { cursor: 'grabbing' } }
        className="carrousel"
        id={ planSize }
      >
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={ { right: 0, left: -width } }
          initial={ { x: 300 } }
          animate={ { x: 0 } }
          transition={ { duration: 1 } }
        >
          {games.map(({ src, link }:any, index: any) => (

            <motion.div key={ index } className="atropos">
              <Atropos
                key={ index }
                activeOffset={ 1 }
                shadowScale={ 1.05 }
                highlight={ false }
                onEnter={ () => console.log('Enter') }
                onLeave={ () => console.log('Leave') }
              >

                <img
                  className={ boxSize }
                  key={ src }
                  src={ src }
                  alt={ src }
                />

                <img
                  className={ nameSize }
                  data-atropos-offset="10"
                  src={ logo2 }
                  alt="logo"
                />
                <Link to={ link }>
                  <img
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
