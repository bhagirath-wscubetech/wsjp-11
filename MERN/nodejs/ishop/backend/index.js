const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const CategoryRouter = require('./routers/category');
const ColorRouter = require('./routers/color');
const ProductRouter = require('./routers/product');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));


app.use("/category", CategoryRouter);
app.use("/color", ColorRouter);
app.use("/product", ProductRouter);

mongoose.connect(
    "mongodb://localhost:27017",
    {
        dbName: "wsjp14"
    }
).then((result) => {
    console.log('db connected');
    app.listen(5000, () => console.log('server started'));
}).catch((err) => {

});