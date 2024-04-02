import { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import logoPass from '../Assets/Logo2.png';
import logo from '../Assets/Logo.png';
import { validarCPF, validateEmail } from '../Utils/validate';
import { HandleChangeFunction } from '../Interfaces/gamePage';

function LoginRegister() {
  const [login, setLogin] = useState('LOGIN');
  const [alert, setAlert] = useState('');
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

  const navigate: NavigateFunction = useNavigate();

  const handleClick: VoidFunction = () => {
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

  const handleChange: HandleChangeFunction = (event) => {
    const { id, value } = event.target;
    setUser({
      ...user,
      [id]: value,
    });
  };

  const handleLogin = (): boolean => {
    if (validateLogin()) {
      localStorage.setItem('blackHoleUser', JSON.stringify(user));
      navigate('/');
      return true;
    } return false;
  };

  const handleRegister = (): boolean => {
    if (validateRegister()) {
      localStorage.setItem('blackHoleUser', JSON.stringify(user));
      navigate('/');
      return true;
    } return false;
  };

  useEffect(() => {
    const loginVerify = localStorage.getItem('blackHoleUser');
    if (loginVerify) {
      navigate('/');
    } else {
      console.log('ainda não possui conta');
    }
  }, [navigate]);

  const validateLogin = (): boolean => {
    const { email, password } = user;
    if (!email || !validateEmail(email)) {
      setAlert('preencha o campo E-Mail corretamente');
      return false;
    }
    if (!password || password.length < 7) {
      setAlert('preencha o campo password com no minimo 8 caracteres');
      return false;
    }
    return true;
  };

  const validateRegister = (): boolean => {
    const { firstName, lastName, cpf } = user;

    if (!firstName) {
      setAlert('preencha o campo firstName');
      return false;
    }
    if (!lastName) {
      setAlert('preencha o campo lastName');
      return false;
    }
    if (!validateLogin()) {
      return false;
    }
    if (!cpf || !validarCPF(cpf)) {
      setAlert('preencha o campo cpf corretamente');
      return false;
    }
    setAlert('');
    return true;
  };

  return (
    <div className="loginRegisterPage" data-testid="login-page">
      <div className="loginContent" data-testid="login-content">
        <img
          data-testid="login-logo"
          className="loginLogo"
          src={ logoPass }
          alt="logo hole pass"
        />
        <h1 data-testid="login-title" className="loginTitle">Hole Pass</h1>

        <p data-testid="login-desc" className="loginDesc">
          Um plano de assinatura que disponibiliza uma
          biblioteca de jogos baseados em suas épocas
          de lançamento, tendo jogos clássicos incluídos
          em um dos planos, além de recém chegados do
          mundo dos games e acesso antecipado a jogos
          próximo a sua data de estreia

        </p>
      </div>
      <div data-testid="login-form" className="loginForm">
        <img
          data-testid="login-hole-logo"
          className="loginHoleLogo"
          src={ logo }
          alt="logo black hole"
        />
        <h1 data-testid="login-reg-title" className="loginRegTitle">{login}</h1>
        {alert === '' ? null : <p data-testid="alert" className="alert">{alert}</p>}

        {inputs.map(({ pholder, id }) => (
          <div data-testid="form" key={ id }>
            <label
              data-testid="placeholder"
              htmlFor={ id }
              className="pholder"
            >
              {pholder}

            </label>
            <br />
            <input
              data-testid="login-input"
              name={ id }
              className="loginInput"
              key={ pholder }
              onChange={ handleChange }
              type={ pholder }
              id={ id }
            />
          </div>

        ))}

        <button
          data-testid="login-button"
          className="buyButton"
          onClick={ login === 'LOGIN' ? handleLogin : handleRegister }
        >
          {login}

        </button>
        <button
          data-testid="already-exist"
          className="already"
          onClick={ handleClick }
        >
          {exist}

        </button>
      </div>
    </div>
  );
}

export default LoginRegister;
