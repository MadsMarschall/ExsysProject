"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
// create application/json parser
// create application/json parser
const multer = require("multer");
const upload = multer();
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
// parse application/json
app.use(body_parser_1.default.json());
let reports = [
    { name: "Super Cool DataProduct",
        tags: ["tag1"],
        url: "",
        id: 1 },
    { name: "Another Cool DataProduct",
        tags: ["tag2"],
        url: "",
        id: 2 }
];
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/searchbytag", (req, res) => {
    let q = req.query;
    let results = [];
    reports.forEach(e => {
        if (e.tags.includes(q.tag)) {
            results.push(e);
        }
    });
    res.send(results);
});
app.post("/addtag", upload.none(), (req, res) => {
    console.log(req.body);
    let report = getReportById(req.body.id);
    if (report == null) {
        res.send("wrong formatting");
    }
    report === null || report === void 0 ? void 0 : report.tags.push(req.body.tag);
    console.log(report);
    res.end("yes");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
function getReportById(id) {
    let result = null;
    reports.forEach(e => {
        if (e.id == id) {
            result = e;
        }
    });
    return result;
}
