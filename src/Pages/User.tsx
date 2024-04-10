import { useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import logo from '../Assets/Logo.png';
import NavBar from '../Components/01-Navbar';
import PlansComponent from '../Components/11-PlansComponent';
import holePass from '../Games/holePass.webp';
import emptyPlan from '../Images/emptyPlan.png';
import { objGames } from '../Utils/importGames';
import { ActualPlan, BlackHoleUserFinal } from '../Interfaces/user';
import { HandleChangeFunction } from '../Interfaces/gamePage';
import { PlanI } from '../Interfaces/planPage';

function User() {
  const localUser:any = localStorage.getItem('blackHoleUser');
  const user:BlackHoleUserFinal = JSON.parse(localUser);
  const navigate:NavigateFunction = useNavigate();
  const holeGames:Array<ActualPlan> = [
    { src: holePass },
    { src: holePass }, { src: holePass }, { src: holePass }, { src: holePass }];

  const [userIcon] = useState(logo);
  const [inputs, setInput] = useState(true);
  const [editId, setEditId] = useState('');
  const [mainUser, setUser] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    cpf: user.cpf,
    username: user.username,
    desc: user.desc,
    plan: user.plan,
    planImage: user.planImage,
    purchased: user.purchased,
  });

  const actualPlan:Array<PlanI> = objGames.filter(
    ({ plan }) => plan === user.planName,
  );

  const handleChange:HandleChangeFunction = (event) => {
    const { id, value } = event.target;
    setUser({
      ...user,
      [id]: value,
    });
  };

  const handleClick:VoidFunction = () => {
    if (inputs === true) {
      setInput(false);
      setEditId('edit');
    } else {
      setEditId('');
      setInput(true);
      localStorage.setItem('blackHoleUser', JSON.stringify(mainUser));
    }
  };

  const logout:VoidFunction = () => {
    localStorage.removeItem('blackHoleUser');
    navigate('/');
  };
  return (
    <div data-testid="user-main">
      <NavBar />
      <div data-testid="user-page" className="userPage">
        <div data-testid="user" className="user">
          {}
          <img
            data-testid="user-image"
            className="userImage"
            src={ userIcon }
            alt="Imagem de Perfil"
          />

          <div />

          <div data-testid="infos" className="infos">
            <p data-testid="user-info" className="userInfo">Username</p>
            <input
              data-testid="username"
              className={ `inputUsername ${editId}` }
              id="username"
              onChange={ handleChange }
              type="text"
              value={ mainUser.username || '' }
              disabled={ inputs }
            />

            <p data-testid="user-info" className="userInfo">Nome Completo</p>
            <input
              data-testid="user-name"
              className={ `inputUser ${editId}` }
              id="name"
              onChange={ handleChange }
              type="text"
              value={ `${mainUser.firstName} ${mainUser.lastName}` }
              disabled={ inputs }
            />

            <button
              data-testid="user-button"
              className="userButton"
              onClick={ handleClick }
            >
              Editar Perfil

            </button>
            <button
              data-testid="user-button"
              className="userButton"
              onClick={ logout }
            >
              Sair da Conta

            </button>
          </div>

        </div>

        <div data-testid="assign-plan" className="assignPlan">
          <h1
            data-testid="user-title"
            className="userTitle"
          >
            PLANO DE ASSINATURA ATUAL

          </h1>

          {mainUser.purchased ? (
            <PlansComponent
              games={ actualPlan }
              plan={ mainUser.planImage }
              button="false"
              planSize="miniPlan"
              boxSize="miniGameBox"
              nameSize="mini-text-over"
              logoSize="mini-text-over2"
            />
          ) : (
            <PlansComponent
              games={ holeGames }
              plan={ emptyPlan }
              button="false"
              planSize="miniPlan"
              boxSize="miniGameBox"
              nameSize="mini-text-over"
              logoSize="mini-text-over2"
            />)}

        </div>
      </div>

    </div>
  );
}

export default User;
