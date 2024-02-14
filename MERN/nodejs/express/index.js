const express = require('express');
const { writeFileSync, readFileSync } = require('fs');
const cors = require('cors');
const UserRouter = require('./routers/user_router');

const app = express();

app.use(express.json());
app.use(cors());
// middleware

app.get(
    "/create-file",
    (req, res) => {
        // req.params.file_name
        // req.query.file_name
        if (req.query.fileName == undefined) {
            res.send("Bhaia file ka name to do!");
        } else {
            writeFileSync(`data/${req.query.fileName}`, "[]");
            res.send("Didi file bann gai");
        }
    }
);

app.use("/user", UserRouter); // route grouping
// app.use("/blog", BlogRouter);

app.listen(5000, () => console.log('server started'));