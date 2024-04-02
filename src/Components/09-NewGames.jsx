/* eslint-disable react/jsx-curly-spacing */
// import { NewGamesI } from '../Interfaces/gamePage';

function NewGames({ game, classname, gameName }) {
  return (
    <div data-testid="new-games" className={`slide ${classname}`}>
      <img
        data-testid="slider-background"
        className="sliderBackground"
        src={game}
        alt={gameName}
      />

    </div>
  );
}

export default NewGames;
