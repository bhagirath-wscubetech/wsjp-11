const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserRouter = require('./routers/user');

const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", UserRouter);


mongoose.connect(
    "mongodb://localhost:27017",
    {
        dbName: "wsjp14"
    }
).then(
    (success) => {
        console.log('Connected to db');
        app.listen(5000, () => {
            console.log('App listening on port 5000!');
        });
    }
).catch(
    (error) => {
        console.log('Unable to connect to db');
    }
)

