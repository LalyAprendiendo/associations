import { Pedido, Product, ProductPedido } from "../models";

class PedidosController {
  static async getAll(req, res, next) {
    try {
      const pedidos = await ProductPedido.findAll({
        include: [{ model: Product }, { model: Pedido }],
      });
      res.status(200).json({ data: pedidos });
    } catch (error) {
      throw error;
    }
  }
}

export default PedidosController;
