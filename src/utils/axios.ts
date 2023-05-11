import axios, { AxiosInstance, AxiosResponse } from "axios";

export default class Axios {
  private axiosInstance: AxiosInstance;

  constructor(url: string) {
    this.axiosInstance = axios.create({
      baseURL: "https://test-api.sparta99.shop",
      withCredentials: true,
    });
  }

  async get<T>(url: string, config?: any) {
    const res: AxiosResponse<T> = await this.axiosInstance.get(url);
    return res.data;
  }
}
