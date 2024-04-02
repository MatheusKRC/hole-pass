import { getMethods, payPix } from '../Services/appService.js';

const getAllMethods = async (_req, res) => {
  const data = await getMethods();
  return res.status(200).json(data);
};

const createPayment = async (req, res) => {
  const data = await payPix(req.body);
  return res.status(200).json(data);
};

export { getAllMethods, createPayment };
