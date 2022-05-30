import axios from "axios";
import { deleteCookie } from "../Utils/cookie";
import { exchangeTokenController } from "./Exchange/controller";

const ApiClient = axios.create({
  baseURL: `https://${URL}`,
});

const hasExpired = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  const expiryTime = auth?.expiryTime;
  const tokenTimeStamp = new Date(expiryTime);
  const expiryToken = tokenTimeStamp / 1000;
  if (expiryToken < new Date() / 1000) {
    return true;
  }
  return false;
};

ApiClient.interceptors.request.use(
  async (config) => {
    const expired = hasExpired();
    if (expired) {
      await exchangeTokenController();
    }
    const auth = JSON.parse(localStorage.getItem("auth"));
    const accessToken = auth?.accessToken;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

ApiClient.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.href = "/login";
      deleteCookie("firebaseToken");
      localStorage.clear();
    }
    if (error.response.status === 500) {
      return console.log("Server Error !");
    }
    throw error;
  }
);

export default ApiClient;
