import FirstPage from '../Components/02-FirstPage';
import FourthPage from '../Components/06-FourthPage';
import NavBar from '../Components/01-Navbar';
import SecondPage from '../Components/03-SecondPage';
import ThirdPage from '../Components/04-ThirdPage';

function Home() {
  return (
    <div>
      <NavBar />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
    </div>
  );
}

export default Home;
