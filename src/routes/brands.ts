import { Router } from "express";

import Brands from "../controllers/brands";

const router = Router();

router.get("/", Brands.getAll);

export default router;
