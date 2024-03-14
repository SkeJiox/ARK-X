const Category = require("../models/category.model");
const Product = require("../models/product.model");

const addProduct = async (req, res) => {
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

  const products = await Product.find();
  res.json({ products });
};

module.exports = {
  addProduct,
};
