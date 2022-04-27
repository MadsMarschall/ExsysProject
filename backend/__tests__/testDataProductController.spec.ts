import DataProductController from "../src/controllers/DataProductController";
import { Request, Response } from "express";
import { getMockReq, getMockRes } from "@jest-mock/express";
import IReport from "../src/interfaces/IDataProduct";
import ConcreteTagSearchStrat from "../src/strategies/search/ConcreteTagSearchStrat";


const { res, next, mockClear } = getMockRes();

let dpc: DataProductController;
beforeEach(() => {
  dpc = new DataProductController(new ConcreteTagSearchStrat());
  mockClear();
});


test("canGetAllDataProducts", async () => {
  const req = getMockReq({
    params: {},
    body: {}
  });
  let reports = await Promise.all([dpc.searchDataProduct(req, res)]);
  expect(reports.length).toBeGreaterThan(0);
});

test("canGetProductByTag", async () => {
  const req = getMockReq({
    query: { searchString: "tag1" },
    body: {}
  });
  console.log(res.json)
  await dpc.searchDataProduct(req, res);
  expect(res.json).toEqual(1);
});

test("canUpdateSingleEntryOnDataObject", async () => {
  const req = getMockReq({
    query: { searchString: "tag1" },
    body: {}
  });
  let reports = await Promise.all([dpc.searchDataProduct(req, res)]);
  expect(reports[0]).toEqual("hello");
});