import { Pedido, Product } from "../models";

class ProductsController {
  static async getAll(req, res, next) {
    try {
      const products = await Product.findAll({ include: Pedido });
      res.status(200).json({ data: products });
    } catch (error) {
      next(error);
    }
  }
}

export default ProductsController;
