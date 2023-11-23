import { PlanCardsI } from '../Interfaces/homepage';

function PlanCards({ name, benefits, value }: PlanCardsI) {
  return (
    <div>
      <img src={ name } alt="Nome do beneficio" />

      {benefits.map((line, index) => (
        <li key={ index }>{line}</li>
      ))}

      <button>{value}</button>
    </div>
  );
}

export default PlanCards;
