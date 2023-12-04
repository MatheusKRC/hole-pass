import { useState } from 'react';
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

  };

  return (
    <div>
      <div>
        <img src={ logoPass } alt="logo hole pass" />
        <h1>HOLE PASS</h1>

        <p>
          Um plano de assinatura que disponibiliza uma
          biblioteca de jogos baseados em suas épocas
          de lançamento, tendo jogos clássicos incluídos
          em um dos planos, além de recém chegados do
          mundo dos games e acesso antecipado a jogos
          próximo a sua data de estreia

        </p>
      </div>
      <div>
        <img src={ logo } alt="logo black hole" />
        <h1>{login}</h1>

        {inputs.map(({ pholder, id }) => (
          <input
            key={ pholder }
            onChange={ handleChange }
            type="text"
            id={ id }
            placeholder={ pholder }
          />
        ))}

        <button onClick={ handleRegister }>{login}</button>
        <button onClick={ handleClick }>{exist}</button>
      </div>
    </div>
  );
}

export default LoginRegister;
