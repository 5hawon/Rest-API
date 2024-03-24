const connectDB = require('./db/connect');

const Product = require('./models/products');

const ProductJson =require('./products.json')

const start = async () => {
    try {
        await connectDB();
        await Product.create(ProductJson);
        console.log("success");

        
    } catch (error) {
        console.log(error);
        
    }
}

start();