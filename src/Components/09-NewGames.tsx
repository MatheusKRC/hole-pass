import NewGamesI from '../Interfaces/gamePage';

function NewGames({ game, classname }: NewGamesI) {
  return (
    <div className={ `slide ${classname}` }>
      <img
        className="sliderBackground"
        src={ game }
        alt="cenário"
      />

    </div>
  );
}

export default NewGames;
