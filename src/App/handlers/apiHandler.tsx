import axios from "axios";

const API_KEY = import.meta.env.VITE_API_TOKEN;

const BASE_URL = "https://coding-challenge-api.aerolab.co";

const config = {
  headers: { Authorization: `Bearer ${API_KEY}` },
};

const transport = axios.create(config);

async function getProducts() {
  const { data } = await transport.get(`${BASE_URL}/products`);
  return data;
}

async function getUserInfo() {
  const { data } = await transport.get(`${BASE_URL}/user/me`);
  return data;
}

async function redeemProduct(productId: string) {
  const { data: message } = await transport.post(`${BASE_URL}/redeem`, {
    productId,
  });

  return message;
}

async function getHistory() {
  const { data } = await transport.get(`${BASE_URL}/user/history`);

  return data;
}

async function addPoints(amount: number) {
  const { data } = await transport.post(`${BASE_URL}/user/points`, {
    amount,
  });

  return data;
}

export { getProducts, getUserInfo, redeemProduct, getHistory, addPoints };
