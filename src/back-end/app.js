import express from 'express';
import cors from 'cors';
import {
  createPayment,
  getAllMethods,
  getPreference,
  getPreferences,
  postPreference } from './Controllers/appController.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/methods', getAllMethods);
app.post('/paymentPix', createPayment);
app.post('/createPreference', postPreference);
app.post('/getPreference', getPreference);
app.get('/getAllPreferences', getPreferences);
app.get('/coffe', (_req, res) => res.status(418).end());

export default app;
