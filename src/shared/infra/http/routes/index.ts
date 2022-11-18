import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

// Autenticação
router.use(authenticateRoutes);
// Categorias
router.use("/categories", categoriesRoutes);
// Especificações
router.use("/specifications", specificationsRoutes);
// Usuários
router.use("/users", usersRoutes);

export { router };