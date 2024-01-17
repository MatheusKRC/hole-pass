/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoPass from '../Assets/Logo2.png';
import logo from '../Assets/Logo.png';
import { validarCPF, validateEmail } from '../Utils/validate';

function LoginRegister() {
  const [login, setLogin] = useState('LOGIN');
  // const [button, setButton] = useState(true);
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

  const handleLogin = () => {
    if (validateLogin()) {
      localStorage.setItem('blackHoleUser', JSON.stringify(user));
      navigate('/');
    } else { return false; }
  };

  const handleRegister = () => {
    if (validateRegister()) {
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

  const validateLogin = () => {
    const { email, password } = user;
    if (!email || !validateEmail(email)) {
      window.alert('preencha o campo E-Mail corretamente');
      return false;
    }
    if (!password || password.length < 8) {
      window.alert('preencha o campo password com no minimo 8 caracteres');
      return false;
    }
    return true;
  };

  const validateRegister = () => {
    const { firstName, lastName, cpf } = user;

    if (!firstName) {
      window.alert('preencha o campo firstName');
      return false;
    }
    if (!lastName) {
      window.alert('preencha o campo lastName');
      return false;
    }
    if (!validateLogin()) {
      return false;
    }
    if (!cpf || !validarCPF(cpf)) {
      window.alert('preencha o campo cpf corretamente');
      return false;
    }
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
