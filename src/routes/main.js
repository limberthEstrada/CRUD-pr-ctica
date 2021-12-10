// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
console.log('Entré a rutas del main')
router.get('/', mainController.index) 
router.get('/search', mainController.search)

module.exports = router;
