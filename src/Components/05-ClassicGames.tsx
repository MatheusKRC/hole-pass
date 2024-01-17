import { ClassicGame } from '../Interfaces/homepage';

function ClassicGames({
  background, desc, character, name, className, gameName }: ClassicGame) {
  return (
    <div className="classicGames" data-testid="classic-games">

      <img
        data-testid="classic-games-back"
        className="classicGameBack"
        src={ background }
        alt="background do jogo"
      />

      <div data-testid="classic-games-content" className="classicGameContent">
        <div>
          <p data-testid="classic-desc" className="classicDesc">{desc}</p>

        </div>

        <div data-testid="classic-games-image" className="classicGameImages">
          <img
            data-testid="classic-character"
            className="classicCharacter"
            src={ character }
            alt="personagem"
          />

          <img
            data-testid="classic-name"
            className={ className }
            src={ name }
            alt={ gameName }
          />

        </div>

      </div>
    </div>
  );
}

export default ClassicGames;
