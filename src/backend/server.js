import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/api/products", (_, resp) => {
  resp.json(products);
});

app.get("/api/product/:id", (req, resp) => {
  const product = products.find((p) => p._id === req.params.id);

  if (!product) {
    return resp.status(404).json({ message: "Product not found" });
  }

  resp.json(product);
});

app.listen(port, "localhost", () => {
  console.log("Application is listening on port", port);
});
