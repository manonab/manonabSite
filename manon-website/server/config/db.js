const mongoose = require('mongoose');

require('dotenv').config();

mongoose
    .connect(process.env.MONGODB_URI, {
        dbName: process.env.DB_NAME,
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    })
    .then(() => {
        console.log("mongodb connected !! inside the fucking great app");
    })
    .catch((err) => {
        console.log(err.message);
    })

    mongoose.connection.on('connected' , () => {
        console.log('mongoose is connected to the database');
    });
    mongoose.connection.on('error', (err) => {
        console.log(err.message);
    })
    mongoose.connection.on('disconnected', () => {
        console.log('mongoose disconnected to the database')
    })
