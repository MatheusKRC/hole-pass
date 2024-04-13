import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.mercadopago.com',
});

api.interceptors.request.use(async (config) => {
  const production = process.env.PRODUCTION_KEY;
  const token = (
    production
    || 'TEST-6667240715501519-090615-43a13614f8382626a65cadc43556742f-300449537');
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
        success: 'https://holepass.netlify.app/Final',
        failure: 'https://holepass.netlify.app/Home',
        pending: 'https://holepass.netlify.app/Payment',
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
