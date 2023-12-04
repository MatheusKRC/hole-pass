import { useState } from 'react';
import logoPass from '../Assets/Logo2.png';
import logo from '../Assets/Logo.png';

function LoginRegister() {
  const [login, setLogin] = useState('LOGIN');
  const [inputs, setInputs] = useState(['Email', 'Password']);
  const [exist, setExist] = useState('Ainda não tenho conta');

  const handleClick = () => {
    if (login === 'LOGIN') {
      setLogin('REGISTER');
      setInputs(['First Name', 'Last Name', 'Email', 'Password', 'CPF']);
      setExist('Já possuo uma conta');
    } else {
      setLogin('LOGIN');
      setInputs(['Email', 'Password']);
      setExist('Ainda não tenho conta');
    }
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

        {inputs.map((name) => (
          <input key={ name } type="text" placeholder={ name } />
        ))}

        <button>{login}</button>
        <button onClick={ handleClick }>{exist}</button>
      </div>
    </div>
  );
}

export default LoginRegister;
