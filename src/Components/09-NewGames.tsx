import NewGamesI from '../Interfaces/gamePage';

function NewGames({ game, classname }: NewGamesI) {
  return (
    <div data-testid="new-games" className={ `slide ${classname}` }>
      <img
        data-testid="slider-background"
        className="sliderBackground"
        src={ game }
        alt="cenário"
      />

    </div>
  );
}

export default NewGames;
