import logo from '../Assets/Logo.png';
import NavBar from '../Components/01-Navbar';
import PlansComponent from '../Components/11-PlansComponent';
import Space from '../Images/Space.jfif';
import Starfield from '../Images/Starfield.png';
import plan2 from '../Assets/plan2.png';
import { objGames } from '../Utils/importGames';

function User() {
  const supermassivoPlan = objGames.filter(({ plan }) => plan === 'supermassivo');

  return (
    <div>
      <NavBar />
      <div>
        <img src={ logo } alt="Imagem de Perfil" />

        <p>Username</p>
        <h2>Nome</h2>

        <p>Nome Completo</p>
        <h3>Matheus Santos Leão</h3>

        <p>desc</p>
        <p>descrição</p>

        <button>Editar Perfil</button>

      </div>

      <div>
        <h1>PLANO DE ASSINATURA ATUAL</h1>

        <PlansComponent
          games={ supermassivoPlan }
          background={ Space }
          character={ Starfield }
          plan={ plan2 }
          button="false"
        />
      </div>
      <div />
    </div>
  );
}

export default User;
