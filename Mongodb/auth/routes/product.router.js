const Router = require('express').Router;

const router = Router();

const { addProduct } = require('../controllers/products.controller');

router.post('/', addProduct);

module.exports = router;