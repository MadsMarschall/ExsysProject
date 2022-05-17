"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const Reports_1 = __importDefault(require("../data/Reports"));
class DataProductController {
    constructor(searchStrategy) {
        this.searchDataProduct = (req, res) => {
            let q = req.query;
            console.log(q);
            let userHasSendASearchString = typeof q.searchString !== undefined;
            let searchStringIsNotEmpty = q.searchString ? q.searchString.length > 0 : false;
            if (userHasSendASearchString && searchStringIsNotEmpty) {
                let results = this.concreteSearchStrat.search(q.searchString);
                res.send(results);
            }
            else {
                res.send(Reports_1.default);
            }
        };
        this.addTagsToDataProduct = (req, res) => {
            console.log(req.body);
            let report = this.getReportById(req.body.id);
            if (report == null) {
                res.send("wrong formatting");
                return;
            }
            report.tags = req.body.tags;
            console.log(Reports_1.default);
            this.concreteSearchStrat.indexContent(Reports_1.default);
            res.end("yes");
        };
        this.addSuperUserToDataProduct = (req, res) => {
            console.log(req.body);
            let report = this.getReportById(req.body.id);
            if (report == null) {
                res.send("wrong formatting");
            }
            report === null || report === void 0 ? void 0 : report.superUser.push(req.body.superUser);
            console.log(report);
            res.end("yes");
        };
        this.createNewDataproduct = (req, res) => {
            try {
                let newDataProduct = req.body;
                Reports_1.default.push(newDataProduct);
            }
            catch (e) {
                console.log(e);
            }
        };
        this.modifyDataProduct = (req, res) => {
            try {
                const oldReport = lodash_1.default.find(Reports_1.default, ["id", req.body.id]);
                const updatedObject = lodash_1.default.merge(oldReport, req.body);
                let index = lodash_1.default.indexOf(Reports_1.default, lodash_1.default.find(Reports_1.default, "id"));
                Reports_1.default.splice(index, 1, updatedObject);
            }
            catch (e) {
                console.log(e);
            }
        };
        this.concreteSearchStrat = searchStrategy;
    }
    getReportById(id) {
        let result = null;
        Reports_1.default.forEach(e => {
            if (e.id == id) {
                result = e;
            }
        });
        return result;
    }
}
exports.default = DataProductController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YVByb2R1Y3RDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsic3JjL2NvbnRyb2xsZXJzL0RhdGFQcm9kdWN0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLG9EQUF1QjtBQUN2Qiw4REFBc0M7QUFLdEMsTUFBcUIscUJBQXFCO0lBR3hDLFlBQVksY0FBK0I7UUFJcEMsc0JBQWlCLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFRLEVBQUU7WUFDL0QsSUFBSSxDQUFDLEdBQXNCLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksd0JBQXdCLEdBQVksT0FBTyxDQUFDLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQztZQUM1RSxJQUFJLHNCQUFzQixHQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3pGLElBQUksd0JBQXdCLElBQUksc0JBQXNCLEVBQUU7Z0JBQ3RELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN0RSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQU8sQ0FBQyxDQUFDO2FBQ25CO1FBQ0gsQ0FBQyxDQUFBO1FBRU0seUJBQW9CLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFRLEVBQUU7WUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxD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