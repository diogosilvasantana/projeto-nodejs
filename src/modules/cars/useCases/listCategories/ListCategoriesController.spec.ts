import { app } from "@shared/infra/http/app";
import request from "supertest";

import createConnection from "@shared/infra/typeorm";
import { Connection } from "typeorm";
import { hash } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";

let connection: Connection;

describe("List Category Controller", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const id = uuidV4();
    const password = await hash("admin", 8);

    await connection.query(
      `INSERT INTO USERS(id, name, email, password, "isAdmin", driver_license, created_at) 
      values ('${id}', 'admin', 'admin@admin.com', '${password}', true, '180234679', 'now()')`
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("should be able to list all categories", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "admin@admin.com",
      password: "admin",
    });

    const { token } = responseToken.body;

    await request(app)
      .post("/categories")
      .send({
        name: "Category Supertest",
        description: "Category Supertest",
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    const response = await request(app).get("/categories");

    console.log(response.body);

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty("id");
  });
});

