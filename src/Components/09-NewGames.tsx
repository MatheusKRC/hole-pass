import NewGamesI from '../Interfaces/gamePage';

function NewGames({ background, name, character }: NewGamesI) {
  return (
    <div>
      <img src={ background } alt="cenário" />

      <img width="500px" src={ name } alt="nome do jogo" />

      <img width="500px" src={ character } alt="personagem" />
    </div>
  );
}

export default NewGames;
