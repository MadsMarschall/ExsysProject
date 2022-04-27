import { API } from "@/API";
import { IReport } from "@/interfaces";

let api: API;
beforeEach(() => {
  api = new API();
});
test("canGetAllDataProducts", async () => {
  const dataproducts = await api.getAllDataProducts();
  expect(dataproducts!.length).toBeGreaterThan(0);
});

test("canGetDataProductBySearchTag", async () => {
  const dataproducts = await api.getDataProductByTagSearch("tag1");
  const dp: IReport = dataproducts![0];
  expect(dp.tags[0]).toContain("tag1");
});

test("canAddTagToDataProduct", async () => {
  const dataproducts = await api.addTagToDataProduct(1, "Tag");
  const dp: IReport = dataproducts![0];
  expect(dp.tags[0]).toContain("tag1");
});
