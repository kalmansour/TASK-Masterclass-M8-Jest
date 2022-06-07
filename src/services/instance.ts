import axios from "axios";

export const getApiUrl = (storage:Pick<Storage, "getItem"> = localStorage ): string => {
  
  if (process.env.NODE_ENV === 'development') {
    const url = storage.getItem('api') ?? process.env.REACT_APP_API_URL
    if (url){
      return url;
    }
  }
  return "https://api.example.com";
};

export const API = axios.create({
  baseURL: getApiUrl(),
});
