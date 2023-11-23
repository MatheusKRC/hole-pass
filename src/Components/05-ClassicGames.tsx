import ClassicGame from '../Interfaces/homepage';

function ClassicGames({ background, desc, character, name }: ClassicGame) {
  return (
    <div>
      <img src={ background } alt="background do jogo" />

      <div>
        <p>{desc}</p>

        <img src={ character } alt="personagem" />

        <img src={ name } alt="nome do jogo" />
      </div>
    </div>
  );
}

export default ClassicGames;
