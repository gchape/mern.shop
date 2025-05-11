import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

connectDB();

app.use("/api/products", productRoutes);

app.listen(port, "localhost", () => {
  console.log("Application is listening on port", port);
});
