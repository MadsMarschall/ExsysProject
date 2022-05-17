import { Request, Response } from "express";

export interface IDataProductController {
  searchDataProduct(req: Request, res: Response): void;

  addTagsToDataProduct(req: Request, res: Response): void;

  addSuperUserToDataProduct(req: Request, res: Response): void;

  createNewDataproduct(req: Request, res: Response): void;

  modifyDataProduct(req: Request, res: Response): void;
}