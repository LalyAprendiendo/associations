import { Router } from "express";

import brands from "./brands";
import pedidos from "./pedidos";
import products from "./products";

const router = Router();

router.use("/products", products);
router.use("/pedidos", pedidos);
router.use("/brands", brands);

export default router;
