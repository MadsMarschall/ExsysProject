import { Router } from "express";
import ConcreteTagSearchStrat from "../strategies/search/ConcreteTagSearchStrat";
import DataProductController from "../controllers/DataProductController";
import ConcreteFuzzySearchStrat from "../strategies/search/ConcreteFuzzySearchStrat";



const dataProductController = new DataProductController(new ConcreteFuzzySearchStrat());

const router = Router();

router.get("/dataproducts", dataProductController.searchDataProduct);
router.post("/dataproducts", dataProductController.createNewDataproduct);
router.put("/dataproducts", dataProductController.modifyDataProduct);
router.patch("/dataproducts");

router.post("/addsuperuser",dataProductController.addSuperUserToDataProduct);
router.post("/addtag", dataProductController.addTagsToDataProduct);






export default router;