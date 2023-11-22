import FirstPage from '../Components/FirstPage';
import FourthPage from '../Components/FourthPage';
import NavBar from '../Components/Navbar';
import SecondPage from '../Components/SecondPage';
import ThirdPage from '../Components/ThirdPage';

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
