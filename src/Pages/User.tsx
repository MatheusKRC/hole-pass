import { useEffect, useState } from 'react';
import logo from '../Assets/Logo.png';
import NavBar from '../Components/01-Navbar';
import PlansComponent from '../Components/11-PlansComponent';
import Space from '../Images/Space.jfif';
import Starfield from '../Images/Starfield.png';
import plan2 from '../Assets/plan2.png';
import { objGames } from '../Utils/importGames';

function User() {
  const supermassivoPlan = objGames.filter(({ plan }) => plan === 'supermassivo');
  const localUser:any = localStorage.getItem('blackHoleUser');
  const user = JSON.parse(localUser);

  const [userIcon, setUserIcon] = useState(logo);
  const [inputs, setInput] = useState(true);
  const [mainUser, setUser] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    cpf: user.cpf,
    username: user.username,
    desc: user.desc,
  });

  const handleChange = ({ target }: any) => {
    const { id, value } = target;
    setUser({
      ...user,
      [id]: value,
    });
  };

  const handleClick = () => {
    if (inputs === true) {
      setInput(false);
    } else {
      setInput(true);
      localStorage.setItem('blackHoleUser', JSON.stringify(mainUser));
    }
  };
  return (
    <div>
      <NavBar />
      <div>
        {}
        <img src={ userIcon } alt="Imagem de Perfil" />

        <p>Username</p>
        <input
          id="username"
          onChange={ handleChange }
          type="text"
          value={ mainUser.username }
          disabled={ inputs }
        />

        <p>Nome Completo</p>
        <input
          id="name"
          onChange={ handleChange }
          type="text"
          value={ `${mainUser.firstName} ${mainUser.lastName}` }
          disabled={ inputs }
        />

        <p>descrição</p>
        <textarea
          id="desc"
          onChange={ handleChange }
          value={ mainUser.desc }
          disabled={ inputs }
        />

        <button onClick={ handleClick }>Editar Perfil</button>

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

        <button>MUDE SEU PLANO</button>
      </div>
      <div />
    </div>
  );
}

export default User;
