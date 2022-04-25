import express from "express";
import ISearchableDataProduct from "./interfaces/ISearchableDataProduct";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
// create application/json parser
// create application/json parser

const multer = require("multer");
const upload = multer();


app.use(bodyParser.urlencoded({
  extended: true
}));
// parse application/json
app.use(bodyParser.json())

interface IReport {
  id:number,
  name: string;
  tags:string[];
  url:string;
}

let reports:IReport[] = [
    {name:"Super Cool DataProduct",
    tags:["tag1"],
    url:"",
    id:1},
  {name:"Another Cool DataProduct",
    tags:["tag2"],
  url:"",
  id:2}
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/searchbytag", (req, res) => {
  interface IQuery {
    tag:string
  }
  let q = req.query as unknown as IQuery;
  let results:IReport[] = [];
  reports.forEach(e=>{
    if(e.tags.includes(q.tag)){
      results.push(e);
    }
  })
  res.send(results);
});


app.post("/addtag",upload.none(),(req, res) => {
  console.log(req.body)
  let report = getReportById(req.body.id);

  if(report == null){
    res.send("wrong formatting");
  }

  report?.tags.push(req.body.tag);
  console.log(report);
  res.end("yes");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
function getReportById(id:number):IReport | null{
  let result:IReport  | null = null;
  reports.forEach(e=>{
    if(e.id==id){
      result = e;
    }
  })
  return result;
}
