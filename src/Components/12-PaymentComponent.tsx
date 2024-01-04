/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiKey } from '../Utils/credenciais';

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
    // eslint-disable-next-line max-len
    const token = apiKey;
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
    api.post('v1/payments', body).then((response) => {
      const {
        qr_code, qr_code_base64 } = response.data.point_of_interaction.transaction_data;
      setId(response.data.id);
      setQrCode(qr_code_base64);
      setCopy(qr_code);
    }).catch((err) => {
      // eslint-disable-next-line no-alert
      alert(err);
    });
  };

  const verifyStatus = () => {
    console.log('test');

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
    } return console.log('Aguardando Pagamento');
  }, [status]);

  setInterval(verifyStatus, 3000 * 10);

  return (
    <div>
      <h1>FORMA DE PAGAMENTO</h1>

      <button onClick={ handleClick } value="pix">Pix</button>
      <button onClick={ handleClick } value="cartão">Cartão</button>

      {type === 'pix' ? (
        <div>
          <img width="200px" alt="qrCode" src={ `data:image/jpeg;base64,${qrCode}` } />
          <input type="text" onChange={ handleChange } value={ copy } />
        </div>

      ) : (
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
            value=""
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
