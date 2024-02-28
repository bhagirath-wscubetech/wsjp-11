const Color = require("../models/color");

class ColorController {
    create(data) {
        return new Promise(
            (res, rej) => {
                const color = new Color({
                    name: data.name,
                    code: data.color
                })
                color.save()
                    .then(
                        () => {
                            res({
                                msg: "Color added",
                                status: 1
                            })
                        }
                    ).catch(
                        () => {
                            rej({
                                msg: "Unable to add color",
                                status: 0
                            })
                        }
                    )
                try {
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
    read(id) {
        return new Promise(
            async (res, rej) => {
                try {
                    let colors = [];
                    if (id) {
                        colors = await Color.findById(id);
                    } else {
                        colors = await Color.find();
                    }
                    res({
                        colors,
                        msg: "Colors found",
                        status: 1
                    })
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
    updateStatus(id, new_status) {
        return new Promise(
            (res, rej) => {
                try {
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
    edit(id, data) {
        return new Promise(
            (res, rej) => {
                try {
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
    delete(id) {
        return new Promise(
            (res, rej) => {
                try {
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
}

module.exports = ColorController;