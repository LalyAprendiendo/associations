import sequelize, { DataTypes } from "../database/connect";

import { Product, Pedido } from ".";

const ProductPedido = sequelize.define(
  "ProductPedido",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Product,
        key: "id",
      },
    },

    PedidoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Pedido,
        key: "id",
      },
    },
  },
  { timestamps: false }
);

export default ProductPedido;
