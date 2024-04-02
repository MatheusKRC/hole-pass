/* eslint-disable react/jsx-curly-spacing */
import { useNavigate } from 'react-router-dom';
// import { PlanCardsI } from '../Interfaces/homepage';

function PlanCards({ name, img, benefits, value, id, planCard, planImage }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const localUser = localStorage.getItem('blackHoleUser');
    if (!localUser) {
      navigate('/Login');
    } else {
      const user = JSON.parse(localUser);
      const addPlan = {
        ...user, planImage, planName: name, plan: img, planValue: value, benefits,
      };
      localStorage.setItem('blackHoleUser', JSON.stringify(addPlan));
      navigate('/Payment');
    }
  };

  return (
    <div data-testid="plan-card" className="planCard" id={planCard}>
      <img
        data-testid="benefit-name"
        className="benefitName"
        src={img}
        alt="Nome do beneficio"
      />

      {benefits.map((line, index) => (
        <li data-testid="benefits-list" className="benefitsList" key={index}>{line}</li>
      ))}

      <button
        data-testid="buy-button"
        id={id}
        className="buyButton"
        onClick={handleClick}
      >
        {value}

      </button>
    </div>
  );
}

export default PlanCards;
