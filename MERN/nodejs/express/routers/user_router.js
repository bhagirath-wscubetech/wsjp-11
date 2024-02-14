const express = require('express');
const { writeFileSync, readFileSync } = require('fs');
const UserRouter = express.Router();

UserRouter.post(
    "/add-user",
    (req, res) => {
        const d = req.body;
        d.id = new Date().getTime();
        const currentData = readFileSync("data/user.json", "utf-8");
        const currentArr = JSON.parse(currentData);
        currentArr.push(d);
        writeFileSync("data/user.json", JSON.stringify(currentArr));
        res.send("User added");
    }
)

UserRouter.delete(
    "/delete-user/:user_id",
    (req, res) => {
        const userId = req.params.user_id;
        const dataJson = readFileSync("data/user.json", "utf-8");
        const data = JSON.parse(dataJson);
        const newData = data.filter(user => user.id != userId);
        writeFileSync("data/user.json", JSON.stringify(newData));
        res.send("User deleted");
    }
)

UserRouter.get(
    "/get-users",
    (req, res) => {
        const dataJson = readFileSync("data/user.json", 'utf-8');
        const data = JSON.parse(dataJson);
        const response = {
            status: 1,
            data
        }
        res.send(response);
    }
)

UserRouter.put(
    "/update-user/:user_id",
    (req, res) => {
        const userId = req.params.user_id;
        const currentDataJson = readFileSync("data/user.json", "utf-8");
        const currentData = JSON.parse(currentDataJson);
        const data = req.body;
        const updateData = currentData.map(
            (u) => {
                if (u.id == userId) {
                    return data;
                } else {
                    return u;
                }
            }
        )
        writeFileSync("data/user.json", JSON.stringify(updateData));
        res.send("Data updated");
    }
)



module.exports = UserRouter; // default export