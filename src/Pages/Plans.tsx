import logo2 from '../Assets/Logo2.png';
import estelar from '../Assets/Estel.png';
import intermediario from '../Assets/Interm.png';
import supermassivo from '../Assets/Superm.png';
import Footer from '../Components/08-Footer';
import NavBar from '../Components/01-Navbar';
import PlansComponent from '../Components/11-PlansComponent';
import { objGames } from '../Utils/importGames';

function Plans() {
  return (
    <div>
      <NavBar />
      <div>
        <h1>ENTRE NO HORIZONTE DE EVENTOS</h1>

        <img width="200px" src={ logo2 } alt="Logo do Hole pass" />
        <h1>HOLE PASS</h1>

        <p>
          Aqui estão as bibliotecas de jogos presentes em cada plano
          de assinatura, estelar, intermediário e supermassivo, cada
          plano tem sua respectiva biblioteca, mas isso não significa
          que os outros jogos estão indisponiveis, cada plano vem com a
          biblioteca de seu anterior implementada
        </p>
        <img width="200px" src={ estelar } alt="Logo do Hole pass" />
        <img width="250px" src={ intermediario } alt="Logo do Hole pass" />
        <img width="300px" src={ supermassivo } alt="Logo do Hole pass" />
      </div>

      <PlansComponent games={ objGames } />
      <Footer />
    </div>
  );
}

export default Plans;
