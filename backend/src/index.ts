import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import multer from "multer";
import routes from "./api-routes/routes";
import DataProductController from "./controllers/DataProductController";
import ConcreteTagSearchStrat from "./strategies/search/ConcreteTagSearchStrat";
dotenv.config();

//Creating express app
const app = express();
const port = process.env.PORT || 3000;

//Multer is only used for multipart/form-data (usually file uploads), so it might be deleted later on since it was used before enctype was adjusted in postman
const upload = multer();


app.use(bodyParser.urlencoded({
    extended: true
}));

// parse application/json
app.use(bodyParser.json())


//Setting cors policy to allow for specific frontend to connect to API
var corsOptions = {
    origin: [<string>process.env.API_BASEURL,<string>process.env.FRONTEND_URL],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))


//Helmet sets standard policies and catches a few common vulnerabilities
app.use(helmet());


app.get("/", (req, res) => {
    res.send("Hello World!");
});

//setupControllers



//Adding routes
app.use("/api",routes)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
