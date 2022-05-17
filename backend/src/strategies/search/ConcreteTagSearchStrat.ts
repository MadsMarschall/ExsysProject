import IReport from "../../interfaces/IDataProduct";
import { ISearchStrategy } from "../../interfaces/ISearchStrategy";
import IDataProduct from "../../interfaces/IDataProduct";
import reports from "../../data/Reports";

export default class ConcreteTagSearchStrat implements ISearchStrategy {
  indexContent(newReports: IDataProduct[]): void {
  }
    search(term: string): IReport[] {
        let results: IDataProduct[] = [];
        reports.forEach(e => {
            let searchStringIsFoundInTag: boolean = e.tags.some(tag => tag.includes(term));
            if (searchStringIsFoundInTag) {
                results.push(e);
            }
        });
        return results;
    }

}