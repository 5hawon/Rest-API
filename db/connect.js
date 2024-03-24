const mongoose = require('mongoose');

const connectDB =()=>{
    console.log('connect DB');
    mongoose.connect('mongodb://localhost/todos',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log('Conncection Successfull'))
    .catch((err)=>console.log(err))

   
}

module.exports = connectDB;
