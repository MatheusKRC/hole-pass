import { useNavigate } from 'react-router-dom';
import { PlanCardsI } from '../Interfaces/homepage';

function PlanCards({ name, img, benefits, value, id, planCard }: PlanCardsI) {
  const navigate = useNavigate();

  const handleClick = () => {
    const localUser:any = localStorage.getItem('blackHoleUser');
    if (!localUser) {
      navigate('/Login');
    } else {
      const user = JSON.parse(localUser);
      const addPlan = { ...user, planName: name, plan: img, planValue: value, benefits };
      localStorage.setItem('blackHoleUser', JSON.stringify(addPlan));
      navigate('/Payment');
    }
  };

  return (
    <div className="planCard" id={ planCard }>
      <img className="benefitName" src={ img } alt="Nome do beneficio" />

      {benefits.map((line, index) => (
        <li className="benefitsList" key={ index }>{line}</li>
      ))}

      <button id={ id } className="buyButton" onClick={ handleClick }>{value}</button>
    </div>
  );
}

export default PlanCards;
