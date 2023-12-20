import { useNavigate } from 'react-router-dom';
import { PlanCardsI } from '../Interfaces/homepage';

function PlanCards({ name, benefits, value }: PlanCardsI) {
  const navigate = useNavigate();

  const handleClick = () => {
    const localUser:any = localStorage.getItem('blackHoleUser');
    if (!localUser) {
      navigate('/Login');
    } else {
      const user = JSON.parse(localUser);
      const addPlan = { ...user, plan: name, valuePlan: value, benefits };
      localStorage.setItem('blackHoleUser', JSON.stringify(addPlan));
      navigate('/Payment');
    }
  };

  return (
    <div>
      <img src={ name } alt="Nome do beneficio" />

      {benefits.map((line, index) => (
        <li key={ index }>{line}</li>
      ))}

      <button onClick={ handleClick }>{value}</button>
    </div>
  );
}

export default PlanCards;
