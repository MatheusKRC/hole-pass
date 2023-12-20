import { useState } from 'react';

function PaymentComponent({ planGames }:any) {
  const [type, setType] = useState('pix');
  const [card, setCard] = useState({
    name: '',
    number: '',
    mm: '',
    aa: '',
    cvv: '',
  });

  const handleClick = ({ target }:any) => {
    const { value } = target;
    setType(value);
  };

  const handleChange = ({ target }: any) => {
    const { id, value } = target;
    setCard({
      ...card,
      [id]: value,
    });
  };
  return (
    <div>
      <h1>FORMA DE PAGAMENTO</h1>

      <button onClick={ handleClick } value="pix">Pix</button>
      <button onClick={ handleClick } value="cartão">Cartão</button>

      {type === 'pix' ? (<img alt="qrCode" />) : (
        <div>
          <input
            onChange={ handleChange }
            id="name"
            placeholder="Nome do Titular"
            type="text"
          />
          <input
            onChange={ handleChange }
            id="number"
            placeholder="Número do Cartão"
            type="text"
          />
          Data de Expiração
          <input onChange={ handleChange } id="mm" placeholder="MM" type="text" />
          <input onChange={ handleChange } id="aa" placeholder="AA" type="text" />
          <input onChange={ handleChange } id="cvv" placeholder="CVV" type="text" />

          <button>Confirmar</button>
        </div>
      )}

      <h1>ALGUNS JOGOS DESSE PLANO</h1>
      {planGames.map(({ src }:any, index:any) => {
        if (index < 4) {
          return <img width="100px" key={ src } alt={ src } src={ src } />;
        } return false;
      })}
      <a href="/Plans">Veja Mais</a>
    </div>
  );
}

export default PaymentComponent;
