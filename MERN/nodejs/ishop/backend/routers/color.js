const { Router } = require('express');
const ColorController = require('../controllers/color');

const ColorRouter = Router();

ColorRouter.get(
    "/:id?",
    (req, res) => {
        const result = new ColorController().read(req.params.id);
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

ColorRouter.post(
    "/create",
    (req, res) => {
        const result = new ColorController().create(req.body);
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

module.exports = ColorRouter;