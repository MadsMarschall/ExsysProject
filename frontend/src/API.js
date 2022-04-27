import axios from "axios";
export class API {
    A;
    constructor() {
        this.A = axios.create({
            baseURL: "http://localhost:3000/api",
            timeout: 1000,
            headers: { "X-Custom-Header": "foobar" },
        });
    }
    async getAllDataProducts() {
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
            result = new Array();
        }
        return result;
    }
    async getDataProductByTagSearch(search) {
        const config = {
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
            result = new Array();
        }
        return result;
    }
    async addTagToDataProduct(id, tag) {
        const object = {
            tag: tag,
        };
        await this.A.post("/dataproducts", object);
    }
}
export const api = new API();
//# sourceMappingURL=API.js.map