import { useState } from 'react';
import NavBar from '../Components/01-Navbar';
import Footer from '../Components/08-Footer';
import NewGames from '../Components/09-NewGames';
import spiderMan from '../Images/spiderMan.png';
import spiderName from '../Images/Spidername.png';
import timesSquare from '../Images/timesSquare.jpg';
import V from '../Images/V.png';
import cyberpunk from '../Images/CyberPunk.png';
import nightCity from '../Images/NightCity.jpg';
import kratos from '../Images/Kratos.png';
import ragnarok from '../Images/Ragnarok.png';
import lago from '../Images/Lago.jpg';

function Games() {
  const [Game, setGame] = useState({
    id: '0',
    background: timesSquare,
    character: spiderMan,
    name: spiderName,
  });

  const handleClick = ({ target }: any) => {
    const { id } = target;
    if (id === '0') {
      setGame({
        id: '0',
        background: timesSquare,
        character: spiderMan,
        name: spiderName,
      });
    }
    if (id === '1') {
      setGame({
        id: '1',
        background: nightCity,
        character: V,
        name: cyberpunk,
      });
    }
    if (id === '2') {
      setGame({
        id: '2',
        background: lago,
        character: kratos,
        name: ragnarok,
      });
    }
  };

  return (
    <div>
      <NavBar />
      <div>
        <h1>NOVIDADES</h1>

        <NewGames
          background={ Game.background }
          name={ Game.name }
          character={ Game.character }
        />
        <button onClick={ handleClick } id="0">.</button>
        <button onClick={ handleClick } id="1">.</button>
        <button onClick={ handleClick } id="2">.</button>
      </div>

      <div>
        <h1>TODOS OS JOGOS DISPONIVEIS</h1>

        <input type="text" />
      </div>
      <Footer />
    </div>
  );
}

export default Games;
