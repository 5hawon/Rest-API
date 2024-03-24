const Product = require('../models/products');

const getAllProducts = async (req,res) =>{

    const myData = await Product.find({})
    res.status(200).json({
        message: {myData},
    })
}

const getAllProductsTesting = async (req,res) =>{
    res.status(200).json({
        message: "Get all products testing",
    })
}

module.exports = {
    getAllProducts,
    getAllProductsTesting
}