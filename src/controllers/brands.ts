import { Brand } from "../models";

class BrandsController {
  static async getAll(req, res, next) {
    try {
      const brands = await Brand.findAll();
      res.status(200).json({ data: brands });
    } catch (error) {
      next(error);
    }
  }
}

export default BrandsController;
