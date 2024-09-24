import sequelize, { DataTypes } from "../database/connect";

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    cost: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },

    // CategoryId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: Category,
    //     key: "id",
    //   },
    // },

    // BrandId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: Brand,
    //     key: "id",
    //   },
    // },
  },
  { timestamps: false }
);

export default Product;
