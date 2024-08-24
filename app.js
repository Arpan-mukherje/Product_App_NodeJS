const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
mongoose.connect("mongodb+srv://Arpan:Arpan7@cluster0.75cqk.mongodb.net/");
// Middle ware................................................
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Middle ware................................................
//  CORS .....................................................

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*") // * means all, you can speciic your website (https://cooldude.com)
    res.header("Access-Control-Allow-Hezders", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
        
    }
});
// Middle ware................................................

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);


app.use((req, res, next) => {
    const error =new Error("Not Found ");
    error.status =404,
    next(error)
});

app.use((error, req, res, next) => {

    res.status(error.status || 500),
    res.json({
        message : error.message 
    })
    next(error)
});



module.exports = app;  