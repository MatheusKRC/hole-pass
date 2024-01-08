import NewGamesI from '../Interfaces/gamePage';

function NewGames({ background, name, character }: NewGamesI) {
  return (
    <div className="slider">
      <img className="sliderBackground" src={ background } alt="cenário" />

      <img className="sliderGame" width="500px" src={ name } alt="nome do jogo" />

      <img className="sliderCharacter" width="500px" src={ character } alt="personagem" />
    </div>
  );
}

export default NewGames;
