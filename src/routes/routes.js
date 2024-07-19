const connection = require('../database/connection')
const express = require('express');
const router = express.Router()
const SaleController = require('../controllers/SaleController')

router.get('/sales', SaleController.getSales)

module.exports = router