/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import NavBar from '../Components/01-Navbar';
import Footer from '../Components/08-Footer';
import NewGames from '../Components/09-NewGames';
import GamesComponent from '../Components/10-GamesComponent';
import { objGames } from '../Utils/importGames';
import Cyberpunk from '../Images/cyberpunk.png';
import Ragnarok from '../Images/ragnarok.png';
import spiderman from '../Images/spiderman.png';

function Games() {
  const [gamesView, setGamesView] = useState(objGames);
  const [filter, setFilter] = useState('');

  const handleChange = ({ target }: any) => {
    const { value } = target;
    setFilter(value);
  };

  useEffect(() => {
    if (filter.length > 0) {
      const lowerFilter = filter.toLowerCase();
      const newGames = objGames.filter(({ name }:any) => {
        const nameLower = name.toLowerCase();
        return nameLower.includes(lowerFilter);
      });
      setGamesView(newGames);
    } else {
      setGamesView(objGames);
    }
  }, [filter]);

  let count = 0;
  document.getElementById('radio0')?.setAttribute('checked', 'true');

  setInterval(() => {
    nextSlide();
  }, 2000);

  const nextSlide = () => {
    count += 1;

    if (count > 3) {
      count = 0;
    }

    document.getElementById(`radio${count - 1}`)?.removeAttribute('checked');
    document.getElementById(`radio${count}`)?.setAttribute('checked', 'true');
    document.getElementById(`radio${count + 1}`)?.removeAttribute('checked');
  };

  // Referencia do slider: https://www.youtube.com/watch?v=BpzyuuPIEaQ

  return (
    <div>
      <NavBar />
      <div className="gamesPage">
        <h1 className="gamesPageTitle">NOVIDADES</h1>

        <div className="slider">

          <div className="slides">
            <input
              name="radio"
              type="radio"
              className="slideButton"
              id="radio0"
            />
            <input
              name="radio"
              type="radio"
              className="slideButton"
              id="radio1"
            />
            <input
              name="radio"
              type="radio"
              className="slideButton"
              id="radio2"
            />

            <NewGames
              classname="first"
              game={ spiderman }
            />

            <NewGames
              classname=""
              game={ Cyberpunk }
            />

            <NewGames
              classname=""
              game={ Ragnarok }
            />

            <div className="navAuto">
              <div className="autoBtn0" />
              <div className="autoBtn1" />
              <div className="autoBtn2" />
            </div>

          </div>
        </div>

        <div className="manualNav">
          <label htmlFor="radio0" className="manualBtn" />
          <label htmlFor="radio1" className="manualBtn" />
          <label htmlFor="radio2" className="manualBtn" />
        </div>

      </div>

      <div className="allGames">
        <h1 className="allGamesTitle">TODOS OS JOGOS DISPONIVEIS</h1>

        <input className="search" type="text" onChange={ handleChange } />

        <GamesComponent games={ gamesView } />
      </div>
      <Footer />
    </div>
  );
}

export default Games;
