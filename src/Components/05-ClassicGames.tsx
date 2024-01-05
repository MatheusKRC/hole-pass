import { ClassicGame } from '../Interfaces/homepage';

function ClassicGames({ background, desc, character, name, className }: ClassicGame) {
  return (
    <div className="classicGames">

      <img className="classicGameBack" src={ background } alt="background do jogo" />

      <div className="classicGameContent">
        <div>
          <p className="classicDesc">{desc}</p>

        </div>

        <div className="classicGameImages">
          <img className="classicCharacter" src={ character } alt="personagem" />

          <img className={ className } src={ name } alt="nome do jogo" />

        </div>

      </div>
    </div>
  );
}

export default ClassicGames;
