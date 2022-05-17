"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DataProductController_1 = __importDefault(require("../controllers/DataProductController"));
const ConcreteFuzzySearchStrat_1 = __importDefault(require("../strategies/search/ConcreteFuzzySearchStrat"));
const dataProductController = new DataProductController_1.default(new ConcreteFuzzySearchStrat_1.default());
const router = (0, express_1.Router)();
router.get("/dataproducts", dataProductController.searchDataProduct);
router.post("/dataproducts", dataProductController.createNewDataproduct);
router.put("/dataproducts", dataProductController.modifyDataProduct);
router.patch("/dataproducts");
router.post("/addsuperuser", dataProductController.addSuperUserToDataProduct);
router.post("/addtag", dataProductController.addTagsToDataProduct);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsic3JjL2FwaS1yb3V0ZXMvcm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUNBQWlDO0FBRWpDLGlHQUF5RTtBQUN6RSw2R0FBcUY7QUFJckYsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLCtCQUFxQixDQUFDLElBQUksa0NBQXdCLEVBQUUsQ0FBQyxDQUFDO0FBRXhGLE1BQU0sTUFBTSxHQUFHLElBQUEsZ0JBQU0sR0FBRSxDQUFDO0FBRXhCLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDckUsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUN6RSxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3JFLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUMscUJBQXFCLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUM3RSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBT25FLGtCQUFlLE1BQU0sQ0FBQyJ9