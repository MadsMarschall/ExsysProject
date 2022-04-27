export interface IUser {
  name: string;
  mail: string;
}

export interface IReport {
  id: number;
  name: string;
  tags: string[];
  url: string;
  img: string;
  superUser: IUser[];
}
