/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postData } from '../Utils/request';

function PaymentComponent({ planGames }:any) {
  const localUser:any = localStorage.getItem('blackHoleUser');
  const user = JSON.parse(localUser);

  const [qrCode, setQrCode] = useState('');
  const [pixId, setId] = useState('');
  const [copy, setCopy] = useState('');
  const [status, setStatus] = useState('');
  const [type, setType] = useState('pix');
  const [card, setCard] = useState({
    name: '',
    number: '',
    mm: '',
    aa: '',
    cvv: '',
  });

  const navigate = useNavigate();

  const api = axios.create({
    baseURL: 'https://api.mercadopago.com',
  });

  api.interceptors.request.use(async (config) => {
    const token = 'TEST-6667240715501519-090615-43a13614f8382626a65cadc43556742f-300449537';
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  });

  const { planValue } = user;
  const number = planValue.replace('R$', '');

  const setPix = async () => {
    const body = {
      transaction_amount: parseFloat(number),
      description: user.plaName,
      payment_method_id: 'pix',
      payer: {
        email: user.email,
        first_name: user.firstName,
        last_name: user.lastName,
      },
    };
    const pix = await postData('/paymentPix', body);
    const { point_of_interaction } = pix;
    const { transaction_data } = point_of_interaction;
    const { qr_code, qr_code_base64 } = transaction_data;
    setId(pix.id);
    setQrCode(qr_code_base64);
    setCopy(qr_code);
  };

  const verifyStatus = () => {
    if (pixId) {
      api.get(`v1/payments/${pixId}`).then((response) => {
        const paymentStatus = response.data.status;
        setStatus(paymentStatus);
      });
    }
    return status;
  };

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

  useEffect(() => {
    setPix();
  }, []);

  useEffect(() => {
    if (status === 'approved') {
      return navigate('/Final');
    }
  }, [navigate, status]);

  setInterval(verifyStatus, 30000);

  return (
    <div className="paymentComponent" data-testid="payment-component">
      <h1 className="paymentTitle" data-testid="payment-title">FORMA DE PAGAMENTO</h1>

      <div data-testid="payment-div">
        <button
          data-testid="payment-method"
          className="paymentMethod"
          onClick={ handleClick }
          value="pix"
        >
          Pix

        </button>
        <button
          data-testid="payment-method"
          className="paymentMethod"
          onClick={ handleClick }
          value="cartão"
        >
          Cartão

        </button>

      </div>

      {type === 'pix' ? (
        <div data-testid="pix" className="pixDiv">
          <img
            data-testid="pix-image"
            className="pix"
            width="200px"
            alt="qrCode"
            src={ `data:image/jpeg;base64,${qrCode}` }
          />
          <input
            data-testid="pix-input"
            className="pixInput"
            type="text"
            onChange={ handleChange }
            value={ copy }
          />
        </div>

      ) : (
        <div data-testid="card-div" className="cardDiv">
          <p className="seeMore">Esta Forma de Pagamento ainda não foi implementada</p>
          <input
            data-testid="card-input"
            className="cardInput"
            onChange={ handleChange }
            id="name"
            placeholder="Nome do Titular"
            type="text"
          />
          <input
            data-testid="card-input"
            className="cardInput"
            onChange={ handleChange }
            id="number"
            value=""
            placeholder="Número do Cartão"
            type="text"
          />
          <div>
            <label
              data-testid="expiration"
              className="expiration"
              htmlFor="mmaa"
            >
              Data de Expiração

            </label>
            <br />
            <input
              data-testid="card-date"
              className="cardDate"
              onChange={ handleChange }
              id="mm"
              placeholder="MM"
              type="text"
              name="mmaa"
            />
            <input
              data-testid="card-date"
              className="cardDate"
              onChange={ handleChange }
              id="aa"
              name="mmaa"
              placeholder="AA"
              type="text"
            />
            <input
              data-testid="card-cvv"
              className="cardCVV"
              onChange={ handleChange }
              id="cvv"
              placeholder="CVV"
              type="text"
            />

          </div>

          <button
            data-testid="confirm-button"
            className="buyButton"
          >
            Confirmar

          </button>
        </div>
      )}

      <h1
        data-testid="some-games"
        className="paymentTitle"
      >
        ALGUNS JOGOS DESSE PLANO

      </h1>
      <div data-testid="some-games-div">
        {planGames.map(({ src }:any, index:any) => {
          if (index < 4) {
            return (<img
              data-testid="some-games-imgs"
              width="100px"
              key={ index }
              alt={ src }
              src={ src }
            />);
          } return false;
        })}

      </div>

      <a data-testid="see-more" className="seeMore" href="/Plans">Veja Mais</a>
    </div>
  );
}

export default PaymentComponent;
