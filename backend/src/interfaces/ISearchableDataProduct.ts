export default interface ISearchableDataProduct {
  //Get all the tags of an object
  getTags(): string[];
  //Add a tag to the list
  addTag():void;
  //Removes a tag - returns false if not found
  removeTag():boolean;
}
