import { API } from "@/API";
let api;
beforeEach(() => {
    api = new API();
});
test("canGetAllDataProducts", async () => {
    const dataproducts = await api.getAllDataProducts();
    expect(dataproducts.length).toBeGreaterThan(0);
});
test("canGetDataProductBySearchTag", async () => {
    const dataproducts = await api.getDataProductByTagSearch("tag1");
    const dp = dataproducts[0];
    expect(dp.tags[0]).toContain("tag1");
});
test("canAddTagToDataProduct", async () => {
    const dataproducts = await api.addTagToDataProduct(1, "Tag");
    const dp = dataproducts[0];
    expect(dp.tags[0]).toContain("tag1");
});
//# sourceMappingURL=APITest.spec.js.map