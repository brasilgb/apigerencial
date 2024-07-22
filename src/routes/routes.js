const connection = require('../database/connection')
const express = require('express');
const router = express.Router()
const LojaController = require('../controllers/LojaController')

router.get('/analisevencidos', LojaController.getAnaliseVencidos)

module.exports = router