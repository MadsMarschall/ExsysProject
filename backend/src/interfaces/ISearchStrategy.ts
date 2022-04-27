import IReport from "./IDataProduct";

export interface ISearchStrategy {
  search(term:string):IReport[];
}