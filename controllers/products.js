const Product = require('../models/products');

const getAllProducts = async (req,res) =>{
    const {company,name} = req.query;
    const queryObject ={};

    if(company){
        queryObject.company = company;
    }
    if(name){
        queryObject.name ={$regex:name,$options:"i"} ;
    }

    const myData = await Product.find(queryObject)
    res.status(200).json({
        message: {myData},
    })
}

const getAllProductsTesting = async (req,res) =>{
    const myData = await Product.find(req.query).sort("-price")
    res.status(200).json({
        message: {myData},
    })
}

module.exports = {
    getAllProducts,
    getAllProductsTesting
}