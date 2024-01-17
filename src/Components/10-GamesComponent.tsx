// eslint-disable-next-line import/no-unresolved
import Atropos from 'atropos/react';
import { Link } from 'react-router-dom';
import logo2 from '../Games/Logo.png';
import name from '../Games/Name.png';

function GamesComponent({ games }:any) {
  return (
    <div data-testid="games-component" className="games">

      {games.map(({ src, link }:any, index: any) => (
        <Link data-testid="link-to-game" to={ link } key={ index }>
          <Atropos
            data-testid="atropos-game"
            activeOffset={ 1 }
            shadowScale={ 1.05 }
            highlight={ false }
            onEnter={ () => console.log('Enter') }
            onLeave={ () => console.log('Leave') }
          >

            <img
              data-testid="game-box"
              width="300px"
              key={ src }
              src={ src }
              alt={ src }
            />
            <img
              data-testid="over-logo"
              width="80px"
              className="text-over"
              data-atropos-offset="10"
              src={ logo2 }
              alt="logo"
            />
            <img
              data-testid="over-title"
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
