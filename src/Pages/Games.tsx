/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/label-has-associated-control */
// import { useEffect, useState } from 'react';
// import NavBar from '../Components/01-Navbar';
// import Footer from '../Components/08-Footer';
// import NewGames from '../Components/09-NewGames';
// import GamesComponent from '../Components/10-GamesComponent';
// import { objGames } from '../Utils/importGames';
// import Cyberpunk from '../Images/cyberpunk.png';
// import Ragnarok from '../Images/ragnarok.png';
// import spiderman from '../Images/spiderman.png';
// import { HandleChangeFunction } from '../Interfaces/gamePage';

function Games() {
  // const [gamesView, setGamesView] = useState(objGames);
  // const [filter, setFilter] = useState('');

  // const handleChange:HandleChangeFunction = (event) => {
  //   const { value } = event.target;
  //   setFilter(value);
  // };

  // useEffect(() => {
  //   if (filter.length > 0) {
  //     const lowerFilter:string = filter.toLowerCase();
  //     const newGames = objGames.filter(({ name }:any) => {
  //       const nameLower = name.toLowerCase();
  //       return nameLower.includes(lowerFilter);
  //     });
  //     setGamesView(newGames);
  //   } else {
  //     setGamesView(objGames);
  //   }
  // }, [filter]);

  // let count = 0;
  // document.getElementById('radio0')?.setAttribute('checked', 'true');

  // setInterval(() => {
  //   nextSlide();
  // }, 2000);

  // const nextSlide:VoidFunction = () => {
  //   count += 1;

  //   if (count > 3) {
  //     count = 0;
  //   }

  //   document.getElementById(`radio${count - 1}`)?.removeAttribute('checked');
  //   document.getElementById(`radio${count}`)?.setAttribute('checked', 'true');
  //   document.getElementById(`radio${count + 1}`)?.removeAttribute('checked');
  // };

  // Referencia do slider: https://www.youtube.com/watch?v=BpzyuuPIEaQ

  return (
    <div className="gamePage">
      <h1>Game Page</h1>
      {/* <NavBar />
      <div id="gamesPage" className="gamesPage" data-testid="games-page">
        <h1 className="gamesPageTitle" data-testid="games-page-title">NOVIDADES</h1>

        <div className="slider" data-testid="slider">

          <div className="slides" data-testid="slides">
            <input
              name="radio"
              type="radio"
              className="slideButton"
              id="radio0"
              data-testid="radio-buttons"
            />
            <input
              name="radio"
              type="radio"
              className="slideButton"
              id="radio1"
              data-testid="radio-buttons"

            />
            <input
              name="radio"
              type="radio"
              className="slideButton"
              id="radio2"
              data-testid="radio-buttons"
            />

            <NewGames
              classname="first"
              game={ spiderman }
              gameName="spiderman 2"
            />

            <NewGames
              classname=""
              game={ Cyberpunk }
              gameName="cyberpunk"
            />

            <NewGames
              classname=""
              game={ Ragnarok }
              gameName="gof of war ragnarok"
            />

            <div className="navAuto" data-testid="nav-auto">
              <div className="autoBtn0" data-testid="nav-auto-btn" />
              <div className="autoBtn1" data-testid="nav-auto-btn" />
              <div className="autoBtn2" data-testid="nav-auto-btn" />
            </div>

          </div>
        </div>

        <div className="manualNav" data-testid="nav-manual">
          <label data-testid="nav-manual-btn" htmlFor="radio0" className="manualBtn" />
          <label data-testid="nav-manual-btn" htmlFor="radio1" className="manualBtn" />
          <label data-testid="nav-manual-btn" htmlFor="radio2" className="manualBtn" />
        </div>

      </div>

      <div id="allGames" className="allGames" data-testid="all-games">
        <h1
          className="allGamesTitle"
          data-testid="all-games-title"
        >
          TODOS OS JOGOS DISPONIVEIS

        </h1>

        <input
          data-testid="search"
          className="search"
          type="text"
          // onChange={ handleChange }
        /> */}

      {/* <GamesComponent games={ gamesView } /> */}
      {/* </div>
      <Footer /> */}
    </div>
  );
}

export default Games;
