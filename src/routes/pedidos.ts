import { Router } from "express";

import Pedidos from "../controllers/pedidos";

const router = Router();

router.get("/", Pedidos.getAll);

export default router;
