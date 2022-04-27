"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Reports_1 = __importDefault(require("../../data/Reports"));
class ConcreteTagSearchStrat {
    search(term) {
        let results = [];
        Reports_1.default.forEach(e => {
            let searchStringIsFoundInTag = e.tags.some(tag => tag.includes(term));
            if (searchStringIsFoundInTag) {
                results.push(e);
            }
        });
        return results;
    }
}
exports.default = ConcreteTagSearchStrat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uY3JldGVUYWdTZWFyY2hTdHJhdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNyYy9zdHJhdGVnaWVzL3NlYXJjaC9Db25jcmV0ZVRhZ1NlYXJjaFN0cmF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsaUVBQXlDO0FBRXpDLE1BQXFCLHNCQUFzQjtJQUN2QyxNQUFNLENBQUMsSUFBWTtRQUNmLElBQUksT0FBTyxHQUFtQixFQUFFLENBQUM7UUFDakMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEIsSUFBSSx3QkFBd0IsR0FBWSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMvRSxJQUFJLHdCQUF3QixFQUFFO2dCQUMxQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25CO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0NBRUo7QUFaRCx5Q0FZQyJ9