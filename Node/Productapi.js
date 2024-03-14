const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());


let products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
  ];

app.get('/products',(req,res)=>{
    res.json(products);
});

app.get('/products/search',(req,res)=>{
    const { minPrice, maxPrice}= req.query;
   const filteredproducts= products.filter(product=> product.price < maxPrice && product.price> minPrice) 
     if (filteredproducts){
        res.send(filteredproducts);} 
    else {
     res.status(404).json("there's no such product");
   } 
});

app.get('/products/:id',(req,res)=>{
    const productID =parseInt(req.params.id);
    const product = products.find(product => product.id === productID); 
    //  const battlefieldName = req.params.name;
   //  const battlefield = battlefields[battlefieldName];
    if(product){
        res.json(product);
    } else {
        res.status(404).send('product not found');
    }
});


app.post('/products', (req, res) => {
    const { nameData, priceData } = req.body;
    const nextID=products.length + 1
    const newProduct = { id: nextID, name: nameData, price: priceData };
    products.push(newProduct);
    res.json(products);
});


app.put('/products/:id', (req, res) => {
  const productID = req.params.id;
  const { nameData, priceData } = req.body;
  const product = products.find(product => product.id == productID);
  if (product) {
      product.name = nameData; // Update the name
      product.price = priceData; // Update the price
      res.json(product); // Return the updated product
  } else {
      res.status(404).json({ message: 'Product not found' });
  }
});

app.delete('/products/:id', (req,res)=>{
    const product = products.findIndex(product => product.id == productID);
  if(product){
    products.splice(product);
    res.json({ message: 'Product deleted successfully' });
  }
  else{
    res.status(404).json({ message: 'Product not found' });
  }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
