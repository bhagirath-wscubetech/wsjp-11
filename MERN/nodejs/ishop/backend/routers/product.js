const express = require('express');
const fileUpload = require('express-fileupload');
const ProductController = require("../controllers/product");

const ProductRouter = express.Router();

ProductRouter.get(
    "/:id?",
    (req, res) => {
        const result = new ProductController().read(req.params.id, req.query);
        result
            .then(
                (success) => {
                    res.send(success);
                }
            )
            .catch(
                (error) => {
                    res.send(error)
                }
            )
    }
)

ProductRouter.post(
    "/create",
    fileUpload({
        createParentPath: true
    }),
    (req, res) => {
        const result = new ProductController().create(req.body, req.files.image);
        result
            .then(
                (success) => {
                    res.send(success);
                }
            )
            .catch(
                (error) => {
                    res.send(error)
                }
            )
    }
)

module.exports = ProductRouter;