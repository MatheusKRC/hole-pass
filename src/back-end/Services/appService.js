import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.mercadopago.com',
});

api.interceptors.request.use(async (config) => {
  const token = 'TEST-6667240715501519-090615-43a13614f8382626a65cadc43556742f-300449537';
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

const getMethods = async () => {
  const { data } = await api.get('v1/payment_methods');
  return data;
};

const payPix = async (body) => {
  const { data } = await api.post('v1/payments', body);
  return data;
};

const createPreference = async (body) => {
  const preference = {
    body: {
      items: [
        {
          id: body.id,
          title: body.title,
          unit_price: body.unit_price,
          quantity: Number(body.quantity),
        },
      ],
      back_urls: {
        success: 'http://localhost:5173/Final',
        failure: 'http://localhost:5173/Home',
        pending: 'http://localhost:5173/Payment',
      },
      auto_return: 'approved',
    },

  };

  return preference;
};

const getAllPreferences = async () => {
  const { data } = await api.get('checkout/preferences/search');
  return data;
};

export { getMethods, payPix, createPreference, getAllPreferences };
