import FirstPage from '../Components/FirstPage';
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
    </div>
  );
}

export default Home;
