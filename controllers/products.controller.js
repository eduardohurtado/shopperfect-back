const { request, response } = require("express");
const productSchema = require("../database/models/product");

const products_GET = async (req = request, res = response) => {
    try {
        const productsDB = await productSchema.find();

        console.log("Products storaged in DataBase:", productsDB);

        res.json({
            successfull: true,
            response: productsDB
        });
    } catch (error) {
        res.json({
            successfull: false,
            response: error
        });
    }
};

const products_POST = async (req = request, res = response) => {
    try {
        const { imagen, nombre, precio, descripcion, cantidad, disponible } = req.body;

        const newProduct = new productSchema({
            imagen,
            nombre,
            precio,
            descripcion,
            cantidad,
            disponible
        });

        console.log("New product recieved:", newProduct);

        const mongoResponse = await newProduct.save();

        res.json({
            successfull: true,
            response: mongoResponse
        });
    } catch (error) {
        res.json({
            successfull: false,
            response: error
        });
    }
};

const products_PUT = async (req = request, res = response) => {
    try {
        const { imagen, nombre, precio, descripcion, cantidad, disponible } = req.body;

        const updatedProduct = new productSchema({
            imagen,
            nombre,
            precio,
            descripcion,
            cantidad,
            disponible
        });

        console.log("Updating product ID: " + req.params.id);

        const mongoResponse = await productSchema.findByIdAndUpdate(req.params.id, updatedProduct);

        res.json({
            successfull: true,
            response: mongoResponse
        });
    } catch (error) {
        res.json({
            successfull: false,
            response: error
        });
    }
};

const products_DELETE = async (req = request, res = response) => {
    try {
        console.log("Deleting product ID: " + req.params.id);

        const mongoResponse = await productSchema.findByIdAndRemove(req.params.id);

        res.json({
            successfull: true,
            response: mongoResponse
        });
    } catch (error) {
        res.json({
            successfull: false,
            response: error
        });
    }
};

module.exports = { products_GET, products_POST, products_PUT, products_DELETE };
