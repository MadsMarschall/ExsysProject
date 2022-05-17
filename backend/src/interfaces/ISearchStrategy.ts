import IReport from "./IDataProduct";
import IDataProduct from "./IDataProduct";

export interface ISearchStrategy {
  search(term:string):IReport[];

  indexContent(newReports: IDataProduct[]):void;
}