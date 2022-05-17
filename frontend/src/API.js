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
    async addTagsToDataProduct(id, tags) {
        const object = {
            tags,
            id,
        };
        await this.A.post("/addtag", object);
    }
    async getDataProductById(id) {
        let result;
        await this.A.get("/dataproducts")
            .then((res) => {
            const temp = res.data;
            result = temp.find((e) => e.id == id);
        })
            .catch((e) => {
            console.log(e);
            result = null;
        });
        if (!result) {
            result = null;
        }
        return result;
    }
}
export const api = new API();
//# sourceMappingURL=API.js.map