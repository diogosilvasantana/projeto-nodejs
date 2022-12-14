import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car1 description",
      daily_rate: 150.0,
      license_plate: "ABC-1234",
      fine_amount: 100.0,
      brand: "Car_Brand",
      category_id: "4d055db6-6346-4783-99f2-bd7971500b10",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car2 description",
      daily_rate: 150.0,
      license_plate: "ABC-1234",
      fine_amount: 100.0,
      brand: "Car_Brand_test",
      category_id: "4d055db6-6346-4783-99f2-bd7971500b10",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_Brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Car3 description",
      daily_rate: 150.0,
      license_plate: "ABC-1234",
      fine_amount: 100.0,
      brand: "Car_Brand_test",
      category_id: "4d055db6-6346-4783-99f2-bd7971500b10",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car3",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car4",
      description: "Car4 description",
      daily_rate: 150.0,
      license_plate: "ABC-1234",
      fine_amount: 100.0,
      brand: "Car_Brand_test",
      category_id: "4d055db6-6346-4783-99f2-bd7971500b10",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "4d055db6-6346-4783-99f2-bd7971500b10",
    });

    expect(cars).toEqual([car]);
  });
});
