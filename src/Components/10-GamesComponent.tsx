// eslint-disable-next-line import/no-unresolved
import Atropos from 'atropos/react';
import { Link } from 'react-router-dom';
import logo2 from '../Games/Logo.png';
import name from '../Games/Name.png';

function GamesComponent({ games }:any) {
  // const [indexGame, setIndexGame] = useState(4);
  // const [initialIndex, setInitialIndex] = useState(0);

  // const handleClick = () => {
  //   if (indexGame <= games.length) {
  //     setInitialIndex(indexGame);
  //     setIndexGame(indexGame + 4);
  //   } else {
  //     setInitialIndex(0);
  //     setIndexGame(4);
  //   }
  // };

  return (
    <div className="games">

      {games.map(({ src, link }:any, index: any) => (
        <Link to={ link } key={ index }>
          <Atropos
            className={ `atropos1 ${index}` }
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

        </Link>

      ))}

    </div>
  );
}

export default GamesComponent;
