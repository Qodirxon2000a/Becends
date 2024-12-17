const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// In-memory storage for products and categories
let products = [];
let categories = [];

// Routes

// Endpoint for products
app.post('/api/product', (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).send({ message: 'Product added successfully!', product });
});

app.get('/api/product', (req, res) => {
    res.send(products);
});

// Endpoint for categories
app.post('/api/category', (req, res) => {
    const category = req.body;
    categories.push(category);
    res.status(201).send({ message: 'Category added successfully!', category });
});

app.get('/api/category', (req, res) => {
    res.send(categories);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
