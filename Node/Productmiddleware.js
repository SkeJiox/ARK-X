const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// Middleware 1: Logging middleware
app.use((req, res, next) => {
    let logs= `[${new Date().toISOString()}] ${req.method} ${req.url} \n`;
    fs.appendFileSync("logs.txt", logs, "utf8");
    next();
  });


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
        else{
          const err = new Error('Example error');
          next(err);
      }
  });

app.get('/products/:id',(req,res)=>{
    const productID =parseInt(req.params.id);
    const product = products.find(product => product.id === productID); 
    //  const battlefieldName = req.params.name;
   //  const battlefield = battlefields[battlefieldName];
    if(product){
        res.json(product);
    }else{
      const err = new Error('Example error');
      next(err);
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
  }else{
    const err = new Error('Example error');
    next(err);
}
});

app.delete('/products/:id', (req,res)=>{
    const product = products.findIndex(product => product.id == productID);
  if(product){
    products.splice(product); 
    res.json({ message: 'Product deleted successfully' });
  }
  else{
    const err = new Error('Example error');
    next(err);
}  });

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json('Something broke!');
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
