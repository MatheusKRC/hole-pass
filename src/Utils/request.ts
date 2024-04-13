import axios from 'axios';

const request = axios.create({
  baseURL: 'https://hole-pass.onrender.com/',
});

export const getData = async (endpoint:string) => {
  const { data } = await request.get(endpoint);
  return data;
};

export const postData = async (endpoint:string, body:any) => {
  const { data } = await request.post(endpoint, body);
  return data;
};
