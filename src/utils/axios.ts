import axios, { AxiosInstance, AxiosResponse } from "axios";

export default class Axios {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      withCredentials: true,
    });
  }

  async get<T>(url: string, config?: any) {
    const res: AxiosResponse<T> = await this.axiosInstance.get(url);
    return res.data;
  }
}
