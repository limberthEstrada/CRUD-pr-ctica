const fs = require('fs');
const path = require('path');

// ESTO SERIA EL GESTOR DEL MODELO

const jsonDB = require('../model/jsonDatabase');

// Maneja todos los métodos para PRODUCTO, que lo pasa como parámetro
const productModel = jsonDB('products');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		console.log('entre al controller del main , metodo index')
		// Do the magic


	//	productModel.inSale()
	//	productModel.visited()

	//	productModel.all()

	const visited = productModel.visited()
	const inSale = productModel.inSale()
 // leo todo el array de products en el controlador productController

 // envio el array product a la vista para que la recorra EJS
 res.render('index', {
	visited,
	inSale,
	toThousand
})


 //res.render('index', { products });


	},
	search: (req, res) => {
		productBuscado = productModel.readFile().filter(element => {
			return element.name.includes(req.query.keywords);

		})
		console.log("TESTINGGGGGGGGGGGGGG");
		console.log(productBuscado);
		res.render('results', {productosFiltrados: productBuscado, toThousand, palabraBuscada: req.query.keywords})
	},
};

module.exports = controller;
