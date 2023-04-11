const Product = require("../models/product.model.js");

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => {res.json(newProduct)})
        .catch((err) => {console.log(err)});
}

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then((products) => {
            console.log(products);
            res.json(products);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
}

module.exports.getProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then((product) => {res.json(product)})
        .catch((err) => {res.json(err)});
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then((updatedProduct) => {res.json(updatedProduct)})
        .catch(err => {response.json(err)});
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
    .then((deleteConfirmation) => res.json(deleteConfirmation))
    .catch((err) => {response.json(err)});

}

