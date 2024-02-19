const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

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