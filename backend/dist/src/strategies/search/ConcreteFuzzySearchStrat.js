"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fuse_js_1 = __importDefault(require("fuse.js"));
const Reports_1 = __importDefault(require("../../data/Reports"));
class ConcreteFuzzySearchStrat {
    constructor() {
        this.fuse = new fuse_js_1.default(Reports_1.default, {
            keys: ['name', 'id', "tags"],
            threshold: 0.4
        });
    }
    search(term) {
        let result = new Array();
        this.fuse.search(term).forEach((e) => {
            result.push(e.item);
        });
        return result;
    }
    indexContent(newReports) {
        this.fuse = new fuse_js_1.default(Reports_1.default, {
            keys: ['name', 'id', "tags"],
            threshold: 0.4
        });
    }
}
exports.default = ConcreteFuzzySearchStrat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uY3JldGVGdXp6eVNlYXJjaFN0cmF0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsic3JjL3N0cmF0ZWdpZXMvc2VhcmNoL0NvbmNyZXRlRnV6enlTZWFyY2hTdHJhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLHNEQUEyQjtBQUMzQixpRUFBeUM7QUFFekMsTUFBcUIsd0JBQXdCO0lBRXpDO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLENBQUMsaUJBQU8sRUFBRTtZQUMxQixJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztZQUM1QixTQUFTLEVBQUMsR0FBRztTQUNoQixDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQVk7UUFDZixJQUFJLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBZ0IsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtZQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxZQUFZLENBQUMsVUFBMEI7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLENBQUMsaUJBQU8sRUFBRTtZQUMxQixJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztZQUM1QixTQUFTLEVBQUMsR0FBRztTQUNoQixDQUFDLENBQUE7SUFDTixDQUFDO0NBRUo7QUF2QkQsMkNBdUJDIn0=