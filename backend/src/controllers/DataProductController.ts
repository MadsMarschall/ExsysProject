import IDataProductQuery from "../interfaces/IDataProductRequest";
import IDataProduct from "../interfaces/IDataProduct";
import IReport from "../interfaces/IDataProduct";
import { Request, Response } from "express";
import _ from "lodash";
import reports from "../data/Reports";
import IUser from "../interfaces/IUser";
import { IDataProductController } from "../interfaces/IDataProductController";
import { ISearchStrategy } from "../interfaces/ISearchStrategy";

export default class DataProductController implements IDataProductController {
  concreteSearchStrat: ISearchStrategy;

  constructor(searchStrategy: ISearchStrategy) {
    this.concreteSearchStrat = searchStrategy;
  }

  public searchDataProduct = (req: Request, res: Response): void => {
    let q = <IDataProductQuery>req.query;
    console.log(q);
    let userHasSendASearchString: boolean = typeof q.searchString !== undefined;
    let searchStringIsNotEmpty: boolean = q.searchString ? q.searchString.length > 0 : false;
    if (userHasSendASearchString && searchStringIsNotEmpty) {
      let results = this.concreteSearchStrat.search(<string>q.searchString);
      res.send(results);
    } else {
      res.send(reports);
    }
  }

  public addTagsToDataProduct = (req: Request, res: Response): void =>{
    console.log(req.body);
    let report = this.getReportById(req.body.id);

    if (report == null) {
      res.send("wrong formatting");
      return
    }
    report.tags = req.body.tags;
    console.log(reports);
    this.concreteSearchStrat.indexContent(reports);
    res.end("yes");
  }

  public addSuperUserToDataProduct = (req: Request, res: Response): void => {
    console.log(req.body);
    let report = this.getReportById(req.body.id);

    if (report == null) {
      res.send("wrong formatting");
    }

    report?.superUser.push(<IUser>req.body.superUser);
    console.log(report);
    res.end("yes");
  }

  public createNewDataproduct = (req: Request, res: Response): void => {
    try {
      let newDataProduct: IDataProduct = <IDataProduct>req.body;
      reports.push(newDataProduct);
    } catch (e) {
      console.log(e);
    }
  }

  public modifyDataProduct = (req: Request, res: Response): void => {
    try {
      const oldReport: IReport = <IReport>_.find(reports, ["id", req.body.id]);
      const updatedObject: IReport = _.merge(oldReport, req.body);
      let index = _.indexOf(reports, _.find(reports, "id"));
      reports.splice(index, 1, updatedObject);
    } catch (e) {
      console.log(e);
    }
  }

  private getReportById(id: number): IDataProduct | null {
    let result: IDataProduct | null = null;
    reports.forEach(e => {
      if (e.id == id) {
        result = e;
      }
    });
    return result;
  }
}
