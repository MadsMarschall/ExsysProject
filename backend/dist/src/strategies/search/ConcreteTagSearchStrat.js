"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Reports_1 = __importDefault(require("../../data/Reports"));
class ConcreteTagSearchStrat {
    indexContent(newReports) {
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uY3JldGVUYWdTZWFyY2hTdHJhdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNyYy9zdHJhdGVnaWVzL3NlYXJjaC9Db25jcmV0ZVRhZ1NlYXJjaFN0cmF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsaUVBQXlDO0FBRXpDLE1BQXFCLHNCQUFzQjtJQUN6QyxZQUFZLENBQUMsVUFBMEI7SUFDdkMsQ0FBQztJQUNDLE1BQU0sQ0FBQyxJQUFZO1FBQ2YsSUFBSSxPQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUNqQyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNoQixJQUFJLHdCQUF3QixHQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQy9FLElBQUksd0JBQXdCLEVBQUU7Z0JBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkI7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7Q0FFSjtBQWRELHlDQWNDIn0=