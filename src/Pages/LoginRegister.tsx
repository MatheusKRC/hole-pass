import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoPass from '../Assets/Logo2.png';
import logo from '../Assets/Logo.png';

function LoginRegister() {
  const [login, setLogin] = useState('LOGIN');
  const [inputs, setInputs] = useState([
    { pholder: 'Email', id: 'email' }, { pholder: 'Password', id: 'password' }]);
  const [exist, setExist] = useState('Ainda não tenho conta');
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cpf: '',
  });

  const navigate = useNavigate();

  const handleClick = () => {
    if (login === 'LOGIN') {
      setLogin('REGISTER');
      setInputs([
        { pholder: 'First Name', id: 'firstName' },
        { pholder: 'Last Name', id: 'lastName' },
        { pholder: 'Email', id: 'email' },
        { pholder: 'Password', id: 'password' },
        { pholder: 'CPF', id: 'cpf' }]);
      setExist('Já possuo uma conta');
    } else {
      setLogin('LOGIN');
      setInputs([
        { pholder: 'Email', id: 'email' },
        { pholder: 'Password', id: 'password' }]);
      setExist('Ainda não tenho conta');
    }
  };

  const handleChange = ({ target }: any) => {
    const { id, value } = target;
    setUser({
      ...user,
      [id]: value,
    });
  };

  const handleRegister = () => {
    if (user) {
      localStorage.setItem('blackHoleUser', JSON.stringify(user));
      navigate('/');
    } else { return false; }
  };

  useEffect(() => {
    const loginVerify = localStorage.getItem('blackHoleUser');
    if (loginVerify) {
      navigate('/');
    } else {
      console.log('ainda não possui conta');
    }
  }, [navigate]);

  return (
    <div className="loginRegisterPage">
      <div className="loginContent">
        <img className="loginLogo" src={ logoPass } alt="logo hole pass" />
        <h1 className="loginTitle">Hole Pass</h1>

        <p className="loginDesc">
          Um plano de assinatura que disponibiliza uma
          biblioteca de jogos baseados em suas épocas
          de lançamento, tendo jogos clássicos incluídos
          em um dos planos, além de recém chegados do
          mundo dos games e acesso antecipado a jogos
          próximo a sua data de estreia

        </p>
      </div>
      <div className="loginForm">
        <img className="loginHoleLogo" src={ logo } alt="logo black hole" />
        <h1 className="loginRegTitle">{login}</h1>

        {inputs.map(({ pholder, id }) => (
          <div key={ id }>
            <label htmlFor={ id } className="pholder">{pholder}</label>
            <br />
            <input
              name={ id }
              className="loginInput"
              key={ pholder }
              onChange={ handleChange }
              type="text"
              id={ id }
            />
          </div>

        ))}

        <button className="buyButton" onClick={ handleRegister }>{login}</button>
        <button className="already" onClick={ handleClick }>{exist}</button>
      </div>
    </div>
  );
}

export default LoginRegister;
