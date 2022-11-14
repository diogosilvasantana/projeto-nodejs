import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoute } from "./specifications.routes";

const router = Router();

//Categorias
router.use("/categories", categoriesRoutes);
// Especificações
router.use("/specifications", specificationsRoute);

export { router };

