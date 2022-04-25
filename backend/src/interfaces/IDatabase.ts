import ISearchableDataProduct from "./ISearchableDataProduct";

export default interface IDatabase {
    getAllDataProducts():ISearchableDataProduct;
    searchByTag():ISearchableDataProduct[];
}