require('dotenv').config();
const express = require('express');
const app = express();
const products_routes = require('./routes/products')
const connectDB = require('./db/connect')

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hi I am live");
})

//middleware routes
app.use("/api/products",products_routes);

const start = async()=>{
    try {
        await connectDB();
        app.listen(PORT,()=>{
            console.log("listening on port "+PORT);
        })
        
    } catch (error) {
        console.log(error);
        
    }
}

start();
