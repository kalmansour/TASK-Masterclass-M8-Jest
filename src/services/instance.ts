import axios from "axios";

const getApiUrl = (): string => {
  return "https://api.example.com";
};

export const API = axios.create({
  baseURL: getApiUrl(),
});
