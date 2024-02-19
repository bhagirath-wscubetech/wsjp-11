const { Router } = require('express');
const UserModel = require('../models/user');
const UserController = require('../controllers/user');
const UserRouter = Router();


UserRouter.get(
    "/get-data/:id?",
    // id is a parameter which is optional
    (req, res) => {
        const userObj = new UserController();
        const result = userObj.read(req.params.id);
        result.then(
            (success) => {
                res.send(success);
            }
        ).catch(
            (error) => {
                res.send(error);
            }
        )
    }
)

UserRouter.post(
    "/create",
    async (req, res) => {
        const result = new UserController().create(req.body);
        result.then(
            (success) => {
                res.send(success);
            }
        ).catch(
            (error) => {
                res.send(error);
            }
        )
    }
)

UserRouter.delete(
    "/delete/:user_id",
    (req, res) => {
        const result = new UserController().delete(req.params.user_id);
        result.then(
            (success) => {
                res.send(success);
            }
        ).catch(
            (error) => {
                res.send(error);
            }
        )
    }
)

UserRouter.put(
    "/update/:user_id",
    (req, res) => {
        const result = new UserController().update(req.params.user_id, req.body);
        result.then(
            (success) => {
                res.send(success);
            }
        ).catch(
            (error) => {
                res.send(error);
            }
        )
    }
)

UserRouter.post(
    "/login",
    async (req, res) => {
        const data = req.body;
        const user = await UserModel.findOne({ email: data.email, password: data.password });
        if (user == null) {
            res.send({
                msg: "Email ya password; kuch toh galat hai",
                status: 0
            })
        } else {
            res.send({
                msg: "Login successful",
                status: 1
            })
        }
    }
)


module.exports = UserRouter;


// CRUD