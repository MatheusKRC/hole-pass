import FirstPage from '../Components/02-FirstPage';
import FourthPage from '../Components/06-FourthPage';
import NavBar from '../Components/01-Navbar';
import SecondPage from '../Components/03-SecondPage';
import ThirdPage from '../Components/04-ThirdPage';
import Footer from '../Components/08-Footer';
import blackHole from '../Assets/BlackHole.png';

function Home() {
  return (
    <div data-testid="teste" className="mainDiv">
      <NavBar />
      <FirstPage />
      <div id="blackHole" className="homeBlackHole">
        {' '}
        <img className="blackHole" src={ blackHole } alt="buraco negro" />
      </div>

      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <Footer />
    </div>
  );
}

export default Home;
