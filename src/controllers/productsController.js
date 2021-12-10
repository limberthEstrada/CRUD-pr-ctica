const { redirect } = require('express/lib/response');
const fs = require('fs');
const path = require('path');


// ESTO SERIA EL GESTOR DEL MODELO
const jsonDB = require('../model/jsonDatabase');

// Maneja todos los métodos para PRODUCTO, que lo pasa como parámetro
const productModel = jsonDB('products');

//const productsFilePath = path.join(__dirname, '../data/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
        // leo todo el array de products en el controlador productController
        const products = productModel.all();
        // envio el array product a la vista para que la recorra EJS
        res.render('products', { products });
    },

	// Detail - Detail from one product
	detail: (req, res) => {
		let productoDetalle = productModel.find((req.params.id)); 
		res.render('detail', {productoDetalle, toThousand})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let productoExtraido = {
			id: 0,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description
		}

		productModel.create(productoExtraido);

		res.redirect('/products');
	},

	// Update - Form to edit
	edit: (req, res) => {
		let productoDetalle = productModel.find((req.params.id)); 
		res.render('product-edit-form', {productoDetalle})
	},
	// Update - Method to update
	update: (req, res) => {
		console.log("Entramos a actualizar");
		let productoActualizado = {
			id: req.params.id,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description
		}

		productModel.update(productoActualizado);

		res.redirect('/products');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {

		productModel.delete(req.params.id)
		
		res.redirect('/products')
	}
};

module.exports = controller;