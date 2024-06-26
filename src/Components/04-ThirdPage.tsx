/* eslint-disable max-len */
import { useState } from 'react';
import ClassicGames from './05-ClassicGames';
import Leon from '../Images/Leon.webp';
import village from '../Images/village.webp';
import re4 from '../Images/residentName.webp';
import Alucard from '../Images/Alucard.webp';
import castle from '../Images/Castle.webp';
import castleName from '../Images/CastlevaniaName.webp';
import knight from '../Images/DarkSoul.webp';
import dark from '../Images/dark.webp';
import ds from '../Images/DS.webp';

function ThirdPage() {
  const [Game, setGame] = useState({
    id: '0',
    re4: 're4',
    ds: '',
    castle: '',
    background: village,
    desc: 'A história segue o agente especial Leon S. Kennedy, que é enviado em uma missão para resgatar a filha do presidente dos Estados Unidos, Ashley Graham, que foi sequestrada por um culto religioso em uma parte rural da Espanha.',
    character: Leon,
    gameName: 'Resident Evil 4',
    name: re4,
  });

  const handleClick = (event:any) => {
    const { id } = event.target;
    if (id === '0') {
      setGame({
        id: '0',
        re4: 're4',
        ds: '',
        castle: '',
        background: village,
        desc: 'A história segue o agente especial Leon S. Kennedy, que é enviado em uma missão para resgatar a filha do presidente dos Estados Unidos, Ashley Graham, que foi sequestrada por um culto religioso em uma parte rural da Espanha.',
        character: Leon,
        gameName: 'resident evil 4',
        name: re4,
      });
    }
    if (id === '1') {
      setGame({
        id: '1',
        re4: '',
        ds: '',
        castle: 'castle',
        background: castle,
        desc: 'Symphony of the Night apresenta jogabilidade de rolagem lateral. O objetivo é explorar o castelo de Dracula para derrotar uma entidade que está controlando Richter Belmont, que se auto-proclamou lorde do castelo e herói dos eventos que aconteceram em Rondo of Blood.',
        character: Alucard,
        gameName: 'castlevania symphony of the night',
        name: castleName,
      });
    }
    if (id === '2') {
      setGame({
        id: '2',
        re4: '',
        ds: 'ds',
        castle: '',
        background: dark,
        desc: 'Dark Souls se passa primariamente no reino fictício de Lordran, onde os jogadores assumem o papel de um personagem denominado "Chosen Undead" que, segundo lendas, seria responsável pela quebra de uma maldição que torna incapazes de morrer aqueles que são afligidos por uma misteriosa marca negra.',
        character: knight,
        gameName: 'dark souls',
        name: ds,
      });
    }
  };

  return (
    <div className="thirdPage" data-testid="third-page">
      <h1 className="titlePage3" data-testid="classics-title">OU RELEMBRE O PASSADO</h1>

      <ClassicGames
        gameName={ Game.gameName }
        background={ Game.background }
        desc={ Game.desc }
        name={ Game.name }
        character={ Game.character }
        className={ `game${Game.id}` }
      />

      <div data-testid="classics-links" className="links">
        {' '}
        <button
          data-testid="classics-button"
          className={ `buttonGame${Game.re4}` }
          onClick={ handleClick }
          id="0"
        >
          Resindent Evil 4

        </button>
        <button
          data-testid="classics-button"
          className={ `buttonGame${Game.castle}` }
          onClick={ handleClick }
          id="1"
        >
          Castlevania
          Symphony Of The Night

        </button>
        <button
          data-testid="classics-button"
          className={ `buttonGame${Game.ds}` }
          onClick={ handleClick }
          id="2"
        >
          Dark Souls

        </button>

      </div>

    </div>
  );
}

export default ThirdPage;
