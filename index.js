
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json())
const products = require('./products.json');
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/main.html');
})
app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/form.html');
})
app.get('/api/products', (req, res) => {
  res.json(products);
});
app.post('/api/requestProduct', (req, res) => {
  const productId = req.body.productId;
  res.json({ message: `Product request received for product with ID ${productId}` });
})
app.post('/api/addProduct', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.json({ message: 'Product added successfully', product: newProduct });
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${5000}`);
})