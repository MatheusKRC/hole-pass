import express from 'express';
import cors from 'cors';
import { createPayment, getAllMethods } from './Controllers/appController.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/methods', getAllMethods);
app.post('/paymentPix', createPayment);
app.get('/coffe', (_req, res) => res.status(418).end());

export default app;
