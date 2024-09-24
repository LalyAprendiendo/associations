import sequelize, { DataTypes } from "../database/connect";

const Pedido = sequelize.define(
  "Pedido",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    cliente: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    remito: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default Pedido;
