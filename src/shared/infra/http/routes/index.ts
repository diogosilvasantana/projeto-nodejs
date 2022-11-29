import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { carsRoutes } from "./cars.routes";
import { categoriesRoutes } from "./categories.routes";
import { rentalRoutes } from "./rental.routes";
import { specificationsRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

// Categorias
router.use("/categories", categoriesRoutes);
// Especificações
router.use("/specifications", specificationsRoutes);
// Usuários
router.use("/users", usersRoutes);
// Carros
router.use("/cars", carsRoutes);
// Aluguel
router.use("/rentals", rentalRoutes);
// Autenticação
router.use(authenticateRoutes);

export { router };

