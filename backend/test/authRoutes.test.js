// const mongoose = require("mongoose");
// const request = require("supertest");
// const express = require("express");
// const authRoutes = require("../routes/auth/authRoutes");

// const app = express();
// app.use(express.json());
// app.use("/auth", authRoutes);

// jest.setTimeout(30000); // 30 secondes

// beforeAll(async () => {
//   const dbURI = "mongodb://localhost:27017/BoilerPlateSvelteKitDB";
//   await mongoose.connect(dbURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// });

// afterAll(async () => {
//   await mongoose.disconnect();
// });

// describe("POST /auth/signup", () => {
//   it("should return 200 for a successful signup", async () => {
//     const res = await request(app).post("/auth/signup").send({
//       username: "JohnDoe",
//       email: "john.doe@example.com",
//       password: "Password123!",
//     });

//     expect(res.statusCode).toEqual(200);
//   });
// });

// // describe("POST /auth/signup", () => {
// //   // Test pour le champ 'username'
// //   it("should return 400 if username is empty", async () => {
// //     const res = await request(app).post("/auth/signup").send({
// //       username: "",
// //       email: "john.doe@example.com",
// //       password: "Password123!",
// //     });
// //     expect(res.statusCode).toEqual(400);
// //   });
// //   it("should return 400 if username is too short", async () => {
// //     const res = await request(app).post("/auth/signup").send({
// //       username: "Jo",
// //       email: "john.doe@example.com",
// //       password: "Password123!",
// //     });
// //     expect(res.statusCode).toEqual(400);
// //   });
// //   it("should return 400 if username is too long", async () => {
// //     const res = await request(app)
// //       .post("/auth/signup")
// //       .send({
// //         username: "J".repeat(21),
// //         email: "john.doe@example.com",
// //         password: "Password123!",
// //       });
// //     expect(res.statusCode).toEqual(400);
// //   });
// //   // Test pour le champ 'email'
// //   it("should return 400 if email is invalid", async () => {
// //     const res = await request(app).post("/auth/signup").send({
// //       username: "JohnDoe",
// //       email: "invalid-email",
// //       password: "Password123!",
// //     });
// //     expect(res.statusCode).toEqual(400);
// //   });
// //   // Tests pour le champ 'password'
// //   it("should return 400 if password is too short", async () => {
// //     const res = await request(app).post("/auth/signup").send({
// //       username: "JohnDoe",
// //       email: "john.doe@example.com",
// //       password: "Short!",
// //     });
// //     expect(res.statusCode).toEqual(400);
// //   });
// //   it("should return 400 if password does not contain a lowercase letter", async () => {
// //     const res = await request(app).post("/auth/signup").send({
// //       username: "JohnDoe",
// //       email: "john.doe@example.com",
// //       password: "PASSWORD123!",
// //     });
// //     expect(res.statusCode).toEqual(400);
// //   });
// //   it("should return 400 if password does not contain an uppercase letter", async () => {
// //     const res = await request(app).post("/auth/signup").send({
// //       username: "JohnDoe",
// //       email: "john.doe@example.com",
// //       password: "password123!",
// //     });
// //     expect(res.statusCode).toEqual(400);
// //   });
// //   it("should return 400 if password does not contain a number", async () => {
// //     const res = await request(app).post("/auth/signup").send({
// //       username: "JohnDoe",
// //       email: "john.doe@example.com",
// //       password: "Password!",
// //     });
// //     expect(res.statusCode).toEqual(400);
// //   });
// //   it("should return 400 if password does not contain a special character", async () => {
// //     const res = await request(app).post("/auth/signup").send({
// //       username: "JohnDoe",
// //       email: "john.doe@example.com",
// //       password: "Password123",
// //     });
// //     expect(res.statusCode).toEqual(400);
// //   });
// //   it("should return 201 Created for successful signup", async () => {
// //     const res = await request(app).post("/auth/signup").send({
// //       username: "JohnDoe",
// //       email: "****",
// //       password: "Password123!",
// //     });
// //     expect(res.statusCode).toEqual(201);
// //     expect(res.body).toHaveProperty("_id");
// //     expect(res.body).toHaveProperty("token");
// //   }, 10000); // Augmente le délai d'expiration à 10 secondes
// // });
