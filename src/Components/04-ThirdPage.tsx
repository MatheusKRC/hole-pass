/* eslint-disable max-len */
import { useState } from 'react';
import ClassicGames from './05-ClassicGames';
import Leon from '../Images/Leon.png';
import village from '../Images/Village.png';
import re4 from '../Images/Resident Evil 41.png';
import Alucard from '../Images/Alucar.png';
import castle from '../Images/Castle.png';
import castleName from '../Images/CASTLEVANIA SYMPHONY OF THE NIGHT (TRIBUTE FILM).png';
import knight from '../Images/DarkSouls.png';
import dark from '../Images/Dark.png';
import ds from '../Images/DS.png';

function ThirdPage() {
  const [Game, setGame] = useState({
    id: '0',
    background: village,
    desc: 'A história segue o agente especial Leon S. Kennedy, que é enviado em uma missão para resgatar a filha do presidente dos Estados Unidos, Ashley Graham, que foi sequestrada por um culto religioso em uma parte rural da Espanha.',
    character: Leon,
    name: re4,
  });

  const handleClick = ({ target }: any) => {
    const { id } = target;
    if (id === '0') {
      setGame({
        id: '0',
        background: village,
        desc: 'A história segue o agente especial Leon S. Kennedy, que é enviado em uma missão para resgatar a filha do presidente dos Estados Unidos, Ashley Graham, que foi sequestrada por um culto religioso em uma parte rural da Espanha.',
        character: Leon,
        name: re4,
      });
    }
    if (id === '1') {
      setGame({
        id: '1',
        background: castle,
        desc: 'Symphony of the Night apresenta jogabilidade de rolagem lateral. O objetivo é explorar o castelo de Dracula para derrotar uma entidade que está controlando Richter Belmont, que se auto-proclamou lorde do castelo e herói dos eventos que aconteceram em Rondo of Blood.',
        character: Alucard,
        name: castleName,
      });
    }
    if (id === '2') {
      setGame({
        id: '2',
        background: dark,
        desc: 'Dark Souls se passa primariamente no reino fictício de Lordran, onde os jogadores assumem o papel de um personagem denominado "Chosen Undead" que, segundo lendas, seria responsável pela quebra de uma maldição que torna incapazes de morrer aqueles que são afligidos por uma misteriosa marca negra.',
        character: knight,
        name: ds,
      });
    }
  };

  return (
    <div className="thirdPage">
      <h1 className="titlePage3">OU RELEMBRE O PASSADO</h1>

      <ClassicGames
        background={ Game.background }
        desc={ Game.desc }
        name={ Game.name }
        character={ Game.character }
        className={ `game${Game.id}` }
      />

      <button
        className="buttonGame"
        onClick={ handleClick }
        id="0"
      >
        Resindent Evil 4

      </button>
      <button
        className="buttonGame"
        onClick={ handleClick }
        id="1"
      >
        Castlevania
        Symphony Of The Night

      </button>
      <button
        className="buttonGame"
        onClick={ handleClick }
        id="2"
      >
        Dark Souls

      </button>
    </div>
  );
}

export default ThirdPage;
