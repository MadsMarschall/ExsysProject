"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataProductController_1 = __importDefault(require("../src/controllers/DataProductController"));
const express_1 = require("@jest-mock/express");
const ConcreteTagSearchStrat_1 = __importDefault(require("../src/strategies/search/ConcreteTagSearchStrat"));
const { res, next, mockClear } = (0, express_1.getMockRes)();
let dpc;
beforeEach(() => {
    dpc = new DataProductController_1.default(new ConcreteTagSearchStrat_1.default());
    mockClear();
});
test("canGetAllDataProducts", () => __awaiter(void 0, void 0, void 0, function* () {
    const req = (0, express_1.getMockReq)({
        params: {},
        body: {}
    });
    let reports = yield Promise.all([dpc.searchDataProduct(req, res)]);
    expect(reports.length).toBeGreaterThan(0);
}));
test("canGetProductByTag", () => __awaiter(void 0, void 0, void 0, function* () {
    const req = (0, express_1.getMockReq)({
        query: { searchString: "tag1" },
        body: {}
    });
    console.log(res.json);
    yield dpc.searchDataProduct(req, res);
    expect(res.json).toEqual(1);
}));
test("canUpdateSingleEntryOnDataObject", () => __awaiter(void 0, void 0, void 0, function* () {
    const req = (0, express_1.getMockReq)({
        query: { searchString: "tag1" },
        body: {}
    });
    let reports = yield Promise.all([dpc.searchDataProduct(req, res)]);
    expect(reports[0]).toEqual("hello");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdERhdGFQcm9kdWN0Q29udHJvbGxlci5zcGVjLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiX190ZXN0c19fL3Rlc3REYXRhUHJvZHVjdENvbnRyb2xsZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFHQUE2RTtBQUU3RSxnREFBNEQ7QUFFNUQsNkdBQXFGO0FBR3JGLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUEsb0JBQVUsR0FBRSxDQUFDO0FBRTlDLElBQUksR0FBMEIsQ0FBQztBQUMvQixVQUFVLENBQUMsR0FBRyxFQUFFO0lBQ2QsR0FBRyxHQUFHLElBQUksK0JBQXFCLENBQUMsSUFBSSxnQ0FBc0IsRUFBRSxDQUFDLENBQUM7SUFDOUQsU0FBUyxFQUFFLENBQUM7QUFDZCxDQUFDLENBQUMsQ0FBQztBQUdILElBQUksQ0FBQyx1QkFBdUIsRUFBRSxHQUFTLEVBQUU7SUFDdkMsTUFBTSxHQUFHLEdBQUcsSUFBQSxvQkFBVSxFQUFDO1FBQ3JCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsSUFBSSxFQUFFLEVBQUU7S0FDVCxDQUFDLENBQUM7SUFDSCxJQUFJLE9BQU8sR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEdBQVMsRUFBRTtJQUNwQyxNQUFNLEdBQUcsR0FBRyxJQUFBLG9CQUFVLEVBQUM7UUFDckIsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRTtRQUMvQixJQUFJLEVBQUUsRUFBRTtLQUNULENBQUMsQ0FBQztJQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3JCLE1BQU0sR0FBRyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0QyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLEdBQVMsRUFBRTtJQUNsRCxNQUFNLEdBQUcsR0FBRyxJQUFBLG9CQUFVLEVBQUM7UUFDckIsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRTtRQUMvQixJQUFJLEVBQUUsRUFBRTtLQUNULENBQUMsQ0FBQztJQUNILElBQUksT0FBTyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25FLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9