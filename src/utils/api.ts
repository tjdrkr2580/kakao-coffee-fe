import { API_PATH } from "@/pages/constant/path";
import Axios from "./axios";

const axios = new Axios();

export const getBeverages = () => {
  const data = axios.get(API_PATH.BEVERAGES);
  return data;
};

export const getPopularBeverages = () => {
  const data = axios.get(API_PATH.POPULARBEVERAGES);
  return data;
};
