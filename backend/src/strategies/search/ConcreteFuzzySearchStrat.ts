import IDataProduct from "../../interfaces/IDataProduct";
import { ISearchStrategy } from "../../interfaces/ISearchStrategy";
import Fuse from "fuse.js";
import reports from "../../data/Reports";

export default class ConcreteFuzzySearchStrat implements ISearchStrategy {
    private fuse:Fuse<IDataProduct>;
    constructor() {
        this.fuse = new Fuse(reports, {
            keys: ['name', 'id', "tags"],
            threshold:0.4
        })
    }
    search(term: string): IDataProduct[] {
        let result = new Array<IDataProduct>();
        this.fuse.search(term).forEach((e)=>{
            result.push(e.item);
        })
        return result;
    }

    indexContent(newReports: IDataProduct[]): void {
        this.fuse = new Fuse(reports, {
            keys: ['name', 'id', "tags"],
            threshold:0.4
        })
    }

}