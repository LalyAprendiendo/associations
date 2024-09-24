import { Router } from "express";

import Products from "../controllers/products";

const router = Router();

router.get("/", Products.getAll);

export default router;
