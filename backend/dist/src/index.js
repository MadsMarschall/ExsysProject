"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const multer_1 = __importDefault(require("multer"));
const routes_1 = __importDefault(require("./api-routes/routes"));
dotenv_1.default.config();
//Creating express app
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
//Multer is only used for multipart/form-data (usually file uploads), so it might be deleted later on since it was used before enctype was adjusted in postman
const upload = (0, multer_1.default)();
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
// parse application/json
app.use(body_parser_1.default.json());
//Setting cors policy to allow for specific frontend to connect to API
var corsOptions = {
    origin: [process.env.API_BASEURL, process.env.FRONTEND_URL],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use((0, cors_1.default)(corsOptions));
//Helmet sets standard policies and catches a few common vulnerabilities
app.use((0, helmet_1.default)());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
//setupControllers
//Adding routes
app.use("/api", routes_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJzcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsOERBQXFDO0FBQ3JDLGdEQUF3QjtBQUN4QixvREFBNEI7QUFDNUIsb0RBQTRCO0FBQzVCLG9EQUE0QjtBQUM1QixpRUFBeUM7QUFHekMsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQixzQkFBc0I7QUFDdEIsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFDdEIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBRXRDLDhKQUE4SjtBQUM5SixNQUFNLE1BQU0sR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztBQUd4QixHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsVUFBVSxDQUFDO0lBQzFCLFFBQVEsRUFBRSxJQUFJO0NBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBRUoseUJBQXlCO0FBQ3pCLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBRzFCLHNFQUFzRTtBQUN0RSxJQUFJLFdBQVcsR0FBRztJQUNkLE1BQU0sRUFBRSxDQUFTLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFTLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO0lBQzFFLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyw2REFBNkQ7Q0FDMUYsQ0FBQTtBQUNELEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEVBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtBQUcxQix3RUFBd0U7QUFDeEUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGdCQUFNLEdBQUUsQ0FBQyxDQUFDO0FBR2xCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBa0I7QUFJbEIsZUFBZTtBQUNmLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLGdCQUFNLENBQUMsQ0FBQTtBQUd0QixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQUMsQ0FBQyJ9