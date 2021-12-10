// ************ Require's ************

const express = require('express');
// ************ express() - (don't touch) ************
const app = express();

const port = 3001

const path = require('path');

// Pasar poder usar los métodos PUT y DELETE
const methodOverride =  require('method-override'); 



// ************ Middlewares - (don't touch) ************
 // Necesario para los archivos estáticos en el folder /public
 app.use(express.static('public'));
 
// Necesario para trabajar con formularios!!
app.use(express.urlencoded({ extended: false }));
app.use(express.json())


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(methodOverride('_method'));
// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
// Define la ubicación de la carpeta de las Vistas
app.set('views', path.join(__dirname, '/views')); 




// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
const mainRouter = require('./routes/main'); // Rutas main
const productsRouter = require('./routes/products'); // Rutas /products

app.use('/', mainRouter);
app.use('/products', productsRouter);

module.exports = app;
