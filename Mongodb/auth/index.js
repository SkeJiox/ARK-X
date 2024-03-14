const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const Product = require("./models/product.model");
const Category = require("./models/category.model");
const app = express();

const productRouter =  require('./routes/product.router')
app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/express-mongoose");
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};

async function main() {
  await connectDB();


  app.use('/products', productRouter);
  app.post("/users", async (req, res) => {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    try {
      await user.save();
      res.json({ user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/products", async (req, res) => {
    const category = new Category({
      name: "Electronics",
    });
    await category.save();
    const product = new Product({
      name: "iphone 12 pro max",
      price: 1500,
      category_id: category._id,
    });

    await product.save();

    const products = await Product.find()
    res.json({ products });
  });
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}

main();
