import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import logo2 from '../Assets/Logo2.png';

function Final() {
  const localUser:any = localStorage.getItem('blackHoleUser');
  const user = JSON.parse(localUser);

  const havePlan = () => {
    const planPurchased = { ...user, purchased: true };
    localStorage.setItem('blackHoleUser', JSON.stringify(planPurchased));
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  useEffect(() => {
    havePlan();
  });

  return (
    <div className="paymentPage" data-testid="payment-page">
      <div id="finalPage" className="payment" data-testid="payment">
        <div className="final" data-testid="home">
          <img
            data-testid="pass-logo"
            className="passLogo"
            src={ logo2 }
            alt="Logo do Hole pass"
          />
          <h1
            data-testid="home-title"
            id="finalTitle"
            className="homeTitle"
          >
            Hole Pass
          </h1>

        </div>

        <h1 className="thankYou">
          Muito obrigado pela sua compra, aproveite e
          seja bem-vindo(a) ao horizonte de eventos
        </h1>
        <img className="finalBackground" src={ user.planImage } alt={ user.planName } />

        <button
          id="backHome"
          className="buyButton"
          onClick={ handleClick }
        >
          Voltar Para Tela Inicial
        </button>
      </div>

    </div>
  );
}

export default Final;
