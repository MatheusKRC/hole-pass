/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable import/no-unresolved */
import Atropos from 'atropos/react';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../Games/Logo.png';
import name from '../Games/Name.png';

function PlansComponent({ games, plan, background, character, button }:any) {
  const carousel = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);
  return (
    <div className="games">

      <img src={ plan } alt={ plan } />

      <img src={ background } alt={ background } />
      <img src={ character } alt={ character } />

      {
      button === 'true' ? <Link to="/#plans"><button>Adquira Já</button></Link> : null
}

      <motion.div
        ref={ carousel }
        whileTap={ { cursor: 'grabbing' } }
        className="carrousel"
      >
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={ { right: 0, left: -width } }
          initial={ { x: 300 } }
          animate={ { x: 0 } }
          transition={ { duration: 1 } }
        >
          {games.map(({ src }:any, index: any) => (

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
                  width="300px"
                  key={ src }
                  src={ src }
                  alt={ src }
                />
                <img
                  width="80px"
                  className="text-over"
                  data-atropos-offset="10"
                  src={ logo2 }
                  alt="logo"
                />
                <img
                  width="240px"
                  className="text-over2"
                  data-atropos-offset="5"
                  src={ name }
                  alt="black hole name"
                />

              </Atropos>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default PlansComponent;
