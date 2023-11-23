import NavBar from '../Components/01-Navbar';
import Footer from '../Components/08-Footer';
import NewGames from '../Components/09-NewGames';

function Games() {
  return (
    <div>
      <NavBar />
      <div>
        <h1>NOVIDADES</h1>

        <NewGames />
      </div>
      <Footer />
    </div>
  );
}

export default Games;
