import { MercadoPagoConfig, Preference } from 'mercadopago';
import {
  createPreference,
  getAllPreferences, getMethods, payPix } from '../Services/appService.js';

const getAllMethods = async (_req, res) => {
  const data = await getMethods();
  return res.status(200).json(data);
};

const createPayment = async (req, res) => {
  const data = await payPix(req.body);
  return res.status(200).json(data);
};

const client = new MercadoPagoConfig({ accessToken:
    'TEST-6667240715501519-090615-43a13614f8382626a65cadc43556742f-300449537' });
const preferenceClient = new Preference(client);

const postPreference = async (req, res) => {
  const preference = await createPreference(req.body);

  preferenceClient.create(preference)
    .then((response) => {
      res.json({
        id: response.id,
      });
    }).catch((error) => {
      console.log(error);
    });
};

const getPreference = async (req, res) => {
  console.log(req.body);
  preferenceClient.get(req.body)
    .then((response) => {
      res.json({
        response,
      });
    }).catch((error) => {
      console.log(error);
    });
};

const getPreferences = async (_req, res) => {
  const data = await getAllPreferences();
  return res.status(200).json(data);
};

export { getAllMethods, createPayment, postPreference, getPreference, getPreferences };
