import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";

import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { container } from "tsyringe";

// ICategoriesRepository";"
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

// ISpecificationsRepository";"
container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

// IUsersRepository";"
container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

