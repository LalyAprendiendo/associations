import Brand from "./brand";
import Pedido from "./pedido";
import Product from "./product";
import ProductPedido from "./product-pedido";

// ONE - TO - ONE

// Pedido.hasOne(Product);
// Product.belongsTo(Pedido);

// ONE - TO - MANY

// Pedido.hasMany(Product);
// Product.belongsTo(Pedido);

// MANY - TO - MANY

Pedido.belongsToMany(Product, { through: ProductPedido });
Product.belongsToMany(Pedido, { through: ProductPedido });
ProductPedido.belongsTo(Product);
ProductPedido.belongsTo(Pedido);

export { Brand, Pedido, Product, ProductPedido };
