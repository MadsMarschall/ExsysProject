import IUser from "./IUser";

export default interface IDataProduct {
  id: number,
  name: string;
  tags: string[];
  url: string;
  img: string;
  superUser: IUser[];
}