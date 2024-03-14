const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/product-management')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

//Add this array of sample products to your database
const products = [
  {
    name: 'Laptop',
    price: 1200,
    description: 'High-performance laptop with powerful specs.',
    inStock: true,
  },
  {
    name: 'Smartphone',
    price: 800,
    description: 'Latest smartphone with advanced features.',
    inStock: true,
  },
  {
    name: 'Headphones',
    price: 150,
    description: 'Over-ear headphones with noise-cancelling technology.',
    inStock: true,
  },
  {
    name: 'Smartwatch',
    price: 250,
    description: 'Fitness tracker and smartwatch with health monitoring.',
    inStock: false,
  },
  {
    name: 'Camera',
    price: 600,
    description: 'Digital camera with high-resolution imaging.',
    inStock: true,
  },
  {
    name: 'Gaming Console',
    price: 400,
    description: 'Next-gen gaming console for immersive gaming experiences.',
    inStock: true,
  },
  {
    name: 'Bluetooth Speaker',
    price: 80,
    description: 'Portable Bluetooth speaker with crisp sound.',
    inStock: true,
  },
  {
    name: 'Tablet',
    price: 300,
    description: 'Slim and lightweight tablet for on-the-go productivity.',
    inStock: true,
  },
  {
    name: 'Coffee Maker',
    price: 50,
    description: 'Automatic coffee maker for brewing your favorite coffee.',
    inStock: true,
  },
  {
    name: 'Fitness Tracker',
    price: 100,
    description: 'Wearable fitness tracker with heart rate monitoring.',
    inStock: false,
  },
  {
    name: 'External Hard Drive',
    price: 120,
    description: 'Large-capacity external hard drive for data storage.',
    inStock: true,
  },
  {
    name: 'Wireless Mouse',
    price: 30,
    description: 'Ergonomic wireless mouse for comfortable computing.',
    inStock: true,
  },
  {
    name: 'Portable Charger',
    price: 20,
    description: 'Compact portable charger for on-the-go device charging.',
    inStock: true,
  },
  {
    name: 'Smart Bulbs',
    price: 15,
    description: 'Set of smart bulbs for customizable lighting at home.',
    inStock: true,
  },
 
];
// Define Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  description: String,
  inStock: { type: Boolean, default: true }  },
  //createdAt: { type: Date, default: Date.now }
  {timestamps: true} 
);

// Create Product Model
const Product = mongoose.model('Product', productSchema);

// Connect to MongoDB

// Insert Sample Products
const insertSampleProducts = async () => {
  try {
    await Product.insertMany(products);
    console.log('Sample products inserted successfully.', products);
  } catch (error) {
    console.error('Error inserting sample products:', error);
  }
};

// Sort Products by Price (Descending)
const sortProductsByPriceDescending = async () => {
  try {
    const sortprice =  await Product
    .find({} )
    .sort({ price: -1 });
    console.log('Products sorted by price descending:', sortprice);
  } catch (error) {
    console.error('Error sorting products by price:', error);
}};

// Pagination - Limiting Results
const paginateProducts = async (pageNumber, pageSize) => {
  try {
    const ProductsPaginate=  await Product
    .find({})
    .skip(pageNumber * pageSize)
    .limit(pageSize);
    console.log('Paginate succed', ProductsPaginate)
  } catch (error) {
    console.error('Error paginating products:', error)
  }
};

paginateProducts(1,3);


// Custom Pagination with Variables
const customPagination = async (pageNumber, pageSize) => {
  try {
    const custom=  await paginateProducts(pageNumber, pageSize);
    console.log('custom succed', custom)
    } catch (error) {
    console.error('Error performing custom pagination:', error);
  }
};

// Aggregation - Count Products in Stock
const countProductsInStock = async () => {
  try {
    const countProduct = await Product.countDocuments({ inStock: true });
    console.log('custom succed', countProduct)
  } catch (error) {
    console.error('Error counting products in stock:', error);
  }
};

// Aggregation - Calculate Average Price
const calculateAveragePrice = async () => {
  try {
    const result = await Product.aggregate([{ $group: { _id: null, averagePrice: { $avg: '$price' } } }]);
    const Average = result.length > 0 ? result[0].averagePrice : 0;
    console.log('Average price suuced',Average)
  } catch (error) {
    console.error('Error calculating average price:', error);
   
  }
};   

/* function averagePrice(){
  products.aggregate([
  {$group: {_id: null, averagePrice: { $avg: "$price" }}}
])
.then((result) => {
  if (result.length > 0) {
    console.log("Average price of all products:", result[0].averagePrice);
  } else {
    console.log("No products found.");
  }
})
.catch((error) => console.log("Error calculating average price: ", error));
}
 */

const sortProductsByNameAscending = async () => {
  try {
    const sortProduct = await Product.find().sort({ name: 1 });
    console.log('sort product by name ascending succed', sortProduct)
  } catch (error) {
    console.error('Error sorting products by name:', error);
  }
};

const groupProductsByCategory = async (dynamicPageSize) => {
  try {
    const GroupProducts = await Product.aggregate([
      { $group: { _id: '$category', products: { $push: '$$ROOT' } } },
      { $project: { products: { $slice: ['$products', dynamicPageSize] } } }
    ]); 
          console.log('Group products succed', GroupProducts)
  } catch (error) {
    console.error('Error grouping products by category:', error);
  }
};


const dynamicResultsWithVariable = async () => {
  try {
    const DynamicResult = await groupProductsByCategory(4);
     console.log('Dynmaic result succed', DynamicResult)
  } catch (error) {
    console.error('Error getting dynamic results:', error);

  }
};
