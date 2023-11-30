// eslint-disable-next-line import/no-unresolved
import Atropos from 'atropos/react';
// import { useState } from 'react';
import logo2 from '../Games/Logo.png';
import name from '../Games/Name.png';

function GamesComponent({ games }:any) {
  // const [indexGame, setIndexGame] = useState(4);

  // const handleClick = () => {
  //   if (indexGame <= games.length) {
  //     setIndexGame(indexGame + 4);
  //   } else {
  //     setIndexGame(4);
  //   }
  // };
  return (
    <div className="games">

      {games.map((media :any) => (

        <Atropos
          key={ media }
          className="atropos"
          activeOffset={ 1 }
          shadowScale={ 1.05 }
          highlight={ false }
          onEnter={ () => console.log('Enter') }
          onLeave={ () => console.log('Leave') }
        >

          <img
            width="300px"
            key={ media }
            src={ media }
            alt={ media }
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
      ))}

    </div>
  );
}

export default GamesComponent;
