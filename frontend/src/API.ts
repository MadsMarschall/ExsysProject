import { IReport } from "@/interfaces";
import axios, { Axios, AxiosRequestConfig, AxiosResponse } from "axios";

export class API {
  private A: Axios;
  constructor() {
    this.A = axios.create({
      baseURL: "http://localhost:3000/api",
      timeout: 1000,
      headers: { "X-Custom-Header": "foobar" },
    });
  }
  async getAllDataProducts(): Promise<IReport[]> {
    let result;
    await this.A.get("/dataproducts")
      .then((res) => {
        result = res.data;
      })
      .catch((e) => {
        console.log(e);
        result = null;
      });
    if (!result) {
      result = new Array<IReport>();
    }
    return result;
  }

  async getDataProductByTagSearch(search: string): Promise<IReport[]> {
    const config: AxiosRequestConfig = {
      params: {
        searchString: search,
      },
    };
    let result;
    await this.A.get("/dataproducts", config)
      .then((res) => {
        result = res.data;
      })
      .catch((d) => {
        result = null;
      });
    if (!result) {
      result = new Array<IReport>();
    }
    return result;
  }

  async addTagToDataProduct(id: number, tag: string) {
    const object = {
      tag: tag,
    };
    await this.A.post("/dataproducts", object);
  }
}

export const api = new API();
